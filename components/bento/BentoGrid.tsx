'use client'

import { motion } from 'framer-motion'
import { HeroTile } from './HeroTile'
import { CourseTile } from './CourseTile'
import { ActivityTile } from './ActivityTile'
import { AnalyticsTile } from './AnalyticsTile'
import { StaggerWrapper } from './StaggerWrapper'
import { fadeUp } from '@/lib/animations/variants'
import type { Course } from '@/types/course'

interface BentoGridProps {
  courses: Course[]
  userName?: string
  streakDays?: number
  weeklyHours?: number
  activeCourses?: number
  completedLessons?: number
}

export default function BentoGrid({ 
  courses, 
  userName = 'Student', 
  streakDays = 0,
  weeklyHours = 12.5,
  activeCourses: propActiveCourses,
  completedLessons = 28
}: BentoGridProps) {
  const displayCourses = courses.slice(0, 4)
  // Calculate active courses from actual data if not provided
  const activeCourses = propActiveCourses || courses.filter(c => (c.progress??0) < 100).length || 4

  // Calculate live stats for the learning analytics tile
  const totalCourses = courses.length
  const totalProgress = courses.reduce((acc, c) => acc + (c.progress ?? 0), 0)
  const averageProgress = totalCourses > 0 ? Math.round(totalProgress / totalCourses) : 0
  const nearCompletionCount = courses.filter(c => (c.progress ?? 0) >= 80 && (c.progress ?? 0) < 100).length
  const inProgressCourses = courses.filter(c => (c.progress ?? 0) > 0 && (c.progress ?? 0) < 100).length
  const weeklyGrowth = inProgressCourses > 0 ? `+${Math.min(100, Math.round(inProgressCourses * 3.5 + 4))}%` : '+5%'

  return (
    <StaggerWrapper
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-min">
        
      {/* Hero Tile - spans 2 columns on desktop */}
      <article 
        className="lg:col-span-2 lg:row-span-2"
        role="gridcell"
        aria-label="Dashboard command center"
      >
        <motion.div
          variants={fadeUp}
        >
          <HeroTile 
            userName={userName} 
            streakDays={streakDays}
            weeklyHours={weeklyHours}
            activeCourses={activeCourses}
            completedLessons={completedLessons}
          />
        </motion.div>
      </article>
      
      {/* Course Tiles - first 3 courses */}
      {displayCourses.slice(0, 3).map((course) => (
        <article 
          key={course.id} 
          className="lg:col-span-1"
          role="gridcell"
          aria-label={`Course: ${course.title}`}
        >
          <motion.div
            variants={fadeUp}
          >
            <CourseTile course={course} />
          </motion.div>
        </article>
      ))}
      
      {/* Additional course if available */}
      {displayCourses.length >= 4 && (
        <article 
          className="lg:col-span-1"
          role="gridcell"
          aria-label={`Course: ${displayCourses[3].title}`}
        >
          <motion.div
            variants={fadeUp}
          >
            <CourseTile course={displayCourses[3]} />
          </motion.div>
        </article>
      )}
      
      {/* Activity Tile - spans 3 columns permanently */}
      <section 
        className="lg:col-span-3"
        role="gridcell"
        aria-label="Activity overview chart"
      >
        <motion.div
          variants={fadeUp}
        >
          <ActivityTile />
        </motion.div>
      </section>
      
      {/* Permanent Analytics Tile - spans 1 column */}
      <article 
        className="lg:col-span-1"
        role="gridcell"
        aria-label="Learning Analytics Card"
      >
        <motion.div
          variants={fadeUp}
        >
          <AnalyticsTile
            averageProgress={averageProgress}
            streakDays={streakDays}
            nearCompletionCount={nearCompletionCount}
            weeklyGrowth={weeklyGrowth}
          />
        </motion.div>
      </article>
    </StaggerWrapper>
  )
}