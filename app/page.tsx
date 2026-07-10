import { SiteTopbar } from '@/components/site-topbar'
import { SiteNavbar } from '@/components/site-navbar'
import { HeroSection } from '@/components/hero-section'
import { QuickAccess } from '@/components/quick-access'
import { AboutSection } from '@/components/about-section'
import { ResearchSection } from '@/components/research-section'
import { PublicationsSection } from '@/components/publications-section'
import { ResearchNewsSection } from '@/components/research-news-section'
import { NtaNetSection } from '@/components/nta-net-section'
import { ActivitiesSection } from '@/components/activities-section'
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
        <NewsEvents />
        <AboutSection />
        <ResearchSection />
        <PublicationsSection />
        <ResearchNewsSection />
        <NtaNetSection />
        <ActivitiesSection />
      </main>
      <SiteFooter />
    </div>
  )
}
