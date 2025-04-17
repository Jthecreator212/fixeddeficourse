"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ModuleForm } from "@/components/admin/module-form"
import { AdminModuleFormData } from "@/lib/types"
import { toast } from "sonner"

// In a real app, you would fetch the course data from your API
const getCourse = (id: string) => {
  // Mock data
  return {
    id,
    title: "DeFi Fundamentals",
  }
}

export default function NewModulePage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const course = getCourse(params.id)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Handle the form submission to create a new module
  const handleCreateModule = async (data: AdminModuleFormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch(`/api/courses/${params.id}/modules`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || "Failed to create module")
      }

      toast.success("Module created successfully")
      router.push(`/dashboard/admin/courses/${params.id}/modules`)
      router.refresh()
    } catch (error) {
      console.error("Error creating module:", error)
      toast.error(error instanceof Error ? error.message : "Failed to create module")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Add New Module</h1>
        <p className="text-muted-foreground">Create a new module for {course.title}</p>
      </div>

      <ModuleForm 
        courseId={params.id} 
        onSubmit={handleCreateModule}
      />
    </div>
  )
} 