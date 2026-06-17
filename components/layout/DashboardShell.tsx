import { Suspense } from 'react'
import { Sidebar } from './Sidebar'
import { BottomNav } from './BottomNav'
import { BentoGrid } from '@/components/bento/BentoGrid'
import { BentoGridSkeleton } from '@/components/bento/BentoGridSkeleton'
import { getCourses } from '@/lib/supabase/queries'

const USER_NAME = 'Alex Chen'
const STREAK_DAYS = 42

export async function DashboardShell() {
  const courses = await getCourses()
  
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="lg:ml-64 pb-20 lg:pb-8 min-h-screen">
        <div className="p-4 md:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6 lg:mb-8">
              <div>
                <h1 className="text-xl font-bold text-white lg:hidden">
                  Dashboard
                </h1>
              </div>
              <div className="text-sm text-gray-400 hidden lg:block">
                {courses && courses.length > 0 ? (
                  `Showing ${courses.length} courses`
                ) : (
                  'No courses available'
                )}
              </div>
            </div>
            
            <Suspense fallback={<BentoGridSkeleton />}>
              <BentoGrid 
                courses={courses}
                userName={USER_NAME}
                streakDays={STREAK_DAYS}
              />
            </Suspense>
          </div>
        </div>
      </main>
      
      <BottomNav />
    </div>
  )
}