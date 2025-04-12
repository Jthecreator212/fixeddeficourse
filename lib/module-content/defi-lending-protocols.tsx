"use client"

import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle } from "lucide-react"
import type { ModuleContentInterface, QuizQuestion } from "./index"

// Define the video for this module
const video = {
  url: "https://www.youtube.com/embed/aTp9er6S73M",
  title: "DeFi Lending Protocols Explained",
  description: "Learn how lending and borrowing works in decentralized finance with this comprehensive tutorial.",
}

// Define the quiz questions for this module
const quizQuestions: QuizQuestion[] = [
  {
    question: "What is the primary purpose of DeFi lending protocols?",
    options: [
      "To replace traditional banks entirely",
      "To enable peer-to-peer lending and borrowing without intermediaries",
      "To provide free loans to cryptocurrency holders",
      "To create new cryptocurrencies",
    ],
    correctIndex: 1,
    explanation:
      "DeFi lending protocols are designed to enable peer-to-peer lending and borrowing without traditional financial intermediaries like banks. They use smart contracts to automate the process, allowing users to earn interest on their deposits or borrow assets by providing collateral.",
  },
  {
    question: "What is overcollateralization in DeFi lending?",
    options: [
      "Borrowing more than the value of your collateral",
      "Providing collateral worth more than the amount you're borrowing",
      "Lending more than you can afford to lose",
      "Having multiple loans on different platforms",
    ],
    correctIndex: 1,
    explanation:
      "Overcollateralization means providing collateral that exceeds the value of the loan you're taking. For example, you might need to deposit $150 worth of ETH to borrow $100 worth of a stablecoin. This protects the protocol from losses due to market volatility and ensures there are always sufficient funds to cover loans.",
  },
  {
    question: "What happens during a liquidation in DeFi lending?",
    options: [
      "The borrower's collateral is sold to repay the loan",
      "The lending protocol shuts down temporarily",
      "The borrower receives additional time to repay",
      "The interest rate is increased as a penalty",
    ],
    correctIndex: 0,
    explanation:
      "During a liquidation, a portion of the borrower's collateral is automatically sold (often at a discount) to repay the loan when the collateral-to-loan ratio falls below a certain threshold. This happens when the value of the collateral decreases or the value of the borrowed assets increases significantly.",
  },
  {
    question: "Which of the following is NOT a major DeFi lending protocol?",
    options: ["Aave", "Compound", "MakerDAO", "BitLend"],
    correctIndex: 3,
    explanation:
      "BitLend is not a major DeFi lending protocol. The major protocols include Aave, Compound, and MakerDAO, which are well-established platforms with billions of dollars in total value locked (TVL).",
  },
  {
    question: "What is the primary risk of using DeFi lending protocols?",
    options: [
      "Smart contract vulnerabilities",
      "High transaction fees",
      "Slow transaction processing",
      "Limited asset selection",
    ],
    correctIndex: 0,
    explanation:
      "Smart contract vulnerabilities represent the primary risk in DeFi lending protocols. If there are bugs or security flaws in the code, hackers could potentially exploit them to drain funds from the protocol. This has happened several times in the history of DeFi, resulting in millions of dollars in losses.",
  },
]

