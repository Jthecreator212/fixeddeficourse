import { ModuleProgress, ModuleMetadata } from '@/lib/types/module'

// Progress storage key
const PROGRESS_STORAGE_KEY = 'module-progress'

// Initialize progress storage
function initializeProgress(): Record<string, ModuleProgress> {
  if (typeof window === 'undefined') return {}
  
  const storedProgress = localStorage.getItem(PROGRESS_STORAGE_KEY)
  if (!storedProgress) return {}
  
  const parsed = JSON.parse(storedProgress)
  // Convert string dates back to Date objects
  return Object.entries(parsed).reduce((acc, [key, value]) => {
    acc[key] = {
      ...value as ModuleProgress,
      lastAccessed: new Date((value as ModuleProgress).lastAccessed)
    }
    return acc
  }, {} as Record<string, ModuleProgress>)
}

// Save progress to localStorage
function saveProgress(progress: Record<string, ModuleProgress>): void {
  if (typeof window === 'undefined') return
  // Convert Date objects to ISO strings for storage
  const serialized = Object.entries(progress).reduce((acc, [key, value]) => {
    acc[key] = {
      ...value,
      lastAccessed: value.lastAccessed.toISOString()
    }
    return acc
  }, {} as Record<string, any>)
  localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(serialized))
}

// Get progress for a specific module
export function getModuleProgress(moduleId: string): ModuleProgress {
  const progress = initializeProgress()
  return progress[moduleId] || {
    moduleId,
    completed: false,
    lastAccessed: new Date(),
    timeSpent: 0,
    bookmarked: false
  }
}

// Update progress for a module
export function updateModuleProgress(
  moduleId: string,
  updates: Partial<ModuleProgress>
): void {
  const progress = initializeProgress()
  const currentProgress = progress[moduleId] || {
    moduleId,
    completed: false,
    lastAccessed: new Date(),
    timeSpent: 0,
    bookmarked: false
  }
  
  progress[moduleId] = {
    ...currentProgress,
    ...updates,
    lastAccessed: new Date()
  }
  
  saveProgress(progress)
}

// Mark a module as completed
export function markModuleCompleted(moduleId: string, quizScore?: number): void {
  updateModuleProgress(moduleId, {
    completed: true,
    quizScore
  })
}

// Add time spent on a module
export function addTimeSpent(moduleId: string, minutes: number): void {
  const progress = getModuleProgress(moduleId)
  updateModuleProgress(moduleId, {
    timeSpent: progress.timeSpent + minutes
  })
}

// Toggle bookmark status
export function toggleBookmark(moduleId: string): void {
  const progress = getModuleProgress(moduleId)
  updateModuleProgress(moduleId, {
    bookmarked: !progress.bookmarked
  })
}

// Get all bookmarked modules
export function getBookmarkedModules(): string[] {
  const progress = initializeProgress()
  return Object.entries(progress)
    .filter(([_, p]) => p.bookmarked)
    .map(([id]) => id)
}

// Get completion status for prerequisites
export function getPrerequisitesCompletion(
  moduleId: string,
  prerequisites: string[]
): { completed: string[]; pending: string[] } {
  const progress = initializeProgress()
  
  return prerequisites.reduce(
    (acc, prereqId) => {
      const prereqProgress = progress[prereqId]
      if (prereqProgress?.completed) {
        acc.completed.push(prereqId)
      } else {
        acc.pending.push(prereqId)
      }
      return acc
    },
    { completed: [] as string[], pending: [] as string[] }
  )
}

// Get overall course progress
export function getCourseProgress(): {
  totalModules: number
  completedModules: number
  totalTimeSpent: number
  completionPercentage: number
} {
  const progress = initializeProgress()
  const totalModules = Object.keys(progress).length
  const completedModules = Object.values(progress).filter(p => p.completed).length
  const totalTimeSpent = Object.values(progress).reduce((sum, p) => sum + p.timeSpent, 0)
  
  return {
    totalModules,
    completedModules,
    totalTimeSpent,
    completionPercentage: totalModules > 0 ? (completedModules / totalModules) * 100 : 0
  }
}

// Reset progress for a module
export function resetModuleProgress(moduleId: string): void {
  const progress = initializeProgress()
  delete progress[moduleId]
  saveProgress(progress)
}

// Reset all progress
export function resetAllProgress(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem(PROGRESS_STORAGE_KEY)
} 