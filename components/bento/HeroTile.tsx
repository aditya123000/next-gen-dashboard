'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Clock, BookOpen, CheckCircle, Flame } from 'lucide-react'

interface HeroTileProps {
  userName: string
  streakDays: number
  weeklyHours?: number
  activeCourses?: number
  completedLessons?: number
}

export function HeroTile({ 
  userName, 
  streakDays, 
  weeklyHours = 12.5, 
  activeCourses = 4,
  completedLessons = 28
}: HeroTileProps) {
  return (
    <article 
      className="relative h-full min-h-[290px] rounded-2xl border border-white/[0.08] bg-zinc-950/40 backdrop-blur-md flex flex-col justify-between"
      aria-label="Dashboard command center"
    >
      {/* Content wrapper */}
      <div className="relative z-10 p-6 md:p-8 flex flex-col justify-between gap-6 flex-1">
        {/* Header Section */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-1">
              Welcome back, {userName}
            </h2>
            <p className="text-gray-400 text-xs md:text-sm font-medium">
              Here&apos;s your learning progress for today
            </p>
          </div>
          
          {/* Streak Badge - quiet monochrome capsule design */}
          <div className="flex items-center gap-1.5 px-3 py-1 bg-white/[0.015] border border-white/[0.08] rounded-full shadow-sm text-xs font-semibold text-gray-300 cursor-default select-none shrink-0 self-start sm:self-auto">
            <Flame className="w-3.5 h-3.5 text-[#5B6CFF]" aria-hidden="true" />
            <span>{streakDays} day streak</span>
          </div>
        </header>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 my-1">
          {/* Weekly Hours */}
          <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.01] border border-white/[0.04] backdrop-blur-xs select-none">
            <div className="w-9 h-9 rounded-lg bg-white/[0.015] flex items-center justify-center shrink-0 border border-white/[0.08]">
              <Clock className="w-4 h-4 text-[#5B6CFF]" aria-hidden="true" />
            </div>
            <div>
              <p className="text-white font-bold text-base leading-none mb-1">{weeklyHours}h</p>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">This week</p>
            </div>
          </div>
 
          {/* Active Courses */}
          <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.01] border border-white/[0.04] backdrop-blur-xs select-none">
            <div className="w-9 h-9 rounded-lg bg-white/[0.015] flex items-center justify-center shrink-0 border border-white/[0.08]">
              <BookOpen className="w-4 h-4 text-[#5B6CFF]" aria-hidden="true" />
            </div>
            <div>
              <p className="text-white font-bold text-base leading-none mb-1">{activeCourses}</p>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">Active courses</p>
            </div>
          </div>

          {/* Completed Lessons */}
          <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.01] border border-white/[0.04] backdrop-blur-xs select-none">
            <div className="w-9 h-9 rounded-lg bg-white/[0.015] flex items-center justify-center shrink-0 border border-white/[0.08]">
              <CheckCircle className="w-4 h-4 text-[#5B6CFF]" aria-hidden="true" />
            </div>
            <div>
              <p className="text-white font-bold text-base leading-none mb-1">{completedLessons}</p>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">Lessons done</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/[0.06] mt-auto">
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-xs font-semibold select-none">
              Daily status: <span className="text-[#5B6CFF]">On track</span>
            </span>
          </div>

          <motion.button
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#5B6CFF] hover:bg-[#7C8CFF] text-white rounded-lg text-xs font-bold transition-all duration-150 border border-[#5B6CFF]/10 group/btn"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Continue learning where you left off"
          >
            <span>Continue Learning</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" aria-hidden="true" />
          </motion.button>
        </div>
      </div>
    </article>
  )
}