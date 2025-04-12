import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { PlayCircle } from "lucide-react"
import { modules } from "@/data/modules"

export function CoursesList() {
  // Mock data - in a real app, this would come from a database
  const completedModules = 3
  const totalModules = modules.length
  const progressPercentage = Math.round((completedModules / totalModules) * 100)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>DeFi Master Course</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Progress</span>
              <span className="text-sm font-medium">{progressPercentage}%</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Modules Completed</p>
              <p className="text-2xl font-bold">
                {completedModules}/{totalModules}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Last Activity</p>
              <p className="text-2xl font-bold">2 days ago</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Estimated Completion</p>
              <p className="text-2xl font-bold">4 weeks</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link href="/dashboard">
              <PlayCircle className="mr-2 h-4 w-4" />
              Continue Learning
            </Link>
          </Button>
        </CardFooter>
      </Card>

      <h2 className="text-2xl font-bold mt-8">Course Modules</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((module, index) => {
          const isCompleted = index < completedModules
          const isInProgress = index === completedModules
          const isLocked = index > completedModules

          return (
            <Card key={module.slug} className={isLocked ? "opacity-70" : ""}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {module.title}
                  {isCompleted && (
                    <span className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-100">
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3 text-sm text-muted-foreground">{module.description}</p>
                {isInProgress && (
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium">45% complete</span>
                    </div>
                    <Progress value={45} className="h-1" />
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant={isCompleted ? "outline" : isInProgress ? "default" : "secondary"}
                  disabled={isLocked}
                  className="w-full"
                >
                  <Link href={`/modules/${module.slug}`}>
                    {isCompleted ? "Review" : isInProgress ? "Continue" : "Start"}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
