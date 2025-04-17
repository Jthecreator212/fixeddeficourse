"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Shield, AlertCircle, CheckCircle2, LockKeyhole, LogIn } from "lucide-react"
import { createServerSupabaseClient } from "@/lib/supabase-server"

export default function AdminSetup() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [userId, setUserId] = useState<string | null>(null)
  const [isAlreadyAdmin, setIsAlreadyAdmin] = useState(false)

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const supabase = createServerSupabaseClient()
        const { data: { session } } = await supabase.auth.getSession()
        
        if (session) {
          setIsAuthenticated(true)
          setUserId(session.user.id)
          
          // Check if already admin
          const { data, error } = await supabase
            .from("admin_users")
            .select("*")
            .eq("user_id", session.user.id)
            .single()
            
          if (data) {
            setIsAlreadyAdmin(true)
          }
        } else {
          setIsAuthenticated(false)
        }
      } catch (err) {
        console.error("Error checking authentication:", err)
        setIsAuthenticated(false)
      }
    }
    
    checkAuthentication()
  }, [])

  const makeAdmin = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch("/api/admin/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      })

      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.message || "Failed to make user an admin")
      }
      
      setSuccess(data.message)
      setIsAlreadyAdmin(true)
      
      // Redirect to admin dashboard after a short delay
      setTimeout(() => {
        router.push("/admin")
      }, 2000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  // Loading state
  if (isAuthenticated === null) {
    return (
      <div className="container max-w-md mx-auto py-10 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  // Not authenticated
  if (isAuthenticated === false) {
    return (
      <div className="container max-w-md mx-auto py-10">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LockKeyhole className="h-5 w-5 text-primary" />
              Authentication Required
            </CardTitle>
            <CardDescription>
              You need to sign in to access the admin setup
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Please sign in to your account first before attempting to access the admin dashboard.
            </p>
            
            <Alert className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Not signed in</AlertTitle>
              <AlertDescription>
                You must be signed in to make yourself an admin
              </AlertDescription>
            </Alert>
          </CardContent>
          <CardFooter>
            <Button 
              asChild
              className="w-full"
            >
              <Link href={`/auth/sign-in?redirect=${encodeURIComponent('/admin-setup')}`}>
                <LogIn className="mr-2 h-4 w-4" />
                Sign In
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }
  
  // Already an admin
  if (isAlreadyAdmin) {
    return (
      <div className="container max-w-md mx-auto py-10">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-600" />
              Admin Access Granted
            </CardTitle>
            <CardDescription>
              You already have admin privileges
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Alert className="mb-4 bg-green-50 text-green-800 border-green-200">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <AlertTitle>Admin Access</AlertTitle>
              <AlertDescription>
                Your account already has admin privileges. You can access the admin dashboard.
              </AlertDescription>
            </Alert>
          </CardContent>
          <CardFooter>
            <Button 
              asChild
              className="w-full"
            >
              <Link href="/admin">
                Go to Admin Dashboard
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  // Authenticated but not an admin
  return (
    <div className="container max-w-md mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Admin Setup
          </CardTitle>
          <CardDescription>
            Make your current account an admin to access the admin dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            You are signed in as user ID: <span className="font-mono text-xs">{userId?.substring(0, 8)}...</span>
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            This will grant your account administrative privileges, allowing you to access the admin dashboard
            and manage the platform.
          </p>
          
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          {success && (
            <Alert className="mb-4 bg-green-50 text-green-800 border-green-200">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>{success}</AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button 
            onClick={makeAdmin} 
            disabled={loading || !!success}
            className="w-full"
          >
            {loading ? "Processing..." : success ? "Redirecting..." : "Make Me an Admin"}
          </Button>
          <Button 
            variant="outline" 
            asChild
            className="w-full"
          >
            <Link href="/dashboard">
              Back to Dashboard
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
} 