import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import Link from "next/link"

export function SupabaseError() {
  return (
    <div className="flex items-center justify-center min-h-[50vh] p-6">
      <Alert variant="destructive" className="max-w-md">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Configuration Error</AlertTitle>
        <AlertDescription>
          <p className="mb-2">Supabase connection failed. The following environment variables are missing:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>NEXT_PUBLIC_SUPABASE_URL</li>
            <li>NEXT_PUBLIC_SUPABASE_ANON_KEY</li>
          </ul>
          <p className="mt-2">To fix this issue:</p>
          <ol className="list-decimal pl-5 space-y-1 mt-1">
            <li>Go to your Vercel project settings</li>
            <li>Click on "Environment Variables"</li>
            <li>Add the missing variables with values from your Supabase dashboard</li>
            <li>Redeploy your application</li>
          </ol>
          <p className="mt-2">
            <Link href="/" className="text-blue-500 hover:underline">
              Return to Home
            </Link>
          </p>
        </AlertDescription>
      </Alert>
    </div>
  )
}
