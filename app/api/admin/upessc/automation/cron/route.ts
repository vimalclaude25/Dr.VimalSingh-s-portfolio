import { NextRequest, NextResponse } from 'next/server'
import { processDueMessages } from '@/lib/automation-engine'

// This endpoint is called by Vercel Cron or external cron service
// every minute to process due messages.
// Security: validate the cron secret header to prevent unauthorized access.

export async function GET(request: NextRequest) {
  // Validate cron secret (set CRON_SECRET env variable)
  const authHeader = request.headers.get('authorization')
  const cronSecret = process.env.CRON_SECRET

  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const stats = await processDueMessages()
    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      ...stats,
    })
  } catch (err: any) {
    console.error('[Cron] Error processing due messages:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

// Also allow POST for manual trigger from dashboard
export async function POST(request: NextRequest) {
  return GET(request)
}
