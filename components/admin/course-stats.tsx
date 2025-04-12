import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, FileText, Clock } from "lucide-react"

export function CourseStats() {
  // In a real implementation, these would be fetched from your database
  const stats = [
    {
      title: "Total Courses",
      value: "12",
      icon: <BookOpen className="h-5 w-5 text-muted-foreground" />,
      description: "Active courses in the platform",
    },
    {
      title: "Total Modules",
      value: "86",
      icon: <FileText className="h-5 w-5 text-muted-foreground" />,
      description: "Across all courses",
    },
    {
      title: "Enrolled Students",
      value: "2,841",
      icon: <Users className="h-5 w-5 text-muted-foreground" />,
      description: "Total enrollments",
    },
    {
      title: "Avg. Completion",
      value: "68%",
      icon: <Clock className="h-5 w-5 text-muted-foreground" />,
      description: "Course completion rate",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            {stat.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
