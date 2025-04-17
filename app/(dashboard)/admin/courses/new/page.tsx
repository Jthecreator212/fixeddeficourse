import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CourseForm } from "@/components/admin/course-form"
import { AIModuleGenerator } from "@/components/admin/ai-module-generator"

export default function NewCoursePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Create New Course</h1>
        <p className="text-muted-foreground">Add a new course to your DeFi learning platform</p>
      </div>

      <Tabs defaultValue="basic">
        <TabsList>
          <TabsTrigger value="basic">Course Details</TabsTrigger>
          <TabsTrigger value="ai-generator">AI Content Generator</TabsTrigger>
        </TabsList>

        <TabsContent value="basic">
          <CourseForm />
        </TabsContent>

        <TabsContent value="ai-generator">
          <AIModuleGenerator courseId="new" />
        </TabsContent>
      </Tabs>
    </div>
  )
} 