'use client'

import { CourseTile } from '@/components/bento/CourseTile'
import { HeroTile } from '@/components/bento/HeroTile'
import { ActivityTile } from '@/components/bento/ActivityTile'
import { GlowCard } from '@/components/ui/GlowCard'
import { MOCK_COURSES } from '@/lib/mock-data'

export default function AuditPage() {
  const course = MOCK_COURSES[0]

  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="text-white text-2xl font-bold mb-8">Layout Shift Audit</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* HeroTile */}
        <div className="border border-yellow-500/30 p-4 rounded-lg">
          <h2 className="text-white mb-2">HeroTile</h2>
          <HeroTile userName="Alex" streakDays={42} />
        </div>
        
        {/* CourseTile */}
        <div className="border border-yellow-500/30 p-4 rounded-lg">
          <h2 className="text-white mb-2">CourseTile</h2>
          <CourseTile course={course} />
        </div>
        
        {/* ActivityTile */}
        <div className="border border-yellow-500/30 p-4 rounded-lg">
          <h2 className="text-white mb-2">ActivityTile</h2>
          <ActivityTile />
        </div>
        
        {/* GlowCard */}
        <div className="border border-yellow-500/30 p-4 rounded-lg">
          <h2 className="text-white mb-2">GlowCard</h2>
          <GlowCard>
            <div className="text-white p-4">Hover me</div>
          </GlowCard>
        </div>
      </div>
      
      <div className="mt-8 text-gray-400 text-sm border border-gray-800 p-4 rounded-lg">
        <h3 className="text-white font-semibold mb-2">Audit Instructions:</h3>
        <ol className="list-decimal list-inside space-y-1">
          <li>Open DevTools → Rendering tab</li>
          <li>Enable &quot;Layout Shift Regions&quot;</li>
          <li>Enable &quot;Paint Flashing&quot;</li>
          <li>Hover over each component</li>
          <li>Watch for blue boxes (layout shifts) or green flashes (repaints)</li>
        </ol>
      </div>
    </div>
  )
}