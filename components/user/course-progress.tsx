"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { getModules } from "@/lib/modules"
import { getCompletedModules } from "@/lib/user-progress"
import { useEffect, useState } from "react"

export function CourseProgress() {
  const [modules, setModules] = useState<any[]>([])
  const [completedModules, setCompletedModules] = useState<string[]>([])

  useEffect(() => {
    // Get all modules
    setModules(getModules())

    // Get completed modules
    setCompletedModules(getCompletedModules())

    // Set up an interval to check for updates (in case user completes a module in another tab)
    const interval = setInterval(() => {
      setCompletedModules(getCompletedModules())
    }, 30000) // Check every 30 seconds

    return () => clearInterval(interval)
  }, [])

  const totalModules = modules.length
  const completedCount = completedModules.length
  const progressPercentage = totalModules > 0 ? Math.round((completedCount / totalModules) * 100) : 0

  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Progress</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Overall Progress</span>
            <span className="text-sm font-medium">{progressPercentage}%</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>
        <div className="space-y-4">
          {modules.slice(0, 5).map((module) => {
            const isCompleted = completedModules.includes(module.slug)
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
