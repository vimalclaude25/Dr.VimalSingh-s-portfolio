import { SiteTopbar } from '@/components/site-topbar'
import { SiteNavbar } from '@/components/site-navbar'
import { SiteFooter } from '@/components/site-footer'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <div className="flex flex-col flex-1">
        <SiteTopbar />
        <SiteNavbar />
        <main className="flex-1">{children}</main>
      </div>
      <SiteFooter />
    </div>
  )
}
