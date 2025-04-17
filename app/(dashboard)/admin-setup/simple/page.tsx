"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield } from "lucide-react"

export default function SimpleAdminSetup() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

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
      
      setSuccess(data.message || "Success! You are now an admin.")
      
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

  return (
    <div className="container max-w-md mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Simple Admin Setup
          </CardTitle>
          <CardDescription>
            Make your current account an admin
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            This will grant your account administrative privileges.
          </p>
          
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded text-red-700 mb-4">
              {error}
            </div>
          )}
          
          {success && (
            <div className="p-3 bg-green-50 border border-green-200 rounded text-green-700 mb-4">
              {success}
            </div>
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