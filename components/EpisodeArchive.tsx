'use client'

import { useState, useMemo } from 'react'
import { Video, getCategories, getVideosByCategory } from '@/lib/videos'
import CategoryTabs from './CategoryTabs'
import SearchInput from './SearchInput'
import VideoCard from './VideoCard'

interface EpisodeArchiveProps {
  videos: Video[]
  featuredSlug?: string
}

export default function EpisodeArchive({ videos, featuredSlug }: EpisodeArchiveProps) {
  const [activeCategory, setActiveCategory] = useState('All Episodes')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = getCategories()

  const filteredVideos = useMemo(() => {
    let result = activeCategory === 'All Episodes'
      ? videos
      : videos.filter(v => v.category === activeCategory)

    // Exclude featured video from archive
    if (featuredSlug) {
      result = result.filter(v => v.slug !== featuredSlug)
    }

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        v =>
          v.title.toLowerCase().includes(query) ||
          v.description.toLowerCase().includes(query)
      )
    }

    // Sort by date (newest first)
    return [...result].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  }, [videos, activeCategory, searchQuery, featuredSlug])

  return (
    <section>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Episode Archive
        </h2>
        <div className="w-full sm:w-64">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search episodes..."
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="mb-8">
        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>

      {/* Video Grid */}
      {filteredVideos.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredVideos.map((video) => (
            <VideoCard key={video.slug} video={video} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400 py-12">
          No episodes found matching your criteria.
        </p>
      )}
    </section>
  )
}
