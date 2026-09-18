'use client'

import { useState } from 'react'
import type { LearningPath, Topic } from '@/lib/quiz'
import { getTopicLabel } from '@/lib/quiz'
import LearningPathCard from './LearningPathCard'

interface QuizHubProps {
  paths: LearningPath[]
}

const topics: (Topic | 'all')[] = ['all', 'sanctuary', 'prophecy', 'sabbath', 'last-days']

export default function QuizHub({ paths }: QuizHubProps) {
  const [selectedTopic, setSelectedTopic] = useState<Topic | 'all'>('all')

  const filteredPaths = selectedTopic === 'all'
    ? paths
    : paths.filter(path => path.topic === selectedTopic)

  return (
    <div>
      {/* Topic filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {topics.map(topic => (
          <button
            key={topic}
            onClick={() => setSelectedTopic(topic)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedTopic === topic
                ? 'bg-gold text-white'
                : 'bg-gray-100 dark:bg-dark-200 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-300'
            }`}
          >
            {topic === 'all' ? 'All Topics' : getTopicLabel(topic)}
          </button>
        ))}
      </div>

      {/* Path grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPaths.map(path => (
          <LearningPathCard key={path.id} path={path} />
        ))}
      </div>

      {filteredPaths.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            No study paths available for this topic yet.
          </p>
        </div>
      )}
    </div>
  )
}
