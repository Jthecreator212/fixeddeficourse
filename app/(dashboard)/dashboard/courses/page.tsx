import type { Metadata } from "next"
import { CoursesList } from "@/components/user/courses-list"

export const metadata: Metadata = {
  title: "My Courses | DeFi Master Course",
  description: "View your enrolled courses",
}

export default function CoursesPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">My Courses</h1>
      </div>
      <CoursesList />
    </div>
  )
}
