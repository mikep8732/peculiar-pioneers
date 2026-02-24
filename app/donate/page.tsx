import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Donate',
  description: 'Support Peculiar Pioneers in proclaiming present truth.',
}

export default function Donate() {
  return (
    <div className="section">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h1 className="text-gray-900 dark:text-white mb-4">Support Our Ministry</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Your generous donations help us continue to proclaim present truth and reach souls with the everlasting gospel. Every gift, large or small, makes a difference.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="p-8 text-center border-2 border-gray-200 dark:border-gray-800 rounded-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 text-gold mb-4">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.77.77 0 0 1 .757-.629h6.467c2.127 0 3.849.57 4.948 1.63.976.94 1.446 2.222 1.403 3.83-.077 2.894-1.445 5.24-3.842 6.586-1.275.716-2.774 1.078-4.449 1.078H8.122a.77.77 0 0 0-.757.629l-.789 4.043a.641.641 0 0 1-.632.55h-.868z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              PayPal
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Coming Soon
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              PayPal donations will be available shortly. In the meantime, please contact us directly.
            </p>
          </div>
        </div>

        <div className="mt-16 p-8 bg-gray-50 dark:bg-dark-200 rounded-2xl text-center">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Contact Us to Give
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            For donation inquiries or other ways to give, please reach out to us directly.
          </p>
          <a
            href="mailto:peculiarpioneers@gmail.com"
            className="text-gold hover:text-gold-400 font-medium transition-colors"
          >
            peculiarpioneers@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}
