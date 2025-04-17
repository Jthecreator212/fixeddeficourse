import { ModuleContent } from '@/types/module'

export function parseModuleContent(content: string): ModuleContent[] {
  try {
    return JSON.parse(content)
  } catch (error) {
    console.error('Error parsing module content:', error)
    return []
  }
}

export function validateModuleContent(content: ModuleContent[]): boolean {
  return content.every(item => {
    if (!item.id || !item.type || !item.content) return false
    if (item.type === 'quiz' && !item.metadata?.questions) return false
    return true
  })
}

export function getModuleProgress(content: ModuleContent[], completedItems: string[]): number {
  if (!content.length) return 0
  const completed = content.filter(item => completedItems.includes(item.id)).length
  return (completed / content.length) * 100
} 