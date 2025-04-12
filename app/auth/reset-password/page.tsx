import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const metadata: Metadata = {
  title: "Reset Password | DeFi Master Course",
  description: "Reset your DeFi Master Course password",
}

export default function ResetPasswordPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Reset Password</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your email address and we&apos;ll send you a link to reset your password
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="m@example.com" required type="email" />
          </div>
          <Button className="w-full" type="submit">
            Send Reset Link
          </Button>
          <div className="text-center text-sm">
            Remember your password?{" "}
            <Link className="text-blue-600 hover:text-blue-500 dark:text-blue-400" href="/auth/sign-in">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
