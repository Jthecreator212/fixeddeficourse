import { isSupabaseConfigured } from "@/lib/supabase"
import { CourseHero } from "@/components/course-hero"
import { CourseModules } from "@/components/course-modules"
import { Features } from "@/components/features"
import FallbackPage from "./fallback-page"

export default function Page() {
  // Check if Supabase is configured
  const supabaseConfigured = isSupabaseConfigured()

  // If Supabase is not configured, show the fallback page
  if (!supabaseConfigured) {
    return <FallbackPage />
  }

  // Otherwise, show the original home page content
  return (
    <div className="content-container py-8">
      <CourseHero />
      <Features />
      <CourseModules />
    </div>
  )
}
