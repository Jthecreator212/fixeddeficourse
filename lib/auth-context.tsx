"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import type { Session, User, AuthChangeEvent } from "@supabase/supabase-js"
import { createBrowserClient } from "./supabase"
import type { Database } from "./database.types"
import { useRouter } from "next/navigation"
import { logger } from "./logger"

type AuthContextType = {
  user: User | null
  session: Session | null
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, fullName: string) => Promise<void>
  signOut: () => Promise<void>
  resetPassword: (email: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const supabase = createBrowserClient()
  const router = useRouter()

  useEffect(() => {
    logger.debug("Initializing auth state", {
      context: "AuthProvider",
      data: { timestamp: new Date().toISOString() }
    })

    // Check active session
    supabase.auth.getSession().then(({ data: { session } }: { data: { session: Session | null } }) => {
      logger.debug("Retrieved initial session", {
        context: "AuthProvider",
        data: { 
          hasSession: !!session,
          sessionExpiry: session?.expires_at,
          timestamp: new Date().toISOString()
        }
      })
      setSession(session)
      setUser(session?.user ?? null)
      setIsLoading(false)
    })

    // Listen for changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event: AuthChangeEvent, session: Session | null) => {
      logger.debug("Auth state changed", {
        context: "AuthProvider",
        data: { 
          event, 
          hasSession: !!session,
          sessionExpiry: session?.expires_at,
          timestamp: new Date().toISOString()
        }
      })

      setSession(session)
      setUser(session?.user ?? null)
      setIsLoading(false)

      // Handle sign out event
      if (event === 'SIGNED_OUT') {
        logger.info("User signed out, clearing auth state", {
          context: "AuthProvider",
          data: { timestamp: new Date().toISOString() }
        })
        // Clear all auth-related storage
        localStorage.clear()
        sessionStorage.clear()
        
        // Clear specific auth cookies
        document.cookie.split(";").forEach((c) => {
          document.cookie = c
            .replace(/^ +/, "")
            .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/")
        })
      }
    })

    return () => {
      logger.debug("Cleaning up auth subscription", {
        context: "AuthProvider",
        data: { timestamp: new Date().toISOString() }
      })
      subscription.unsubscribe()
    }
  }, [supabase])

  const signIn = async (email: string, password: string) => {
    try {
      setIsLoading(true)
      logger.info("Attempting to sign in", {
        context: "AuthProvider",
        data: { 
          email: email.substring(0, 3) + '...', // Log partial email for privacy
          timestamp: new Date().toISOString(),
          hasPassword: !!password
        }
      })
      
      const { data, error } = await supabase.auth.signInWithPassword({ 
        email, 
        password
      })

      if (error) {
        logger.error("Sign in error", {
          context: "AuthProvider",
          data: { 
            error,
            errorMessage: error.message,
            errorStatus: error.status,
            timestamp: new Date().toISOString(),
            errorType: error.name || "AuthError"
          }
        })
        throw error
      }

      if (!data.session) {
        const error = new Error("Authentication failed. Please try again.")
        logger.error("No session returned after sign in", {
          context: "AuthProvider",
          data: { 
            error,
            timestamp: new Date().toISOString(),
            errorType: "SessionError"
          }
        })
        throw error
      }

      logger.info("Sign in successful", {
        context: "AuthProvider",
        data: { 
          sessionId: data.session.access_token.substring(0, 8) + '...', // Log partial token for privacy
          sessionExpiry: data.session.expires_at,
          timestamp: new Date().toISOString(),
          userId: data.session.user.id
        }
      })

      // Update session and user state
      setSession(data.session)
      setUser(data.session.user)
      
      // Store the session in localStorage for persistence
      localStorage.setItem('supabase.auth.token', JSON.stringify(data.session))
      
      // Force a refresh of the auth state and wait for it to complete
      const { data: { session: refreshedSession } } = await supabase.auth.refreshSession()
      
      if (refreshedSession) {
        setSession(refreshedSession)
        setUser(refreshedSession.user)
        localStorage.setItem('supabase.auth.token', JSON.stringify(refreshedSession))
      }
      
      // Log the updated auth state
      logger.info("Auth state updated after sign in", {
        context: "AuthProvider",
        data: {
          hasSession: !!refreshedSession,
          hasUser: !!refreshedSession?.user,
          timestamp: new Date().toISOString()
        }
      })

      // Return the session to ensure the sign-in page waits for the state update
      return refreshedSession || data.session
      
    } catch (error) {
      logger.error("Sign in process failed", {
        context: "AuthProvider",
        data: { 
          error,
          errorMessage: error instanceof Error ? error.message : 'Unknown error',
          timestamp: new Date().toISOString()
        }
      })
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const signUp = async (email: string, password: string, fullName: string) => {
    logger.info("Attempting to sign up", {
      context: "AuthProvider",
      data: { 
        email: email.substring(0, 3) + '...', // Log partial email for privacy
        fullName,
        timestamp: new Date().toISOString()
      }
    })

    setIsLoading(true)
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    })
    setIsLoading(false)

    if (error) {
      logger.error("Sign up error", {
        context: "AuthProvider",
        data: { 
          error,
          errorMessage: error.message,
          errorStatus: error.status,
          timestamp: new Date().toISOString()
        }
      })
      throw error
    }

    logger.info("Sign up successful", {
      context: "AuthProvider",
      data: { 
        email: email.substring(0, 3) + '...',
        timestamp: new Date().toISOString()
      }
    })
  }

  const signOut = async () => {
    logger.info("Attempting to sign out", {
      context: "AuthProvider",
      data: { timestamp: new Date().toISOString() }
    })

    setIsLoading(true)
    const { error } = await supabase.auth.signOut()
    setIsLoading(false)

    if (error) {
      logger.error("Sign out error", {
        context: "AuthProvider",
        data: { 
          error,
          errorMessage: error.message,
          timestamp: new Date().toISOString()
        }
      })
      throw error
    }

    logger.info("Sign out successful", {
      context: "AuthProvider",
      data: { timestamp: new Date().toISOString() }
    })

    // Clear auth state
    setSession(null)
    setUser(null)
    
    // Clear storage
    localStorage.clear()
    sessionStorage.clear()
    
    // Clear cookies
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/")
    })
  }

  const resetPassword = async (email: string) => {
    logger.info("Attempting to reset password", {
      context: "AuthProvider",
      data: { 
        email: email.substring(0, 3) + '...',
        timestamp: new Date().toISOString()
      }
    })

    setIsLoading(true)
    const { error } = await supabase.auth.resetPasswordForEmail(email)
    setIsLoading(false)

    if (error) {
      logger.error("Password reset error", {
        context: "AuthProvider",
        data: { 
          error,
          errorMessage: error.message,
          timestamp: new Date().toISOString()
        }
      })
      throw error
    }

    logger.info("Password reset email sent", {
      context: "AuthProvider",
      data: { 
        email: email.substring(0, 3) + '...',
        timestamp: new Date().toISOString()
      }
    })
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        isLoading,
        signIn,
        signUp,
        signOut,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
