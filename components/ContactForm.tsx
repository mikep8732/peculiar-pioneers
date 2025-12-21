'use client'

import { useState, useEffect, useCallback } from 'react'
import { getLocalStorage, setLocalStorage, removeLocalStorage } from '@/lib/localStorage'
import Button from './Button'

interface FormData {
  name: string
  email: string
  message: string
  isPrayerRequest: boolean
}

const STORAGE_KEY = 'contact-form-draft'

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    isPrayerRequest: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const saved = getLocalStorage<FormData | null>(STORAGE_KEY, null)
    if (saved) {
      setFormData(saved)
    }
  }, [])

  const saveDraft = useCallback((data: FormData) => {
    setLocalStorage(STORAGE_KEY, data)
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value

    const newData = {
      ...formData,
      [name]: newValue,
    }
    setFormData(newData)
    saveDraft(newData)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission - replace with your actual submission logic
    await new Promise((resolve) => setTimeout(resolve, 1000))

    removeLocalStorage(STORAGE_KEY)
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 text-gold mb-6">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Message Sent
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Thank you for reaching out. We will get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-200 text-gray-900 dark:text-white focus:ring-2 focus:ring-gold focus:border-transparent transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-200 text-gray-900 dark:text-white focus:ring-2 focus:ring-gold focus:border-transparent transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-200 text-gray-900 dark:text-white focus:ring-2 focus:ring-gold focus:border-transparent transition-colors resize-none"
        />
      </div>

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="isPrayerRequest"
          name="isPrayerRequest"
          checked={formData.isPrayerRequest}
          onChange={handleChange}
          className="w-5 h-5 rounded border-gray-300 dark:border-gray-700 text-gold focus:ring-gold"
        />
        <label
          htmlFor="isPrayerRequest"
          className="text-sm text-gray-700 dark:text-gray-300"
        >
          This is a prayer request
        </label>
      </div>

      <Button type="submit" variant="primary" className="w-full">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>

      <p className="text-xs text-gray-500 dark:text-gray-500 text-center">
        Your message is saved as a draft automatically.
      </p>
    </form>
  )
}
