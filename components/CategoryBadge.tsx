interface CategoryBadgeProps {
  category: string
  className?: string
}

export default function CategoryBadge({ category, className = '' }: CategoryBadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 ${className}`}
    >
      {category}
    </span>
  )
}
