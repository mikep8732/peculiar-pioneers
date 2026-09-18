'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import type { LearningPath } from '@/lib/quiz'
import { getTopicLabel, getDifficultyLabel } from '@/lib/quiz'
import { getPathCompletionPercent, isPrerequisiteMet } from '@/lib/quizProgress'
import PathProgressBar from './PathProgressBar'

interface LearningPathCardProps {
  path: LearningPath
}

// Icon components for different topics
function SanctuaryIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3L2 9l10 6 10-6-10-6z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 17l10 6 10-6" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 13l10 6 10-6" />
    </svg>
  )
}

function ProphecyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  )
}

function SabbathIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  )
}

function EndTimesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  )
}

function getIconForTopic(icon: string) {
  const iconClass = "w-8 h-8"
  switch (icon) {
    case 'sanctuary':
      return <SanctuaryIcon className={iconClass} />
    case 'prophecy':
    case 'angels':
      return <ProphecyIcon className={iconClass} />
    case 'sabbath':
      return <SabbathIcon className={iconClass} />
    case 'endtimes':
      return <EndTimesIcon className={iconClass} />
    default:
      return <ProphecyIcon className={iconClass} />
  }
}

export default function LearningPathCard({ path }: LearningPathCardProps) {
  const [progress, setProgress] = useState(0)
  const [isLocked, setIsLocked] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setProgress(getPathCompletionPercent(path.id, path.modules.length))
    setIsLocked(!isPrerequisiteMet(path.prerequisites))
  }, [path.id, path.modules.length, path.prerequisites])

  const CardContent = () => (
    <>
      {/* Header with icon */}
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg ${isLocked ? 'bg-gray-100 dark:bg-dark-200 text-gray-400' : 'bg-gold/10 text-gold'}`}>
          {isLocked ? <LockIcon className="w-8 h-8" /> : getIconForTopic(path.icon)}
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 dark:bg-dark-200 text-gray-600 dark:text-gray-400">
            {getDifficultyLabel(path.difficulty)}
          </span>
          {mounted && progress === 100 && (
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
              Completed
            </span>
          )}
        </div>
      </div>

      {/* Title & Description */}
      <h3 className={`font-semibold text-lg mb-2 ${isLocked ? 'text-gray-400 dark:text-gray-500' : 'text-gray-900 dark:text-white group-hover:text-gold dark:group-hover:text-gold'} transition-colors`}>
        {path.title}
      </h3>
      <p className={`text-sm mb-4 line-clamp-2 ${isLocked ? 'text-gray-400 dark:text-gray-500' : 'text-gray-600 dark:text-gray-400'}`}>
        {path.description}
      </p>

      {/* Meta info */}
      <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
        <span className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {path.estimatedTime}
        </span>
        <span className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          {path.modules.length} modules
        </span>
      </div>

      {/* Topic badge */}
      <div className="mb-4">
        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900">
          {getTopicLabel(path.topic)}
        </span>
      </div>

      {/* Progress bar */}
      {mounted && progress > 0 && !isLocked && (
        <PathProgressBar percent={progress} />
      )}

      {/* Locked message */}
      {isLocked && path.prerequisites && (
        <p className="text-xs text-gray-400 dark:text-gray-500 italic">
          Complete prerequisites to unlock
        </p>
      )}
    </>
  )

  if (isLocked) {
    return (
      <div className="block p-6 border border-gray-200 dark:border-gray-800 rounded-xl bg-gray-50 dark:bg-dark-100 opacity-60 cursor-not-allowed">
        <CardContent />
      </div>
    )
  }

  return (
    <Link
      href={`/quiz/${path.id}`}
      className="group block p-6 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-gold dark:hover:border-gold transition-colors bg-white dark:bg-dark"
    >
      <CardContent />
    </Link>
  )
}
