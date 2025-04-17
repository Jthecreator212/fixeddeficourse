import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { UserProgressChart } from "@/components/admin/user-progress-chart"
import { UserModuleProgress } from "@/components/admin/user-module-progress"
import { ArrowLeft, Mail, Download } from "lucide-react"

export default function UserProgressPage({ params }: { params: { id: string } }) {
  // This would normally fetch user data based on the ID
  const user = {
    id: params.id,
    name: "Alex Johnson",
    email: "alex@example.com",
    avatar: "/placeholder.svg?height=128&width=128",
    status: "active",
    subscription: "Annual Pro",
    progress: 75,
    joined: "Jan 12, 2023",
    lastActive: "2 hours ago",
    completedModules: 6,
    totalModules: 8,
    quizAverage: 92,
    timeSpent: "42h 15m",
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" asChild>
          <Link href="/dashboard/admin/users">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">User Progress</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <CardHeader className="flex flex-row items-start justify-between">
            <div className="flex flex-col gap-1.5">
              <CardTitle>{user.name}</CardTitle>
              <CardDescription>{user.email}</CardDescription>
            </div>
            <Avatar className="h-16 w-16">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Status</p>
                  <Badge variant="default">{user.status}</Badge>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Subscription</p>
                  <p className="font-medium">{user.subscription}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Joined</p>
                  <p className="font-medium">{user.joined}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Last Active</p>
                  <p className="font-medium">{user.lastActive}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="outline" className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact User
                </Button>
                <Button variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Export Data
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Progress Overview</CardTitle>
            <CardDescription>Course completion and activity over time</CardDescription>
          </CardHeader>
          <CardContent>
            <UserProgressChart />
          </CardContent>
        </Card>

        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Statistics</CardTitle>
            <CardDescription>User performance metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Overall Progress</p>
                <p className="text-sm font-medium">{user.progress}%</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Completed Modules</p>
                <p className="text-sm font-medium">
                  {user.completedModules}/{user.totalModules}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Quiz Average</p>
                <p className="text-sm font-medium">{user.quizAverage}%</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Time Spent</p>
                <p className="text-sm font-medium">{user.timeSpent}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Module Progress</CardTitle>
            <CardDescription>Detailed progress for each course module</CardDescription>
          </CardHeader>
          <CardContent>
            <UserModuleProgress />
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 