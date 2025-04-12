import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Clock, Award, CheckCircle } from "lucide-react"

export function UserStats() {
  // Mock data - in a real app, this would come from a database
  const stats = [
    {
      title: "Modules Completed",
      value: "3/12",
      icon: CheckCircle,
      description: "25% of course completed",
    },
    {
      title: "Hours Spent",
      value: "14.5",
      icon: Clock,
      description: "Total learning time",
    },
    {
      title: "Quizzes Passed",
      value: "8/15",
      icon: Award,
      description: "53% success rate",
    },
    {
      title: "Lessons Viewed",
      value: "24/48",
      icon: BookOpen,
      description: "50% of lessons viewed",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <stat.icon className="h-5 w-5 text-blue-500" />
              <h3 className="font-medium text-muted-foreground">{stat.title}</h3>
            </div>
            <div className="mt-3 space-y-1">
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
