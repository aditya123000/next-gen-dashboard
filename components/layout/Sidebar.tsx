'use client'

import { useState } from 'react'
import { motion, LayoutGroup } from 'framer-motion'
import { 
  LayoutDashboard, 
  BookOpen, 
  BarChart3, 
  Settings, 
  ChevronLeft,
  ChevronRight,
  User,
  Sparkles
} from 'lucide-react'
import { cn } from '@/lib/utils'

import SidebarNavItem from './SidebarNavItem'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard', ariaLabel: 'Dashboard navigation' },
  { icon: BookOpen, label: 'Courses', id: 'courses', ariaLabel: 'Courses navigation' },
  { icon: BarChart3, label: 'Analytics', id: 'analytics', ariaLabel: 'Analytics navigation' },
  { icon: Settings, label: 'Settings', id: 'settings', ariaLabel: 'Settings navigation' },
]

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [activeItem, setActiveItem] = useState('dashboard')

  return (
    <LayoutGroup>
      <nav
        aria-label="Main navigation"
        className={cn(
          "fixed left-0 top-0 h-full bg-[#09090b]/80 backdrop-blur-xl border-r border-white/8 z-50",
          "transition-all duration-150 ease-in-out hidden lg:flex flex-col shadow-card",
          isCollapsed ? 'w-20' : 'w-64'
        )}
        style={{ width: isCollapsed ? 80 : 256 }}
      >
        <div className="sr-only">
          <a href="#main-content">Skip to main content</a>
        </div>

        <div 
          className={cn(
            "h-16 flex items-center px-4 border-b border-white/8 relative overflow-hidden group/brand",
            isCollapsed ? 'justify-center' : ''
          )}
          aria-hidden="true"
        >
          <motion.div 
            className="flex items-center gap-2.5"
            layout="position"
          >
            <div 
              className="w-8 h-8 rounded-lg bg-[#5B6CFF]/10 flex items-center justify-center shrink-0 border border-[#5B6CFF]/20 relative overflow-hidden group-hover/brand:scale-105 transition-transform duration-150"
              aria-label="Learn.io logo"
            >
              <Sparkles className="w-4 h-4 text-[#5B6CFF]" />
            </div>
            {!isCollapsed && (
              <motion.span 
                className="font-extrabold text-white text-base tracking-tight"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.15 }}
              >
                Learn.io
              </motion.span>
            )}
          </motion.div>
        </div>

        <ul 
          className="flex-1 px-3 py-4 space-y-1"
          role="list"
        >
          {navItems.map((item) => (
            <li key={item.id} role="listitem">
              <SidebarNavItem
                icon={item.icon}
                label={item.label}
                id={item.id}
                isActive={activeItem === item.id}
                isCollapsed={isCollapsed}
                onClick={() => setActiveItem(item.id)}
                ariaLabel={item.ariaLabel}
              />
            </li>
          ))}
        </ul>

        <section 
          className="border-t border-white/8 p-4"
          aria-label="User profile"
        >
          <motion.div 
            className={cn(
              "flex items-center gap-3 p-2 rounded-xl border border-transparent transition-all duration-100 hover:bg-white/2 hover:border-white/8 cursor-pointer group/profile",
              isCollapsed ? 'justify-center p-1.5' : ''
            )}
            layout="position"
          >
            <div 
              className="w-8 h-8 rounded-full bg-[#5B6CFF]/10 border border-[#5B6CFF]/20 flex items-center justify-center shrink-0 shadow-inner group-hover/profile:border-[#7C8CFF]/40 transition-colors duration-100"
              aria-hidden="true"
            >
              <User className="w-4 h-4 text-[#5B6CFF] group-hover/profile:text-[#7C8CFF] transition-colors duration-100" />
            </div>
            {!isCollapsed && (
              <motion.div 
                className="flex-1 min-w-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <p className="text-white text-sm font-bold truncate leading-tight group-hover/profile:text-[#7C8CFF] transition-colors">Andaz Kumar</p>
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Student</p>
              </motion.div>
            )}
          </motion.div>
        </section>

        <motion.button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#12121a]/95 border border-white/8 shadow-[0_4px_12px_rgba(0,0,0,0.5)] flex items-center justify-center hover:bg-[#1a1a26] hover:border-[#5B6CFF]/40 transition-all duration-100 lg:flex z-50"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.92 }}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          aria-expanded={!isCollapsed}
        >
          {isCollapsed ? (
            <ChevronRight className="w-3 h-3 text-gray-400" />
          ) : (
            <ChevronLeft className="w-3 h-3 text-gray-400" />
          )}
        </motion.button>
      </nav>
    </LayoutGroup>
  )
}