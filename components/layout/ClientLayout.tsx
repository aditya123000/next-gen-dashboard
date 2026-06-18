'use client'

import dynamic from 'next/dynamic'
import { SidebarSkeleton, BottomNavSkeleton } from './DashboardShellSkeleton'

export const Sidebar = dynamic(() => import('./Sidebar').then(mod => mod.Sidebar), {
  ssr: false,
  loading: () => <SidebarSkeleton />
})

export const BottomNav = dynamic(() => import('./BottomNav').then(mod => mod.BottomNav), {
  ssr: false,
  loading: () => <BottomNavSkeleton />
})
