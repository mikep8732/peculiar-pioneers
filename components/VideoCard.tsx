import Link from 'next/link'
import Image from 'next/image'
import { Video, getYouTubeThumbnail, isNewVideo, formatDate } from '@/lib/videos'
import CategoryBadge from './CategoryBadge'
import DurationBadge from './DurationBadge'
import NewBadge from './NewBadge'
import SeriesProgress from './SeriesProgress'

interface VideoCardProps {
  video: Video
}

export default function VideoCard({ video }: VideoCardProps) {
  const thumbnailUrl = getYouTubeThumbnail(video.id)
  const isNew = isNewVideo(video.date)

  return (
    <Link href={`/watch/${video.slug}`} className="group block">
      {/* Thumbnail */}
      <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-dark-200 mb-4">
        <Image
          src={thumbnailUrl}
          alt={video.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/90 dark:bg-dark/90 shadow-lg opacity-80 group-hover:opacity-100 transition-opacity">
            <svg
              className="w-6 h-6 text-gray-900 dark:text-white ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Badges */}
        {isNew && <NewBadge />}
        <DurationBadge duration={video.duration} />
      </div>

      {/* Content */}
      <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-gold dark:group-hover:text-gold transition-colors line-clamp-2 mb-2">
        {video.title}
      </h3>

      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
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
        <SeriesProgress
          part={video.series.part}
          total={video.series.total}
          className="block mb-3"
        />
      )}

      <CategoryBadge category={video.category} />
    </Link>
  )
}
