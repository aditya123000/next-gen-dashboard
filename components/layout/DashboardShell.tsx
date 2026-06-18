import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { getCourses } from '@/lib/supabase/queries'
import { BentoGridSkeleton } from '@/components/bento/BentoGridSkeleton'
import BottomNav from './BottomNav'

// Dynamically import components
const Sidebar = dynamic(() => import('./Sidebar'), {
  loading: () => <aside className="w-20 lg:w-64" aria-label="Loading sidebar..." />,
})

const BentoGrid = dynamic(() => import('@/components/bento/BentoGrid'), {
  loading: () => <BentoGridSkeleton />,
})

export async function DashboardShell() {
  const courses = await getCourses()
  
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
                  `Showing ${courses.length} courses`
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