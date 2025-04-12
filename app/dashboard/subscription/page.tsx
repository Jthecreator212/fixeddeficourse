import type { Metadata } from "next"
import { SubscriptionDetails } from "@/components/user/subscription-details"

export const metadata: Metadata = {
  title: "Subscription | DeFi Master Course",
  description: "Manage your subscription",
}

export default function SubscriptionPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Subscription</h1>
      </div>
      <SubscriptionDetails />
    </div>
  )
}
