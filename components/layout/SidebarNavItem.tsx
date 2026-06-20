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
        'relative flex items-center gap-3 w-full px-3 py-2.5 rounded-lg border transition-colors duration-100',
        isActive 
          ? 'border-transparent text-white font-semibold' 
          : 'border-transparent text-gray-400 hover:text-white hover:bg-white/2 hover:border-white/2',
        isCollapsed ? 'justify-center' : ''
      )}
      {...sidebarItemHover}
      role="menuitem"
      aria-current={isActive ? 'page' : undefined}
      aria-label={ariaLabel || label}
      aria-expanded={!isCollapsed}
    >
      {isActive && (
        <motion.div
          layoutId="activeNavItem"
          className="absolute inset-0 bg-white/2 border-l-2 border-l-[#5B6CFF] border-y-white/2 border-r-white/2 rounded-lg shadow-sm"
          transition={layoutTransition}
          aria-hidden="true"
        />
      )}
      
      <div className="relative shrink-0 flex items-center justify-center">
        <Icon 
          className={cn(
            'w-5 h-5 relative z-10 transition-colors duration-100',
            isActive ? 'text-[#5B6CFF]' : 'text-gray-400'
          )} 
          aria-hidden="true"
        />
      </div>
      
      {!isCollapsed && (
        <motion.span
          className={cn(
            'relative z-10 text-sm font-semibold tracking-wide transition-colors duration-100',
            isActive ? 'text-white' : 'text-gray-400'
          )}
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 'auto' }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ duration: 0.15 }}
        >
          {label}
        </motion.span>
      )}
    </motion.button>
  )
}