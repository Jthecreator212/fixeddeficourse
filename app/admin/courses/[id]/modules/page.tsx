import { Button } from "@/components/ui/button"
import { PlusCircle, Sparkles } from "lucide-react"
import Link from "next/link"
import { ModulesTable } from "@/components/admin/modules-table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AIModuleGenerator } from "@/components/admin/ai-module-generator"

// In a real app, you would fetch the course data from your API
const getCourse = (id: string) => {
  // Mock data
  return {
    id,
    title: "DeFi Fundamentals",
  }
}

export default function CourseModulesPage({ params }: { params: { id: string } }) {
  const course = getCourse(params.id)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Course Modules</h1>
          <p className="text-muted-foreground">Manage modules for {course.title}</p>
        </div>
        <div className="flex space-x-2">
          <Link href={`/admin/courses/${params.id}/modules/new`}>
            <Button variant="outline">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Module Manually
            </Button>
          </Link>
        </div>
      </div>

      <Tabs defaultValue="modules">
        <TabsList>
          <TabsTrigger value="modules">Modules</TabsTrigger>
          <TabsTrigger value="ai-generator">
            <Sparkles className="mr-2 h-4 w-4" />
            AI Module Generator
          </TabsTrigger>
        </TabsList>

        <TabsContent value="modules">
          <div className="border rounded-lg">
            <ModulesTable courseId={params.id} />
          </div>
        </TabsContent>

        <TabsContent value="ai-generator">
          <AIModuleGenerator courseId={params.id} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
