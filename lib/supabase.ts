import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import type { Database as SupabaseDatabase } from './database.types'
import { logger } from './logger'

// Type definitions for our database tables
export type Database = SupabaseDatabase

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Helper function to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  const isConfigured = Boolean(supabaseUrl && supabaseAnonKey)
  logger.debug("Supabase configuration check", {
    context: "SupabaseClient",
    data: { 
      isConfigured, 
      hasUrl: !!supabaseUrl, 
      hasKey: !!supabaseAnonKey,
      urlLength: supabaseUrl?.length,
      keyLength: supabaseAnonKey?.length,
      env: process.env.NODE_ENV
    }
  })
  return isConfigured
}

// Create a dummy client for development/preview when keys aren't available
const createDummyClient = () => {
  logger.warn("Using dummy Supabase client", {
    context: "SupabaseClient",
    data: { 
      reason: "Authentication and database features will not work",
      env: process.env.NODE_ENV,
      hasUrl: !!supabaseUrl,
      hasKey: !!supabaseAnonKey
    }
  })

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

// Create a client-side Supabase instance
export const createBrowserClient = () => {
  if (!isSupabaseConfigured()) {
    return createDummyClient()
  }
  
  logger.debug("Creating browser Supabase client", {
    context: "SupabaseClient",
    data: {
      env: process.env.NODE_ENV,
      hasUrl: !!supabaseUrl,
      hasKey: !!supabaseAnonKey
    }
  })
  
  return createClientComponentClient<Database>()
}

// Export a singleton instance for convenience
export const supabase = createBrowserClient()
