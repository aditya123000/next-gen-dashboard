export function CourseListSkeleton() {
  return (
    <div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      aria-busy="true"
      aria-label="Loading courses"
    >
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div 
          key={i} 
          className="rounded-2xl bg-surface border border-border p-6 h-48 animate-pulse"
          aria-hidden="true"
        >
          <div className="flex items-start justify-between">
            <div className="w-8 h-8 rounded-lg bg-gray-800" />
            <div className="w-8 h-4 rounded bg-gray-800" />
          </div>
          <div className="mt-3 space-y-2">
            <div className="h-4 bg-gray-800 rounded w-3/4" />
            <div className="h-4 bg-gray-800 rounded w-1/2" />
          </div>
          <div className="mt-4 pt-4">
            <div className="h-2 bg-gray-800 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  )
}