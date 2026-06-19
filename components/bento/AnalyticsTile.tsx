'use client'

import { GlowCard } from '@/components/ui/GlowCard'
import { Flame, Target, TrendingUp, CheckCircle2 } from 'lucide-react'

interface AnalyticsTileProps {
  averageProgress: number
  streakDays: number
  nearCompletionCount: number
  weeklyGrowth: string
}

export function AnalyticsTile({
  averageProgress,
  streakDays,
  nearCompletionCount,
  weeklyGrowth = '+12%',
}: AnalyticsTileProps) {
  return (
    <GlowCard
      variant="default"
      glowColor="none"
      className="p-5 flex flex-col justify-between h-full min-h-[220px]"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-bold text-sm">Learning Analytics</h3>
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#5B6CFF] bg-[#5B6CFF]/5 border border-[#5B6CFF]/10 px-2 py-0.5 rounded">
          Live Stats
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 flex-1">
        {/* Average Progress */}
        <div className="flex flex-col justify-between p-3 rounded-xl bg-white/[0.01] border border-white/[0.03] select-none hover:border-[#5B6CFF]/20 transition-all duration-150">
          <div className="flex items-center gap-2 mb-1">
            <Target className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Avg Progress</span>
          </div>
          <div className="flex items-baseline gap-1.5 mt-2">
            <span className="text-white text-lg font-extrabold">{averageProgress}%</span>
          </div>
        </div>

        {/* Learning Streak */}
        <div className="flex flex-col justify-between p-3 rounded-xl bg-white/[0.01] border border-white/[0.03] select-none hover:border-[#5B6CFF]/20 transition-all duration-150">
          <div className="flex items-center gap-2 mb-1">
            <Flame className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Streak</span>
          </div>
          <div className="flex items-baseline gap-1.5 mt-2">
            <span className="text-white text-lg font-extrabold">{streakDays}</span>
            <span className="text-gray-500 text-[10px] font-bold">days</span>
          </div>
        </div>

        {/* Near Completion */}
        <div className="flex flex-col justify-between p-3 rounded-xl bg-white/[0.01] border border-white/[0.03] select-none hover:border-[#5B6CFF]/20 transition-all duration-150">
          <div className="flex items-center gap-2 mb-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Near Finish</span>
          </div>
          <div className="flex items-baseline gap-1.5 mt-2">
            <span className="text-white text-lg font-extrabold">{nearCompletionCount}</span>
            <span className="text-gray-500 text-[10px] font-bold">{nearCompletionCount === 1 ? 'course' : 'courses'}</span>
          </div>
        </div>

        {/* Weekly Growth */}
        <div className="flex flex-col justify-between p-3 rounded-xl bg-white/[0.01] border border-white/[0.03] select-none hover:border-[#5B6CFF]/20 transition-all duration-150">
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Weekly Growth</span>
          </div>
          <div className="flex items-baseline gap-1.5 mt-2">
            <span className="text-[#5B6CFF] text-lg font-extrabold">{weeklyGrowth}</span>
          </div>
        </div>
      </div>
    </GlowCard>
  )
}
