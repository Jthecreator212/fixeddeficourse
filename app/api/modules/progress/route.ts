import { type NextRequest, NextResponse } from "next/server"
import { createServerSupabaseClient } from "@/lib/supabase-server"

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerSupabaseClient()

    // Get user session
    const {
      data: { session },
    } = await supabase.auth.getSession()

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const userId = session.user.id
    const moduleSlug = request.nextUrl.searchParams.get("moduleSlug")

    // Query for specific module or all modules
    let query = supabase.from("module_progress").select("*").eq("user_id", userId)

    if (moduleSlug) {
      query = query.eq("module_slug", moduleSlug)
    }

    const { data, error } = await query

    if (error) {
      throw error
    }

    return NextResponse.json({ data }, { status: 200 })
  } catch (error) {
    console.error("Error fetching module progress:", error)
    return NextResponse.json({ error: "Failed to fetch module progress" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = createServerSupabaseClient()

    // Get user session
    const {
      data: { session },
    } = await supabase.auth.getSession()

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const userId = session.user.id
    const { moduleSlug, progress } = await request.json()

    if (!moduleSlug || !progress) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Check if record exists
    const { data: existingProgress } = await supabase
      .from("module_progress")
      .select("*")
      .eq("user_id", userId)
      .eq("module_slug", moduleSlug)
      .single()

    let result

    if (existingProgress) {
      // Update existing record
      result = await supabase
        .from("module_progress")
        .update({
          completed: progress.completed,
          quiz_score: progress.quizScore,
          completed_sections: progress.completedSections,
          last_accessed: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        })
        .eq("id", existingProgress.id)
        .select()
    } else {
      // Insert new record
      result = await supabase
        .from("module_progress")
        .insert({
          user_id: userId,
          module_slug: moduleSlug,
          completed: progress.completed || false,
          quiz_score: progress.quizScore || null,
          completed_sections: progress.completedSections || [],
          last_accessed: new Date().toISOString(),
        })
        .select()
    }

    if (result.error) {
      throw result.error
    }

    return NextResponse.json({ data: result.data[0] }, { status: 200 })
  } catch (error) {
    console.error("Error updating module progress:", error)
    return NextResponse.json({ error: "Failed to update module progress" }, { status: 500 })
  }
}
