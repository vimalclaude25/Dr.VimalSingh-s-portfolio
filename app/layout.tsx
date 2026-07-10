import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins, Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://drvimalsingh.in'),
  alternates: {
    canonical: '/',
  },
  title: 'Dr. Vimal Singh — Educator, Researcher & AI Innovator',
  description:
    'Official website of Dr. Vimal Singh, Assistant Professor, School of Teacher Education, CSJM University, Kanpur. Research in AI, Machine Learning, Educational Technology, and Teacher Education.',
  generator: 'v0.app',
  openGraph: {
    title: 'Dr. Vimal Singh — Educator, Researcher & AI Innovator',
    description:
      'Assistant Professor, School of Teacher Education, CSJM University, Kanpur. Research in AI, Educational Technology & Policy.',
    type: 'profile',
    url: 'https://drvimalsingh.in',
    siteName: 'Dr. Vimal Singh Academic Portfolio',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#050b1a' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable} bg-background`}>
      <body className="bg-background font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
