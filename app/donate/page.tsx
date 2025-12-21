import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Donate',
  description: 'Support Peculiar Pioneers in proclaiming present truth.',
}

const donationMethods = [
  {
    name: 'PayPal',
    description: 'Send a donation via PayPal',
    link: '#', // Replace with your PayPal link
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.77.77 0 0 1 .757-.629h6.467c2.127 0 3.849.57 4.948 1.63.976.94 1.446 2.222 1.403 3.83-.077 2.894-1.445 5.24-3.842 6.586-1.275.716-2.774 1.078-4.449 1.078H8.122a.77.77 0 0 0-.757.629l-.789 4.043a.641.641 0 0 1-.632.55h-.868z" />
      </svg>
    ),
  },
  {
    name: 'Cash App',
    description: 'Send via Cash App',
    link: '#', // Replace with your Cash App $cashtag
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39h-1.96c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" />
      </svg>
    ),
  },
  {
    name: 'Zelle',
    description: 'Send via Zelle',
    link: '#', // Replace with instructions or email
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.559 24h-3.118c-.678 0-1.069-.504-.869-1.121l5.645-17.411H5.642c-.679 0-1.282-.439-1.282-1.12V3.121C4.36.439 4.963 0 5.642 0h12.716c.679 0 1.069.504.869 1.121L13.582 18.53h9.776c.679 0 1.282.44 1.282 1.121v1.228c0 .681-.603 1.121-1.282 1.121h-9.799z" />
      </svg>
    ),
  },
]

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

        <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
          {donationMethods.map((method) => (
            <a
              key={method.name}
              href={method.link}
              className="group block p-8 text-center border-2 border-gray-200 dark:border-gray-800 rounded-2xl hover:border-gold dark:hover:border-gold transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-dark-200 text-gray-600 dark:text-gray-400 group-hover:bg-gold/10 group-hover:text-gold transition-colors mb-4">
                {method.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {method.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {method.description}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gray-50 dark:bg-dark-200 rounded-2xl text-center">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Other Ways to Give
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            For other donation methods or questions, please contact us directly.
          </p>
          <a
            href="/contact"
            className="text-gold hover:text-gold-400 font-medium transition-colors"
          >
            Contact Us
          </a>
        </div>

        <p className="mt-8 text-sm text-gray-500 dark:text-gray-500 text-center">
          Replace the placeholder links above with your actual payment links.
        </p>
      </div>
    </div>
  )
}
