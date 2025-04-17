import { NextResponse } from "next/server"
import { createServerSupabaseClient } from "@/lib/supabase-server"

export async function PATCH(
  request: Request,
  { params }: { params: { userId: string } }
) {
  try {
    if (!params.userId) {
      return NextResponse.json(
        { message: "User ID is required" },
        { status: 400 }
      )
    }

    const supabase = createServerSupabaseClient()
    const { is_admin } = await request.json()

    // Check if the value is a boolean
    if (typeof is_admin !== 'boolean') {
      return NextResponse.json(
        { message: "is_admin must be a boolean value" },
        { status: 400 }
      )
    }

    // Get the current authenticated user
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) {
      return NextResponse.json(
        { message: "Unauthorized - You must be signed in to perform this action" },
        { status: 401 }
      )
    }

    // Check if the current user is an admin
    const { data: adminData, error: adminError } = await supabase
      .from("admin_users")
      .select("*")
      .eq("user_id", session.user.id)
      .single()

    if (adminError || !adminData) {
      return NextResponse.json(
        { message: "Forbidden - You must be an admin to perform this action" },
        { status: 403 }
      )
    }

    // Check if the target user exists
    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("id, email")
      .eq("id", params.userId)
      .single()

    if (userError || !userData) {
      return NextResponse.json(
        { message: "User not found", error: userError?.message },
        { status: 404 }
      )
    }

    // Update the user's admin status
    if (is_admin) {
      // Check if already an admin
      const { data: existingAdmin } = await supabase
        .from("admin_users")
        .select("*")
        .eq("user_id", params.userId)
        .single()

      if (!existingAdmin) {
        // Add to admin_users table
        const { error: insertError } = await supabase
          .from("admin_users")
          .insert({
            user_id: params.userId,
            added_by: session.user.id,
            added_at: new Date().toISOString()
          })

        if (insertError) {
          return NextResponse.json(
            { message: "Failed to promote user to admin", error: insertError.message },
            { status: 500 }
          )
        }
      }
    } else {
      // Remove from admin_users table
      const { error: deleteError } = await supabase
        .from("admin_users")
        .delete()
        .eq("user_id", params.userId)

      if (deleteError) {
        return NextResponse.json(
          { message: "Failed to remove admin status", error: deleteError.message },
          { status: 500 }
        )
      }
    }

    return NextResponse.json({
      message: is_admin ? "User successfully promoted to admin" : "Admin status successfully removed",
      userId: params.userId,
      is_admin
    })
  } catch (error) {
    console.error("Error updating user role:", error)
    return NextResponse.json(
      { message: "Internal server error", error: String(error) },
      { status: 500 }
    )
  }
} 