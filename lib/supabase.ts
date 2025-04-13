import { createClient } from "@supabase/supabase-js"
import { Database } from './database.types'

// Type definitions for our database tables
export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          full_name: string
          created_at: string
          updated_at: string
          avatar_url: string | null
        }
        Insert: {
          id?: string
          email: string
          full_name?: string
          created_at?: string
          updated_at?: string
          avatar_url?: string | null
        }
        Update: {
          id?: string
          email?: string
          full_name?: string
          created_at?: string
          updated_at?: string
          avatar_url?: string | null
        }
      }
      module_progress: {
        Row: {
          id: string
          user_id: string
          module_slug: string
          completed: boolean
          quiz_score: number | null
          completed_sections: string[]
          last_accessed: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          module_slug: string
          completed?: boolean
          quiz_score?: number | null
          completed_sections?: string[]
          last_accessed?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          module_slug?: string
          completed?: boolean
          quiz_score?: number | null
          completed_sections?: string[]
          last_accessed?: string
          created_at?: string
          updated_at?: string
        }
      }
      certificates: {
        Row: {
          id: string
          user_id: string
          course_id: string
          issued_at: string
          certificate_url: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          course_id: string
          issued_at?: string
          certificate_url: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          course_id?: string
          issued_at?: string
          certificate_url?: string
          created_at?: string
        }
      }
    }
  }
}

// Check if we're in a browser environment
const isBrowser = typeof window !== "undefined"

// Get Supabase URL and key with fallbacks
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL')
}
if (!supabaseAnonKey) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY')
}

// Create the Supabase client
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: isBrowser,
    autoRefreshToken: isBrowser,
  },
})

// Create a server-side client with admin privileges
export const getServiceSupabase = () => {
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseServiceKey) {
    throw new Error('Missing env.SUPABASE_SERVICE_ROLE_KEY')
  }

  return createClient<Database>(supabaseUrl, supabaseServiceKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  })
}

// Create a dummy client for development/preview when keys aren't available
const createDummyClient = () => {
  console.warn("Using dummy Supabase client. Authentication and database features will not work.")

  // Return a mock client with no-op methods
  return {
    auth: {
      getSession: async () => ({ data: { session: null }, error: null }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      signInWithPassword: async () => ({ data: null, error: new Error("Dummy client") }),
      signUp: async () => ({ data: null, error: new Error("Dummy client") }),
      signOut: async () => ({ error: null }),
      resetPasswordForEmail: async () => ({ error: null }),
    },
    from: () => ({
      select: () => ({ data: [], error: null }),
      insert: () => ({ data: null, error: null }),
      update: () => ({ data: null, error: null }),
      delete: () => ({ data: null, error: null }),
    }),
  } as any
}

// Create a function to get the Supabase client
export const getSupabaseClient = () => {
  // Check if we have the required configuration
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn("Supabase URL or key is missing. Using dummy client.")
    return createDummyClient()
  }

  // Create and return the real client
  return createClient<Database>(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: isBrowser,
      autoRefreshToken: isBrowser,
    },
  })
}

// Export a singleton instance for convenience
export const supabaseSingleton = getSupabaseClient()

// Create a server-side client with admin privileges
export const createServerSupabaseClient = () => {
  const supabaseServerUrl = process.env.SUPABASE_URL || supabaseUrl
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseServerUrl || !supabaseServiceKey) {
    console.warn("Server Supabase URL or service key is missing. Using dummy client.")
    return createDummyClient()
  }

  return createClient<Database>(supabaseServerUrl, supabaseServiceKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  })
}

// Helper function to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return !!supabaseUrl && !!supabaseAnonKey
}
