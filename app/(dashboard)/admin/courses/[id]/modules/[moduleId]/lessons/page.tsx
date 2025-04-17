import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import Link from "next/link"
import { LessonsTable } from "@/components/admin/lessons-table"

// In a real app, you would fetch the course and module data from your API
const getModuleInfo = (courseId: string, moduleId: string) => {
  // Mock data
  return {
    courseId,
    moduleId,
    courseTitle: "DeFi Fundamentals",
    moduleTitle: "Introduction to DeFi",
  }
}

export default function ModuleLessonsPage({
  params,
}: {
  params: { id: string; moduleId: string }
}) {
  const { courseTitle, moduleTitle } = getModuleInfo(params.id, params.moduleId)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Module Lessons</h1>
          <p className="text-muted-foreground">
            Manage lessons for {moduleTitle} in {courseTitle}
          </p>
        </div>
        <Link href={`/dashboard/admin/courses/${params.id}/modules/${params.moduleId}/lessons/new`}>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Lesson
          </Button>
        </Link>
      </div>

      <div className="border rounded-lg">
        <LessonsTable courseId={params.id} moduleId={params.moduleId} />
      </div>
    </div>
  )
} 