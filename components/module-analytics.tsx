import { ModuleMetadata } from '@/lib/types/module'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface ModuleAnalyticsProps {
  modules: Record<string, ModuleMetadata>
}

export function ModuleAnalytics({ modules }: ModuleAnalyticsProps) {
  const data = Object.values(modules).map(module => ({
    name: module.title,
    completion: module.progress || 0,
    quizScore: module.quizScore || 0,
    timeSpent: module.estimatedTime
  }))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Module Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="completion" fill="#8884d8" name="Completion %" />
              <Bar dataKey="quizScore" fill="#82ca9d" name="Quiz Score" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
} 