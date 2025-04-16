"use client"

import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { AlertCircle, Check, X, AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ModuleContentInterface, ModuleVideo, QuizQuestion } from "./index"

// Define the video for this module
const video: ModuleVideo = {
  url: "https://www.youtube.com/embed/example",
  title: "Step-by-Step Guide to Entering a Liquidity Pool",
  description: "Learn how to safely enter your first liquidity pool in DeFi.",
}

// Define the quiz questions for this module
const quizQuestions: QuizQuestion[] = [
  {
    question: "What is the first step before entering a liquidity pool?",
    options: [
      "Depositing all your funds",
      "Setting up a wallet and connecting it to the protocol",
      "Buying the most volatile tokens",
      "Reading the smart contract code",
    ],
    correctIndex: 1,
    explanation:
      "The first step is to set up a compatible wallet and connect it to the DeFi protocol. This is essential for interacting with the protocol and managing your funds.",
  },
  {
    question: "Why is token selection important when entering a liquidity pool?",
    options: [
      "To maximize potential profits",
      "To minimize impermanent loss risk",
      "To ensure compatibility with the pool",
      "All of the above",
    ],
    correctIndex: 3,
    explanation:
      "Token selection is crucial for all these reasons. Choosing the right tokens affects potential profits, risk management, and ensures the tokens are compatible with the pool you want to enter.",
  },
  {
    question: "What should you do before committing a large amount of funds to a liquidity pool?",
    options: [
      "Start with a small test amount",
      "Read the protocol's documentation",
      "Check the pool's historical performance",
      "All of the above",
    ],
    correctIndex: 3,
    explanation:
      "It's important to do all of these things before committing significant funds. Starting small allows you to test the process, documentation provides important information, and historical performance helps assess risks.",
  },
]

// Component to render the theory content
export function RenderTheory() {
  return (
    <div>
      {/* Introduction Hook */}
      <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-background p-6 rounded-xl border border-primary/30 shadow-lg relative overflow-hidden mb-8">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-10 -mt-10 blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full -ml-8 -mb-8 blur-xl"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="bg-primary/20 p-4 rounded-full flex items-center justify-center">
            <AlertTriangle className="h-10 w-10 text-primary" />
          </div>

          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
              Your First Step into Liquidity Provision
            </h2>
            <p className="text-lg relative">
              <span className="bg-primary/10 px-2 py-1 rounded font-medium">Safety first.</span>{" "}
              Learn how to enter your first liquidity pool safely and effectively.
            </p>
          </div>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h2>Wallet Setup</h2>
        <p>
          Before entering a liquidity pool, you need to set up your wallet properly:
        </p>
        <ul>
          <li>
            <strong>Choose a Compatible Wallet:</strong> Select a wallet that supports the blockchain and tokens you want to use.
          </li>
          <li>
            <strong>Connect to the Protocol:</strong> Connect your wallet to the DeFi protocol's interface.
          </li>
          <li>
            <strong>Fund Your Wallet:</strong> Ensure you have enough of the required tokens to provide liquidity.
          </li>
          <li>
            <strong>Test Transactions:</strong> Start with small test transactions to ensure everything works correctly.
          </li>
        </ul>

        <h2>Token Selection</h2>
        <p>
          Choosing the right tokens is crucial for successful liquidity provision:
        </p>
        <ul>
          <li>
            <strong>Token Research:</strong> Research the tokens' fundamentals, team, and community.
          </li>
          <li>
            <strong>Price Correlation:</strong> Consider the correlation between the tokens' prices.
          </li>
          <li>
            <strong>Liquidity Depth:</strong> Check the existing liquidity in the pool.
          </li>
          <li>
            <strong>Token Utility:</strong> Understand the tokens' use cases and demand drivers.
          </li>
        </ul>

        <h2>Risk Assessment</h2>
        <p>
          Evaluate the risks before providing liquidity:
        </p>
        <ul>
          <li>
            <strong>Smart Contract Risk:</strong> Check if the protocol has been audited.
          </li>
          <li>
            <strong>Market Risk:</strong> Assess potential price movements and their impact.
          </li>
          <li>
            <strong>Protocol Risk:</strong> Evaluate the protocol's track record and security measures.
          </li>
          <li>
            <strong>Liquidity Risk:</strong> Consider the ease of entering and exiting the pool.
          </li>
        </ul>

        <h2>Step-by-Step Process</h2>
        <p>
          Follow these steps to enter a liquidity pool:
        </p>
        <ol>
          <li>
            <strong>Research:</strong> Study the protocol, tokens, and pool metrics.
          </li>
          <li>
            <strong>Prepare:</strong> Set up your wallet and acquire the necessary tokens.
          </li>
          <li>
            <strong>Test:</strong> Start with a small amount to test the process.
          </li>
          <li>
            <strong>Monitor:</strong> Keep track of your position and market conditions.
          </li>
          <li>
            <strong>Adjust:</strong> Be prepared to adjust your position based on market changes.
          </li>
        </ol>
      </div>
    </div>
  )
}

