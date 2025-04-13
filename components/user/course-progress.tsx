"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { getModules } from "@/lib/modules"
import { getCompletedModules } from "@/lib/user-progress"
import { useEffect, useState } from "react"
import { ModuleConfig, UserProgress } from '@/lib/types'

interface CourseProgressProps {
  userId: string
}

export function CourseProgress({ userId }: CourseProgressProps) {
  const [modules, setModules] = useState<ModuleConfig[]>([])
  const [progress, setProgress] = useState<UserProgress[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProgress() {
      try {
        const response = await fetch(`/api/user/${userId}/progress`)
        if (!response.ok) {
          throw new Error('Failed to fetch progress')
        }
        const data = await response.json()
        setModules(data.modules)
        setProgress(data.progress)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchProgress()
  }, [userId])

  if (loading) {
    return <div>Loading progress...</div>
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>
  }

  const completedModules = progress.filter(p => p.completed).length
  const totalModules = modules.length
  const progressPercentage = totalModules > 0 ? (completedModules / totalModules) * 100 : 0

  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Progress</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">
              {completedModules} of {totalModules} modules completed
            </span>
            <span className="text-sm font-medium">{Math.round(progressPercentage)}%</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>
        <div className="space-y-4">
          {modules.slice(0, 5).map((module) => {
            const isCompleted = progress.some(p => p.moduleSlug === module.slug && p.completed)
            const moduleProgress = isCompleted ? 100 : 0

            return (
              <div key={module.slug} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{module.title}</span>
                  <span className="text-sm font-medium">{moduleProgress}%</span>
                </div>
                <Progress value={moduleProgress} className="h-2" />
              </div>
            )
          })}
        </div>
        <div className="text-center">
          <a
            href="/dashboard/courses"
            className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
          >
            View all modules
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
