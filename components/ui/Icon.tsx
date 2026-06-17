'use client'

import * as Icons from 'lucide-react'

interface IconProps {
  name: string
  className?: string
  size?: number
}

export function Icon({ name, className = '', size = 24 }: IconProps) {
  // Safely get icon component from Lucide
  const IconComponent = (Icons as any)[name]
  
  if (!IconComponent) {
    // Fallback to BookOpen if icon not found
    return <Icons.BookOpen className={className} size={size} />
  }
  
  return <IconComponent className={className} size={size} />
}