// Component to render the quiz
export function RenderQuiz() {
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(Array(quizQuestions.length).fill(-1))
  const [checkedAnswers, setCheckedAnswers] = useState<boolean[]>(Array(quizQuestions.length).fill(false))
  const [showExplanations, setShowExplanations] = useState<boolean[]>(Array(quizQuestions.length).fill(false))

  const handleSelectAnswer = (questionIndex: number, answerIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers]
    newSelectedAnswers[questionIndex] = answerIndex
    setSelectedAnswers(newSelectedAnswers)
  }

  const handleCheckAnswer = (questionIndex: number) => {
    const newCheckedAnswers = [...checkedAnswers]
    newCheckedAnswers[questionIndex] = true
    setCheckedAnswers(newCheckedAnswers)

    const newShowExplanations = [...showExplanations]
    newShowExplanations[questionIndex] = true
    setShowExplanations(newShowExplanations)
  }

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Liquidity Pool Entry Knowledge Check</h2>
      <p className="text-muted-foreground mb-6">
        Test your understanding of the process of entering a liquidity pool.
      </p>

      {quizQuestions.map((question, questionIndex) => (
        <div key={questionIndex} className="border rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-medium">
            Question {questionIndex + 1}: {question.question}
          </h3>

          <RadioGroup
            value={selectedAnswers[questionIndex]?.toString()}
            onValueChange={(value) => handleSelectAnswer(questionIndex, parseInt(value))}
            className="space-y-3"
          >
            {question.options.map((option, optionIndex) => (
              <div
                key={optionIndex}
                className={cn(
                  "flex items-center space-x-2 rounded-md border p-3",
                  checkedAnswers[questionIndex] && optionIndex === question.correctIndex && "border-green-500 bg-green-50",
                  checkedAnswers[questionIndex] &&
                    selectedAnswers[questionIndex] === optionIndex &&
                    optionIndex !== question.correctIndex &&
                    "border-red-500 bg-red-50"
                )}
              >
                <RadioGroupItem value={optionIndex.toString()} id={`q${questionIndex}-a${optionIndex}`} />
                <Label htmlFor={`q${questionIndex}-a${optionIndex}`} className="flex-grow">
                  {option}
                </Label>
                {checkedAnswers[questionIndex] && optionIndex === question.correctIndex && (
                  <Check className="h-5 w-5 text-green-500" />
                )}
                {checkedAnswers[questionIndex] && selectedAnswers[questionIndex] === optionIndex && optionIndex !== question.correctIndex && (
                  <X className="h-5 w-5 text-red-500" />
                )}
              </div>
            ))}
          </RadioGroup>

          {showExplanations[questionIndex] && (
            <div className="bg-muted p-4 rounded-md flex gap-2">
              <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm">{question.explanation}</p>
            </div>
          )}

          <Button
            onClick={() => handleCheckAnswer(questionIndex)}
            disabled={selectedAnswers[questionIndex] === -1 || checkedAnswers[questionIndex]}
            className="mt-2"
          >
            Check Answer
          </Button>
        </div>
      ))}
    </div>
  )
}

// Export the module content
const DeFiEnteringLiquidityPool: ModuleContentInterface = {
  renderTheory: RenderTheory,
  renderQuiz: RenderQuiz,
  video,
}

export default DeFiEnteringLiquidityPool 