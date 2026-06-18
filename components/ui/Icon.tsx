'use client'

import React, { useState, useEffect, Suspense, ComponentType } from 'react'
import { BookOpen, LucideProps } from 'lucide-react'

interface IconProps extends LucideProps {
  name: string
}

function IconLoader({ name, className, size, ...props }: IconProps) {
  const [IconComponent, setIconComponent] = useState<ComponentType<LucideProps> | null>(null)

  useEffect(() => {
    let isMounted = true
    
    import('lucide-react').then((module) => {
      if (!isMounted) return
      
      const iconName = name as keyof typeof module
      const FoundIcon = (module[iconName] as ComponentType<LucideProps>) || module.BookOpen
      setIconComponent(() => FoundIcon)
    })

    return () => {
      isMounted = false
    }
  }, [name])

  if (!IconComponent) {
    return <BookOpen className={className} size={size} {...props} />
  }

  return <IconComponent className={className} size={size} {...props} />
}

export function Icon(props: IconProps) {
  return (
    <Suspense fallback={<BookOpen className={props.className} size={props.size} />}>
      <IconLoader {...props} />
    </Suspense>
  )
}
