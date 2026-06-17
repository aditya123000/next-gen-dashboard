import { getCourses } from '@/lib/supabase/queries'
import { CourseTile } from '@/components/bento/CourseTile'
import { Suspense } from 'react'
import { CourseListSkeleton } from './CourseListSkeleton'

export async function CourseList() {
  const courses = await getCourses()
  
  if (!courses || courses.length === 0) {
    return (
      <div className="col-span-full text-center py-12">
        <p className="text-gray-400">No courses found. Add some data to Supabase!</p>
      </div>
    )
  }
  
  return (
    <Suspense fallback={<CourseListSkeleton />}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <CourseTile key={course.id} course={course} />
        ))}
      </div>
    </Suspense>
  )
}