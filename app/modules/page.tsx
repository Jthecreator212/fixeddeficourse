import Link from "next/link"
import { getModules } from "@/lib/modules"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, BookOpen } from "lucide-react"

export default function ModulesPage() {
  const modules = getModules()

  return (
    <div className="container py-12 px-4 md:px-6">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Course Modules</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Master DeFi concepts through our comprehensive learning modules
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module, index) => (
          <Card key={module.slug} className="flex flex-col h-full transition-all hover:shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start">
                <Badge variant={module.completed ? "default" : "outline"} className="mb-2">
                  {module.completed ? "Completed" : "In Progress"}
                </Badge>
                <span className="text-muted-foreground font-medium">Module {index + 1}</span>
              </div>
              <CardTitle className="text-xl">{module.title}</CardTitle>
              <CardDescription className="line-clamp-2">{module.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{module.duration} min</span>
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" />
                  <span>{module.lessons} lessons</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                {module.topics.slice(0, 3).map((topic, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 text-primary w-5 h-5 flex items-center justify-center text-xs mt-0.5">
                      {i + 1}
                    </div>
                    <span>{topic}</span>
                  </li>
                ))}
                {module.topics.length > 3 && (
                  <li className="text-muted-foreground text-sm pl-7">+{module.topics.length - 3} more topics</li>
                )}
              </ul>
            </CardContent>
            <CardFooter>
              <Link
                href={`/modules/${module.slug}`}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
              >
                {module.completed ? "Review Module" : "Continue Learning"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
