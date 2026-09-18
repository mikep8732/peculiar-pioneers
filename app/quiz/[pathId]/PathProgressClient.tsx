'use client'

import { useState, useEffect } from 'react'
import { getPathCompletionPercent } from '@/lib/quizProgress'
import PathProgressBar from '@/components/quiz/PathProgressBar'

interface PathProgressClientProps {
  pathId: string
  totalModules: number
}

export default function PathProgressClient({ pathId, totalModules }: PathProgressClientProps) {
  const [progress, setProgress] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setProgress(getPathCompletionPercent(pathId, totalModules))
  }, [pathId, totalModules])

  if (!mounted || progress === 0) {
    return null
  }

  return (
    <div className="mb-8">
      <PathProgressBar percent={progress} />
    </div>
  )
}
