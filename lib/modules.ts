import { getAllModuleMetadata, getModuleMetadata } from "./module-registry"

// This is a mock data file that would typically be connected to a database or API
// In a real application, you would fetch this data from a backend service

export interface Module {
  slug: string
  title: string
  description: string
  level: "Beginner" | "Intermediate" | "Advanced"
  duration: string
  topics: string[]
  content: {
    theory: string
    examples: {
      title: string
      code: string
      language: string
      description: string
    }[]
    simulation?: {
      type: string
      config: any
    }
  }
}

// Export the functions to get module data
export function getModules() {
  const modules = getAllModuleMetadata()
  // Ensure we always return an array, even if getAllModuleMetadata fails
  return Array.isArray(modules) ? modules : []
}

export function getModuleBySlug(slug: string) {
  if (!slug) return null
  return getModuleMetadata(slug)
}
