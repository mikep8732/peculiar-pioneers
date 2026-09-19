'use client'

import { useState } from 'react'
import type { FillBlankQuestion } from '@/lib/quiz'

interface FillBlankQProps {
  question: FillBlankQuestion
  onAnswer: (answer: string, isCorrect: boolean) => void
}

export default function FillBlankQ({ question, onAnswer }: FillBlankQProps) {
  const [inputValue, setInputValue] = useState('')
  const [hasAnswered, setHasAnswered] = useState(false)

  const normalizeAnswer = (answer: string) => answer.toLowerCase().trim()

  const checkAnswer = (answer: string) => {
    const normalized = normalizeAnswer(answer)
    return question.acceptedAnswers.some(
      accepted => normalizeAnswer(accepted) === normalized
    )
  }

  const isCorrect = checkAnswer(inputValue)

  const handleSubmit = () => {
    if (!inputValue.trim() || hasAnswered) return
    setHasAnswered(true)
    onAnswer(inputValue, isCorrect)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
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

      {/* Input field */}
      <div className="relative">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={hasAnswered}
          placeholder="Type your answer..."
          className={`w-full px-4 py-3 rounded-lg border-2 bg-white dark:bg-dark-100 text-gray-900 dark:text-white focus:outline-none transition-colors ${
            hasAnswered
              ? isCorrect
                ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                : 'border-red-500 bg-red-50 dark:bg-red-900/20'
              : 'border-gray-200 dark:border-gray-700 focus:border-gold'
          }`}
        />

        {/* Result icon */}
        {hasAnswered && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2">
            {isCorrect ? (
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            )}
          </span>
        )}
      </div>

      {/* Correct answer (shown if wrong) */}
      {hasAnswered && !isCorrect && (
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Correct answer: <span className="font-medium text-gold">{question.correctAnswer}</span>
        </p>
      )}

      {/* Explanation (shown after answering) */}
      {hasAnswered && (
        <div className={`p-4 rounded-lg ${
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
          disabled={!inputValue.trim()}
          className={`w-full py-3 rounded-lg font-medium transition-colors ${
            inputValue.trim()
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
