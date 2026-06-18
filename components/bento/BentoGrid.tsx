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
}

export default function BentoGrid({ 
  courses, 
  userName = 'Student', 
  streakDays = 0 
}: BentoGridProps) {
  const displayCourses = courses.slice(0, 4)
  const hasAdditionalCourses = courses.length > 4

  return (
    <div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-min"
      role="grid"
    >
      {/* Hero Tile */}
      <article 
        className="lg:col-span-2 lg:row-span-2"
        role="gridcell"
        aria-label="Welcome and streak information"
      >
        <motion.div
          variants={fadeUp}
          transition={{ delay: 0.05 }}
        >
          <HeroTile userName={userName} streakDays={streakDays} />
        </motion.div>
      </article>
      
      {/* Course Tiles */}
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
      
      {/* Activity Tile */}
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
      
      {/* Additional course */}
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