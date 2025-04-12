import { NextResponse } from "next/server"
import { getModules } from "@/lib/modules"

export async function GET() {
  try {
    const modules = getModules()

    // Ensure we always return an array
    const safeModules = Array.isArray(modules) ? modules : []

    return NextResponse.json({ modules: safeModules })
  } catch (error) {
    console.error("Error fetching modules:", error)
    return NextResponse.json({ error: "Failed to fetch modules", modules: [] }, { status: 500 })
  }
}
