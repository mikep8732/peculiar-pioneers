'use client'

import { useState, useCallback } from 'react'
import type { Question, QuizAttempt } from '@/lib/quiz'
import MultipleChoiceQ from './MultipleChoiceQ'
import TrueFalseQ from './TrueFalseQ'
import FillBlankQ from './FillBlankQ'

interface QuizContainerProps {
  questions: Question[]
  passingScore: number
  onComplete: (attempt: QuizAttempt) => void
}

interface Answer {
  questionId: string
  given: string | number | boolean
  correct: boolean
}

export default function QuizContainer({ questions, passingScore, onComplete }: QuizContainerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])
  const [showingFeedback, setShowingFeedback] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const currentQuestion = questions[currentIndex]
  const progress = ((currentIndex + 1) / questions.length) * 100

  const handleAnswer = useCallback((given: string | number | boolean, isCorrect: boolean) => {
    const newAnswer: Answer = {
      questionId: currentQuestion.id,
      given,
      correct: isCorrect
    }
    setAnswers(prev => [...prev, newAnswer])
    setShowingFeedback(true)
  }, [currentQuestion])

  const handleNext = () => {
    setShowingFeedback(false)

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1)
    } else {
      // Quiz complete
      const correctCount = answers.filter(a => a.correct).length + (answers[answers.length - 1]?.correct ? 0 : 0)
      const finalAnswers = [...answers]
      const score = Math.round((finalAnswers.filter(a => a.correct).length / questions.length) * 100)

      const attempt: QuizAttempt = {
        date: new Date().toISOString(),
        score,
        totalQuestions: questions.length,
        answers: finalAnswers.reduce((acc, ans) => {
          acc[ans.questionId] = { given: ans.given, correct: ans.correct }
          return acc
        }, {} as Record<string, { given: string | number | boolean; correct: boolean }>)
      }

      setIsComplete(true)
      onComplete(attempt)
    }
  }

  const handleRetry = () => {
    setCurrentIndex(0)
    setAnswers([])
    setShowingFeedback(false)
    setIsComplete(false)
  }

  // Calculate score
  const correctCount = answers.filter(a => a.correct).length
  const score = Math.round((correctCount / questions.length) * 100)
  const passed = score >= passingScore

  if (isComplete) {
    return (
      <div className="text-center py-8">
        {/* Result icon */}
        <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
          passed ? 'bg-green-100 dark:bg-green-900/30' : 'bg-orange-100 dark:bg-orange-900/30'
        }`}>
          {passed ? (
            <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg className="w-10 h-10 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          )}
        </div>

        {/* Score display */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {passed ? 'Congratulations!' : 'Keep Studying!'}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          You scored <span className={`font-bold text-xl ${passed ? 'text-green-600 dark:text-green-400' : 'text-orange-600 dark:text-orange-400'}`}>{score}%</span>
          <span className="block text-sm mt-1">
            ({correctCount} of {questions.length} correct)
          </span>
        </p>

        {/* Progress to passing */}
        {!passed && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            You need {passingScore}% to pass. Keep reviewing and try again!
          </p>
        )}

        {/* Score bar */}
        <div className="max-w-xs mx-auto mb-8">
          <div className="relative h-4 bg-gray-200 dark:bg-dark-200 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                passed ? 'bg-green-500' : 'bg-orange-500'
              }`}
              style={{ width: `${score}%` }}
            />
            {/* Passing threshold marker */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-gray-600 dark:bg-gray-400"
              style={{ left: `${passingScore}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>0%</span>
            <span>{passingScore}% to pass</span>
            <span>100%</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-4">
          <button
            onClick={handleRetry}
            className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-200 transition-colors"
          >
            Try Again
          </button>
          {passed && (
            <button
              className="px-6 py-3 rounded-lg bg-gold text-white hover:bg-gold-600 transition-colors"
            >
              Continue
            </button>
          )}
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Progress header */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
          <span>Question {currentIndex + 1} of {questions.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-gray-200 dark:bg-dark-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gold rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="bg-white dark:bg-dark-100 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
        {currentQuestion.type === 'multiple-choice' && (
          <MultipleChoiceQ
            question={currentQuestion}
            onAnswer={(selected, correct) => handleAnswer(selected, correct)}
          />
        )}
        {currentQuestion.type === 'true-false' && (
          <TrueFalseQ
            question={currentQuestion}
            onAnswer={(answer, correct) => handleAnswer(answer, correct)}
          />
        )}
        {currentQuestion.type === 'fill-blank' && (
          <FillBlankQ
            question={currentQuestion}
            onAnswer={(answer, correct) => handleAnswer(answer, correct)}
          />
        )}
      </div>

      {/* Next button (shown after answering) */}
      {showingFeedback && (
        <div className="mt-6 text-center">
          <button
            onClick={handleNext}
            className="px-8 py-3 rounded-lg bg-gold text-white hover:bg-gold-600 transition-colors"
          >
            {currentIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
          </button>
        </div>
      )}
    </div>
  )
}
