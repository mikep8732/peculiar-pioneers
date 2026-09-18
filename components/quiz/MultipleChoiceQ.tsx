'use client'

import { useState } from 'react'
import type { MultipleChoiceQuestion } from '@/lib/quiz'

interface MultipleChoiceQProps {
  question: MultipleChoiceQuestion
  onAnswer: (selectedIndex: number, isCorrect: boolean) => void
  showResult?: boolean
}

export default function MultipleChoiceQ({ question, onAnswer, showResult = false }: MultipleChoiceQProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [hasAnswered, setHasAnswered] = useState(false)

  const isCorrect = selectedIndex === question.correctAnswer

  const handleSelect = (index: number) => {
    if (hasAnswered) return
    setSelectedIndex(index)
  }

  const handleSubmit = () => {
    if (selectedIndex === null || hasAnswered) return
    setHasAnswered(true)
    onAnswer(selectedIndex, isCorrect)
  }

  const getOptionStyle = (index: number) => {
    const baseStyle = "w-full p-4 rounded-lg border-2 text-left transition-all"

    if (!hasAnswered) {
      if (selectedIndex === index) {
        return `${baseStyle} border-gold bg-gold/5 dark:bg-gold/10`
      }
      return `${baseStyle} border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600`
    }

    // After answering
    if (index === question.correctAnswer) {
      return `${baseStyle} border-green-500 bg-green-50 dark:bg-green-900/20`
    }
    if (selectedIndex === index && !isCorrect) {
      return `${baseStyle} border-red-500 bg-red-50 dark:bg-red-900/20`
    }
    return `${baseStyle} border-gray-200 dark:border-gray-700 opacity-50`
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

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            disabled={hasAnswered}
            className={getOptionStyle(index)}
          >
            <div className="flex items-center gap-3">
              <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-medium ${
                selectedIndex === index
                  ? 'border-gold bg-gold text-white'
                  : 'border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400'
              }`}>
                {String.fromCharCode(65 + index)}
              </span>
              <span className="text-gray-700 dark:text-gray-200">{option}</span>

              {/* Result icons */}
              {hasAnswered && index === question.correctAnswer && (
                <svg className="w-5 h-5 ml-auto text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
              {hasAnswered && selectedIndex === index && !isCorrect && (
                <svg className="w-5 h-5 ml-auto text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              )}
            </div>
          </button>
        ))}
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
          disabled={selectedIndex === null}
          className={`w-full py-3 rounded-lg font-medium transition-colors ${
            selectedIndex !== null
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
