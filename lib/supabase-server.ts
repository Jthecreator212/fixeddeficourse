import { createClient } from "@supabase/supabase-js"
import { cookies } from "next/headers"
import type { Database } from "./database.types"
import { logger } from "./logger"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// Create a server-side client with admin privileges
export const createServerSupabaseClient = () => {
  if (!supabaseUrl || !supabaseServiceKey) {
    logger.warn("Server Supabase URL or service key is missing", {
      context: "SupabaseServer",
      data: { 
        hasUrl: !!supabaseUrl, 
        hasServiceKey: !!supabaseServiceKey,
        env: process.env.NODE_ENV
      }
    })
    throw new Error("Supabase server configuration is missing")
  }

  logger.debug("Creating server-side admin Supabase client", {
    context: "SupabaseServer",
    data: {
      env: process.env.NODE_ENV,
      hasUrl: !!supabaseUrl,
      hasServiceKey: !!supabaseServiceKey
    }
  })

  return createClient<Database>(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
      storage: {
        getItem: async (key) => {
          const cookieStore = await cookies()
          const cookie = cookieStore.get(key)
          return cookie?.value ?? null
        },
        setItem: async (key, value) => {
          const cookieStore = await cookies()
          cookieStore.set(key, value, { path: '/' })
        },
        removeItem: async (key) => {
          const cookieStore = await cookies()
          cookieStore.delete(key)
        }
      }
    }
  })
}

// Create a server-side client with regular privileges
export const createServerClient = () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    logger.warn("Supabase URL or key is missing", {
      context: "SupabaseServer",
      data: { 
        hasUrl: !!supabaseUrl, 
        hasKey: !!supabaseAnonKey,
        env: process.env.NODE_ENV
      }
    })
    throw new Error("Supabase configuration is missing")
  }

  logger.debug("Creating server Supabase client", {
    context: "SupabaseServer",
    data: {
      env: process.env.NODE_ENV,
      hasUrl: !!supabaseUrl,
      hasKey: !!supabaseAnonKey
    }
  })

  return createClient<Database>(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
      storage: {
        getItem: async (key) => {
          const cookieStore = await cookies()
          const cookie = cookieStore.get(key)
          return cookie?.value ?? null
        },
        setItem: async (key, value) => {
          const cookieStore = await cookies()
          cookieStore.set(key, value, { path: '/' })
        },
        removeItem: async (key) => {
          const cookieStore = await cookies()
          cookieStore.delete(key)
        }
      }
    }
  })
} 