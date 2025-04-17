"use client"

import { useEffect } from 'react'
import { useAuth } from '@/lib/auth-context'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'

export default function SignOutPage() {
  const { signOut } = useAuth()
  const router = useRouter()

  useEffect(() => {
    const performSignOut = async () => {
      try {
        // Clear client-side state first
        localStorage.removeItem('supabase.auth.token')
        sessionStorage.clear()
        
        // Perform the actual sign out
        await signOut()
        
        // Redirect to sign-in page
        router.push('/auth/sign-in')
        
        // Force reload after a short delay to ensure clean state
        setTimeout(() => {
          window.location.href = '/auth/sign-in'
        }, 100)
      } catch (error) {
        console.error('Sign out error:', error)
        // Even if there's an error, redirect to sign-in
        router.push('/auth/sign-in')
      }
    }
    performSignOut()
  }, [signOut, router])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center space-y-4">
        <Loader2 className="h-8 w-8 animate-spin mx-auto" />
        <h1 className="text-xl font-semibold">Signing Out...</h1>
        <p className="text-muted-foreground">Please wait while we sign you out securely.</p>
      </div>
    </div>
  )
} 