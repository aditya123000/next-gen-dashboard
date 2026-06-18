export function BentoGridSkeleton() {
  return (
    <div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-min"
      aria-busy="true"
      aria-label="Loading dashboard content"
    >
      {/* Hero Tile Skeleton */}
      <div 
        className="lg:col-span-2 lg:row-span-2"
        aria-hidden="true"
      >
        <div className="h-full min-h-50 rounded-2xl bg-surface border border-border p-8 flex flex-col justify-between animate-pulse">
          <div className="space-y-3">
            <div className="h-8 bg-gray-800 rounded w-3/4" />
            <div className="h-4 bg-gray-800 rounded w-1/2" />
          </div>
          <div className="mt-4">
            <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gray-800 w-32 h-10" />
          </div>
        </div>
      </div>
      
      {/* Course Tile Skeletons */}
      {[1, 2, 3].map((i) => (
        <div key={i} className="lg:col-span-1" aria-hidden="true">
          <div className="h-full rounded-2xl bg-surface border border-border p-6 animate-pulse">
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
        </div>
      ))}
      
      {/* Activity Tile Skeleton */}
      <div className="lg:col-span-2" aria-hidden="true">
        <div className="rounded-2xl bg-surface border border-border p-6 h-48 animate-pulse">
          <div className="h-6 bg-gray-800 rounded w-40 mb-4" />
          <div className="grid grid-cols-12 gap-1 opacity-50">
            {Array.from({ length: 7 }, (_, i) => (
              <div key={i} className="flex flex-col gap-1">
                {Array.from({ length: 12 }, (_, j) => (
                  <div key={j} className="w-3 h-3 rounded-sm bg-gray-800" />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Additional Course Skeleton */}
      <div className="lg:col-span-1" aria-hidden="true">
        <div className="h-full rounded-2xl bg-surface border border-border p-6 animate-pulse">
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
      </div>
    </div>
  )
}