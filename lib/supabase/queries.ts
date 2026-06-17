import {createClient} from './server'
import type {Course} from '@/types/course'


export async function getCourses(): Promise<Course[]> {
  const supabase =await createClient()
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
  console.log(`Successfully fetched ${data.length} courses`)
  return data
}

export async function getCourseById(id: string): Promise<Course | null> {
  const supabase =await createClient()
  const {data,error} = await supabase
    .from('courses')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) {
    console.error(`Error fetching course ${id}:`, error)
    return null
  }
  return data
}

export async function getCourseStats() {
  const supabase =await createClient()
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