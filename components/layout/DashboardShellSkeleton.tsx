import { Skeleton } from "@/components/ui/Skeleton"

export function SidebarSkeleton() {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-background-secondary border-r border-border z-50 hidden lg:flex flex-col">
      <div className="h-16 flex items-center px-4 border-b border-border">
        <Skeleton className="w-8 h-8 rounded-lg" />
        <Skeleton className="ml-2 w-24 h-5" />
      </div>
      <div className="flex-1 px-3 py-4 space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="w-full h-10 rounded-lg" />
        ))}
      </div>
      <div className="border-t border-border p-4">
        <div className="flex items-center gap-3">
          <Skeleton className="w-8 h-8 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="w-20 h-4" />
            <Skeleton className="w-12 h-3" />
          </div>
        </div>
      </div>
    </aside>
  )
}

export function BottomNavSkeleton() {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-surface border-t border-border z-50">
      <div className="flex items-center justify-around h-full px-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex flex-col items-center gap-1 px-3">
            <Skeleton className="w-5 h-5 rounded-md" />
            <Skeleton className="w-8 h-2" />
          </div>
        ))}
      </div>
    </nav>
  )
}

export function DashboardShellSkeleton() {
  return (
    <div className="min-h-screen">
      <SidebarSkeleton />
      <main className="lg:ml-64 pb-20 lg:pb-8 min-h-screen">
        <div className="p-4 md:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6 lg:mb-8">
              <Skeleton className="w-32 h-8 lg:hidden" />
              <Skeleton className="w-48 h-5 hidden lg:block" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Skeleton key={i} className="h-48 rounded-xl" />
              ))}
            </div>
          </div>
        </div>
      </main>
      <BottomNavSkeleton />
    </div>
  )
}
