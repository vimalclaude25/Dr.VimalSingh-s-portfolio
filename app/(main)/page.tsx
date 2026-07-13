import { HeroSection } from '@/components/hero-section'
import { QuickAccess } from '@/components/quick-access'
import { AboutSection } from '@/components/about-section'
import { LatestPublications } from '@/components/latest-publications'
import { NewsEvents } from '@/components/news-events'

export default function Page() {
  return (
    <>
      <HeroSection />
      <QuickAccess />
      <NewsEvents />
      <AboutSection />
      <LatestPublications />
    </>
  )
}
