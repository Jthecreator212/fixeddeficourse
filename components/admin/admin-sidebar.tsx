"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Shield, Layers, Users, BarChart, Settings, FileText, Book, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/auth-context"

const navItems = [
  { href: "/dashboard/admin", label: "Dashboard", icon: Shield },
  { href: "/dashboard/admin/courses", label: "Courses", icon: Book },
  { href: "/dashboard/admin/users", label: "Users", icon: Users },
  { href: "/dashboard/admin/subscriptions", label: "Subscriptions", icon: FileText },
  { href: "/dashboard/admin/analytics", label: "Analytics", icon: BarChart },
  { href: "/dashboard/admin/settings", label: "Settings", icon: Settings },
]

export function AdminSidebar() {
  const { user, signOut } = useAuth()
  const pathname = usePathname()

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <div className="w-64 border-r bg-gray-950 text-white p-4">
      <div className="flex items-center gap-2 mb-8">
        <Shield className="h-6 w-6 text-primary" />
        <span className="font-bold text-xl">Admin Portal</span>
      </div>

      <nav className="space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
          const Icon = item.icon
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors 
                ${isActive 
                  ? "bg-primary text-primary-foreground" 
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto pt-8">
        <div className="rounded-md bg-gray-900 p-3">
          <div className="mb-3 flex items-center">
            <span className="mr-2 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
              {user?.email?.[0].toUpperCase() || "U"}
            </span>
            <div className="overflow-hidden">
              <p className="truncate text-sm">{user?.email}</p>
              <p className="text-xs text-gray-400">Admin</p>
            </div>
          </div>
          <Button 
            variant="destructive" 
            className="w-full justify-start text-xs"
            onClick={handleSignOut}
          >
            <LogOut className="mr-2 h-3 w-3" />
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  )
}
