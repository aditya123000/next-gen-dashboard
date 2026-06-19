import { GlowCard } from '@/components/ui/GlowCard'
import { Icon } from '@/components/ui/Icon'
import { ProgressBar } from '@/components/ui/ProgressBar'
import type { Course } from '@/types/course'

interface CourseTileProps {
  course: Course
  index?: number
}

export function CourseTile({ course }: CourseTileProps) {
  const progress = course.progress ?? 0

  // Deriving educational metadata based on course titles to enrich UI information density
  const getCourseMeta = (title: string) => {
    const t = title.toLowerCase()
    if (t.includes('database') || t.includes('sql') || t.includes('query')) {
      return { tag: 'Engineering', lessons: 14 }
    }
    if (t.includes('design') || t.includes('ui') || t.includes('ux') || t.includes('visual') || t.includes('figma')) {
      return { tag: 'Design', lessons: 8 }
    }
    if (t.includes('react') || t.includes('frontend') || t.includes('javascript') || t.includes('next.js') || t.includes('css')) {
      return { tag: 'Frontend', lessons: 12 }
    }
    if (t.includes('intelligence') || t.includes('ai') || t.includes('machine') || t.includes('brain')) {
      return { tag: 'AI & ML', lessons: 10 }
    }
    return { tag: 'Development', lessons: 10 }
  }

  const meta = getCourseMeta(course.title)
  const completedLessons = Math.round((progress / 100) * meta.lessons)
  const remainingLessons = meta.lessons - completedLessons

  const getMilestoneText = () => {
    if (progress === 100) return 'Completed'
    if (progress >= 80) return 'Near completion'
    return `${remainingLessons} ${remainingLessons === 1 ? 'lesson' : 'lessons'} left`
  }

  return (
    <GlowCard 
      variant="default"
      glowColor="none"
      className="h-full flex flex-col p-5 justify-between min-h-[190px]"
    >
      <div className="flex items-start justify-between gap-3">
        {/* Shrunken, subtle category icon */}
        <div className="w-8 h-8 rounded-md bg-white/[0.015] flex items-center justify-center border border-white/[0.08] shrink-0 select-none">
          <Icon 
            name={course.icon_name} 
            className="text-[#5B6CFF]" 
            size={16} 
            aria-label={`${course.icon_name} icon`}
          />
        </div>
        
        {/* Course category tag */}
        <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400 bg-white/[0.02] border border-white/[0.08] px-2 py-0.5 rounded select-none">
          {meta.tag}
        </span>
      </div>
      
      <div className="flex flex-col gap-2 mt-4 flex-1 justify-end">
        <h3 className="text-white font-bold text-sm leading-snug line-clamp-2 hover:text-[#7C8CFF] transition-colors duration-150">
          {course.title}
        </h3>

        {/* Progress context / milestone information */}
        <div className="flex items-center justify-between text-[10px] font-bold text-gray-500 select-none">
          <span>{getMilestoneText()}</span>
          <span className="text-white">{progress}%</span>
        </div>
        
        <div className="w-full pt-0.5">
          <ProgressBar value={progress} />
        </div>
      </div>
    </GlowCard>
  )
}