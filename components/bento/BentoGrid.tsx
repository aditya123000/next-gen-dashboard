import { HeroTile } from './HeroTile'
import { CourseTile } from './CourseTile'
import { ActivityTile } from './ActivityTile'
import type { Course } from '@/types/course'

interface BentoGridProps {
  courses: Course[]
  userName?: string
  streakDays?: number
}

export function BentoGrid({ 
  courses, 
  userName = 'Student', 
  streakDays = 0 
}: BentoGridProps) {
  const displayCourses = courses.slice(0, 4)
  const hasAdditionalCourses = courses.length > 4

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-min">
      <div className="lg:col-span-2 lg:row-span-2">
        <HeroTile userName={userName} streakDays={streakDays} />
      </div>
      
      {displayCourses.slice(0, 3).map((course) => (
        <div key={course.id} className="lg:col-span-1">
          <CourseTile course={course} />
        </div>
      ))}
      
      <div className="lg:col-span-2">
        <ActivityTile />
      </div>
      
      {displayCourses.length >= 4 && (
        <div className="lg:col-span-1">
          <CourseTile course={displayCourses[3]} />
        </div>
      )}
      
      {hasAdditionalCourses && (
        <div className="lg:col-span-1">
          <div className="rounded-2xl bg-surface border border-border p-6 h-full flex items-center justify-center hover:border-purple-500/30 transition-colors cursor-pointer">
            <div className="text-center">
              <div className="text-2xl mb-1">+{courses.length - 4}</div>
              <div className="text-sm text-gray-400">More courses</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}