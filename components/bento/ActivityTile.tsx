'use client'

import { useState, useEffect } from 'react'

export function ActivityTile() {
  const [data, setData] = useState<number[][]>([])
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const generateMockData = () => {
      return Array.from({ length: 7 }, () => 
        Array.from({ length: 12 }, () => 
          Math.floor(Math.random() * 4)
        )
      )
    }
    setData(generateMockData())
    setIsMounted(true)
  }, [])

  const getColor = (level: number) => {
    const colors = [
      'bg-gray-800',
      'bg-purple-950',
      'bg-purple-700',
      'bg-purple-400',
    ]
    return colors[level] || colors[0]
  }

  if (!isMounted) {
    return (
      <div className="rounded-2xl bg-surface border border-border p-6">
        <h3 className="text-white font-semibold mb-4">Activity Overview</h3>
        <div className="grid grid-cols-12 gap-1 opacity-50">
          {Array.from({ length: 7 }, (_, i) => (
            <div key={i} className="flex flex-col gap-1">
              {Array.from({ length: 12 }, (_, j) => (
                <div key={j} className="w-3 h-3 rounded-sm bg-gray-800" />
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-2xl bg-surface border border-border p-6">
      <h3 className="text-white font-semibold mb-4">Activity Overview</h3>
      
      <div className="flex justify-between text-xs text-gray-500 mb-2">
        <span>Mon</span>
        <span>Wed</span>
        <span>Fri</span>
        <span>Sun</span>
      </div>
      
      <div className="grid grid-cols-12 gap-1">
        {data.map((week, i) => (
          <div key={i} className="flex flex-col gap-1">
            {week.map((level, j) => (
              <div
                key={`${i}-${j}`}
                className={`w-3 h-3 rounded-sm transition-colors ${getColor(level)}`}
                title={`${level || 0} contributions`}
              />
            ))}
          </div>
        ))}
      </div>
      
      <div className="flex justify-between text-xs text-gray-500 mt-3">
        <span>Less</span>
        <div className="flex gap-1 items-center">
          {[0, 1, 2, 3].map((level) => (
            <div
              key={level}
              className={`w-3 h-3 rounded-sm ${getColor(level)}`}
            />
          ))}
          <span className="ml-1">More</span>
        </div>
      </div>
    </div>
  )
}