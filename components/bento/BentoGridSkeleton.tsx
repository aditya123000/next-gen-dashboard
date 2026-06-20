export function BentoGridSkeleton() {
  return (
    <div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-min"
      aria-busy="true"
      aria-label="Loading dashboard content"
    >
      <div className="lg:col-span-2 lg:row-span-2" aria-hidden="true">
        <div className="h-full min-h-50 rounded-2xl bg-surface border border-[#5B6CFF]/20 p-8 flex flex-col justify-between shadow-glow-purple animate-pulse">
          <div className="space-y-3">
            <div className="h-8 bg-gray-800 rounded w-3/4" />
            <div className="h-4 bg-gray-800 rounded w-1/2" />
          </div>
          <div className="grid grid-cols-3 gap-3 mt-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-16 bg-gray-800/50 rounded-xl" />
            ))}
          </div>
        </div>
      </div>
      
      {[1, 2, 3].map((i) => (
        <div key={i} className="lg:col-span-1" aria-hidden="true">
          <div className="h-full rounded-2xl bg-surface border border-border/60 p-6 shadow-card animate-pulse">
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
      
      <div className="lg:col-span-1" aria-hidden="true">
        <div className="h-full rounded-2xl bg-surface border border-border/60 p-6 shadow-card animate-pulse">
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

      <div className="lg:col-span-3" aria-hidden="true">
        <div className="rounded-2xl bg-zinc-950/40 border border-white/8 p-5 h-full min-h-55 shadow-card animate-pulse flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div className="space-y-1">
              <div className="h-4 bg-gray-800 rounded w-28" />
              <div className="h-3 bg-gray-800/40 rounded w-36" />
            </div>
            <div className="h-4 bg-gray-850 rounded w-16" />
          </div>
          <div className="flex gap-3 items-end justify-start py-1">
            <div className="flex flex-col gap-0.75 shrink-0 w-6">
              <div className="h-2.75 flex items-center"><div className="h-2 bg-gray-800 rounded w-full" /></div>
              <div className="h-2.75" />
              <div className="h-2.75 flex items-center"><div className="h-2 bg-gray-800 rounded w-full" /></div>
              <div className="h-2.75" />
              <div className="h-2.75 flex items-center"><div className="h-2 bg-gray-800 rounded w-full" /></div>
              <div className="h-2.75" />
              <div className="h-2.75 flex items-center"><div className="h-2 bg-gray-800 rounded w-full" /></div>
            </div>
            <div className="flex-1 flex flex-col min-w-75 max-w-100">
              <div className="grid grid-cols-24 gap-0.75 mb-1.5">
                <div className="col-span-4 h-2 bg-gray-800/40 rounded w-4" />
                <div className="col-span-4 h-2 bg-gray-800/40 rounded w-4" />
                <div className="col-span-5 h-2 bg-gray-800/40 rounded w-4" />
                <div className="col-span-4 h-2 bg-gray-800/40 rounded w-4" />
                <div className="col-span-4 h-2 bg-gray-800/40 rounded w-4" />
                <div className="col-span-3 h-2 bg-gray-800/40 rounded w-4" />
              </div>
              <div className="grid grid-cols-24 gap-0.75 opacity-40">
                {Array.from({ length: 24 }, (_, i) => (
                  <div key={i} className="flex flex-col gap-0.75">
                    {Array.from({ length: 7 }, (_, j) => (
                      <div key={j} className="w-2.75 h-2.75 rounded-[1px] bg-gray-800" />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4 pt-3 border-t border-white/6">
            <div className="h-3 bg-gray-800 rounded w-20" />
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 bg-gray-800 rounded w-6" />
              <div className="flex gap-0.75">
                {[1, 2, 3, 4].map((i) => <div key={i} className="w-2.75 h-2.75 rounded-[1px] bg-gray-800" />)}
              </div>
              <div className="h-2.5 bg-gray-800 rounded w-6" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="lg:col-span-1" aria-hidden="true">
        <div className="h-full rounded-2xl bg-surface border border-border/60 p-5 shadow-card animate-pulse flex flex-col justify-between min-h-55">
          <div className="flex items-center justify-between mb-4">
            <div className="h-4 bg-gray-800 rounded w-28" />
            <div className="h-3 bg-gray-800 rounded w-12" />
          </div>
          <div className="grid grid-cols-2 gap-4 flex-1">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="p-3 rounded-xl bg-gray-850/10 border border-white/2 flex flex-col justify-between">
                <div className="h-2.5 bg-gray-850 rounded w-12 mb-1" />
                <div className="h-4 bg-gray-850 rounded w-16 mt-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}