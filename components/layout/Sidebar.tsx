'use client'

import { useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
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
import { cn } from '@/lib/utils/cn'
import { layoutTransition } from '@/lib/animations/variants'
import { SidebarNavItem } from './SidebarNavItem'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
  { icon: BookOpen, label: 'Courses', id: 'courses' },
  { icon: BarChart3, label: 'Analytics', id: 'analytics' },
  { icon: Settings, label: 'Settings', id: 'settings' },
]

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [activeItem, setActiveItem] = useState('dashboard')

  return (
    <LayoutGroup>
      <motion.aside 
        className={`
          fixed left-0 top-0 h-full bg-background-secondary border-r border-border z-50
          transition-all duration-300 ease-in-out
          hidden lg:flex flex-col
        `}
        animate={{ width: isCollapsed ? 80 : 256 }}
        transition={layoutTransition}
      >
        {/* Logo */}
        <div className={`
          h-16 flex items-center px-4 border-b border-border
          ${isCollapsed ? 'justify-center' : ''}
        `}>
          <motion.div 
            className="flex items-center gap-2"
            layout="position"
          >
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            {!isCollapsed && (
              <motion.span 
                className="font-bold text-white text-lg"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2 }}
              >
                Learn.io
              </motion.span>
            )}
          </motion.div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => (
            <SidebarNavItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              id={item.id}
              isActive={activeItem === item.id}
              isCollapsed={isCollapsed}
              onClick={() => setActiveItem(item.id)}
            />
          ))}
        </nav>

        {/* User Profile */}
        <div className="border-t border-border p-4">
          <motion.div 
            className={`
              flex items-center gap-3
              ${isCollapsed ? 'justify-center' : ''}
            `}
            layout="position"
          >
            <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
              <User className="w-4 h-4 text-purple-400" />
            </div>
            {!isCollapsed && (
              <motion.div 
                className="flex-1 min-w-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-white text-sm font-medium truncate">Alex Chen</p>
                <p className="text-gray-400 text-xs">Student</p>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Collapse Toggle */}
        <motion.button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`
            absolute -right-3 top-1/2 transform -translate-y-1/2
            w-6 h-6 rounded-full bg-surface border border-border
            flex items-center justify-center hover:bg-surface-hover
            transition-colors duration-200
            lg:flex
          `}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isCollapsed ? (
            <ChevronRight className="w-3 h-3 text-gray-400" />
          ) : (
            <ChevronLeft className="w-3 h-3 text-gray-400" />
          )}
        </motion.button>
      </motion.aside>
    </LayoutGroup>
  )
}