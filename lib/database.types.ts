export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      modules: {
        Row: {
          id: string
          title: string
          description: string
          order: number
          is_published: boolean
          content: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          order: number
          is_published?: boolean
          content: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          order?: number
          is_published?: boolean
          content?: Json
          created_at?: string
          updated_at?: string
        }
      }
      user_progress: {
        Row: {
          id: string
          user_id: string
          module_id: string
          completed: boolean
          last_accessed: string
          quiz_score: number | null
        }
        Insert: {
          id?: string
          user_id: string
          module_id: string
          completed?: boolean
          last_accessed?: string
          quiz_score?: number | null
        }
        Update: {
          id?: string
          user_id?: string
          module_id?: string
          completed?: boolean
          last_accessed?: string
          quiz_score?: number | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
} 