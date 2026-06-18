import { Suspense } from 'react'
import { DashboardShell } from '@/components/layout/DashboardShell'
import { BentoGridSkeleton } from '@/components/bento/BentoGridSkeleton'

/**
 * The homepage is a Server Component.
 * We use Suspense to enable streaming, ensuring the initial page shell 
 * is delivered immediately without waiting for data fetching.
 */
export default function HomePage() {
  return (
    <Suspense fallback={<BentoGridSkeleton />}>
      <DashboardShell />
    </Suspense>
  )
}
