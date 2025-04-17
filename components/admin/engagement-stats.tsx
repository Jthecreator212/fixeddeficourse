import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

interface EngagementStatsData {
  averageTimeSpent: number
  quizAttempts: number
  discussionPosts: number
  resourceDownloads: number
}

export function EngagementStats() {
  // Mock data - replace with actual data fetching
  const stats: EngagementStatsData = {
    averageTimeSpent: 45, // minutes
    quizAttempts: 1250,
    discussionPosts: 850,
    resourceDownloads: 1500,
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Avg. Time Spent</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.averageTimeSpent} min</div>
          <p className="text-xs text-muted-foreground">
            Per user per session
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Quiz Attempts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.quizAttempts}</div>
          <p className="text-xs text-muted-foreground">
            Total attempts this month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Discussion Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.discussionPosts}</div>
          <p className="text-xs text-muted-foreground">
            Active community engagement
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Resource Downloads</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.resourceDownloads}</div>
          <p className="text-xs text-muted-foreground">
            Learning materials accessed
          </p>
        </CardContent>
      </Card>
    </div>
  )
} 