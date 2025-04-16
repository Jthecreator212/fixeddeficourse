import { notFound } from "next/navigation"
import { QuizComponent } from "@/components/quiz"
import { getQuizBySlug, getQuizzes } from "@/lib/quizzes"

export async function generateStaticParams() {
  const quizzes = getQuizzes()
  return quizzes.map((quiz) => ({
    slug: quiz.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const quiz = getQuizBySlug(params.slug)

  if (!quiz) {
    return {
      title: "Quiz Not Found",
    }
  }

  return {
    title: `${quiz.title} | DeFi Course Quiz`,
    description: `Test your knowledge on ${quiz.title}`,
  }
}

export default async function QuizPage({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const quiz = getQuizBySlug(slug)

  if (!quiz) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="mb-6 text-3xl font-bold">{quiz.title}</h1>
      <QuizComponent questions={quiz.questions} />
    </div>
  )
}
