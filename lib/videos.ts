import videosData from '@/content/videos.json'

export interface Series {
  name: string
  part: number
  total: number
}

export interface Video {
  id: string
  slug: string
  title: string
  description: string
  date: string
  category: string
  duration: string
  featured?: boolean
  series?: Series
}

export interface VideosData {
  categories: string[]
  videos: Video[]
}

const data = videosData as VideosData

export function getAllVideos(): Video[] {
  return [...data.videos].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getVideoBySlug(slug: string): Video | undefined {
  return data.videos.find(video => video.slug === slug)
}

export function getFeaturedVideo(): Video | undefined {
  return data.videos.find(video => video.featured)
}

export function getCategories(): string[] {
  return data.categories
}

export function getVideosByCategory(category: string): Video[] {
  const videos = category === 'All Episodes'
    ? data.videos
    : data.videos.filter(video => video.category === category)

  return [...videos].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getSeriesVideos(seriesName: string): Video[] {
  return data.videos
    .filter(video => video.series?.name === seriesName)
    .sort((a, b) => (a.series?.part ?? 0) - (b.series?.part ?? 0))
}

export function isNewVideo(dateString: string): boolean {
  const videoDate = new Date(dateString)
  const now = new Date()
  const diffTime = now.getTime() - videoDate.getTime()
  const diffDays = diffTime / (1000 * 60 * 60 * 24)
  return diffDays <= 14
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

export function getYouTubeThumbnail(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
}

export function getAdjacentSeriesVideos(video: Video): { prev?: Video; next?: Video } {
  if (!video.series) return {}

  const seriesVideos = getSeriesVideos(video.series.name)
  const currentIndex = seriesVideos.findIndex(v => v.slug === video.slug)

  return {
    prev: currentIndex > 0 ? seriesVideos[currentIndex - 1] : undefined,
    next: currentIndex < seriesVideos.length - 1 ? seriesVideos[currentIndex + 1] : undefined,
  }
}
