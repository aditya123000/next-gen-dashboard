'use client'

import { motion } from 'framer-motion'
import { HeroTile } from './HeroTile'
import { CourseTile } from './CourseTile'
import { ActivityTile } from './ActivityTile'
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
  const hasAdditionalCourses = courses.length > 4
  // Calculate active courses from actual data if not provided
  const activeCourses = propActiveCourses || courses.filter(c => (c.progress??0) < 100).length || 4

  return (
    <div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-min"
      role="grid"
    >
      {/* Hero Tile - spans 2 columns on desktop */}
      <article 
        className="lg:col-span-2 lg:row-span-2"
        role="gridcell"
        aria-label="Dashboard command center"
      >
        <motion.div
          variants={fadeUp}
          transition={{ delay: 0.05 }}
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
      {displayCourses.slice(0, 3).map((course, index) => (
        <article 
          key={course.id} 
          className="lg:col-span-1"
          role="gridcell"
          aria-label={`Course: ${course.title}`}
        >
          <motion.div
            variants={fadeUp}
            transition={{ delay: 0.05 + (index + 1) * 0.08 }}
          >
            <CourseTile course={course} />
          </motion.div>
        </article>
      ))}
      
      {/* Activity Tile - spans 2 columns */}
      <section 
        className="lg:col-span-2"
        role="gridcell"
        aria-label="Activity overview chart"
      >
        <motion.div
          variants={fadeUp}
          transition={{ delay: 0.05 + 4 * 0.08 }}
        >
          <ActivityTile />
        </motion.div>
      </section>
      
      {/* Additional course if available */}
      {displayCourses.length >= 4 && (
        <article 
          className="lg:col-span-1"
          role="gridcell"
          aria-label={`Course: ${displayCourses[3].title}`}
        >
          <motion.div
            variants={fadeUp}
            transition={{ delay: 0.05 + 5 * 0.08 }}
          >
            <CourseTile course={displayCourses[3]} />
          </motion.div>
        </article>
      )}
      
      {/* "More courses" indicator */}
      {hasAdditionalCourses && (
        <article 
          className="lg:col-span-1"
          role="gridcell"
          aria-label={`${courses.length - 4} more courses available`}
        >
          <motion.div
            variants={fadeUp}
            transition={{ delay: 0.05 + 6 * 0.08 }}
          >
            <div 
              className="rounded-2xl bg-surface border border-border p-6 h-full flex items-center justify-center hover:border-purple-500/30 transition-colors cursor-pointer shadow-card"
              role="button"
              tabIndex={0}
              aria-label="View all courses"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">+{courses.length - 4}</div>
                <div className="text-sm text-gray-400">More courses</div>
              </div>
            </div>
          </motion.div>
        </article>
      )}
    </div>
  )
}