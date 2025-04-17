import { NextResponse } from "next/server"
import { createServerSupabaseClient } from "@/lib/supabase-server"

export async function POST() {
  try {
    const supabase = createServerSupabaseClient()

    // Get the current authenticated user
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) {
      return NextResponse.json(
        { message: "Unauthorized - You must be signed in to access this resource" },
        { status: 401 }
      )
    }

    // Check if this user is already an admin
    const { data: existingAdmin, error: checkError } = await supabase
      .from("admin_users")
      .select("*")
      .eq("user_id", session.user.id)
      .single()

    if (existingAdmin) {
      return NextResponse.json({ 
        success: true, 
        message: "User is already an admin",
        userId: session.user.id
      })
    }

    // Make the user an admin
    const { data, error } = await supabase
      .from("admin_users")
      .insert([
        { user_id: session.user.id }
      ])
      .select()

    if (error) {
      console.error("Error making user an admin:", error)
      return NextResponse.json(
        { message: "Failed to make user an admin", error: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({ 
      success: true, 
      message: "User is now an admin",
      userId: session.user.id 
    })
  } catch (error) {
    console.error("Error in admin creation API:", error)
    return NextResponse.json(
      { message: "Internal server error", error: String(error) },
      { status: 500 }
    )
  }
} 