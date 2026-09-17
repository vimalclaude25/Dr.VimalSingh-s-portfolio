import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin — UPESSC Test Assistant',
  robots: { index: false, follow: false },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0a0f1e] text-white font-sans">
      {children}
    </div>
  )
}
