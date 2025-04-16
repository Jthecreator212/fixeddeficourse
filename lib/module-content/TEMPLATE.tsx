import type { ModuleContentInterface } from "@/lib/types"
import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, Lightbulb } from "lucide-react"

// Video for this module
const video = {
  url: "https://www.youtube.com/embed/example",
  title: "Module Title Video",
  description: "Brief description of the module video."
}

// Quiz questions for this module
const quizQuestions: {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}[] = [
  {
    question: "Sample question?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correctIndex: 0,
    explanation: "Explanation for the correct answer."
  }
]

// Theory content component
function RenderTheory() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h2 className="text-2xl font-bold mb-4">Module Title</h2>
      <p>Brief introduction to the module topic.</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Key point 1</li>
        <li>Key point 2</li>
        <li>Key point 3</li>
      </ul>
      <div className="bg-secondary/50 p-5 rounded-lg flex gap-4 mt-6">
        <div className="bg-background rounded-full p-3 h-fit">
          <Lightbulb className="h-6 w-6 text-yellow-500" />
        </div>
        <div>
          <h3 className="font-semibold mb-1">Example Section</h3>
          <p className="text-muted-foreground">Describe a real-world example or use case here.</p>
        </div>
      </div>
    </div>
  )
}

// Quiz component
function RenderQuiz() {
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(Array(quizQuestions.length).fill(-1))
  const [showResults, setShowResults] = useState<boolean[]>(Array(quizQuestions.length).fill(false))

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers]
    newSelectedAnswers[questionIndex] = answerIndex
    setSelectedAnswers(newSelectedAnswers)
  }

  const handleCheckAnswer = (questionIndex: number) => {
    const newShowResults = [...showResults]
    newShowResults[questionIndex] = true
    setShowResults(newShowResults)
  }

  return (
    <div className="space-y-8">
      {quizQuestions.map((question, questionIndex) => (
        <div key={questionIndex} className="space-y-4">
          <h3 className="text-lg font-semibold">{question.question}</h3>
          <RadioGroup
            value={selectedAnswers[questionIndex].toString()}
            onValueChange={(value) => handleAnswerSelect(questionIndex, parseInt(value))}
          >
            {question.options.map((option: string, optionIndex: number) => (
              <div key={optionIndex} className="flex items-center space-x-2">
                <RadioGroupItem value={optionIndex.toString()} id={`q${questionIndex}-o${optionIndex}`} />
                <Label htmlFor={`q${questionIndex}-o${optionIndex}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
          {showResults[questionIndex] && (
            <div
              className={`p-4 rounded-lg ${
                selectedAnswers[questionIndex] === question.correctIndex
                  ? "bg-green-100 dark:bg-green-900"
                  : "bg-red-100 dark:bg-red-900"
              }`}
            >
              <div className="flex items-center gap-2">
                {selectedAnswers[questionIndex] === question.correctIndex ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-500" />
                )}
                <p>{question.explanation}</p>
              </div>
            </div>
          )}
          <Button
            onClick={() => handleCheckAnswer(questionIndex)}
            disabled={selectedAnswers[questionIndex] === -1}
          >
            Check Answer
          </Button>
        </div>
      ))}
    </div>
  )
}

// Export the module content
const ModuleTemplate: ModuleContentInterface = {
  video,
  renderTheory: RenderTheory,
  renderQuiz: RenderQuiz,
}

export default ModuleTemplate 