import { ModuleInterface } from '@/lib/types/module'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clock, BookOpen, Video, CheckCircle } from 'lucide-react'

interface ModulePreviewProps {
  module: ModuleInterface
}

export function ModulePreview({ module }: ModulePreviewProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{module.metadata.title}</span>
          <Badge variant={module.metadata.difficulty === 'beginner' ? 'default' : 
                         module.metadata.difficulty === 'intermediate' ? 'secondary' : 'destructive'}>
            {module.metadata.difficulty}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{module.metadata.description}</p>
        
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            <span>{module.metadata.estimatedTime} min</span>
          </div>
          <div className="flex items-center">
            <BookOpen className="mr-1 h-4 w-4" />
            <span>{module.metadata.prerequisites.length} prerequisites</span>
          </div>
          {module.content.video && (
            <div className="flex items-center">
              <Video className="mr-1 h-4 w-4" />
              <span>Video included</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {module.metadata.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span className="text-sm text-muted-foreground">Module {module.metadata.order}</span>
          </div>
          <Badge variant="secondary">
            {module.content.quiz.questions.length} questions
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
} 