import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, CreditCard } from "lucide-react"

export function SubscriptionDetails() {
  // Mock data - in a real app, this would come from a database
  const subscription = {
    plan: "Pro Plan",
    status: "active",
    nextBillingDate: "May 15, 2023",
    amount: "$49.99",
    billingCycle: "monthly",
    features: [
      "Full access to all modules",
      "Certificate upon completion",
      "Community forum access",
      "Live Q&A sessions",
      "Downloadable resources",
    ],
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Current Plan</CardTitle>
              <CardDescription>Manage your subscription</CardDescription>
            </div>
            <Badge variant="outline" className="bg-green-50 text-green-700 dark:bg-green-900 dark:text-green-100">
              {subscription.status === "active" ? "Active" : "Inactive"}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Plan</p>
              <p className="font-medium">{subscription.plan}</p>
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Billing Cycle</p>
              <p className="font-medium capitalize">{subscription.billingCycle}</p>
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Amount</p>
              <p className="font-medium">{subscription.amount}</p>
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Next Billing Date</p>
              <p className="font-medium">{subscription.nextBillingDate}</p>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">Plan Features</h3>
            <ul className="grid gap-2 sm:grid-cols-2">
              {subscription.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
          <Button variant="outline">Cancel Subscription</Button>
          <Button>
            <CreditCard className="mr-2 h-4 w-4" />
            Update Payment Method
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Billing History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <p className="font-medium">April 15, 2023</p>
                <p className="text-sm text-muted-foreground">Pro Plan - Monthly</p>
              </div>
              <div className="text-right">
                <p className="font-medium">$49.99</p>
                <p className="text-sm text-green-600">Paid</p>
              </div>
            </div>
            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <p className="font-medium">March 15, 2023</p>
                <p className="text-sm text-muted-foreground">Pro Plan - Monthly</p>
              </div>
              <div className="text-right">
                <p className="font-medium">$49.99</p>
                <p className="text-sm text-green-600">Paid</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">February 15, 2023</p>
                <p className="text-sm text-muted-foreground">Pro Plan - Monthly</p>
              </div>
              <div className="text-right">
                <p className="font-medium">$49.99</p>
                <p className="text-sm text-green-600">Paid</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
