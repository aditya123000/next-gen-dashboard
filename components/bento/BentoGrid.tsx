import type { Course } from '@/types/course'
import { HeroTile } from './HeroTile'
import { CourseTile } from './CourseTile'
import { ActivityTile } from './ActivityTile'

interface BentoGridProps {
  courses: Course[]
  userName: string
  streakDays: number
}

export function BentoGrid({ courses, userName, streakDays }: BentoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-min">
      <div className="lg:col-span-2 lg:row-span-2">
        <HeroTile userName={userName} streakDays={streakDays} />
      </div>
      
      {courses.slice(0, 3).map((course) => (
        <div key={course.id} className="lg:col-span-1">
          <CourseTile course={course} />
        </div>
      ))}
      
      <div className="lg:col-span-2">
        <ActivityTile />
      </div>
      
      {courses.slice(3).map((course) => (
        <div key={course.id} className="lg:col-span-1">
          <CourseTile course={course} />
        </div>
      ))}
    </div>
  )
}