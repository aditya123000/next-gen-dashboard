import { Suspense } from 'react'
import { DashboardShell } from '@/components/layout/DashboardShell'
import { BentoGridSkeleton } from '@/components/bento/BentoGridSkeleton'

export default function HomePage() {
  return (
    <Suspense fallback={<BentoGridSkeleton />}>
      <DashboardShell />
    </Suspense>
  )
}
