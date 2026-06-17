import { Variants, Transition } from 'framer-motion'

export const springTransition: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 20,
  mass: 1,
}

export const springHoverTransition: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 20,
  mass: 1,
}

export const springTapTransition: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 17,
  mass: 0.8,
}

export const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export const hoverScale = {
  whileHover: {
    scale: 1.02,
    transition: springHoverTransition,
  },
  whileTap: {
    scale: 0.98,
    transition: springTapTransition,
  },
}

export const cardGlow = {
  whileHover: {
    boxShadow: '0 0 30px -10px rgba(139, 92, 246, 0.3)',
    borderColor: 'rgba(139, 92, 246, 0.3)',
    transition: { duration: 0.3 },
  },
}

export const progressBarSpring = {
  initial: { width: '0%' },
  animate: (progress: number) => ({
    width: `${progress}%`,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 30,
      duration: 0.8,
    },
  }),
}

export const layoutTransition: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 30,
  mass: 1,
}

export const sidebarItemHover = {
  whileHover: {
    x: 4,
    transition: { type: 'spring', stiffness: 400, damping: 25 },
  },
  whileTap: {
    scale: 0.98,
    transition: { type: 'spring', stiffness: 500, damping: 20 },
  },
} as const;

export const cellAppear:Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (delay: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 25,
      delay: delay,
    },
  }),
}

export const pageEntrance: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
      when: 'beforeChildren',
      staggerChildren: 0.08,
    },
  },
}