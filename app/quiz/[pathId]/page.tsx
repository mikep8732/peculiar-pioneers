import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllPaths, getPathById, getModulesForPath, getDifficultyLabel, getTopicLabel } from '@/lib/quiz'
import PathProgressClient from './PathProgressClient'

interface PageProps {
  params: Promise<{ pathId: string }>
}

export async function generateStaticParams() {
  const paths = getAllPaths()
  return paths.map((path) => ({ pathId: path.id }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { pathId } = await params
  const path = getPathById(pathId)

  if (!path) {
    return { title: 'Path Not Found' }
  }

  return {
    title: `${path.title} | Study Center | Peculiar Pioneers`,
    description: path.description,
  }
}

export default async function PathPage({ params }: PageProps) {
  const { pathId } = await params
  const path = getPathById(pathId)

  if (!path) {
    notFound()
  }

  const modules = await getModulesForPath(pathId)

  return (
    <main className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back link */}
        <Link
          href="/quiz"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gold dark:hover:text-gold transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Study Center
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900">
              {getTopicLabel(path.topic)}
            </span>
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-dark-200 text-gray-600 dark:text-gray-400">
              {getDifficultyLabel(path.difficulty)}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {path.estimatedTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {path.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {path.description}
          </p>
        </div>

        {/* Progress (client component) */}
        <PathProgressClient pathId={pathId} totalModules={modules.length} />

        {/* Modules list */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Modules ({modules.length})
          </h2>

          {modules.map((module, index) => (
            <Link
              key={module.id}
              href={`/quiz/${pathId}/${module.id}`}
              className="group flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-gold dark:hover:border-gold transition-colors bg-white dark:bg-dark"
            >
              {/* Module number */}
              <div className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center font-semibold flex-shrink-0">
                {index + 1}
              </div>

              {/* Module info */}
              <div className="flex-grow min-w-0">
                <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-gold dark:group-hover:text-gold transition-colors">
                  {module.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                  {module.description}
                </p>
              </div>

              {/* Sections count */}
              <div className="text-sm text-gray-500 dark:text-gray-400 flex-shrink-0">
                {module.sections.length} sections
              </div>

              {/* Arrow */}
              <svg className="w-5 h-5 text-gray-400 group-hover:text-gold transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>

        {/* Start button */}
        {modules.length > 0 && (
          <div className="mt-8 text-center">
            <Link
              href={`/quiz/${pathId}/${modules[0].id}`}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gold text-white hover:bg-gold-600 transition-colors font-medium"
            >
              Start Learning
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}
