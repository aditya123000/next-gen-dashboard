'use client'

import { motion } from 'framer-motion'
import { staggerContainer } from '@/lib/animations/variants'
import { ReactNode } from 'react'

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