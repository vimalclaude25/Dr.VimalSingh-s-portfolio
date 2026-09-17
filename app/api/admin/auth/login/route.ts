import { NextRequest, NextResponse } from 'next/server'

const SESSION_COOKIE = 'upessc-admin-session'
const SESSION_DURATION_MS = 8 * 60 * 60 * 1000 // 8 hours

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { password } = body

    const adminPassword = process.env.ADMIN_PASSWORD

    if (!adminPassword) {
      return NextResponse.json(
        { error: 'Admin authentication not configured. Set ADMIN_PASSWORD environment variable.' },
        { status: 500 }
      )
    }

    if (!password || password !== adminPassword) {
      return NextResponse.json({ error: 'Invalid password.' }, { status: 401 })
    }

    // Create session token
    const sessionData = {
      authenticated: true,
      expiry: Date.now() + SESSION_DURATION_MS,
      created: Date.now(),
    }

    const token = Buffer.from(JSON.stringify(sessionData)).toString('base64')

    const response = NextResponse.json({ success: true })
    response.cookies.set(SESSION_COOKIE, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: SESSION_DURATION_MS / 1000,
      path: '/',
    })

    return response
  } catch {
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 })
  }
}
