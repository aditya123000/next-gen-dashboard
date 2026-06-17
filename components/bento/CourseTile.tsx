import { GlowCard } from '@/components/ui/GlowCard'
import { Icon } from '@/components/ui/Icon'
import { ProgressBar } from '@/components/ui/ProgressBar'
import type { Course } from '@/types/course'

interface CourseTileProps {
  course: Course
}

export function CourseTile({ course }: CourseTileProps) {
  return (
    <GlowCard className="h-full flex flex-col">
      <div className="flex items-start justify-between">
        <Icon 
          name={course.icon_name} 
          className="text-purple-400" 
          size={32} 
        />
        <span className="text-sm font-semibold text-gray-300">
          {course.progress}%
        </span>
      </div>
      
      <h3 className="text-white font-semibold text-lg mt-3 mb-2 line-clamp-2">
        {course.title}
      </h3>
      
      <div className="mt-auto pt-4">
        <ProgressBar value={course.progress||0} />
      </div>
    </GlowCard>
  )
}