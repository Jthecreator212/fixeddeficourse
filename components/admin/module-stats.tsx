import { Progress } from '@/components/ui/progress'

export function ModuleStats() {
  // Mock data - replace with actual data fetching
  const stats = {
    totalModules: 12,
    publishedModules: 8,
    draftModules: 4,
    averageCompletionRate: 75,
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-muted-foreground">Total Modules</p>
          <p className="text-2xl font-bold">{stats.totalModules}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Published</p>
          <p className="text-2xl font-bold">{stats.publishedModules}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Drafts</p>
          <p className="text-2xl font-bold">{stats.draftModules}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Avg. Completion</p>
          <div className="flex items-center gap-2">
            <Progress value={stats.averageCompletionRate} className="w-full" />
            <span className="text-sm font-medium">{stats.averageCompletionRate}%</span>
          </div>
        </div>
      </div>
    </div>
  )
} 