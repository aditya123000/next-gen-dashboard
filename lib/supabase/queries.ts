import { createClient as createSupabaseClient } from '@supabase/supabase-js'
import type { Course } from '@/types/course'
import { unstable_cache } from 'next/cache'

// Static client for cached queries to avoid "cookies()" error in unstable_cache
const supabase = createSupabaseClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

/**
 * Fetch all courses from the database.
 * Cached for 60 seconds using Next.js unstable_cache.
 * This uses a static client to avoid dynamic header issues.
 */
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

/**
 * Fetch a single course by its ID.
 * Cached for 60 seconds using Next.js unstable_cache.
 */
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

/**
 * Fetch course statistics.
 * Note: This remains a dynamic query if needed, or could be cached similarly.
 */
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
