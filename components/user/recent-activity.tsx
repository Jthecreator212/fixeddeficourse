import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock, PlayCircle } from "lucide-react"

export function RecentActivity() {
  // Mock data - in a real app, this would come from a database
  const activities = [
    {
      type: "completed",
      module: "Introduction to DeFi",
      date: "2 days ago",
      icon: CheckCircle,
    },
    {
      type: "in-progress",
      module: "Understanding Liquidity Pools",
      date: "1 day ago",
      icon: Clock,
    },
    {
      type: "started",
      module: "Yield Farming Strategies",
      date: "5 hours ago",
      icon: PlayCircle,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start space-x-3">
              <activity.icon className="mt-0.5 h-5 w-5 text-blue-500" />
              <div>
                <p className="font-medium">{activity.module}</p>
                <p className="text-sm text-muted-foreground">{activity.date}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
