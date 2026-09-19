'use client'

import { useState } from 'react'
import type { TrueFalseQuestion } from '@/lib/quiz'

interface TrueFalseQProps {
  question: TrueFalseQuestion
  onAnswer: (answer: boolean, isCorrect: boolean) => void
}

export default function TrueFalseQ({ question, onAnswer }: TrueFalseQProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null)
  const [hasAnswered, setHasAnswered] = useState(false)

  const isCorrect = selectedAnswer === question.correctAnswer

  const handleSelect = (answer: boolean) => {
    if (hasAnswered) return
    setSelectedAnswer(answer)
  }

  const handleSubmit = () => {
    if (selectedAnswer === null || hasAnswered) return
    setHasAnswered(true)
    onAnswer(selectedAnswer, isCorrect)
  }

  const getButtonStyle = (value: boolean) => {
    const baseStyle = "flex-1 py-4 rounded-lg border-2 font-medium transition-all"

    if (!hasAnswered) {
      if (selectedAnswer === value) {
        return `${baseStyle} border-gold bg-gold/5 dark:bg-gold/10 text-gold`
      }
      return `${baseStyle} border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600`
    }

    // After answering
    if (value === question.correctAnswer) {
      return `${baseStyle} border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400`
    }
    if (selectedAnswer === value && !isCorrect) {
      return `${baseStyle} border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400`
    }
    return `${baseStyle} border-gray-200 dark:border-gray-700 text-gray-400 opacity-50`
  }

  return (
    <div className="space-y-4">
      {/* Question */}
      <div className="mb-6">
        <p className="text-lg font-medium text-gray-900 dark:text-white">
          {question.question}
        </p>
        {question.scriptureRef && (
          <p className="mt-2 text-sm text-gold">
            {question.scriptureRef}
          </p>
        )}
      </div>

      {/* True/False buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => handleSelect(true)}
          disabled={hasAnswered}
          className={getButtonStyle(true)}
        >
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            True
          </div>
        </button>
        <button
          onClick={() => handleSelect(false)}
          disabled={hasAnswered}
          className={getButtonStyle(false)}
        >
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            False
          </div>
        </button>
      </div>

      {/* Explanation (shown after answering) */}
      {hasAnswered && (
        <div className={`p-4 rounded-lg mt-4 ${
          isCorrect
            ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
            : 'bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800'
        }`}>
          <p className={`text-sm font-medium mb-1 ${
            isCorrect ? 'text-green-700 dark:text-green-400' : 'text-orange-700 dark:text-orange-400'
          }`}>
            {isCorrect ? 'Correct!' : 'Not quite right'}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {question.explanation}
          </p>
        </div>
      )}

      {/* Submit button */}
      {!hasAnswered && (
        <button
          onClick={handleSubmit}
          disabled={selectedAnswer === null}
          className={`w-full py-3 rounded-lg font-medium transition-colors ${
            selectedAnswer !== null
              ? 'bg-gold text-white hover:bg-gold-600'
              : 'bg-gray-200 dark:bg-dark-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Check Answer
        </button>
      )}
    </div>
  )
}
