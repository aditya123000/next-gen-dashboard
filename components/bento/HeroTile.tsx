'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Clock, BookOpen, CheckCircle, Flame } from 'lucide-react'
import { cn } from '@/lib/utils'

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
      className="relative h-full min-h-55 rounded-2xl overflow-hidden shadow-card"
      aria-label="Dashboard command center"
    >
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-900/30 via-indigo-900/20 to-pink-900/30" />
      
      {/* Animated gradient orbs */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 h-full p-6 md:p-8 flex flex-col">
        {/* Header Section */}
        <header className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                Welcome back, {userName}! 👋
              </h2>
            </div>
            <p className="text-gray-300 text-sm md:text-base">
              Here's your learning progress
            </p>
          </div>
          
          {/* Streak Badge - Prominent */}
          <motion.div 
            className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-orange-500/20 to-amber-500/20 rounded-full border border-orange-500/30 shadow-glow"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <Flame className="w-5 h-5 text-orange-400" aria-hidden="true" />
            <span className="text-white font-bold text-lg">{streakDays}</span>
            <span className="text-gray-300 text-sm font-medium">day streak</span>
          </motion.div>
        </header>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mt-4 md:mt-6">
          {/* Weekly Hours */}
          <motion.div 
            className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-purple-400" aria-hidden="true" />
            </div>
            <div>
              <p className="text-white font-semibold text-lg">{weeklyHours}h</p>
              <p className="text-gray-400 text-xs">This week</p>
            </div>
          </motion.div>

          {/* Active Courses */}
          <motion.div 
            className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
              <BookOpen className="w-5 h-5 text-blue-400" aria-hidden="true" />
            </div>
            <div>
              <p className="text-white font-semibold text-lg">{activeCourses}</p>
              <p className="text-gray-400 text-xs">Active courses</p>
            </div>
          </motion.div>

          {/* Completed Lessons */}
          <motion.div 
            className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
              <CheckCircle className="w-5 h-5 text-green-400" aria-hidden="true" />
            </div>
            <div>
              <p className="text-white font-semibold text-lg">{completedLessons}</p>
              <p className="text-gray-400 text-xs">Lessons done</p>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <div className="mt-4 md:mt-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {['/api/placeholder/32/32', '/api/placeholder/32/32', '/api/placeholder/32/32'].map((src, i) => (
                <div 
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-surface bg-linear-to-br from-purple-400 to-pink-400 flex items-center justify-center text-xs font-bold text-white"
                  aria-hidden="true"
                >
                  {['A', 'B', 'C'][i]}
                </div>
              ))}
            </div>
            <span className="text-gray-400 text-sm">
              <span className="text-white font-medium">+{activeCourses * 3}</span> classmates learning
            </span>
          </div>

          <motion.button
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-medium transition-all duration-300 shadow-glow"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            aria-label="Continue learning where you left off"
          >
            <span>Continue Learning</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </motion.button>
        </div>
      </div>
    </article>
  )
}