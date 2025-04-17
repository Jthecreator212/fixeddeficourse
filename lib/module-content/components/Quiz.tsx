import { useState } from 'react'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { QuizQuestion } from '@/lib/types/module'

interface QuizProps {
  questions: QuizQuestion[]
  onComplete?: (score: number) => void
}

export function Quiz({ questions, onComplete }: QuizProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleAnswerSelect = (questionIndex: number, answerIndex: number): void => {
    try {
      const newAnswers = [...selectedAnswers]
      newAnswers[questionIndex] = answerIndex
      setSelectedAnswers(newAnswers)
      setError(null)
    } catch (err) {
      setError('Failed to select answer. Please try again.')
    }
  }

  const handleSubmit = async (): Promise<void> => {
    try {
      setIsSubmitting(true)
      setError(null)
      
      if (selectedAnswers.length !== questions.length) {
        setError('Please answer all questions before submitting.')
        return
      }
      
      const score = calculateScore()
      setShowResults(true)
      onComplete?.(score)
    } catch (err) {
      setError('Failed to submit quiz. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const calculateScore = (): number => {
    return questions.reduce((score: number, question: QuizQuestion, index: number) => {
      return score + (selectedAnswers[index] === question.correctIndex ? 1 : 0)
    }, 0)
  }

  return (
    <div className="space-y-8">
      {error && (
        <div className="bg-red-950/20 border border-red-800/20 p-4 rounded-lg">
          <p className="text-red-500">{error}</p>
        </div>
      )}
      
      {questions.map((question: QuizQuestion, questionIndex: number) => (
        <div key={question.id} className="space-y-4">
          <h3 className="text-lg font-semibold">{question.question}</h3>
          <RadioGroup
            value={selectedAnswers[questionIndex]?.toString()}
            onValueChange={(value) => handleAnswerSelect(questionIndex, parseInt(value))}
            disabled={showResults}
          >
            {question.options.map((option: string, optionIndex: number) => (
              <div key={optionIndex} className="flex items-center space-x-2">
                <RadioGroupItem value={optionIndex.toString()} id={`q${questionIndex}-a${optionIndex}`} />
                <Label htmlFor={`q${questionIndex}-a${optionIndex}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
          {showResults && (
            <div className={`p-4 rounded-lg ${selectedAnswers[questionIndex] === question.correctIndex ? 'bg-green-950/20 border border-green-800/20' : 'bg-red-950/20 border border-red-800/20'}`}>
              <p className="font-medium">{selectedAnswers[questionIndex] === question.correctIndex ? 'Correct!' : 'Incorrect'}</p>
              <p className="text-sm mt-2">{question.explanation}</p>
            </div>
          )}
        </div>
      ))}
      
      <Button 
        onClick={handleSubmit} 
        className="w-full"
        disabled={isSubmitting || showResults}
      >
        {isSubmitting ? 'Submitting...' : 'Check Answers'}
      </Button>
      
      {showResults && (
        <div className="text-center">
          <p className="text-lg font-semibold">Your Score: {calculateScore()} out of {questions.length}</p>
          <p className="text-sm text-muted-foreground mt-2">
            {calculateScore() === questions.length 
              ? 'Perfect! You have a great understanding of the material.' 
              : 'Good effort! Review the explanations to improve your understanding.'}
          </p>
        </div>
      )}
    </div>
  )
} 