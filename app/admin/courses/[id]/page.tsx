import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CourseForm } from "@/components/admin/course-form"
import { AIModuleGenerator } from "@/components/admin/ai-module-generator"

// In a real app, you would fetch the course data from your API
const getCourse = (id: string) => {
  // Mock data
  return {
    id,
    title: "DeFi Fundamentals",
    slug: "defi-fundamentals",
    description: "Learn the basics of decentralized finance and blockchain technology.",
    level: "beginner",
    duration: "8 weeks",
    price: "99.99",
    status: "published",
    coverImage: "/placeholder.svg?height=720&width=1280",
    content: "# Welcome to DeFi Fundamentals\n\nThis course covers the essential concepts of decentralized finance.",
  }
}

export default function EditCoursePage({ params }: { params: { id: string } }) {
  const course = getCourse(params.id)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Edit Course</h1>
        <p className="text-muted-foreground">Update your course information and content</p>
      </div>

      <Tabs defaultValue="basic">
        <TabsList>
          <TabsTrigger value="basic">Course Details</TabsTrigger>
          <TabsTrigger value="ai-generator">AI Content Generator</TabsTrigger>
        </TabsList>

        <TabsContent value="basic">
          <CourseForm course={course} />
        </TabsContent>

        <TabsContent value="ai-generator">
          <AIModuleGenerator courseId={params.id} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
