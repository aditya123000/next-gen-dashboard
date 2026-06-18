export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-purple-500/20 border-t-purple-500 animate-spin animate-pulse" />
        
        <p className="text-gray-400 text-sm animate-pulse">
          Loading your dashboard...
        </p>
      </div>
    </div>
  )
}