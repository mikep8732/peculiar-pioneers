import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  getAllVideos,
  getVideoBySlug,
  getAdjacentSeriesVideos,
  formatDate,
} from '@/lib/videos'
import CategoryBadge from '@/components/CategoryBadge'
import SeriesProgress from '@/components/SeriesProgress'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const videos = getAllVideos()
  return videos.map((video) => ({
    slug: video.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const video = getVideoBySlug(slug)

  if (!video) {
    return {
      title: 'Video Not Found',
    }
  }

  return {
    title: video.title,
    description: video.description,
    openGraph: {
      title: video.title,
      description: video.description,
      type: 'video.other',
    },
  }
}

export default async function VideoPage({ params }: PageProps) {
  const { slug } = await params
  const video = getVideoBySlug(slug)

  if (!video) {
    notFound()
  }

  const { prev, next } = getAdjacentSeriesVideos(video)

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Link */}
        <Link
          href="/watch"
          className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gold dark:hover:text-gold transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Episodes
        </Link>

        {/* Video Embed */}
        <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-dark-200 mb-8">
          <iframe
            src={`https://www.youtube.com/embed/${video.id}`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Video Info */}
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
          {video.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{formatDate(video.date)}</span>
          </div>

          {video.series && (
            <SeriesProgress part={video.series.part} total={video.series.total} />
          )}

          <CategoryBadge category={video.category} />
        </div>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-8">
          {video.description}
        </p>

        {/* Series Navigation */}
        {video.series && (prev || next) && (
          <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">
              More in this series
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              {prev && (
                <Link
                  href={`/watch/${prev.slug}`}
                  className="flex-1 p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gold dark:hover:border-gold transition-colors group"
                >
                  <span className="text-xs text-gray-500 dark:text-gray-400 uppercase">Previous</span>
                  <p className="font-medium text-gray-900 dark:text-white group-hover:text-gold dark:group-hover:text-gold transition-colors">
                    {prev.title}
                  </p>
                </Link>
              )}
              {next && (
                <Link
                  href={`/watch/${next.slug}`}
                  className="flex-1 p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gold dark:hover:border-gold transition-colors group text-right"
                >
                  <span className="text-xs text-gray-500 dark:text-gray-400 uppercase">Next</span>
                  <p className="font-medium text-gray-900 dark:text-white group-hover:text-gold dark:group-hover:text-gold transition-colors">
                    {next.title}
                  </p>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
