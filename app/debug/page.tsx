"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, CheckCircle } from "lucide-react"

export default function DebugPage() {
  const [supabaseUrl, setSupabaseUrl] = useState<string | null>(null)
  const [supabaseKey, setSupabaseKey] = useState<string | null>(null)

  useEffect(() => {
    // Check if environment variables are accessible
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    setSupabaseUrl(url || null)
    setSupabaseKey(key ? "Key exists (hidden for security)" : null)
  }, [])

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Environment Variables Debug</CardTitle>
          <CardDescription>Check if Supabase environment variables are correctly configured</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">NEXT_PUBLIC_SUPABASE_URL</h3>
            {supabaseUrl ? (
              <Alert className="bg-green-50 dark:bg-green-900/20">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                <AlertTitle className="text-green-600 dark:text-green-400">Success</AlertTitle>
                <AlertDescription>{supabaseUrl}</AlertDescription>
              </Alert>
            ) : (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Missing</AlertTitle>
                <AlertDescription>NEXT_PUBLIC_SUPABASE_URL is not defined or not accessible</AlertDescription>
              </Alert>
            )}
          </div>

          <div>
            <h3 className="text-lg font-medium">NEXT_PUBLIC_SUPABASE_ANON_KEY</h3>
            {supabaseKey ? (
              <Alert className="bg-green-50 dark:bg-green-900/20">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                <AlertTitle className="text-green-600 dark:text-green-400">Success</AlertTitle>
                <AlertDescription>{supabaseKey}</AlertDescription>
              </Alert>
            ) : (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Missing</AlertTitle>
                <AlertDescription>NEXT_PUBLIC_SUPABASE_ANON_KEY is not defined or not accessible</AlertDescription>
              </Alert>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
