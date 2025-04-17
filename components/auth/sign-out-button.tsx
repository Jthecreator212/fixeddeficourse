"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2, LogOut } from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { toast } from "sonner"

export function SignOutButton() {
  const [isSigningOut, setIsSigningOut] = useState(false)
  const { signOut } = useAuth()

  const handleSignOut = async () => {
    try {
      setIsSigningOut(true)
      await signOut()
    } catch (error) {
      console.error('Sign out failed:', error)
      toast.error('Failed to sign out. Please try again.')
    } finally {
      setIsSigningOut(false)
    }
  }

  return (
    <Button 
      onClick={handleSignOut} 
      disabled={isSigningOut}
      variant="ghost"
      className="w-full justify-start"
    >
      {isSigningOut ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Signing Out...
        </>
      ) : (
        <>
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </>
      )}
    </Button>
  )
} 