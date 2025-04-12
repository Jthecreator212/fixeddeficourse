import { ModuleForm } from "@/components/admin/module-form"

// In a real app, you would fetch the course data from your API
const getCourse = (id: string) => {
  // Mock data
  return {
    id,
    title: "DeFi Fundamentals",
  }
}

export default function NewModulePage({ params }: { params: { id: string } }) {
  const course = getCourse(params.id)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Add New Module</h1>
        <p className="text-muted-foreground">Create a new module for {course.title}</p>
      </div>

      <ModuleForm courseId={params.id} />
    </div>
  )
}
