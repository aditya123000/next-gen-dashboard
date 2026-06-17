import type {Course} from '@/types/course'

const testCourse: Course ={
    id:'123',
    title:'Test Course',
    progress: 75,
    icon_name: 'Atom',
    created_at: new Date().toISOString()
}

console.log(testCourse)