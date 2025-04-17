import type { Metadata } from "next"
import { DashboardLayoutClient } from "./layout-client"

export const metadata: Metadata = {
  title: "User Dashboard | DeFi Master Course",
  description: "Manage your DeFi Master Course progress and account",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <DashboardLayoutClient>{children}</DashboardLayoutClient>
}
