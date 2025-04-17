import { Module } from '@/types/module'
import { supabase } from '../supabase'

export async function getModuleById(id: string): Promise<Module | null> {
  const { data, error } = await supabase
    .from('modules')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching module:', error)
    return null
  }

  return data
}

export async function getAllModules(): Promise<Module[]> {
  const { data, error } = await supabase
    .from('modules')
    .select('*')
    .order('order')

  if (error) {
    console.error('Error fetching modules:', error)
    return []
  }

  return data || []
}

export async function createModule(module: Omit<Module, 'id' | 'created_at' | 'updated_at'>): Promise<Module | null> {
  const { data, error } = await supabase
    .from('modules')
    .insert(module)
    .select()
    .single()

  if (error) {
    console.error('Error creating module:', error)
    return null
  }

  return data
} 