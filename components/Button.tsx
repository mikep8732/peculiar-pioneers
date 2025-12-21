import Link from 'next/link'

interface ButtonProps {
  href?: string
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit'
  onClick?: () => void
}

export default function Button({
  href,
  variant = 'primary',
  children,
  className = '',
  type = 'button',
  onClick,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 text-base'

  const variants = {
    primary: 'bg-gold text-dark hover:bg-gold-400 active:bg-gold-600',
    secondary: 'border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:border-gold hover:text-gold dark:hover:border-gold dark:hover:text-gold',
  }

  const styles = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  )
}
