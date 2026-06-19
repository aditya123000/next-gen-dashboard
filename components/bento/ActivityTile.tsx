'use client'

import { motion } from 'framer-motion'
import { cellAppear } from '@/lib/animations/variants'
import { cn } from '@/lib/utils'

const generateMockData = () => {
  // 24 columns (weeks) representing 6 months, each with 7 items (days of the week)
  const patterns = [
    [0, 1, 2, 1, 0, 1, 2],
    [1, 2, 1, 0, 1, 2, 3],
    [2, 1, 0, 1, 2, 3, 2],
    [1, 0, 1, 2, 3, 2, 1],
    [0, 1, 2, 3, 2, 1, 0],
    [3, 2, 1, 0, 1, 2, 3],
    [2, 3, 2, 1, 0, 1, 2],
    [1, 2, 3, 2, 1, 0, 1],
    [0, 1, 2, 1, 0, 1, 2],
    [1, 2, 1, 0, 1, 2, 3],
    [2, 1, 0, 1, 2, 3, 2],
    [1, 0, 1, 2, 3, 2, 1],
    [0, 1, 2, 3, 2, 1, 0],
    [3, 2, 1, 0, 1, 2, 3],
    [2, 3, 2, 1, 0, 1, 2],
    [1, 2, 3, 2, 1, 0, 1],
    [0, 1, 2, 1, 0, 1, 2],
    [1, 2, 1, 0, 1, 2, 3],
    [2, 1, 0, 1, 2, 3, 2],
    [1, 0, 1, 2, 3, 2, 1],
    [0, 1, 2, 3, 2, 1, 0],
    [3, 2, 1, 0, 1, 2, 3],
    [2, 3, 2, 1, 0, 1, 2],
    [1, 2, 3, 2, 1, 0, 1],
  ]
  return patterns
}

export function ActivityTile() {
  const data = generateMockData()

  const getColor = (level: number) => {
    const colors = [
      'bg-white/[0.02] border border-white/[0.01]',
      'bg-[#5B6CFF]/10 hover:bg-[#5B6CFF]/20 border border-[#5B6CFF]/5',
      'bg-[#5B6CFF]/25 hover:bg-[#5B6CFF]/35 border border-[#5B6CFF]/10',
      'bg-[#5B6CFF]/50 hover:bg-[#5B6CFF]/60 border border-[#5B6CFF]/20',
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
      className="rounded-2xl bg-zinc-950/40 backdrop-blur-md border border-white/[0.08] p-5 shadow-card flex flex-col justify-between h-full"
      aria-label="Activity overview chart"
    >
      {/* Header with enriched learning context */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-white font-bold text-sm mb-0.5">Learning Activity</h3>
          <p className="text-gray-400 text-xs select-none">
            <span className="text-white font-semibold">142.5 hrs</span> study time • <span className="text-white font-semibold">88%</span> avg progress accuracy
          </p>
        </div>
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#5B6CFF] bg-[#5B6CFF]/5 border border-[#5B6CFF]/10 px-2 py-0.5 rounded select-none shrink-0">
          Last 6 Months
        </span>
      </div>

      {/* Chart Layout */}
      <div className="flex gap-3 items-end justify-start overflow-x-auto py-1 scrollbar-none">
        {/* Weekday labels - aligned precisely with the 7 rows of cells */}
        <div className="flex flex-col gap-[3px] text-[9px] font-bold text-gray-500 select-none shrink-0" aria-hidden="true">
          <span className="h-[11px] flex items-center">Mon</span>
          <span className="h-[11px] flex items-center">Tue</span>
          <span className="h-[11px] flex items-center">Wed</span>
          <span className="h-[11px] flex items-center">Thu</span>
          <span className="h-[11px] flex items-center">Fri</span>
          <span className="h-[11px] flex items-center">Sat</span>
          <span className="h-[11px] flex items-center">Sun</span>
        </div>

        {/* Heatmap Grid Container */}
        <div className="flex-1 flex flex-col min-w-[300px] max-w-[400px]">
          {/* Month labels - aligned precisely above the 24 columns */}
          <div className="grid grid-cols-24 gap-[3px] text-[9px] font-bold text-gray-500 mb-1.5 select-none" aria-hidden="true">
            <span className="col-span-4 text-left">Jan</span>
            <span className="col-span-4 text-left">Feb</span>
            <span className="col-span-5 text-left">Mar</span>
            <span className="col-span-4 text-left">Apr</span>
            <span className="col-span-4 text-left">May</span>
            <span className="col-span-3 text-left">Jun</span>
          </div>

          {/* Grid columns */}
          <div
            className="grid grid-cols-24 gap-[3px] select-none"
            role="img"
            aria-label="Activity heatmap showing contributions over time"
          >
            {data.map((week, i) => (
              <div key={i} className="flex flex-col gap-[3px]">
                {week.map((level, j) => {
                  const delay = (i * week.length + j) * 0.001
                  return (
                    <motion.div
                      key={`${i}-${j}`}
                      custom={delay}
                      variants={cellAppear}
                      initial="hidden"
                      animate="visible"
                      className={cn(
                        "w-[11px] h-[11px] rounded-[1px] transition-all duration-200 cursor-pointer",
                        getColor(level)
                      )}
                      role="img"
                      aria-label={getAccessibilityLabel(level)}
                      title={`${level} contribution${level !== 1 ? 's' : ''}`}
                    />
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend footer */}
      <div
        className="flex justify-between items-center text-[9px] font-bold text-gray-500 mt-4 pt-3 border-t border-white/[0.06]"
        aria-hidden="true"
      >
        <span className="text-gray-400 font-medium">Daily average: 48 mins</span>
        <div className="flex items-center gap-1.5 text-gray-500">
          <span>Less</span>
          <div className="flex gap-[3px] items-center">
            {[0, 1, 2, 3].map((level) => (
              <div
                key={level}
                className={cn("w-[11px] h-[11px] rounded-[1px]", getColor(level).split(' hover:')[0])}
                aria-label={getAccessibilityLabel(level)}
              />
            ))}
          </div>
          <span>More</span>
        </div>
      </div>
    </section>
  )
}
