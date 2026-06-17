'use client'

import { useState } from 'react'
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

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: BookOpen, label: 'Courses', active: false },
  { icon: BarChart3, label: 'Analytics', active: false },
  { icon: Settings, label: 'Settings', active: false },
]

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <aside 
      className={`
        fixed left-0 top-0 h-full bg-background-secondary border-r border-border z-50
        transition-all duration-300 ease-in-out
        hidden lg:flex flex-col
        ${isCollapsed ? 'w-20' : 'w-64'}
      `}
    >
      {/* Logo */}
      <div className={`
        h-16 flex items-center px-4 border-b border-border
        ${isCollapsed ? 'justify-center' : ''}
      `}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          {!isCollapsed && (
            <span className="font-bold text-white text-lg">Learn.io</span>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`
              relative flex items-center gap-3 w-full px-3 py-2.5 rounded-lg
              transition-all duration-200
              ${isCollapsed ? 'justify-center' : ''}
              ${item.active 
                ? 'bg-purple-500/15 text-white border border-purple-500/30' 
                : 'text-gray-400 hover:text-white hover:bg-surface-hover'
              }
            `}
          >
            <item.icon className={`w-5 h-5 ${item.active ? 'text-purple-400' : ''}`} />
            {!isCollapsed && (
              <span className={`text-sm ${item.active ? 'font-medium text-white' : ''}`}>
                {item.label}
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* User Profile */}
      <div className="border-t border-border p-4">
        <div className={`
          flex items-center gap-3
          ${isCollapsed ? 'justify-center' : ''}
        `}>
          <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
            <User className="w-4 h-4 text-purple-400" />
          </div>
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">Alex Chen</p>
              <p className="text-gray-400 text-xs">Student</p>
            </div>
          )}
        </div>
      </div>

      {/* Collapse Toggle */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={`
          absolute -right-3 top-1/2 transform -translate-y-1/2
          w-6 h-6 rounded-full bg-surface border border-border
          flex items-center justify-center hover:bg-surface-hover
          transition-all duration-200 lg:flex
        `}
      >
        {isCollapsed ? (
          <ChevronRight className="w-3 h-3 text-gray-400" />
        ) : (
          <ChevronLeft className="w-3 h-3 text-gray-400" />
        )}
      </button>
    </aside>
  )
}