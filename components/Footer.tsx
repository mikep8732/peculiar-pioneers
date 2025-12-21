import Link from 'next/link'

const footerLinks = [
  { href: '/watch', label: 'Watch' },
  { href: '/beliefs', label: 'Beliefs' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/donate', label: 'Donate' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-dark-400">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="text-lg font-semibold text-gray-900 dark:text-white hover:text-gold dark:hover:text-gold transition-colors"
            >
              Peculiar Pioneers
            </Link>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Proclaiming present truth for these last days
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gold dark:hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            &copy; {currentYear} Peculiar Pioneers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
