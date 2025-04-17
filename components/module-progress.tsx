import { ModuleMetadata } from '@/lib/types/module'
import { Progress } from '@/components/ui/progress'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface ModuleProgressProps {
  modules: Record<string, ModuleMetadata>
}

export function ModuleProgress({ modules }: ModuleProgressProps) {
  const totalModules = Object.keys(modules).length
  const completedModules = Object.values(modules).filter(m => m.completed).length
  const progress = (completedModules / totalModules) * 100

  return (
    <Card>
      <CardHeader>
        <CardTitle>Overall Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">
              {completedModules} of {totalModules} modules completed
            </span>
            <span className="text-sm font-medium">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {Object.values(modules).map(module => (
              <div key={module.id} className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${module.completed ? 'bg-green-500' : 'bg-gray-300'}`} />
                <span className="text-sm">{module.title}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 