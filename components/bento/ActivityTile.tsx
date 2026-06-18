'use client'

import { motion } from 'framer-motion'
import { cellAppear } from '@/lib/animations/variants'

const generateMockData = () => {
  const patterns = [
    [0, 1, 2, 1, 0, 1, 2, 3, 2, 1, 0, 1],
    [1, 2, 1, 0, 1, 2, 3, 2, 1, 0, 1, 2],
    [2, 1, 0, 1, 2, 3, 2, 1, 0, 1, 2, 3],
    [1, 0, 1, 2, 3, 2, 1, 0, 1, 2, 3, 2],
    [0, 1, 2, 3, 2, 1, 0, 1, 2, 3, 2, 1],
    [3, 2, 1, 0, 1, 2, 3, 2, 1, 0, 1, 2],
    [2, 3, 2, 1, 0, 1, 2, 3, 2, 1, 0, 1],
  ]
  return patterns
}

export function ActivityTile() {
  const data = generateMockData()
  
  const getColor = (level: number) => {
    const colors = [
      'bg-gray-800',
      'bg-purple-900',
      'bg-purple-700',
      'bg-purple-500',
    ]
    return colors[level] || colors[0]
  }

  const getAccessibilityLabel = (level: number): string => {
    const labels = [
      'No activity',
      'Low activity',
      'Medium activity',
      'High activity'
    ]
    return labels[level] || 'No activity'
  }

  return (
    <section 
      className="rounded-2xl bg-surface border border-border p-6 shadow-card"
      aria-label="Activity overview chart"
    >
      <h3 className="text-white font-semibold text-lg mb-4">Activity Overview</h3>
      
      <div 
        className="flex justify-between text-xs text-gray-400 mb-2"
        aria-hidden="true"
      >
        <span>Mon</span>
        <span>Wed</span>
        <span>Fri</span>
        <span>Sun</span>
      </div>
      
      <div 
        className="grid grid-cols-12 gap-1"
        role="img"
        aria-label="Activity heatmap showing contributions over time"
      >
        {data.map((week, i) => (
          <div key={i} className="flex flex-col gap-1">
            {week.map((level, j) => {
              const delay = (i * week.length + j) * 0.003
              return (
                <motion.div
                  key={`${i}-${j}`}
                  custom={delay}
                  variants={cellAppear}
                  initial="hidden"
                  animate="visible"
                  className={`w-3 h-3 rounded-sm ${getColor(level)}`}
                  role="img"
                  aria-label={`${getAccessibilityLabel(level)}`}
                  title={`${level || 0} contributions`}
                />
              )
            })}
          </div>
        ))}
      </div>
      
      <div 
        className="flex justify-between text-xs text-gray-400 mt-3"
        aria-hidden="true"
      >
        <span>Less</span>
        <div className="flex gap-1 items-center">
          {[0, 1, 2, 3].map((level) => (
            <div
              key={level}
              className={`w-3 h-3 rounded-sm ${getColor(level)}`}
              aria-label={`${getAccessibilityLabel(level)}`}
            />
          ))}
          <span className="ml-1">More</span>
        </div>
      </div>
    </section>
  )
}