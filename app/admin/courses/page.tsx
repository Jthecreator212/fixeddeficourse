import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import Link from "next/link"
import { CoursesTable } from "@/components/admin/courses-table"
import { CourseStats } from "@/components/admin/course-stats"

export default function CoursesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
          <p className="text-muted-foreground">Manage your DeFi courses and modules</p>
        </div>
        <Link href="/admin/courses/new">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Course
          </Button>
        </Link>
      </div>

      <CourseStats />

      <div className="border rounded-lg">
        <CoursesTable />
      </div>
    </div>
  )
}
