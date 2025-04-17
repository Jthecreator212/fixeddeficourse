import { NextResponse } from "next/server"
import { createServerSupabaseClient } from "@/lib/supabase-server"

interface AdminUser {
  user_id: string
}

interface User {
  id: string
  email: string
  full_name: string
  created_at: string
  last_sign_in: string
}

export async function GET() {
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

    // Check if the user is an admin
    const { data: adminData, error: adminError } = await supabase
      .from("admin_users")
      .select("*")
      .eq("user_id", session.user.id)
      .single()

    if (adminError || !adminData) {
      return NextResponse.json(
        { message: "Forbidden - You must be an admin to access this resource" },
        { status: 403 }
      )
    }

    // Fetch all users
    const { data: users, error: usersError } = await supabase
      .from("users")
      .select(`
        id,
        email,
        full_name,
        created_at,
        last_sign_in
      `)
      .order("created_at", { ascending: false })

    if (usersError) {
      console.error("Error fetching users:", usersError)
      return NextResponse.json(
        { message: "Failed to fetch users", error: usersError.message },
        { status: 500 }
      )
    }

    // Check which users are admins
    const { data: admins, error: adminsError } = await supabase
      .from("admin_users")
      .select("user_id")

    if (adminsError) {
      console.error("Error fetching admin status:", adminsError)
      return NextResponse.json(
        { message: "Failed to fetch admin status", error: adminsError.message },
        { status: 500 }
      )
    }

    // Create a set of admin user IDs for faster lookup
    const adminIds = new Set((admins as AdminUser[])?.map((admin: AdminUser) => admin.user_id) || [])

    // Enrich user data with admin status
    const enrichedUsers = (users as User[])?.map((user: User) => ({
      ...user,
      is_admin: adminIds.has(user.id)
    })) || []

    return NextResponse.json(enrichedUsers)
  } catch (error) {
    console.error("Error in users API:", error)
    return NextResponse.json(
      { message: "Internal server error", error: String(error) },
      { status: 500 }
    )
  }
} 