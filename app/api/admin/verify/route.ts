import { NextResponse } from "next/server"
import { createServerSupabaseClient } from "@/lib/supabase-server"
import { logger } from "@/lib/logger"

export async function GET() {
  try {
    logger.info("Starting admin verification", {
      context: "AdminVerify",
      data: { timestamp: new Date().toISOString() }
    })

    const supabase = createServerSupabaseClient()

    // Get the current authenticated user
    const { data: { session }, error: sessionError } = await supabase.auth.getSession()
    
    if (sessionError) {
      logger.error("Error getting session", {
        context: "AdminVerify",
        data: { 
          error: sessionError,
          timestamp: new Date().toISOString()
        }
      })
      return NextResponse.json(
        { message: "Error verifying session" },
        { status: 500 }
      )
    }

    if (!session) {
      logger.warn("Admin verification failed - No session", {
        context: "AdminVerify",
        data: { timestamp: new Date().toISOString() }
      })
      return NextResponse.json(
        { message: "Unauthorized - You must be signed in to access this resource" },
        { status: 401 }
      )
    }

    logger.debug("Checking admin status for user", {
      context: "AdminVerify",
      data: { 
        userId: session.user.id,
        email: session.user.email?.substring(0, 3) + '...',
        timestamp: new Date().toISOString()
      }
    })

    // Check if the user is an admin
    const { data: adminData, error: adminError } = await supabase
      .from("admin_users")
      .select("*")
      .eq("user_id", session.user.id)
      .single()

    if (adminError) {
      logger.error("Error checking admin status", {
        context: "AdminVerify",
        data: { 
          error: adminError,
          userId: session.user.id,
          timestamp: new Date().toISOString()
        }
      })
      return NextResponse.json(
        { message: "Error verifying admin status" },
        { status: 500 }
      )
    }

    if (!adminData) {
      logger.warn("Admin verification failed - Not an admin", {
        context: "AdminVerify",
        data: { 
          userId: session.user.id,
          timestamp: new Date().toISOString()
        }
      })
      return NextResponse.json(
        { message: "Forbidden - You must be an admin to access this resource" },
        { status: 403 }
      )
    }

    logger.info("Admin verification successful", {
      context: "AdminVerify",
      data: { 
        userId: session.user.id,
        email: session.user.email?.substring(0, 3) + '...',
        timestamp: new Date().toISOString()
      }
    })

    // User is an admin
    return NextResponse.json({
      isAdmin: true,
      userId: session.user.id,
      email: session.user.email
    })
  } catch (error) {
    logger.error("Error in admin verification API", {
      context: "AdminVerify",
      data: { 
        error,
        errorMessage: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      }
    })
    return NextResponse.json(
      { message: "Internal server error", error: String(error) },
      { status: 500 }
    )
  }
} 