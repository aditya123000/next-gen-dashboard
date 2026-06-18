'use client'

import { LayoutDashboard, BookOpen, BarChart3, Settings, User } from 'lucide-react'

const navItems = [
  { icon: LayoutDashboard, label: 'Home', id: 'home', ariaLabel: 'Home navigation' },
  { icon: BookOpen, label: 'Courses', id: 'courses', ariaLabel: 'Courses navigation' },
  { icon: BarChart3, label: 'Analytics', id: 'analytics', ariaLabel: 'Analytics navigation' },
  { icon: Settings, label: 'Settings', id: 'settings', ariaLabel: 'Settings navigation' },
]

export default function BottomNav() {
  return (
    <nav 
      className="lg:hidden fixed bottom-0 left-0 right-0 bg-surface border-t border-border z-50"
      aria-label="Mobile navigation"
    >
      <ul 
        className="flex items-center justify-around h-16 px-2"
        role="list"
      >
        {navItems.map((item) => (
          <li key={item.id} role="listitem">
            <button
              className={`
                flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg
                transition-colors duration-200
                ${item.id === 'home' 
                  ? 'text-purple-400' 
                  : 'text-gray-400 hover:text-white'
                }
              `}
              aria-current={item.id === 'home' ? 'page' : undefined}
              aria-label={item.ariaLabel}
            >
              <item.icon className="w-5 h-5" aria-hidden="true" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          </li>
        ))}
        <li role="listitem">
          <button
            className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg text-gray-400 hover:text-white transition-colors"
            aria-label="User profile navigation"
          >
            <User className="w-5 h-5" aria-hidden="true" />
            <span className="text-[10px] font-medium">Profile</span>
          </button>
        </li>
      </ul>
    </nav>
  )
}