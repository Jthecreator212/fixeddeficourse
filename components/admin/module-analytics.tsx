import { Progress } from '@/components/ui/progress'

interface ModuleStats {
  title: string
  completionRate: number
  averageScore: number
  timeSpent: number
  difficulty: 'beginner' | 'intermediate' | 'advanced'
}

export function ModuleAnalytics() {
  // Mock data - replace with actual data fetching
  const modules: ModuleStats[] = [
    {
      title: 'Introduction to DeFi',
      completionRate: 85,
      averageScore: 92,
      timeSpent: 45,
      difficulty: 'beginner',
    },
    {
      title: 'Smart Contracts',
      completionRate: 72,
      averageScore: 85,
      timeSpent: 60,
      difficulty: 'intermediate',
    },
    {
      title: 'Yield Farming',
      completionRate: 65,
      averageScore: 78,
      timeSpent: 75,
      difficulty: 'advanced',
    },
  ]

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Module Performance</h3>
      <div className="space-y-6">
        {modules.map((module) => (
          <div key={module.title} className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">{module.title}</h4>
                <p className="text-sm text-muted-foreground capitalize">
                  {module.difficulty}
                </p>
              </div>
              <div className="text-right">
                <p className="font-medium">{module.averageScore}%</p>
                <p className="text-sm text-muted-foreground">
                  {module.timeSpent} min
                </p>
              </div>
            </div>
            <Progress value={module.completionRate} className="w-full" />
            <p className="text-sm text-muted-foreground">
              {module.completionRate}% completion rate
            </p>
          </div>
        ))}
      </div>
    </div>
  )
} 