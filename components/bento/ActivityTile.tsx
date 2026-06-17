'use client'

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
      'bg-gray-800',      // 0 - none
      'bg-purple-900',    // 1 - low (darker)
      'bg-purple-700',    // 2 - medium
      'bg-purple-500',    // 3 - high (brighter)
    ]
    return colors[level] || colors[0]
  }

  return (
    <div className="rounded-2xl bg-surface border border-border p-6 shadow-card">
      <h3 className="text-white font-semibold text-lg mb-4">Activity Overview</h3>
      
      <div className="flex justify-between text-xs text-gray-400 mb-2">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thur</span>
        <span>Fri</span>
        <span>Sat</span>
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
      
      <div className="flex justify-between text-xs text-gray-400 mt-3">
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