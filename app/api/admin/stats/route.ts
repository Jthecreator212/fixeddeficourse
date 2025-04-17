import { NextResponse } from "next/server"
import { createServerSupabaseClient } from "@/lib/supabase-server"

interface Course {
  id: string;
  is_published: boolean;
}

interface Transaction {
  amount: number;
  created_at: string;
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

    // Execute all the queries in parallel for better performance
    const [
      usersResult,
      activeUsersResult,
      newUsersResult,
      coursesResult,
      modulesResult,
      revenueResult
    ] = await Promise.all([
      // Total users count
      supabase.from("users").select("id", { count: "exact", head: true }),
      
      // Active users (users who signed in within the last 30 days)
      supabase.from("users")
        .select("id", { count: "exact", head: true })
        .gte("last_sign_in", new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()),
      
      // New users in the last 30 days
      supabase.from("users")
        .select("id", { count: "exact", head: true })
        .gte("created_at", new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()),
      
      // Courses with published status
      supabase.from("courses").select("id, is_published"),
      
      // Total modules count
      supabase.from("modules").select("id", { count: "exact", head: true }),
      
      // Revenue data (assuming you have a transactions or subscriptions table)
      // This is a placeholder - adjust based on your actual schema
      supabase.from("transactions")
        .select("amount, created_at")
        .gte("created_at", new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString())
    ])

    // Calculate course stats
    const totalCourses = coursesResult.data ? coursesResult.data.length : 0
    const totalPublishedCourses = coursesResult.data?.filter(
      (course: Course) => course.is_published
    ).length || 0

    // Calculate revenue stats
    let totalRevenue = 0
    let currentMonthRevenue = 0
    let previousMonthRevenue = 0
    
    // Current month start
    const currentMonthStart = new Date()
    currentMonthStart.setDate(1)
    currentMonthStart.setHours(0, 0, 0, 0)
    
    // Previous month start
    const previousMonthStart = new Date(currentMonthStart)
    previousMonthStart.setMonth(previousMonthStart.getMonth() - 1)
    
    // Previous month end
    const previousMonthEnd = new Date(currentMonthStart)
    previousMonthEnd.setSeconds(previousMonthEnd.getSeconds() - 1)
    
    if (revenueResult.data) {
      revenueResult.data.forEach((transaction: Transaction) => {
        const transactionDate = new Date(transaction.created_at)
        const amount = transaction.amount || 0
        
        // Total revenue
        totalRevenue += amount
        
        // Current month revenue
        if (transactionDate >= currentMonthStart) {
          currentMonthRevenue += amount
        } 
        // Previous month revenue
        else if (transactionDate >= previousMonthStart && transactionDate <= previousMonthEnd) {
          previousMonthRevenue += amount
        }
      })
    }
    
    // Calculate growth rates
    const userGrowthRate = calculateGrowthRate(
      (usersResult.count || 0) - (newUsersResult.count || 0), 
      usersResult.count || 0
    )
    
    const revenueGrowthRate = calculateGrowthRate(
      previousMonthRevenue,
      currentMonthRevenue
    )

    // Compile stats
    const stats = {
      users: {
        total: usersResult.count || 0,
        active: activeUsersResult.count || 0,
        new: newUsersResult.count || 0,
        growthRate: userGrowthRate
      },
      courses: {
        total: totalCourses,
        published: totalPublishedCourses,
        draft: totalCourses - totalPublishedCourses
      },
      modules: {
        total: modulesResult.count || 0
      },
      revenue: {
        total: totalRevenue,
        monthly: currentMonthRevenue,
        growthRate: revenueGrowthRate
      }
    }

    return NextResponse.json(stats)
  } catch (error) {
    console.error("Error in stats API:", error)
    return NextResponse.json(
      { message: "Internal server error", error: String(error) },
      { status: 500 }
    )
  }
}

// Helper function to calculate growth rate percentage
function calculateGrowthRate(previous: number, current: number): number {
  if (previous === 0) return current > 0 ? 100 : 0
  return Number(((current - previous) / previous * 100).toFixed(1))
} 