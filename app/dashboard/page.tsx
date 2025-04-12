import type { Metadata } from "next"
import { CourseProgress } from "@/components/user/course-progress"
import { RecentActivity } from "@/components/user/recent-activity"
import { NextModules } from "@/components/user/next-modules"
import { UserStats } from "@/components/user/user-stats"

export const metadata: Metadata = {
  title: "Dashboard | DeFi Master Course",
  description: "Your DeFi Master Course dashboard",
}

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>
      <UserStats />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <CourseProgress />
        </div>
        <div className="space-y-6">
          <NextModules />
          <RecentActivity />
        </div>
      </div>
    </div>
  )
}
