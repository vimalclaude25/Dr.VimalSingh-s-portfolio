import { NextRequest, NextResponse } from 'next/server'
import { getStore, updateStore } from '@/lib/automation-store'
import { regenerateMessage } from '@/lib/automation-engine'
import type { MessageStatus } from '@/lib/automation-types'

// GET: list all messages with optional filters
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const status = searchParams.get('status') as MessageStatus | null
  const test_id = searchParams.get('test_id')
  const date = searchParams.get('date')
  const page = parseInt(searchParams.get('page') || '1', 10)
  const limit = parseInt(searchParams.get('limit') || '50', 10)

  const store = getStore()
  let messages = store.messages

  if (status) messages = messages.filter((m) => m.status === status)
  if (test_id) messages = messages.filter((m) => m.test_id === test_id)
  if (date) messages = messages.filter((m) => m.date === date)

  // Sort by scheduled_at ascending
  messages = [...messages].sort((a, b) => a.scheduled_at.localeCompare(b.scheduled_at))

  const total = messages.length
  const paginated = messages.slice((page - 1) * limit, page * limit)

  return NextResponse.json({ messages: paginated, total, page, limit })
}

// POST: update message status (approve/reject/edit/regenerate)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, message_id, edited_message } = body

    if (!action || !message_id) {
      return NextResponse.json({ error: 'action and message_id are required' }, { status: 400 })
    }

    const store = getStore()
    const existing = store.messages.find((m) => m.id === message_id)
    if (!existing) {
      return NextResponse.json({ error: 'Message not found' }, { status: 404 })
    }

    const now = new Date().toISOString()

    switch (action) {
      case 'approve':
        updateStore((s) => ({
          ...s,
          messages: s.messages.map((m) =>
            m.id === message_id ? { ...m, status: 'approved', updated_at: now } : m
          ),
          activity_log: [
            ...s.activity_log,
            {
              id: Math.random().toString(36).substr(2, 9),
              timestamp: now,
              test_id: existing.test_id,
              message_type: existing.message_type,
              message_preview: existing.message.slice(0, 100),
              status: 'approved' as const,
              admin_action: 'approved',
              admin_action_at: now,
            },
          ],
        }))
        return NextResponse.json({ success: true, action: 'approved' })

      case 'reject':
        updateStore((s) => ({
          ...s,
          messages: s.messages.map((m) =>
            m.id === message_id ? { ...m, status: 'rejected', updated_at: now } : m
          ),
          activity_log: [
            ...s.activity_log,
            {
              id: Math.random().toString(36).substr(2, 9),
              timestamp: now,
              test_id: existing.test_id,
              message_type: existing.message_type,
              message_preview: existing.message.slice(0, 100),
              status: 'rejected' as const,
              admin_action: 'rejected',
              admin_action_at: now,
            },
          ],
        }))
        return NextResponse.json({ success: true, action: 'rejected' })

      case 'edit':
        if (!edited_message) {
          return NextResponse.json({ error: 'edited_message is required for edit action' }, { status: 400 })
        }
        updateStore((s) => ({
          ...s,
          messages: s.messages.map((m) =>
            m.id === message_id
              ? { ...m, message: edited_message, admin_edited: true, status: 'pending_approval', updated_at: now }
              : m
          ),
          activity_log: [
            ...s.activity_log,
            {
              id: Math.random().toString(36).substr(2, 9),
              timestamp: now,
              test_id: existing.test_id,
              message_type: existing.message_type,
              message_preview: edited_message.slice(0, 100),
              status: 'pending_approval' as const,
              admin_action: 'edited',
              admin_action_at: now,
            },
          ],
        }))
        return NextResponse.json({ success: true, action: 'edited' })

      case 'regenerate':
        const newMsg = regenerateMessage(message_id)
        if (!newMsg) return NextResponse.json({ error: 'Failed to regenerate' }, { status: 500 })
        return NextResponse.json({ success: true, action: 'regenerated', message: newMsg })

      case 'retry':
        updateStore((s) => ({
          ...s,
          messages: s.messages.map((m) =>
            m.id === message_id
              ? { ...m, status: 'approved', retries: 0, error: undefined, updated_at: now }
              : m
          ),
        }))
        return NextResponse.json({ success: true, action: 'retry_queued' })

      default:
        return NextResponse.json({ error: `Unknown action: ${action}` }, { status: 400 })
    }
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
