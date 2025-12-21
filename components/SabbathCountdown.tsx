'use client'

import { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getNextSabbath(): Date {
  const now = new Date()
  const dayOfWeek = now.getDay()
  
  // Calculate days until Friday sunset (Sabbath begins at sunset Friday)
  // Sunday = 0, Friday = 5
  let daysUntilFriday = (5 - dayOfWeek + 7) % 7
  
  // If it's Friday, check if we're past sunset (approx 6 PM)
  if (dayOfWeek === 5) {
    const hour = now.getHours()
    if (hour >= 18) {
      // Already past sunset, Sabbath has begun - count to next week
      daysUntilFriday = 7
    }
  }
  // If it's Saturday (Sabbath day)
  else if (dayOfWeek === 6) {
    const hour = now.getHours()
    if (hour < 18) {
      // Still Sabbath, show 0
      daysUntilFriday = 0
    } else {
      // Sabbath ended, count to next Friday
      daysUntilFriday = 6
    }
  }
  
  const nextFriday = new Date(now)
  nextFriday.setDate(now.getDate() + daysUntilFriday)
  nextFriday.setHours(18, 0, 0, 0) // 6 PM sunset approximation
  
  return nextFriday
}

function calculateTimeLeft(): TimeLeft {
  const now = new Date()
  const sabbath = getNextSabbath()
  const difference = sabbath.getTime() - now.getTime()
  
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }
  
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

export default function SabbathCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setTimeLeft(calculateTimeLeft())
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!mounted) {
    return (
      <div className="bg-white dark:bg-dark-100 border border-gray-200 dark:border-dark-200 rounded-2xl p-6 md:p-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-5">
          Time Until Sabbath
        </h3>
        <div className="flex justify-center gap-3">
          {['Days', 'Hours', 'Minutes', 'Seconds'].map((label) => (
            <div key={label} className="text-center">
              <div className="bg-gray-900 dark:bg-dark-300 text-white text-3xl md:text-4xl font-bold rounded-xl w-16 h-14 md:w-20 md:h-16 flex items-center justify-center">
                --
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400 mt-2 block">{label}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const timeUnits = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' },
  ]

  return (
    <div className="bg-white dark:bg-dark-100 border border-gray-200 dark:border-dark-200 rounded-2xl p-6 md:p-8">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-5">
        Time Until Sabbath
      </h3>
      <div className="flex justify-center gap-3">
        {timeUnits.map(({ value, label }) => (
          <div key={label} className="text-center">
            <div className="bg-gray-900 dark:bg-dark-300 text-white text-3xl md:text-4xl font-bold rounded-xl w-16 h-14 md:w-20 md:h-16 flex items-center justify-center">
              {value.toString().padStart(2, '0')}
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 mt-2 block">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

