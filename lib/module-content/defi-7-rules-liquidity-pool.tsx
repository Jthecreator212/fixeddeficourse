"use client"

import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { AlertCircle, Check, X } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ModuleContentInterface, ModuleVideo, QuizQuestion } from "./index"

const video: ModuleVideo = {
  url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  title: "7 Rules for Entering a Liquidity Pool",
  description: "Learn the essential rules to safely and profitably enter liquidity pools in DeFi."
}

const quizQuestions: QuizQuestion[] = [
  {
    question: "What is the first rule of entering a liquidity pool?",
    options: [
      "Always invest the maximum amount possible",
      "Only invest with funds you can afford to lose",
      "Always enter pools with the highest APY",
      "Only enter pools with stablecoins"
    ],
    correctIndex: 1,
    explanation: "The first rule is to only invest with funds you can afford to lose. This is crucial as all DeFi investments carry risk, including smart contract risks, impermanent loss, and market volatility."
  },
  {
    question: "According to the module, what should you check before entering a liquidity pool?",
    options: [
      "Only the APY percentage",
      "The social media hype around the pool",
      "Protocol security, token economics, and team reputation",
      "How many of your friends are already in the pool"
    ],
    correctIndex: 2,
    explanation: "Before entering a pool, you should thoroughly research the protocol's security history, audit reports, token economics, and the reputation of the team behind it. This due diligence is critical for risk management."
  },
  {
    question: "What is the recommended approach to entering new liquidity pools?",
    options: [
      "Go all-in immediately if the APY is high",
      "Start with a small position and increase gradually",
      "Wait until the pool has been around for at least 2 years",
      "Only enter if a celebrity endorses it"
    ],
    correctIndex: 1,
    explanation: "The recommended approach is to start with a small position and increase it gradually as you gain confidence in the pool's performance and security. This allows you to test the waters without risking too much capital."
  }
]

export function RenderTheory() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">The 7 Essential Rules for Liquidity Pool Investments</h2>
        <p className="mb-4">
          Entering a liquidity pool is a significant decision that requires careful consideration. These seven rules will help guide
          your decision-making process and minimize risks while maximizing potential returns.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3">Rule 1: Only Invest What You Can Afford to Lose</h3>
        <p className="mb-3">
          DeFi investments, including liquidity pools, carry inherent risks. Never invest funds that you need for living expenses or financial security.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Consider liquidity pool investments as high-risk, high-reward opportunities</li>
          <li>Create a dedicated "risk capital" allocation for DeFi investments</li>
          <li>Be emotionally prepared to lose your entire investment in worst-case scenarios</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3">Rule 2: Do Thorough Research</h3>
        <p className="mb-3">
          Before committing any funds, conduct comprehensive research on the protocol, tokens, and team.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Review security audits by reputable firms</li>
          <li>Examine the protocol's history of exploits or vulnerabilities</li>
          <li>Analyze the tokenomics of both tokens in the pair</li>
          <li>Research the team's background and track record</li>
          <li>Check community sentiment and governance structure</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3">Rule 3: Start Small and Scale Gradually</h3>
        <p className="mb-3">
          Begin with a small position to test the mechanics and monitor performance before committing larger amounts.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Use a trial position to verify that deposits, rewards, and withdrawals work as expected</li>
          <li>Increase your position size incrementally based on performance and confidence</li>
          <li>Maintain a portfolio approach with diversified pool investments</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3">Rule 4: Understand Impermanent Loss</h3>
        <p className="mb-3">
          Impermanent loss occurs when the price ratio of tokens in a pool changes from when you deposited them.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Calculate potential impermanent loss for different price movement scenarios</li>
          <li>Consider stable pairs (like stablecoin pairs) for lower impermanent loss risk</li>
          <li>Ensure that expected fees and rewards compensate for potential impermanent loss</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3">Rule 5: Monitor Gas Costs and Fee Structure</h3>
        <p className="mb-3">
          Transaction costs can significantly impact profitability, especially for smaller positions.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Understand all fees: deposit fees, withdrawal fees, performance fees</li>
          <li>Consider the network's gas fees and optimal timing for transactions</li>
          <li>Calculate the minimum profitable investment size given the fee structure</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3">Rule 6: Have an Exit Strategy</h3>
        <p className="mb-3">
          Determine your exit conditions before entering a pool to avoid emotional decision-making.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Set clear profit-taking thresholds</li>
          <li>Define risk management triggers that would cause you to exit</li>
          <li>Consider time-based strategies (like 30/60/90 day evaluations)</li>
          <li>Plan for emergency exits in case of protocol issues</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3">Rule 7: Stay Informed and Adaptable</h3>
        <p className="mb-3">
          The DeFi landscape evolves rapidly, requiring continuous learning and adaptation.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Follow protocol updates, governance proposals, and security news</li>
          <li>Join community channels to stay informed about important changes</li>
          <li>Regularly reassess your positions based on new information</li>
          <li>Be prepared to adjust your strategy as market conditions change</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3">Conclusion</h3>
        <p>
          Following these seven rules won't guarantee success, but they will significantly improve your odds of having a positive
          experience with liquidity pools. Remember that in DeFi, prudent risk management and continuous education are your most
          valuable tools for long-term success.
        </p>
      </section>
    </div>
  )
}

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
      <h2 className="text-2xl font-bold">Quiz: 7 Rules for Liquidity Pools</h2>
      <p className="text-muted-foreground">
        Test your knowledge of the essential rules for entering liquidity pools.
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
export const DeFi7RulesLiquidityPool: ModuleContentInterface = {
  renderTheory: RenderTheory,
  renderQuiz: RenderQuiz,
  video
} 