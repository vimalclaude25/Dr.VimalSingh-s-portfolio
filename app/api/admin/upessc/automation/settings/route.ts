import { NextRequest, NextResponse } from 'next/server'
import { getStore, updateStore } from '@/lib/automation-store'
import type { AutomationSettings } from '@/lib/automation-types'

export async function GET() {
  const store = getStore()
  return NextResponse.json({
    settings: store.settings,
    whatsapp_configured: !!(process.env.WHATSAPP_PROVIDER && process.env.WHATSAPP_PROVIDER !== 'none'),
    provider: process.env.WHATSAPP_PROVIDER || 'none',
    channel_url: process.env.WHATSAPP_CHANNEL_URL || store.settings.whatsapp_channel_url || '',
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      automation_enabled,
      test_mode,
      auto_approval,
      fully_automatic_publishing,
      whatsapp_channel_url,
      default_extended_window,
      default_extended_until,
    } = body

    const now = new Date().toISOString()

    updateStore((s) => ({
      ...s,
      settings: {
        ...s.settings,
        ...(automation_enabled !== undefined && { automation_enabled }),
        ...(test_mode !== undefined && { test_mode }),
        ...(auto_approval !== undefined && { auto_approval }),
        ...(fully_automatic_publishing !== undefined && { fully_automatic_publishing }),
        ...(whatsapp_channel_url !== undefined && { whatsapp_channel_url }),
        ...(default_extended_window !== undefined && { default_extended_window }),
        ...(default_extended_until !== undefined && { default_extended_until }),
        updated_at: now,
      },
    }))

    const store = getStore()
    return NextResponse.json({ success: true, settings: store.settings })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
