import { NextResponse } from "next/server"
import { createServerSupabaseClient } from "@/lib/supabase-server"
import { AdminModuleFormData } from "@/lib/types"

export async function GET(
  request: Request,
  { params }: { params: { courseId: string; moduleId: string } }
) {
  try {
    const supabase = createServerSupabaseClient()

    // Get module details
    const { data, error } = await supabase
      .from("modules")
      .select("*")
      .eq("id", params.moduleId)
      .eq("course_id", params.courseId)
      .single()

    if (error) {
      console.error("Error fetching module:", error)
      return NextResponse.json(
        { message: "Failed to fetch module", error: error.message },
        { status: error.code === "PGRST116" ? 404 : 500 }
      )
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error in module API:", error)
    return NextResponse.json(
      { message: "Internal server error", error: String(error) },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { courseId: string; moduleId: string } }
) {
  try {
    const supabase = createServerSupabaseClient()
    const data = await request.json() as AdminModuleFormData

    // Get the current authenticated user to check permissions
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) {
      return NextResponse.json(
        { message: "Unauthorized - You must be signed in to perform this action" },
        { status: 401 }
      )
    }

    // Check if user is an admin
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

    // Update the module
    const { data: moduleData, error: moduleError } = await supabase
      .from("modules")
      .update({
        title: data.title,
        description: data.description,
        order: data.order,
        is_published: data.isPublished,
        content: data.content,
        updated_at: new Date().toISOString(),
        last_updated_by: session.user.id
      })
      .eq("id", params.moduleId)
      .eq("course_id", params.courseId)
      .select()
      .single()

    if (moduleError) {
      console.error("Error updating module:", moduleError)
      return NextResponse.json(
        { message: "Failed to update module", error: moduleError.message },
        { status: 500 }
      )
    }

    return NextResponse.json(moduleData)
  } catch (error) {
    console.error("Error in module update API:", error)
    return NextResponse.json(
      { message: "Internal server error", error: String(error) },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { courseId: string; moduleId: string } }
) {
  try {
    const supabase = createServerSupabaseClient()

    // Get the current authenticated user to check permissions
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) {
      return NextResponse.json(
        { message: "Unauthorized - You must be signed in to perform this action" },
        { status: 401 }
      )
    }

    // Check if user is an admin
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

    // Delete the module
    const { error: moduleError } = await supabase
      .from("modules")
      .delete()
      .eq("id", params.moduleId)
      .eq("course_id", params.courseId)

    if (moduleError) {
      console.error("Error deleting module:", moduleError)
      return NextResponse.json(
        { message: "Failed to delete module", error: moduleError.message },
        { status: 500 }
      )
    }

    return NextResponse.json({ message: "Module deleted successfully" })
  } catch (error) {
    console.error("Error in module deletion API:", error)
    return NextResponse.json(
      { message: "Internal server error", error: String(error) },
      { status: 500 }
    )
  }
} 