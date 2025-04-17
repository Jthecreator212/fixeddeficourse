import type { Metadata } from "next"
import { ProfileForm } from "@/components/user/profile-form"

export const metadata: Metadata = {
  title: "Profile | DeFi Master Course",
  description: "Manage your profile",
}

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Profile</h1>
      </div>
      <ProfileForm />
    </div>
  )
}
