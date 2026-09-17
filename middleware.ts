// ============================================================
// Next.js Middleware — Admin Route Protection
// Protects all /admin/* routes using HttpOnly session cookie
// ============================================================

import { NextRequest, NextResponse } from 'next/server'

const PROTECTED_PREFIX = '/admin'
const LOGIN_PATH = '/admin/login'
const SESSION_COOKIE = 'upessc-admin-session'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Only protect /admin routes
  if (!pathname.startsWith(PROTECTED_PREFIX)) {
    return NextResponse.next()
  }

  // Allow login page through
  if (pathname === LOGIN_PATH || pathname.startsWith('/admin/login')) {
    return NextResponse.next()
  }

  // Check session cookie
  const session = request.cookies.get(SESSION_COOKIE)

  if (!session?.value) {
    // Redirect to login with return URL
    const loginUrl = new URL(LOGIN_PATH, request.url)
    loginUrl.searchParams.set('from', pathname)
    return NextResponse.redirect(loginUrl)
  }

  // Validate session token format (simple base64 check)
  try {
    const decoded = Buffer.from(session.value, 'base64').toString('utf-8')
    const { expiry } = JSON.parse(decoded)
    if (Date.now() > expiry) {
      // Session expired
      const loginUrl = new URL(LOGIN_PATH, request.url)
      loginUrl.searchParams.set('from', pathname)
      const res = NextResponse.redirect(loginUrl)
      res.cookies.delete(SESSION_COOKIE)
      return res
    }
  } catch {
    // Invalid session token
    const loginUrl = new URL(LOGIN_PATH, request.url)
    const res = NextResponse.redirect(loginUrl)
    res.cookies.delete(SESSION_COOKIE)
    return res
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
