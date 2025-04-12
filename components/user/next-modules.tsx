import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlayCircle } from "lucide-react"
import Link from "next/link"
import { modules } from "@/data/modules"

export function NextModules() {
  // Mock data - in a real app, this would come from a database
  const currentModuleIndex = 3
  const nextModules = modules.slice(currentModuleIndex, currentModuleIndex + 3)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Continue Learning</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {nextModules.map((module) => (
            <div key={module.slug} className="space-y-2">
              <h3 className="font-medium">{module.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{module.description}</p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href={`/modules/${module.slug}`}>
                  <PlayCircle className="mr-2 h-4 w-4" />
                  Continue
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
