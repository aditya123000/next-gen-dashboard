import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { getCourses } from '@/lib/supabase/queries'
import { BentoGridSkeleton } from '@/components/bento/BentoGridSkeleton'
import BottomNav from './BottomNav'

// Dynamically import components
const Sidebar = dynamic(() => import('./Sidebar'), {
  loading: () => <aside className="w-20 lg:w-64" aria-label="Loading sidebar..." />,
})

const BentoGrid = dynamic(() => import('../bento/BentoGrid'), {
  loading: () => <BentoGridSkeleton />,
})

export async function DashboardShell() {
  const courses = await getCourses()
  
  // Calculate metrics from actual data
  
  const totalCourses = courses.length
  const completedCourses = courses.filter(c => c.progress === 100).length
  const inProgressCourses = courses.filter(c => (c.progress ?? 0) > 0 && (c.progress ?? 0) < 100).length
  const totalProgress = courses.reduce((acc, c) => acc + (c.progress ?? 0), 0)
  const averageProgress = totalCourses > 0 ? Math.round(totalProgress / totalCourses) : 0
  
  // Mock data for metrics not in DB (could come from another table)
  const weeklyHours = 12.5
  const completedLessons = completedCourses * 7 + Math.round(inProgressCourses * 3.5) // Rough estimate
  
  return (
    <div className="min-h-screen bg-background">
      {/* Skip link target */}
      <div id="main-content" />
      
      <Sidebar />
      
      {/* Main Content Area */}
      <main 
        className="lg:ml-64 pb-20 lg:pb-8 min-h-screen"
        id="main-content"
        role="main"
        aria-label="Dashboard content"
      >
        <div className="p-4 md:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 lg:mb-10 pb-5 border-b border-white/[0.08]">
              <div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1 select-none">Overview</div>
                <h1 className="text-2xl font-extrabold text-white tracking-tight">
                  Dashboard
                </h1>
              </div>
              <div className="flex items-center gap-4 text-sm" aria-live="polite">
                {courses && courses.length > 0 ? (
                  <div className="flex items-center gap-2 select-none">
                    {/* Courses Count Pill */}
                    <div className="px-3 py-1.5 bg-zinc-950/60 border border-white/[0.08] rounded-lg flex items-center gap-2 shadow-sm">
                      <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">Courses</span>
                      <span className="text-white font-bold text-xs">{courses.length}</span>
                    </div>
                    {/* Average Progress Pill */}
                    <div className="px-3 py-1.5 bg-zinc-950/60 border border-white/[0.08] rounded-lg flex items-center gap-2 shadow-sm">
                      <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">Avg Progress</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[#5B6CFF] font-extrabold text-xs">{averageProgress}%</span>
                        <div className="w-10 h-1 bg-zinc-800 rounded-full overflow-hidden">
                          <div className="h-full bg-[#5B6CFF] rounded-full" style={{ width: `${averageProgress}%` }} />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <span className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">No courses available</span>
                )}
              </div>
            </header>
            
            {/* Bento Grid with Suspense */}
            <section 
              aria-label="Learning dashboard grid"
              aria-busy="false"
            >
              <Suspense fallback={<BentoGridSkeleton />}>
                <BentoGrid 
                  courses={courses}
                  userName="Alex Chen"
                  streakDays={42}
                  weeklyHours={weeklyHours}
                  activeCourses={inProgressCourses || 4}
                  completedLessons={completedLessons}
                />
              </Suspense>
            </section>
          </div>
        </div>
      </main>
      
      <BottomNav />
    </div>
  )
}