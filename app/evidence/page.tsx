import type { Metadata } from 'next'
import ChronologicalEvidence from '@/components/ChronologicalEvidence'

export const metadata: Metadata = {
  title: 'Chronological Evidence',
  description: 'A comprehensive chronological record of natural disasters, crimes, wars, and significant world events from 1844 to 2026, demonstrating the fulfillment of Bible prophecy.',
}

export default function EvidencePage() {
  return <ChronologicalEvidence />
}
