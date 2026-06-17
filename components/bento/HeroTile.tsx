interface HeroTileProps {
  userName: string
  streakDays: number
}

export function HeroTile({ userName, streakDays }: HeroTileProps) {
  return (
    <div className="h-full min-h-50 rounded-2xl bg-linear-to-br from-surface to-surface-hover border border-border p-8 flex flex-col justify-between shadow-card">
      <div>
        <h2 className="text-3xl font-bold text-white">
          Welcome back, {userName}! 👋
        </h2>
        <p className="text-gray-300 mt-2">
          Continue your learning journey
        </p>
      </div>
      
      <div className="flex items-center gap-2 mt-4">
        <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/15 rounded-full border border-purple-500/30">
          <span className="text-2xl">🔥</span>
          <span className="text-white font-bold text-lg">{streakDays}</span>
          <span className="text-gray-300 text-sm font-medium">day streak</span>
        </div>
      </div>
    </div>
  )
}