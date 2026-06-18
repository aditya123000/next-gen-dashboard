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
            <header className="flex items-center justify-between mb-6 lg:mb-8">
              <div>
                <h1 className="text-xl font-bold text-white lg:hidden">
                  Dashboard
                </h1>
              </div>
              <div className="text-sm text-gray-400 hidden lg:block" aria-live="polite">
                {courses && courses.length > 0 ? (
                  `${courses.length} courses · ${averageProgress}% average progress`
                ) : (
                  'No courses available'
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