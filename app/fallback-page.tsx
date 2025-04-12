"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function FallbackPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome to DeFi Course</CardTitle>
          <CardDescription>Environment variables not configured</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            This application requires Supabase environment variables to be properly configured. Please make sure you
            have set up the following environment variables:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <code>NEXT_PUBLIC_SUPABASE_URL</code>
            </li>
            <li>
              <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link href="https://supabase.com/docs/guides/getting-started/tutorials/with-nextjs" target="_blank">
              Learn More
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
