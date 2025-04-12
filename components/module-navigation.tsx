"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Circle, Clock } from "lucide-react"
import type { ModuleMetadata } from "@/lib/module-types"

interface ModuleNavigationProps {
  currentSlug?: string
}

export function ModuleNavigation({ currentSlug }: ModuleNavigationProps) {
  const [modules, setModules] = useState<ModuleMetadata[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchModules() {
      try {
        setLoading(true)
        const response = await fetch("/api/modules")
        if (!response.ok) {
          throw new Error("Failed to fetch modules")
        }
        const data = await response.json()
        setModules(data.modules || []) // Ensure we always have an array
      } catch (err) {
        console.error("Error fetching modules:", err)
        setError("Failed to load modules. Please try again later.")
        // Provide fallback modules to prevent mapping errors
        setModules([])
      } finally {
        setLoading(false)
      }
    }

    fetchModules()
  }, [])

  if (loading) {
    return (
      <div className="space-y-2">
        <h2 className="text-xl font-bold mb-4">Module Navigation</h2>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center space-x-2">
            <Skeleton className="h-4 w-4 rounded-full" />
            <Skeleton className="h-10 w-full" />
          </div>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-4 border border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-900 rounded-md">
        <h2 className="text-xl font-bold mb-2">Error</h2>
        <p className="text-red-600 dark:text-red-400">{error}</p>
        <Button variant="outline" className="mt-2" onClick={() => window.location.reload()}>
          Retry
        </Button>
      </div>
    )
  }

  // Ensure modules is always an array before mapping
  const moduleList = Array.isArray(modules) ? modules : []

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Module Navigation</h2>
      <div className="space-y-2">
        {moduleList.map((module) => (
          <Button
            key={module.slug}
            variant={currentSlug === module.slug ? "secondary" : "ghost"}
            className="w-full justify-start"
            asChild
          >
            <Link href={`/modules/${module.slug}`} className="flex items-center">
              {currentSlug === module.slug ? (
                <Clock className="mr-2 h-4 w-4 text-primary" />
              ) : (
                <Circle className="mr-2 h-4 w-4" />
              )}
              <span className="truncate">{module.title}</span>
            </Link>
          </Button>
        ))}
      </div>
    </div>
  )
}
