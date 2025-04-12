"use client"

import { supabase } from "@/lib/supabase"

// Types for user progress
export interface ModuleProgress {
  moduleSlug: string
  completed: boolean
  lastAccessed: string // ISO date string
  quizScore?: number
  completedSections: string[]
}

// Get the current user ID from Supabase
export async function getCurrentUserId(): Promise<string | null> {
  const {
    data: { session },
  } = await supabase.auth.getSession()
  return session?.user?.id || null
}

// Get user progress from Supabase
export async function getUserProgress(moduleSlug?: string): Promise<Record<string, ModuleProgress>> {
  const userId = await getCurrentUserId()

  if (!userId) {
    return {}
  }

  try {
    let query = `/api/modules/progress?userId=${userId}`

    if (moduleSlug) {
      query += `&moduleSlug=${moduleSlug}`
    }

    const response = await fetch(query)
    const { data } = await response.json()

    if (!data) {
      return {}
    }

    // Transform the data to match our interface
    const progressMap: Record<string, ModuleProgress> = {}

    if (Array.isArray(data)) {
      data.forEach((item) => {
        progressMap[item.module_slug] = {
          moduleSlug: item.module_slug,
          completed: item.completed,
          lastAccessed: item.last_accessed,
          quizScore: item.quiz_score,
          completedSections: item.completed_sections || [],
        }
      })
    } else if (data.module_slug) {
      // Single module case
      progressMap[data.module_slug] = {
        moduleSlug: data.module_slug,
        completed: data.completed,
        lastAccessed: data.last_accessed,
        quizScore: data.quiz_score,
        completedSections: data.completed_sections || [],
      }
    }

    return progressMap
  } catch (error) {
    console.error("Error fetching user progress:", error)
    return {}
  }
}

// Mark a module as accessed
export async function markModuleAccessed(moduleSlug: string): Promise<void> {
  const userId = await getCurrentUserId()

  if (!userId) {
    return
  }

  try {
    const existingProgress = await getUserProgress(moduleSlug)
    const moduleProgress = existingProgress[moduleSlug]

    await fetch("/api/modules/progress", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        moduleSlug,
        progress: {
          completed: moduleProgress?.completed || false,
          quizScore: moduleProgress?.quizScore,
          completedSections: moduleProgress?.completedSections || [],
        },
      }),
    })
  } catch (error) {
    console.error("Error marking module as accessed:", error)
  }
}

// Mark a module as completed
export async function markModuleCompleted(moduleSlug: string, quizScore?: number): Promise<void> {
  const userId = await getCurrentUserId()

  if (!userId) {
    return
  }

  try {
    const existingProgress = await getUserProgress(moduleSlug)
    const moduleProgress = existingProgress[moduleSlug]

    await fetch("/api/modules/progress", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        moduleSlug,
        progress: {
          completed: true,
          quizScore: quizScore !== undefined ? quizScore : moduleProgress?.quizScore,
          completedSections: moduleProgress?.completedSections || ["all"],
        },
      }),
    })
  } catch (error) {
    console.error("Error marking module as completed:", error)
  }
}

// Mark a section as completed
export async function markSectionCompleted(moduleSlug: string, sectionId: string): Promise<void> {
  const userId = await getCurrentUserId()

  if (!userId) {
    return
  }

  try {
    const existingProgress = await getUserProgress(moduleSlug)
    const moduleProgress = existingProgress[moduleSlug]

    const completedSections = new Set(moduleProgress?.completedSections || [])
    completedSections.add(sectionId)

    await fetch("/api/modules/progress", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        moduleSlug,
        progress: {
          completed: moduleProgress?.completed || false,
          quizScore: moduleProgress?.quizScore,
          completedSections: Array.from(completedSections),
        },
      }),
    })
  } catch (error) {
    console.error("Error marking section as completed:", error)
  }
}

// Check if a module is completed
export async function isModuleCompleted(moduleSlug: string): Promise<boolean> {
  const progress = await getUserProgress(moduleSlug)
  return progress[moduleSlug]?.completed || false
}

// Get the completion percentage for a module
export async function getModuleCompletionPercentage(moduleSlug: string, totalSections: number): Promise<number> {
  const progress = await getUserProgress(moduleSlug)
  const moduleProgress = progress[moduleSlug]

  if (!moduleProgress) return 0
  if (moduleProgress.completed) return 100

  const completedSections = moduleProgress.completedSections?.length || 0
  return Math.round((completedSections / totalSections) * 100)
}

// Get all completed modules
export async function getCompletedModules(): Promise<string[]> {
  const progress = await getUserProgress()

  return Object.values(progress)
    .filter((module) => module.completed)
    .map((module) => module.moduleSlug)
}
