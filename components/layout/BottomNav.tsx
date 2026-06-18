'use client'

import { LayoutDashboard, BookOpen, BarChart3, Settings, User } from 'lucide-react'

const navItems = [
  { icon: LayoutDashboard, label: 'Home', active: true },
  { icon: BookOpen, label: 'Courses', active: false },
  { icon: BarChart3, label: 'Analytics', active: false },
  { icon: Settings, label: 'Settings', active: false },
]

export function BottomNav() {
  return (
    <main className="pb-16 lg:pb-0">
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-surface border-t border-border z-50">
        <div className="flex items-center justify-around h-16 px-2">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`
                flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg
                transition-colors duration-200
                ${item.active 
                  ? 'text-purple-400' 
                  : 'text-gray-400 hover:text-white'
                }
              `}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          ))}
          <button
            className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg text-gray-400 hover:text-white transition-colors"
          >
            <User className="w-5 h-5" />
            <span className="text-[10px] font-medium">Profile</span>
          </button>
        </div>
      </nav>
    </main>
  )
}