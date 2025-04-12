import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getQuizzes } from "@/lib/quizzes"

export default function QuizzesPage() {
  const quizzes = getQuizzes()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">DeFi Master Quizzes</h1>
        <p className="mt-4 text-muted-foreground md:text-xl">
          Test your knowledge and track your progress through the DeFi curriculum
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {quizzes.map((quiz, index) => (
          <Card key={quiz.slug} className="flex flex-col bg-secondary/30">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="default" className="bg-primary hover:bg-primary/90">
                  Quiz {index + 1}
                </Badge>
                <span className="text-sm text-muted-foreground">{quiz.questions.length} Questions</span>
              </div>
              <CardTitle className="mt-4">{quiz.title}</CardTitle>
              <CardDescription>{quiz.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-muted-foreground">
                This quiz covers material from the {quiz.moduleSlug.replace(/-/g, " ")} module.
              </p>
            </CardContent>
            <CardFooter>
              <Link href={`/quiz/${quiz.slug}`} className="w-full">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                  Take Quiz
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
