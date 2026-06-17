import {Database} from './supabase'

export type Course = Database['public']['Tables']['courses']['Row']
export type CourseInsert = Database['public']['Tables']['courses']['Insert']
export type CourseUpdae = Database['public']['Tables']['courses']['Update']

export type IconName=
  | 'Atom'
  | 'Brain'
  | 'Cloud'
  | 'Code'
  | 'Users'
  | 'BookOpen'
  | 'Rocket'
  | string  
