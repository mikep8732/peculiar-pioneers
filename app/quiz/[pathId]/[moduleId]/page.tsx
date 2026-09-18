import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllPaths, getPathById, getModuleById } from '@/lib/quiz'
import StudyModule from '@/components/quiz/StudyModule'

interface PageProps {
  params: Promise<{ pathId: string; moduleId: string }>
}

export async function generateStaticParams() {
  const paths = getAllPaths()
  const params: { pathId: string; moduleId: string }[] = []

  for (const path of paths) {
    for (const moduleId of path.modules) {
      params.push({ pathId: path.id, moduleId })
    }
  }

  return params
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { pathId, moduleId } = await params
  const path = getPathById(pathId)
  const module = await getModuleById(moduleId)

  if (!path || !module) {
    return { title: 'Module Not Found' }
  }

  return {
    title: `${module.title} | ${path.title} | Peculiar Pioneers`,
    description: module.description,
  }
}

export default async function ModulePage({ params }: PageProps) {
  const { pathId, moduleId } = await params
  const path = getPathById(pathId)
  const module = await getModuleById(moduleId)

  if (!path || !module) {
    notFound()
  }

  return (
    <main className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
          <Link href="/quiz" className="hover:text-gold transition-colors">
            Study Center
          </Link>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <Link href={`/quiz/${pathId}`} className="hover:text-gold transition-colors">
            {path.title}
          </Link>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-900 dark:text-white">{module.title}</span>
        </nav>

        {/* Module header */}
        <div className="mb-8">
          <div className="text-sm text-gold font-medium mb-2">
            Module {module.order} of {path.modules.length}
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {module.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {module.description}
          </p>
        </div>

        {/* Study module component */}
        <StudyModule module={module} />

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex justify-between items-center">
            <Link
              href={`/quiz/${pathId}`}
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gold transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to {path.title}
            </Link>

            {/* Next module link (if not last) */}
            {module.order < path.modules.length && (
              <Link
                href={`/quiz/${pathId}/${path.modules[module.order]}`}
                className="inline-flex items-center gap-2 text-gold hover:text-gold-600 transition-colors font-medium"
              >
                Next Module
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