// Component to render the theory content
function RenderTheory() {
  return (
    <div>
      <div className="prose dark:prose-invert max-w-none">
        <div
          dangerouslySetInnerHTML={{
            __html: `
            <h2>Lending Protocol Mechanics</h2>
            <p>DeFi lending protocols allow users to lend and borrow cryptocurrencies without intermediaries. These protocols use smart contracts to automate the lending process, including interest rate calculations, collateral management, and liquidations.</p>
            
            <h2>Collateralization</h2>
            <p>Most DeFi lending protocols require borrowers to provide collateral that exceeds the value of their loan, known as overcollateralization. This protects lenders from default risk in a volatile market.</p>
            
            <h2>Interest Rate Models</h2>
            <p>DeFi lending protocols typically use algorithmic interest rate models that adjust based on supply and demand. When utilization is high (most of the available funds are borrowed), interest rates increase to incentivize more deposits and fewer loans.</p>
            
            <h2>Liquidations</h2>
            <p>If the value of a borrower's collateral falls below a certain threshold relative to their loan, the position becomes eligible for liquidation. During liquidation, a portion of the collateral is sold to repay the loan, often with a penalty fee that goes to the liquidator.</p>
            
            <h2>Popular Lending Platforms</h2>
            <p>Several major lending protocols dominate the DeFi lending space:</p>
            <ul>
              <li><strong>Aave:</strong> A protocol featuring multiple pools, flash loans, and variable/stable interest rates</li>
              <li><strong>Compound:</strong> One of the first lending protocols with a governance token (COMP)</li>
              <li><strong>MakerDAO:</strong> Issues the DAI stablecoin through overcollateralized loans</li>
            </ul>
            
            <h2>Risks in DeFi Lending</h2>
            <p>While DeFi lending offers many benefits, it also comes with risks:</p>
            <ul>
              <li><strong>Smart Contract Risk:</strong> Vulnerabilities in the code could lead to loss of funds</li>
              <li><strong>Liquidation Risk:</strong> Rapid market movements could trigger liquidations</li>
              <li><strong>Oracle Risk:</strong> Price feeds that determine collateral values could be manipulated</li>
              <li><strong>Market Risk:</strong> Extreme volatility could affect the protocol's stability</li>
            </ul>
            
            <h2>Yield Strategies</h2>
            <p>Advanced users often employ complex strategies to maximize returns:</p>
            <ul>
              <li><strong>Looping:</strong> Borrowing assets to deposit them again for additional yield</li>
              <li><strong>Yield Farming:</strong> Moving assets between protocols to capture the highest yields</li>
              <li><strong>Leveraged Positions:</strong> Using borrowed funds to increase exposure to certain assets</li>
            </ul>
          `,
          }}
        />
      </div>

      <div className="mt-10 space-y-10">
        {/* Additional content specific to DeFi lending protocols could be added here */}
      </div>
    </div>
  )
}

// Component to render the quiz
function RenderQuiz() {
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const [checkedAnswers, setCheckedAnswers] = useState<boolean[]>([])
  const [showExplanations, setShowExplanations] = useState<boolean[]>([])

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
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
      <h2 className="text-2xl font-bold">DeFi Lending Protocols Quiz</h2>
      <p className="text-muted-foreground mb-6">
        Test your understanding of DeFi lending and borrowing concepts from this module.
      </p>

      {quizQuestions.map((q, qIndex) => (
        <div key={qIndex} className="space-y-4 border-b pb-6 last:border-0">
          <h3 className="text-lg font-medium">{q.question}</h3>

          <RadioGroup value={selectedAnswers[qIndex]?.toString()}>
            {q.options.map((option, oIndex) => (
              <div
                key={oIndex}
                className={`flex items-center space-x-2 p-3 rounded-md border ${
                  checkedAnswers[qIndex] && oIndex === q.correctIndex
                    ? "border-green-500 bg-green-50 dark:bg-green-950/20"
                    : checkedAnswers[qIndex] && selectedAnswers[qIndex] === oIndex
                      ? "border-red-500 bg-red-50 dark:bg-red-950/20"
                      : "border-border"
                }`}
              >
                <RadioGroupItem
                  value={oIndex.toString()}
                  id={`q${qIndex}-o${oIndex}`}
                  disabled={checkedAnswers[qIndex]}
                  onClick={() => handleAnswerSelect(qIndex, oIndex)}
                />
                <Label htmlFor={`q${qIndex}-o${oIndex}`} className="flex-1 cursor-pointer">
                  {option}
                </Label>
                {checkedAnswers[qIndex] && oIndex === q.correctIndex && (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                )}
                {checkedAnswers[qIndex] && selectedAnswers[qIndex] === oIndex && oIndex !== q.correctIndex && (
                  <XCircle className="h-5 w-5 text-red-500" />
                )}
              </div>
            ))}
          </RadioGroup>

          {!checkedAnswers[qIndex] && selectedAnswers[qIndex] !== undefined && (
            <Button onClick={() => handleCheckAnswer(qIndex)} className="mt-2">
              Check Answer
            </Button>
          )}

          {showExplanations[qIndex] && (
            <div className="mt-4 p-4 bg-secondary/30 rounded-md">
              <h4 className="font-medium mb-2">Explanation:</h4>
              <p className="text-sm text-muted-foreground">{q.explanation}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

// Export the module content
export const DeFiLendingProtocols: ModuleContentInterface = {
  renderTheory: RenderTheory,
  renderQuiz: RenderQuiz,
  video,
}
