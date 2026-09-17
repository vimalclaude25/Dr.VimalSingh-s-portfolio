import { NextRequest, NextResponse } from 'next/server'
import { getStore } from '@/lib/automation-store'
import { getDashboardStats } from '@/lib/automation-engine'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('page') || '1', 10)
  const limit = parseInt(searchParams.get('limit') || '100', 10)
  const test_id = searchParams.get('test_id')

  const store = getStore()
  let logs = [...store.activity_log].reverse() // newest first

  if (test_id) logs = logs.filter((l) => l.test_id === test_id)

  const total = logs.length
  const paginated = logs.slice((page - 1) * limit, page * limit)

  return NextResponse.json({ logs: paginated, total, page, limit })
}

// GET /api/admin/upessc/automation/logs?stats=1 returns dashboard stats
export async function POST() {
  const stats = getDashboardStats()
  return NextResponse.json(stats)
}
