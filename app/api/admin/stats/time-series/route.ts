import { NextResponse } from "next/server"
import { createServerSupabaseClient } from "@/lib/supabase-server"

interface TimeSeriesStats {
  users: {
    date: string
    count: number
  }[]
  revenue: {
    date: string
    amount: number
  }[]
}

interface User {
  created_at: string
}

interface Transaction {
  amount: number
  created_at: string
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const startDate = searchParams.get("startDate")
    const endDate = searchParams.get("endDate")

    if (!startDate || !endDate) {
      return NextResponse.json(
        { message: "Start date and end date are required" },
        { status: 400 }
      )
    }

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

    // Fetch user growth data
    const { data: userData } = await supabase
      .from("users")
      .select("created_at")
      .gte("created_at", startDate)
      .lte("created_at", endDate)
      .order("created_at")

    // Fetch revenue data
    const { data: revenueData } = await supabase
      .from("transactions")
      .select("amount, created_at")
      .gte("created_at", startDate)
      .lte("created_at", endDate)
      .order("created_at")

    // Process user data into daily counts
    const userCounts = new Map<string, number>()
    userData?.forEach((user: User) => {
      const date = new Date(user.created_at).toISOString().split("T")[0]
      userCounts.set(date, (userCounts.get(date) || 0) + 1)
    })

    // Process revenue data into daily totals
    const revenueTotals = new Map<string, number>()
    revenueData?.forEach((transaction: Transaction) => {
      const date = new Date(transaction.created_at).toISOString().split("T")[0]
      revenueTotals.set(date, (revenueTotals.get(date) || 0) + (transaction.amount || 0))
    })

    // Convert maps to arrays
    const users = Array.from(userCounts.entries()).map(([date, count]) => ({
      date,
      count
    }))

    const revenue = Array.from(revenueTotals.entries()).map(([date, amount]) => ({
      date,
      amount
    }))

    return NextResponse.json({ users, revenue })
  } catch (error) {
    console.error("Error in time series stats API:", error)
    return NextResponse.json(
      { message: "Internal server error", error: String(error) },
      { status: 500 }
    )
  }
} 