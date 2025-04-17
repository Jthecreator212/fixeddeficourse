import { ModuleMetadata } from '@/lib/types/module'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, AlertCircle, XCircle } from 'lucide-react'

interface ModuleQualityProps {
  modules: Record<string, ModuleMetadata>
}

export function ModuleQuality({ modules }: ModuleQualityProps) {
  const qualityMetrics = Object.values(modules).map(module => {
    const hasVideo = !!module.video
    const hasQuiz = !!module.quiz
    const hasCodeExamples = !!module.codeExamples
    const hasImages = !!module.images

    const score = [
      hasVideo,
      hasQuiz,
      hasCodeExamples,
      hasImages
    ].filter(Boolean).length

    return {
      module,
      score,
      metrics: {
        hasVideo,
        hasQuiz,
        hasCodeExamples,
        hasImages
      }
    }
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Content Quality</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {qualityMetrics.map(({ module, score, metrics }) => (
            <div key={module.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">{module.title}</span>
                <span className="text-sm text-muted-foreground">
                  {score}/4 quality metrics
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(metrics).map(([key, value]) => (
                  <div key={key} className="flex items-center space-x-1">
                    {value ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-500" />
                    )}
                    <span className="text-sm capitalize">
                      {key.replace('has', '').replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 