import { HeroSection } from '@/components/hero-section'
import { QuickAccess } from '@/components/quick-access'
import { AboutSection } from '@/components/about-section'
import { ResearchSection } from '@/components/research-section'
import { ResearchRepositorySection } from '@/components/research-repository-section'
import { PublicationsSection } from '@/components/publications-section'
import { ResearchNewsSection } from '@/components/research-news-section'
import { NtaNetSection } from '@/components/nta-net-section'
import { ActivitiesSection } from '@/components/activities-section'
import { NewsEvents } from '@/components/news-events'

export default function Page() {
  return (
    <>
      <HeroSection />
      <QuickAccess />
      <NewsEvents />
      <AboutSection />
      <ResearchSection />
      <ResearchRepositorySection />
      <PublicationsSection />
      <ResearchNewsSection />
      <NtaNetSection />
      <ActivitiesSection />
    </>
  )
}
