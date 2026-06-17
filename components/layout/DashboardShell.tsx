import { Sidebar } from './Sidebar'
import { BottomNav } from './BottomNav'
import { BentoGrid } from '@/components/bento/BentoGrid'
import { MOCK_COURSES, MOCK_USER } from '@/lib/mock-data'

export function DashboardShell() {
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
                Last updated: Today at 2:30 PM
              </div>
            </div>
            
            <BentoGrid 
              courses={MOCK_COURSES}
              userName={MOCK_USER.name}
              streakDays={MOCK_USER.streakDays}
            />
          </div>
        </div>
      </main>
      
      <BottomNav />
    </div>
  )
}