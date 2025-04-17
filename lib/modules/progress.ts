import { ModuleProgress } from '@/types/module'
import { supabase } from '../supabase'

export async function getModuleProgress(userId: string, moduleId: string): Promise<ModuleProgress | null> {
  const { data, error } = await supabase
    .from('module_progress')
    .select('*')
    .eq('user_id', userId)
    .eq('module_id', moduleId)
    .single()

  if (error) {
    console.error('Error fetching module progress:', error)
    return null
  }

  return data
}

export async function updateModuleProgress(
  userId: string,
  moduleId: string,
  progress: Partial<ModuleProgress>
): Promise<ModuleProgress | null> {
  const { data, error } = await supabase
    .from('module_progress')
    .upsert({
      user_id: userId,
      module_id: moduleId,
      ...progress,
      last_accessed: new Date().toISOString()
    })
    .select()
    .single()

  if (error) {
    console.error('Error updating module progress:', error)
    return null
  }

  return data
} 