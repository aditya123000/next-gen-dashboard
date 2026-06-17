import type { Course } from '@/types/course'

export const MOCK_COURSES: Course[] = [
  {
    id: '1',
    title: 'Advanced React Patterns',
    progress: 75,
    icon_name: 'Atom',
    created_at: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    title: 'Machine Learning Fundamentals',
    progress: 45,
    icon_name: 'Brain',
    created_at: '2024-01-20T10:00:00Z'
  },
  {
    id: '3',
    title: 'Cloud Architecture Design',
    progress: 92,
    icon_name: 'Cloud',
    created_at: '2024-01-25T10:00:00Z'
  },
  {
    id: '4',
    title: 'Full-Stack TypeScript',
    progress: 30,
    icon_name: 'Code',
    created_at: '2024-02-01T10:00:00Z'
  },
  {
    id: '5',
    title: 'UX Research Methods',
    progress: 60,
    icon_name: 'Users',
    created_at: '2024-02-05T10:00:00Z'
  }
]

export const MOCK_USER = {
  name: 'Alex Chen',
  streakDays: 42,
  role: 'Student'
}