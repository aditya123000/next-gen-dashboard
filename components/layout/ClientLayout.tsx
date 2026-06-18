'use client'

import dynamic from 'next/dynamic'
import { SidebarSkeleton, BottomNavSkeleton } from './DashboardShellSkeleton'

export const Sidebar = dynamic(() => import('./Sidebar'), {
  ssr: false,
  loading: () => <SidebarSkeleton />
})

export const BottomNav = dynamic(() => import('./BottomNav'), {
  ssr: false,
  loading: () => <BottomNavSkeleton />
})
