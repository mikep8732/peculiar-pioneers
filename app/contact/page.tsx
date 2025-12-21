import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Peculiar Pioneers or submit a prayer request.',
}

export default function Contact() {
  return (
    <div className="section">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h1 className="text-gray-900 dark:text-white mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a question or want to connect? Send us a message below, or submit a prayer request.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
