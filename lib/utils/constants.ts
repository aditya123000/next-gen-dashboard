export const APP_NAME = 'Learn.io'
export const APP_DESCRIPTION = 'Next-Gen Learning Platform'

export const DEFAULT_USER = {
  name: 'Student',
  streakDays: 0,
  role: 'Learner',
}

export const ANIMATION = {
  staggerDelay: 0.08,
  initialDelay: 0.15,
  springStiffness: 300,
  springDamping: 20,
  duration: 0.6,
}

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

export const PROGRESS_COLORS = {
  low: 'bg-purple-500',
  medium: 'bg-purple-500',
  high: 'bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500',
}

export const ICON_MAP = {
  Atom: 'atom',
  Brain: 'brain',
  Cloud: 'cloud',
  Code: 'code',
  Users: 'users',
  BookOpen: 'book-open',
  Rocket: 'rocket',
} as const

export const ACTIVITY_COLORS = [
  'bg-gray-800',
  'bg-purple-900',
  'bg-purple-700',
  'bg-purple-500',
] as const