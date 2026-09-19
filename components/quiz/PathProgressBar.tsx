interface PathProgressBarProps {
  percent: number
  className?: string
}

export default function PathProgressBar({ percent, className = '' }: PathProgressBarProps) {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
        <span>Progress</span>
        <span>{percent}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-dark-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gold rounded-full transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
