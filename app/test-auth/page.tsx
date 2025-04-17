"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"

export default function TestAuthPage() {
  const { user, session, signOut } = useAuth()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [user, session])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4 rounded-lg border p-6">
        <h1 className="text-2xl font-bold">Authentication Test</h1>
        
        {user ? (
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">User Information</h2>
              <pre className="rounded bg-gray-100 p-2 text-sm">
                {JSON.stringify(user, null, 2)}
              </pre>
            </div>
            
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">Session Information</h2>
              <pre className="rounded bg-gray-100 p-2 text-sm">
                {JSON.stringify(session, null, 2)}
              </pre>
            </div>

            <Button 
              onClick={() => signOut()} 
              className="w-full"
            >
              Sign Out
            </Button>
          </div>
        ) : (
          <div className="text-center">
            <p className="mb-4">You are not signed in</p>
            <Button asChild className="w-full">
              <a href="/auth/sign-in">Sign In</a>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
} 