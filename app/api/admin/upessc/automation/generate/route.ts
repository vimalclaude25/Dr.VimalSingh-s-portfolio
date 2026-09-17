import { NextRequest, NextResponse } from 'next/server'
import { generateMessagesForTest } from '@/lib/automation-engine'
import { getStore } from '@/lib/automation-store'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { test_id, generate_all_today } = body

    if (generate_all_today) {
      // Generate messages for all of today's tests
      const today = new Date().toISOString().slice(0, 10)
      const { testSeriesData } = await import('@/lib/test-series-data')
      const todaysTests = testSeriesData.filter((t) => t.date === today)

      const results: { test_id: string; count: number; error?: string }[] = []
      for (const test of todaysTests) {
        try {
          const msgs = generateMessagesForTest(test.id)
          results.push({ test_id: test.id, count: msgs.length })
        } catch (err: any) {
          results.push({ test_id: test.id, count: 0, error: err.message })
        }
      }
      return NextResponse.json({ success: true, results })
    }

    if (!test_id) {
      return NextResponse.json({ error: 'test_id is required' }, { status: 400 })
    }

    const messages = generateMessagesForTest(test_id)
    return NextResponse.json({ success: true, count: messages.length, messages })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const test_id = searchParams.get('test_id')
  const store = getStore()
  const messages = test_id ? store.messages.filter((m) => m.test_id === test_id) : store.messages
  return NextResponse.json({ messages, total: messages.length })
}
