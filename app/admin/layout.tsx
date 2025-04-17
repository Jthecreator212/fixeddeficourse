"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { Shield, Layers, Users, BarChart, Settings, FileText, Book, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Skeleton } from "@/components/ui/skeleton"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, signOut } = useAuth()
  const pathname = usePathname()
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        setIsLoading(true)
        if (!user) {
          setIsAdmin(false)
          return
        }

        // Check if the user is an admin
        const response = await fetch('/api/admin/verify')
        if (!response.ok) {
          setIsAdmin(false)
          return
        }

        setIsAdmin(true)
      } catch (error) {
        console.error("Error checking admin status:", error)
        setIsAdmin(false)
      } finally {
        setIsLoading(false)
      }
    }

    checkAdminStatus()
  }, [user])

  const handleSignOut = async () => {
    try {
      await signOut()
      toast.success("Signed out successfully")
    } catch (error) {
      toast.error("Failed to sign out")
    }
  }

  // Navigation items for the admin sidebar
  const navItems = [
    { href: "/admin", label: "Dashboard", icon: BarChart },
    { href: "/admin/courses", label: "Courses", icon: Book },
    { href: "/admin/users", label: "Users", icon: Users },
    { href: "/admin/subscriptions", label: "Subscriptions", icon: Layers },
    { href: "/admin/settings", label: "Settings", icon: Settings },
  ]

  if (isLoading) {
    return (
      <div className="flex min-h-screen">
        <div className="w-64 border-r bg-gray-950 p-4">
          <Skeleton className="h-8 w-32 mb-8 bg-gray-800" />
          <div className="space-y-2">
            {Array(5).fill(0).map((_, i) => (
              <Skeleton key={i} className="h-10 w-full bg-gray-800" />
            ))}
          </div>
        </div>
        <div className="flex-1 p-8">
          <Skeleton className="h-8 w-48 mb-6 bg-gray-100" />
          <Skeleton className="h-screen w-full bg-gray-100" />
        </div>
      </div>
    )
  }

  if (isAdmin === false) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="max-w-md p-6 text-center">
          <Shield className="mx-auto h-16 w-16 text-red-500 mb-4" />
          <h1 className="text-2xl font-bold mb-2">Access Denied</h1>
          <p className="mb-6 text-gray-500">
            You don't have permission to access the admin area. Please contact an administrator if you believe this is an error.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild variant="outline">
              <Link href="/">Return to Homepage</Link>
            </Button>
            <Button onClick={handleSignOut} variant="destructive">
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen">
      {/* Admin Sidebar */}
      <div className="w-64 border-r bg-gray-950 text-white p-4">
        <div className="flex items-center gap-2 mb-8">
          <Shield className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">Admin Portal</span>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            const Icon = item.icon;
            
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
            );
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

      {/* Admin Content */}
      <div className="flex-1 p-8 bg-slate-50">
        <div className="fixed top-0 right-0 p-2 m-2 text-xs bg-red-500 text-white rounded-md shadow-md z-50">
          <div className="flex items-center gap-1">
            <Shield className="h-3 w-3" />
            <span>ADMIN MODE</span>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}