import type React from "react"
import type { Metadata } from "next"
import { UserSidebar } from "@/components/user/user-sidebar"
import { UserHeader } from "@/components/user/user-header"

export const metadata: Metadata = {
  title: "User Dashboard | DeFi Master Course",
  description: "Manage your DeFi Master Course progress and account",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <UserHeader />
      <div className="flex flex-1">
        <UserSidebar />
        <main className="flex-1 p-6 lg:p-8">{children}</main>
      </div>
    </div>
  )
}
