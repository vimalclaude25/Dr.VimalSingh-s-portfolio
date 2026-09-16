import { Metadata } from 'next'
import { OnlineTestPortal } from '@/components/online-test-portal'

export const metadata: Metadata = {
  title: 'UPESSC 2026 Online Test Series Portal | Dr. Vimal Singh',
  description:
    'Official Online Test Series for UPESSC Assistant Professor Examination 2026 (General Knowledge & Education). 80 total tests powered by Testmoz.',
}

export default function OnlineTestPage() {
  return <OnlineTestPortal />
}
