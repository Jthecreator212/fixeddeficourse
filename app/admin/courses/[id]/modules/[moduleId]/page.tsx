"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ModuleForm } from "@/components/admin/module-form"
import { AdminModuleFormData } from "@/lib/types"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

export default function EditModulePage({ params }: { params: { id: string; moduleId: string } }) {
  const router = useRouter()
  const [module, setModule] = useState<AdminModuleFormData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchModule = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`/api/courses/${params.id}/modules/${params.moduleId}`)
        
        if (!response.ok) {
          const error = await response.json()
          throw new Error(error.message || "Failed to fetch module")
        }
        
        const data = await response.json()
        setModule(data)
      } catch (err) {
        console.error("Error fetching module:", err)
        setError(err instanceof Error ? err.message : "Failed to fetch module")
        toast.error("Failed to load module data")
      } finally {
        setIsLoading(false)
      }
    }

    fetchModule()
  }, [params.id, params.moduleId])

  const handleUpdateModule = async (data: AdminModuleFormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch(`/api/courses/${params.id}/modules/${params.moduleId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || "Failed to update module")
      }

      toast.success("Module updated successfully")
      router.push(`/admin/courses/${params.id}/modules`)
      router.refresh()
    } catch (error) {
      console.error("Error updating module:", error)
      toast.error(error instanceof Error ? error.message : "Failed to update module")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-40">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
        <span className="ml-2">Loading module...</span>
      </div>
    )
  }

  if (error || !module) {
    return (
      <div className="p-6 bg-red-50 rounded-lg">
        <h3 className="text-xl font-bold text-red-800 mb-2">Error Loading Module</h3>
        <p className="text-red-600">{error || "Failed to load module data"}</p>
        <button
          onClick={() => router.push(`/admin/courses/${params.id}/modules`)}
          className="mt-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
        >
          Go Back
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Edit Module</h1>
        <p className="text-muted-foreground">Make changes to the module content and settings</p>
      </div>

      <ModuleForm 
        courseId={params.id} 
        initialData={module}
        onSubmit={handleUpdateModule}
      />
    </div>
  )
} 