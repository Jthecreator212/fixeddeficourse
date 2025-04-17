"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useToast } from "@/components/ui/use-toast"

export default function AuthCallbackPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const supabase = createClientComponentClient()
  const { toast } = useToast()

  useEffect(() => {
    const handleCallback = async () => {
      const { error } = await supabase.auth.exchangeCodeForSession(
        searchParams.get("code") || ""
      )

      if (error) {
        console.error("Auth callback error:", error)
        toast({
          title: "Error",
          description: "Failed to verify your email. Please try again.",
          variant: "destructive",
        })
        router.push("/auth/sign-in")
        return
      }

      toast({
        title: "Success",
        description: "Your email has been verified. You can now sign in.",
      })
      router.push("/auth/sign-in")
    }

    if (searchParams.get("code")) {
      handleCallback()
    }
  }, [searchParams, router, supabase, toast])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
            Verifying your email
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Please wait while we verify your email address...
          </p>
        </div>
      </div>
    </div>
  )
} 