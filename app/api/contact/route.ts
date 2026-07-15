import { NextResponse } from 'next/server'
import { personalInfo } from '@/lib/cv-data'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Send server-to-server to bypass browser-level restrictions
    const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        Name: body.Name,
        Email: body.Email,
        Subject: body.Subject,
        Message: body.Message,
        _subject: `[Portfolio Inquiry] ${body.Subject || 'New message'}`,
        _replyto: body.Email
      })
    })

    const data = await response.json()

    if (response.ok) {
      return NextResponse.json({ success: true, data })
    } else {
      return NextResponse.json(
        { success: false, error: data.message || 'FormSubmit accepted with warning.' },
        { status: response.status }
      )
    }
  } catch (error: any) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Server error. Please try again.' },
      { status: 500 }
    )
  }
}
