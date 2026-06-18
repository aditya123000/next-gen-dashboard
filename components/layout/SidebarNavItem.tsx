'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { sidebarItemHover, layoutTransition } from '@/lib/animations/variants'
import { LucideIcon } from 'lucide-react'

interface SidebarNavItemProps {
  icon: LucideIcon
  label: string
  id: string
  isActive: boolean
  isCollapsed: boolean
  onClick: () => void
  ariaLabel?: string
}

export default function SidebarNavItem({
  icon: Icon,
  label,
  isActive,
  isCollapsed,
  onClick,
  ariaLabel,
}: SidebarNavItemProps) {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        'relative flex items-center gap-3 w-full px-3 py-2.5 rounded-lg',
        'text-gray-400 hover:text-white transition-colors',
        isCollapsed ? 'justify-center' : ''
      )}
      {...sidebarItemHover}
      role="menuitem"
      aria-current={isActive ? 'page' : undefined}
      aria-label={ariaLabel || label}
      aria-expanded={!isCollapsed}
    >
      {/* Active highlight with layoutId */}
      {isActive && (
        <motion.div
          layoutId="activeNavItem"
          className="absolute inset-0 bg-purple-500/15 rounded-lg border border-purple-500/30"
          transition={layoutTransition}
          aria-hidden="true"
        />
      )}
      
      <Icon 
        className={cn(
          'w-5 h-5 relative z-10',
          isActive && 'text-purple-400'
        )} 
        aria-hidden="true"
      />
      
      {!isCollapsed && (
        <motion.span
          className={cn(
            'relative z-10 text-sm',
            isActive ? 'text-white font-medium' : 'text-gray-400'
          )}
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 'auto' }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ duration: 0.2 }}
        >
          {label}
        </motion.span>
      )}
    </motion.button>
  )
}