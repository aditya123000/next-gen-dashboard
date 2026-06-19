'use client'

import { LayoutDashboard, BookOpen, BarChart3, Settings, User } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { icon: LayoutDashboard, label: 'Home', id: 'home', ariaLabel: 'Home navigation' },
  { icon: BookOpen, label: 'Courses', id: 'courses', ariaLabel: 'Courses navigation' },
  { icon: BarChart3, label: 'Analytics', id: 'analytics', ariaLabel: 'Analytics navigation' },
  { icon: Settings, label: 'Settings', id: 'settings', ariaLabel: 'Settings navigation' },
]

export default function BottomNav() {
  return (
    <nav 
      className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#07070a]/85 backdrop-blur-xl border-t border-white/[0.08] z-50 shadow-[0_-8px_32px_rgba(0,0,0,0.5)]"
      aria-label="Mobile navigation"
    >
      <ul 
        className="flex items-center justify-around h-16 px-2"
        role="list"
      >
        {navItems.map((item) => {
          const isActive = item.id === 'home'
          return (
            <li key={item.id} role="listitem">
              <button
                className={cn(
                  "flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg transition-all duration-100 relative",
                  isActive 
                    ? "text-[#5B6CFF] font-bold" 
                    : "text-gray-400 hover:text-white"
                )}
                aria-current={isActive ? 'page' : undefined}
                aria-label={item.ariaLabel}
              >
                {isActive && (
                  <div className="absolute top-0 w-8 h-[2px] bg-[#5B6CFF] rounded-full" style={{ transform: 'translateY(-6px)' }} />
                )}
                <item.icon className="w-5 h-5 relative z-10" aria-hidden="true" />
                <span className="text-[10px] font-semibold tracking-wide relative z-10">{item.label}</span>
              </button>
            </li>
          )
        })}
        <li role="listitem">
          <button
            className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg text-gray-400 hover:text-white transition-colors duration-100 relative"
            aria-label="User profile navigation"
          >
            <User className="w-5 h-5" aria-hidden="true" />
            <span className="text-[10px] font-semibold tracking-wide">Profile</span>
          </button>
        </li>
      </ul>
    </nav>
  )
}