import Link from 'next/link'
import { Video, formatDate } from '@/lib/videos'
import CategoryBadge from './CategoryBadge'

interface FeaturedEpisodeProps {
  video: Video
}

export default function FeaturedEpisode({ video }: FeaturedEpisodeProps) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-white text-center mb-8">
        Featured Episode
      </h2>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
        {/* Video Embed */}
        <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-dark-200">
          <iframe
            src={`https://www.youtube.com/embed/${video.id}`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Details */}
        <div className="lg:py-4">
          <Link
            href={`/watch/${video.slug}`}
            className="block group"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-gold dark:group-hover:text-gold transition-colors mb-3">
              {video.title}
            </h3>
          </Link>

          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
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

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {video.description}
          </p>

          <CategoryBadge category={video.category} />
        </div>
      </div>
    </section>
  )
}
