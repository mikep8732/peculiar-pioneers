interface DurationBadgeProps {
  duration: string
}

export default function DurationBadge({ duration }: DurationBadgeProps) {
  return (
    <span className="absolute bottom-2 right-2 px-2 py-0.5 text-xs font-medium bg-black/80 text-white rounded">
      {duration}
    </span>
  )
}
