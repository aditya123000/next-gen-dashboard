import { createClient as createSupabaseClient } from '@supabase/supabase-js'
import type { Course } from '@/types/course'
import { unstable_cache } from 'next/cache'

const supabase = createSupabaseClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export const getCourses = unstable_cache(
  async (): Promise<Course[]> => {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .order('created_at', { ascending: true })
    
    if (error) {
      console.error('Supabase query error:', error)
      throw new Error(`Failed to fetch courses: ${error.message}`)
    }
    
    if (!data || data.length === 0) {
      console.warn('No courses found in database')
      return []
    }
    console.log(`Successfully fetched ${data.length} courses (cached)`)
    return data
  },
  ['courses'],
  { revalidate: 60, tags: ['courses'] }
)

export const getCourseById = (id: string) => unstable_cache(
  async (): Promise<Course | null> => {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error) {
      console.error(`Error fetching course ${id}:`, error)
      return null
    }
    return data
  },
  ['course', id],
  { revalidate: 60, tags: [`course-${id}`] }
)()

export async function getCourseStats() {
  const { count, error } = await supabase
    .from('courses')
    .select('*', { count: 'exact', head: true })
  
  if (error) {
    console.error('Error fetching course stats:', error)
    return { total: 0, averageProgress: 0 }
  }
  
  const { data } = await supabase
    .from('courses')
    .select('progress')
  const averageProgress = data && data.length > 0
    ? Math.round(data.reduce((acc, curr) => acc + (curr.progress??0), 0) / data.length)
    : 0
  
  return {
    total: count || 0,
    averageProgress
  }
}
