import type { ReadingSection } from '@/lib/quiz'

interface ReadingContentProps {
  section: ReadingSection
  onComplete: () => void
  isCompleted: boolean
}

export default function ReadingContent({ section, onComplete, isCompleted }: ReadingContentProps) {
  // Split content into paragraphs
  const paragraphs = section.content.split('\n\n').filter(p => p.trim())

  return (
    <div>
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        {section.title}
      </h2>

      {/* Content */}
      <div className="prose prose-gray dark:prose-invert max-w-none mb-8">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Key Points */}
      {section.keyPoints.length > 0 && (
        <div className="bg-gold/5 dark:bg-gold/10 border border-gold/20 rounded-xl p-6 mb-8">
          <h3 className="font-semibold text-gold mb-4 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Key Points
          </h3>
          <ul className="space-y-3">
            {section.keyPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold/20 text-gold flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <span className="text-gray-700 dark:text-gray-300">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Scripture References */}
      {section.scriptureReferences.length > 0 && (
        <div className="mb-8">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
            Scripture References
          </h3>
          <div className="flex flex-wrap gap-2">
            {section.scriptureReferences.map((ref, index) => (
              <span
                key={index}
                className="inline-block px-3 py-1 text-sm bg-gray-100 dark:bg-dark-200 text-gray-700 dark:text-gray-300 rounded-full"
              >
                {ref}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Complete button */}
      {!isCompleted ? (
        <button
          onClick={onComplete}
          className="w-full py-3 rounded-lg bg-gold text-white hover:bg-gold-600 transition-colors font-medium"
        >
          Mark as Read & Continue
        </button>
      ) : (
        <div className="flex items-center justify-center gap-2 py-3 text-green-600 dark:text-green-400">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="font-medium">Completed</span>
        </div>
      )}
    </div>
  )
}
