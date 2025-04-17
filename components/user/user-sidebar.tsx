"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  BookOpen,
  BadgeIcon as Certificate,
  Home,
  Settings,
  User,
  CreditCard,
  MessageSquare,
  Menu,
  X,
  Palette,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "My Courses",
    href: "/dashboard/courses",
    icon: BookOpen,
  },
  {
    title: "Certificates",
    href: "/dashboard/certificates",
    icon: Certificate,
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: User,
  },
  {
    title: "Subscription",
    href: "/dashboard/subscription",
    icon: CreditCard,
  },
  {
    title: "Support",
    href: "/dashboard/support",
    icon: MessageSquare,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function UserSidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="fixed left-4 top-4 z-40 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-30 w-64 transform border-r border-gray-800 bg-[#18181b] transition-transform duration-200 ease-in-out lg:static lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-full flex-col overflow-y-auto py-4">
          <div className="px-6 py-4">
            <h2 className="text-xl font-bold">DeFi Master Course</h2>
          </div>
          <nav className="mt-6 flex-1 space-y-1 px-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center rounded-md px-4 py-3 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-[#8a70d6] text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white",
                )}
                onClick={() => setIsOpen(false)}
              >
                <item.icon className={cn(
                  "mr-3 h-5 w-5",
                  pathname === item.href
                    ? "text-white"
                    : "text-gray-400"
                )} />
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  )
}