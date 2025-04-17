"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CourseForm } from "@/components/admin/course-form"
import { AIModuleGenerator } from "@/components/admin/ai-module-generator"
import { Loader2 } from "lucide-react"
import * as z from "zod"

const formSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }),
  slug: z.string().min(5, {
    message: "Slug must be at least 5 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  level: z.string(),
  duration: z.string(),
  price: z.string(),
  status: z.string(),
  coverImage: z.string().optional(),
  content: z.string().optional(),
})

type Course = z.infer<typeof formSchema> & { id: string }

// In a real app, you would fetch the course data from your API
const getCourse = async (id: string): Promise<Course | null> => {
  try {
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
  } catch (error) {
    console.error("Error fetching course:", error)
    return null
  }
}

export default function EditCoursePage({ params }: { params: { id: string } }) {
  const [course, setCourse] = useState<Course | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const data = await getCourse(params.id)
        setCourse(data)
      } catch (error) {
        console.error("Error fetching course:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCourse()
  }, [params.id])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2">Loading course...</span>
      </div>
    )
  }

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