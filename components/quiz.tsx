"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"

interface Question {
  id: string
  text: string
  options: {
    id: string
    text: string
  }[]
  correctOptionId: string
  explanation: string
}

interface QuizComponentProps {
  questions: Question[]
}

export function QuizComponent({ questions }: QuizComponentProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const currentQuestion = questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100

  const handleOptionSelect = (optionId: string) => {
    if (!isAnswered) {
      setSelectedOptionId(optionId)
    }
  }

  const handleCheckAnswer = () => {
    if (selectedOptionId) {
      setIsAnswered(true)
      if (selectedOptionId === currentQuestion.correctOptionId) {
        setScore(score + 1)
      }
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedOptionId(null)
      setIsAnswered(false)
    } else {
      setQuizCompleted(true)
    }
  }

  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100)
    const passed = percentage >= 70

    return (
      <Card>
        <CardHeader>
          <CardTitle>Quiz Completed!</CardTitle>
          <CardDescription>
            You scored {score} out of {questions.length} questions correctly.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col items-center justify-center space-y-2 py-6">
            {passed ? (
              <CheckCircle className="h-16 w-16 text-green-500" />
            ) : (
              <XCircle className="h-16 w-16 text-red-500" />
            )}
            <h3 className="text-2xl font-bold">{passed ? "Congratulations!" : "Keep Learning!"}</h3>
            <p className="text-center text-muted-foreground">
              {passed
                ? "You've passed the quiz and demonstrated a good understanding of the concepts."
                : "You didn't pass this time, but don't worry! Review the material and try again."}
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Your Score</span>
              <span className="font-medium">{percentage}%</span>
            </div>
            <Progress value={percentage} className="h-2" />
            <p className="text-xs text-muted-foreground">70% or higher is required to pass</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/modules">
            <Button variant="outline">Back to Modules</Button>
          </Link>
          <Button
            onClick={() => {
              setCurrentQuestionIndex(0)
              setSelectedOptionId(null)
              setIsAnswered(false)
              setScore(0)
              setQuizCompleted(false)
            }}
          >
            Retry Quiz
          </Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <div>
            <CardTitle>
              Question {currentQuestionIndex + 1} of {questions.length}
            </CardTitle>
            <CardDescription>Select the best answer</CardDescription>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium">Score</div>
            <div className="text-2xl font-bold">
              {score}/{questions.length}
            </div>
          </div>
        </div>
        <Progress value={progress} className="h-2" />
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-lg font-medium">{currentQuestion.text}</div>
        <RadioGroup value={selectedOptionId || ""} className="space-y-3">
          {currentQuestion?.options?.map((option) => {
            const isCorrect = option.id === currentQuestion.correctOptionId
            const isSelected = option.id === selectedOptionId
            let className = "border p-4 rounded-lg"

            if (isAnswered && currentQuestion.correctOptionId) {
              if (isCorrect) {
                className += " border-green-500 bg-green-50 dark:bg-green-950/20"
              } else if (isSelected) {
                className += " border-red-500 bg-red-50 dark:bg-red-950/20"
              }
            } else if (isSelected) {
              className += " border-primary"
            }

            return (
              <div key={option.id} className={className}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={option?.id}
                    id={option.id}
                    disabled={isAnswered}
                    onClick={() => handleOptionSelect(option?.id)}
                  />
                  <Label htmlFor={option.id} className="flex-1 cursor-pointer">
                    {option.text}
                  </Label>
                  {isAnswered && isCorrect && <CheckCircle className="h-5 w-5 text-green-500" />}
                  {isAnswered && !isCorrect && isSelected && <XCircle className="h-5 w-5 text-red-500" />}
                </div>
              </div>
            )
          })}
        </RadioGroup>

        {isAnswered && (
          <div className="rounded-lg border border-muted bg-muted/50 p-4">
            <h4 className="mb-2 font-medium">Explanation</h4>
            <p className="text-sm text-muted-foreground">{currentQuestion.explanation}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {!isAnswered ? (
          <Button onClick={handleCheckAnswer} disabled={!selectedOptionId}>
            Check Answer
          </Button>
        ) : (
          <Button onClick={handleNextQuestion}>
            {currentQuestionIndex < questions.length - 1 ? "Next Question" : "Finish Quiz"}
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
