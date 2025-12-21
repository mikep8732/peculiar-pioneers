import type { Metadata } from 'next'
import beliefsContent from '@/content/beliefs.json'

export const metadata: Metadata = {
  title: 'Beliefs',
  description: 'What we believe as Seventh-day Adventists, with emphasis on present truth for the last days.',
}

export default function Beliefs() {
  return (
    <div className="section">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h1 className="text-gray-900 dark:text-white mb-4">What We Believe</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {beliefsContent.intro}
          </p>
        </div>

        <div className="space-y-12">
          {beliefsContent.beliefs.map((belief, index) => (
            <article
              key={index}
              className="pb-12 border-b border-gray-200 dark:border-gray-800 last:border-0"
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {belief.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {belief.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {belief.verses.map((verse, vIndex) => (
                  <span
                    key={vIndex}
                    className="inline-block px-3 py-1 text-sm bg-gold/10 text-gold-600 dark:text-gold-400 rounded-full"
                  >
                    {verse}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
