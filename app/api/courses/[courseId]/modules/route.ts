import { NextResponse } from "next/server"
import { createServerSupabaseClient } from "@/lib/supabase-server"
import { AdminModuleFormData } from "@/lib/types"

export async function POST(
  request: Request,
  { params }: { params: { courseId: string } }
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

    // Insert the module into the database
    const { data: moduleData, error: moduleError } = await supabase
      .from("modules")
      .insert({
        course_id: params.courseId,
        title: data.title,
        description: data.description,
        order: data.order,
        is_published: data.isPublished,
        content: data.content,
        created_by: session.user.id
      })
      .select()
      .single()

    if (moduleError) {
      console.error("Error creating module:", moduleError)
      return NextResponse.json(
        { message: "Failed to create module", error: moduleError.message },
        { status: 500 }
      )
    }

    return NextResponse.json(moduleData, { status: 201 })
  } catch (error) {
    console.error("Error in module creation API:", error)
    return NextResponse.json(
      { message: "Internal server error", error: String(error) },
      { status: 500 }
    )
  }
}

export async function GET(
  request: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const supabase = createServerSupabaseClient()

    // Get modules for the course
    const { data, error } = await supabase
      .from("modules")
      .select("*")
      .eq("course_id", params.courseId)
      .order("order")

    if (error) {
      console.error("Error fetching modules:", error)
      return NextResponse.json(
        { message: "Failed to fetch modules", error: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error in modules API:", error)
    return NextResponse.json(
      { message: "Internal server error", error: String(error) },
      { status: 500 }
    )
  }
} 