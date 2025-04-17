export interface User {
  id: string
  email: string
  name: string
  is_admin: boolean
  created_at: string
  updated_at: string
}

export interface UserProfile {
  user_id: string
  bio?: string
  avatar_url?: string
  social_links?: Record<string, string>
}

export interface UserProgress {
  user_id: string
  completed_modules: string[]
  current_module: string
  total_progress: number
} 