import { NextRequest, NextResponse } from 'next/server'
import { getStore, updateStore } from '@/lib/automation-store'
import { getWhatsAppProvider, isWhatsAppConfigured } from '@/lib/whatsapp-provider'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { message_id } = body

    if (!message_id) {
      return NextResponse.json({ error: 'message_id is required' }, { status: 400 })
    }

    const store = getStore()
    const msg = store.messages.find((m) => m.id === message_id)

    if (!msg) return NextResponse.json({ error: 'Message not found' }, { status: 404 })
    if (msg.status === 'published') return NextResponse.json({ error: 'Already published' }, { status: 400 })
    if (msg.status !== 'approved') return NextResponse.json({ error: 'Message must be approved before publishing' }, { status: 400 })

    const now = new Date().toISOString()
    const settings = store.settings

    if (settings.test_mode) {
      // Test mode — just mark as published with test flag
      updateStore((s) => ({
        ...s,
        messages: s.messages.map((m) =>
          m.id === message_id
            ? { ...m, status: 'published', published_at: now, provider_response: 'TEST_MODE', updated_at: now }
            : m
        ),
        activity_log: [
          ...s.activity_log,
          {
            id: Math.random().toString(36).substr(2, 9),
            timestamp: now,
            test_id: msg.test_id,
            message_type: msg.message_type,
            message_preview: msg.message.slice(0, 100),
            status: 'published' as const,
            provider_response: '[TEST MODE] Simulated publish — message NOT sent to WhatsApp',
            admin_action: 'manual_publish',
            admin_action_at: now,
          },
        ],
      }))
      return NextResponse.json({ success: true, mode: 'test', message: 'Message logged in test mode. Not sent to WhatsApp.' })
    }

    if (!isWhatsAppConfigured()) {
      return NextResponse.json({
        error: 'WhatsApp integration not configured. Set WHATSAPP_PROVIDER, WHATSAPP_API_KEY, and WHATSAPP_CHANNEL_ID environment variables.',
      }, { status: 503 })
    }

    const provider = getWhatsAppProvider()
    const result = await provider.sendChannelMessage(msg.message)

    if (result.success) {
      updateStore((s) => ({
        ...s,
        messages: s.messages.map((m) =>
          m.id === message_id
            ? { ...m, status: 'published', published_at: now, provider_response: result.messageId, updated_at: now }
            : m
        ),
        activity_log: [
          ...s.activity_log,
          {
            id: Math.random().toString(36).substr(2, 9),
            timestamp: now,
            test_id: msg.test_id,
            message_type: msg.message_type,
            message_preview: msg.message.slice(0, 100),
            status: 'published' as const,
            provider_response: result.messageId,
            admin_action: 'manual_publish',
            admin_action_at: now,
          },
        ],
      }))
      return NextResponse.json({ success: true, messageId: result.messageId })
    } else {
      updateStore((s) => ({
        ...s,
        messages: s.messages.map((m) =>
          m.id === message_id
            ? { ...m, retries: m.retries + 1, status: m.retries + 1 >= 3 ? 'failed' : m.status, error: result.error, updated_at: now }
            : m
        ),
        activity_log: [
          ...s.activity_log,
          {
            id: Math.random().toString(36).substr(2, 9),
            timestamp: now,
            test_id: msg.test_id,
            message_type: msg.message_type,
            message_preview: msg.message.slice(0, 100),
            status: 'failed' as const,
            error: result.error,
          },
        ],
      }))
      return NextResponse.json({ error: result.error }, { status: 502 })
    }
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
