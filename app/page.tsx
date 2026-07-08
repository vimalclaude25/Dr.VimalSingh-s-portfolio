import { SiteTopbar } from '@/components/site-topbar'
import { SiteNavbar } from '@/components/site-navbar'
import { HeroSection } from '@/components/hero-section'
import { QuickAccess } from '@/components/quick-access'
import { LatestPublications } from '@/components/latest-publications'
import { NewsEvents } from '@/components/news-events'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteTopbar />
      <SiteNavbar />
      <main>
        <HeroSection />
        <QuickAccess />
        <LatestPublications />
        <NewsEvents />
      </main>
      <SiteFooter />
    </div>
  )
}
