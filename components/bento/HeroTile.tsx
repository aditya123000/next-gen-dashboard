interface HeroTileProps {
  userName: string
  streakDays: number
}

export function HeroTile({ userName, streakDays }: HeroTileProps) {
  return (
    <div className="h-full min-h-[200px] rounded-2xl bg-gradient-to-br from-surface to-surface-hover border border-border p-8 flex flex-col justify-between">
      <div>
        <h2 className="text-3xl font-bold text-white">
          Welcome back, {userName}! 👋
        </h2>
        <p className="text-gray-400 mt-2">
          Continue your learning journey
        </p>
      </div>
      
      <div className="flex items-center gap-2 mt-4">
        <div className="flex items-center gap-1 px-3 py-1.5 bg-purple-500/10 rounded-full border border-purple-500/20">
          <span className="text-2xl">🔥</span>
          <span className="text-white font-semibold">{streakDays}</span>
          <span className="text-gray-400 text-sm">day streak</span>
        </div>
      </div>
    </div>
  )
}