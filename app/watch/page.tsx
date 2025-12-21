import type { Metadata } from 'next'
import { getAllVideos, getFeaturedVideo } from '@/lib/videos'
import FeaturedEpisode from '@/components/FeaturedEpisode'
import EpisodeArchive from '@/components/EpisodeArchive'

export const metadata: Metadata = {
  title: 'Watch',
  description: 'Watch sermons, Bible studies, and podcasts from Peculiar Pioneers proclaiming present truth for these last days.',
}

export default function Watch() {
  const videos = getAllVideos()
  const featuredVideo = getFeaturedVideo()

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        {featuredVideo && (
          <FeaturedEpisode video={featuredVideo} />
        )}

        <EpisodeArchive
          videos={videos}
          featuredSlug={featuredVideo?.slug}
        />
      </div>
    </div>
  )
}
