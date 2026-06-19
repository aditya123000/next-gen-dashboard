// components/bento/StaggerWrapper.tsx
'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { staggerContainer } from '@/lib/animations/variants'

interface StaggerWrapperProps {
  children: ReactNode
  className?: string
}

export function StaggerWrapper({ children, className = '' }: StaggerWrapperProps) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  )
}