"use client"

import Link from "next/link"
import { Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export const Header = () => {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null)

  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        const supabase = createClientComponentClient()
        const { data: { session } } = await supabase.auth.getSession()
        
        if (session) {
          // Check if already admin
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

  return (
    <div className="h-16 w-full border-b px-4 flex items-center justify-between">
      <div>
        {/* Any existing header content */}
      </div>
      <div className="flex items-center gap-x-2">
        {isAdmin && (
          <Button asChild variant="ghost" size="sm">
            <Link href="/admin">
              <Shield className="h-4 w-4 mr-2" />
              Admin
            </Link>
          </Button>
        )}
        {isAdmin === false && (
          <Button asChild variant="ghost" size="sm">
            <Link href="/admin-setup">
              <Shield className="h-4 w-4 mr-2" />
              Become Admin
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
} 