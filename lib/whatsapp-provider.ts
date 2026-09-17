// ============================================================
// UPESSC Test Assistant — WhatsApp Provider Abstraction
// ============================================================
// Add new providers here without touching any other files.
// Provider is selected via WHATSAPP_PROVIDER env variable.
// ============================================================

export interface SendResult {
  success: boolean
  messageId?: string
  error?: string
  raw?: unknown
}

export interface WhatsAppProvider {
  name: string
  sendChannelMessage(message: string): Promise<SendResult>
  scheduleChannelMessage(message: string, scheduledAt: Date): Promise<SendResult>
  getMessageStatus(messageId: string): Promise<{ status: string; raw?: unknown }>
}

// ── None Provider (default — logs only) ──────────────────────
class NoneProvider implements WhatsAppProvider {
  name = 'none'

  async sendChannelMessage(message: string): Promise<SendResult> {
    console.log('[WhatsApp:None] Message would be sent:', message.slice(0, 80) + '...')
    return {
      success: false,
      error: 'WhatsApp integration not configured. Set WHATSAPP_PROVIDER in environment variables.',
    }
  }

  async scheduleChannelMessage(message: string, scheduledAt: Date): Promise<SendResult> {
    console.log(`[WhatsApp:None] Message would be scheduled at ${scheduledAt.toISOString()}`)
    return {
      success: false,
      error: 'WhatsApp integration not configured.',
    }
  }

  async getMessageStatus(messageId: string): Promise<{ status: string }> {
    return { status: 'unknown' }
  }
}

// ── Meta Business Cloud API Provider (placeholder) ───────────
// Uncomment and complete when Meta API credentials are available
// class MetaBusinessProvider implements WhatsAppProvider {
//   name = 'meta'
//   private apiKey = process.env.WHATSAPP_API_KEY!
//   private channelId = process.env.WHATSAPP_CHANNEL_ID!
//   private apiUrl = process.env.WHATSAPP_API_URL || 'https://graph.facebook.com/v18.0'
//
//   async sendChannelMessage(message: string): Promise<SendResult> {
//     const res = await fetch(`${this.apiUrl}/${this.channelId}/messages`, {
//       method: 'POST',
//       headers: { Authorization: `Bearer ${this.apiKey}`, 'Content-Type': 'application/json' },
//       body: JSON.stringify({ messaging_product: 'whatsapp', type: 'text', text: { body: message } }),
//     })
//     const data = await res.json()
//     return res.ok
//       ? { success: true, messageId: data.messages?.[0]?.id, raw: data }
//       : { success: false, error: data.error?.message, raw: data }
//   }
//   ...
// }

// ── Wati Provider (placeholder) ──────────────────────────────
// class WatiProvider implements WhatsAppProvider { ... }

// ── AiSensy Provider (placeholder) ───────────────────────────
// class AiSensyProvider implements WhatsAppProvider { ... }

// ── Factory ─────────────────────────────────────────────────
export function getWhatsAppProvider(): WhatsAppProvider {
  const providerName = process.env.WHATSAPP_PROVIDER || 'none'

  switch (providerName.toLowerCase()) {
    // case 'meta': return new MetaBusinessProvider()
    // case 'wati': return new WatiProvider()
    // case 'aisensy': return new AiSensyProvider()
    default:
      return new NoneProvider()
  }
}

export function isWhatsAppConfigured(): boolean {
  const provider = process.env.WHATSAPP_PROVIDER || 'none'
  return provider !== 'none' && !!process.env.WHATSAPP_API_KEY && !!process.env.WHATSAPP_CHANNEL_ID
}
