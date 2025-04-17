export interface Module {
  id: string
  title: string
  description: string
  content: ModuleContent[]
  order: number
  created_at: string
  updated_at: string
}

export interface ModuleContent {
  id: string
  type: 'text' | 'code' | 'quiz' | 'video'
  content: string
  metadata?: Record<string, any>
}

export interface ModuleProgress {
  module_id: string
  user_id: string
  completed: boolean
  progress: number
  last_accessed: string
}

export interface ModuleQuiz {
  id: string
  module_id: string
  questions: QuizQuestion[]
  passing_score: number
}

export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correct_answer: number
  explanation: string
} 