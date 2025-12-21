import type { Metadata } from 'next'
import aboutContent from '@/content/about.json'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Peculiar Pioneers and our mission to proclaim present truth.',
}

export default function About() {
  return (
    <div className="section">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h1 className="text-gray-900 dark:text-white mb-4">{aboutContent.title}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {aboutContent.subtitle}
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
          {aboutContent.story.map((paragraph, index) => (
            <p key={index} className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="bg-gray-50 dark:bg-dark-200 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            {aboutContent.mission.heading}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            {aboutContent.mission.text}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Our Values
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {aboutContent.values.map((value, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-gold mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
