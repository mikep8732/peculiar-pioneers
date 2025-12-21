interface SeriesProgressProps {
  part: number
  total: number
  className?: string
}

export default function SeriesProgress({ part, total, className = '' }: SeriesProgressProps) {
  return (
    <span className={`text-sm text-gray-500 dark:text-gray-400 ${className}`}>
      Part {part} of {total}
    </span>
  )
}
