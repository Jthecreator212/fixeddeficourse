"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, BookOpen, Award, User, CreditCard, MessageSquare, Settings, ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

interface Route {
  icon: React.ElementType
  label: string
  href: string
}

export const Sidebar = () => {
  const pathname = usePathname()
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null)

  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        const supabase = createClientComponentClient()
        const { data: { session } } = await supabase.auth.getSession()
        
        if (session) {
          const { data } = await supabase
            .from("admin_users")
            .select("*")
            .eq("user_id", session.user.id)
            .single()
            
          setIsAdmin(!!data)
        } else {
          setIsAdmin(false)
        }
      } catch (error) {
        console.error("Error checking admin status:", error)
        setIsAdmin(false)
      }
    }
    
    checkAdminStatus()
  }, [])

  const routes: Route[] = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: BookOpen,
      label: "My Courses",
      href: "/dashboard/courses",
    },
    {
      icon: Award,
      label: "Certificates",
      href: "/dashboard/certificates",
    },
    {
      icon: User,
      label: "Profile",
      href: "/dashboard/profile",
    },
    {
      icon: CreditCard,
      label: "Subscription",
      href: "/dashboard/subscription",
    },
    {
      icon: MessageSquare,
      label: "Support",
      href: "/dashboard/support",
    },
    {
      icon: Settings,
      label: "Settings",
      href: "/dashboard/settings",
    },
  ]

  // Add admin route if user is an admin
  if (isAdmin) {
    routes.push({
      icon: ShieldCheck,
      label: "Admin",
      href: "/admin",
    })
  }

  // Extra admin setup link for non-admins
  const adminSetupLink = isAdmin === false ? (
    <Link
      href="/admin-setup"
      className={cn(
        "flex items-center gap-x-2 text-sm font-medium text-muted-foreground pl-6 pr-3 py-4 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-900 transition-all mt-4",
        pathname === "/admin-setup" && "text-primary bg-slate-100 dark:bg-slate-900 border-r-4 border-primary"
      )}
    >
      <ShieldCheck className="h-5 w-5" />
      Become Admin
    </Link>
  ) : null;

  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white dark:bg-gray-950">
      <div className="p-6">
        <Link href="/dashboard">
          <h1 className="text-2xl font-bold tracking-tight text-primary">
            DeFi Master
          </h1>
        </Link>
        <h2 className="text-sm text-muted-foreground">Course</h2>
      </div>
      <div className="flex flex-col w-full">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "flex items-center gap-x-2 text-sm font-medium text-muted-foreground pl-6 pr-3 py-4 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-900 transition-all",
              pathname === route.href && "text-primary bg-slate-100 dark:bg-slate-900 border-r-4 border-primary"
            )}
          >
            <route.icon className="h-5 w-5" />
            {route.label}
          </Link>
        ))}
        {adminSetupLink}
      </div>
    </div>
  )
} 