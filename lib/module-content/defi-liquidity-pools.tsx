"use client"

import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, TrendingUp, Lightbulb } from "lucide-react"
import type { ModuleContent, ModuleVideo, TheorySection, QuizQuestion } from "@/lib/module-types"
import type { ModuleContentInterface } from "@/lib/types"

// Video content
const video: ModuleVideo = {
  url: "youtube-video-id", // Replace with actual YouTube video ID
  title: "Understanding DeFi Liquidity Pools",
  description: "Learn about liquidity pools, their importance in DeFi, and how they work"
}

// Theory sections
const theorySections: TheorySection[] = [
  {
    type: "introduction",
    title: "Introduction to Liquidity Pools",
    content: "Liquidity pools are fundamental to decentralized finance, enabling trading, lending, and other financial activities without traditional intermediaries."
  },
  {
    type: "content",
    title: "How Liquidity Pools Work",
    content: "Liquidity pools use automated market makers (AMMs) to facilitate trading and maintain price stability through mathematical formulas."
  },
  {
    type: "benefits-risks",
    title: "Benefits and Risks",
    content: "While liquidity pools offer many advantages, they also come with specific risks that users should understand."
  }
]

// Quiz questions
const quizQuestions: QuizQuestion[] = [
  {
    question: "What is a liquidity pool in DeFi?",
    options: [
      "A smart contract that holds token pairs for trading",
      "A centralized exchange's order book",
      "A wallet for storing cryptocurrency",
      "A mining pool for earning block rewards",
    ],
    correctIndex: 0,
    explanation:
      "A liquidity pool is a smart contract that holds pairs of tokens, enabling automated market making and decentralized trading without traditional order books.",
  },
  {
    question: "What is impermanent loss in liquidity pools?",
    options: [
      "The temporary loss of funds when market prices change",
      "The fees paid to liquidity providers",
      "The cost of gas for transactions",
      "The slippage in large trades",
    ],
    correctIndex: 0,
    explanation:
      "Impermanent loss occurs when the price ratio of tokens in a pool changes compared to when they were deposited. It becomes permanent if you withdraw your liquidity at these new prices.",
  },
]

// Module content
const moduleContent: ModuleContent = {
  metadata: {
    slug: "defi-liquidity-pools",
    title: "DeFi Liquidity Pools",
    description: "Understanding liquidity pools and their role in decentralized finance",
    level: "Intermediate",
    duration: "30 minutes",
    topics: ["Liquidity Pools", "AMMs", "Trading", "Risk Management"]
  },
  videos: {
    main: video,
    supplementary1: {
      url: "",
      title: "",
      description: ""
    },
    supplementary2: {
      url: "",
      title: "",
      description: ""
    }
  },
  theorySections,
  quizQuestions
}

// Theory component
function RenderTheory() {
  return (
    <div>
      {/* Introduction Hook */}
      <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-background p-6 rounded-xl border border-primary/30 shadow-lg relative overflow-hidden mb-8">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-10 -mt-10 blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full -ml-8 -mb-8 blur-xl"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="bg-primary/20 p-4 rounded-full flex items-center justify-center">
            <svg
              className="h-10 w-10 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          </div>

          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
              The Engine of DeFi Trading
            </h2>
            <p className="text-lg relative">
              <span className="bg-primary/10 px-2 py-1 rounded font-medium">Liquidity is life.</span>{" "}
              Discover how liquidity pools power decentralized trading and why they're the backbone of DeFi.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                Automated Trading
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                Price Discovery
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                Yield Generation
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                Risk Management
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h2>What are Liquidity Pools?</h2>
        <p>
          Liquidity pools are smart contracts that hold reserves of two or more tokens, enabling decentralized trading
          without traditional order books. They're the foundation of decentralized exchanges (DEXs) and many other DeFi
          applications.
        </p>

        <h2>How Automated Market Makers Work</h2>
        <p>
          AMMs use mathematical formulas to determine token prices based on the ratio of tokens in the pool. The most
          common formula is the constant product formula (x * y = k), which ensures that the product of the token
          reserves remains constant.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-secondary/50 p-5 rounded-lg">
            <h3 className="font-semibold mb-2">Uniswap V2</h3>
            <p className="text-sm text-muted-foreground mb-2">
              The most popular AMM using the constant product formula
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">ETH/USDC</span>
              <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">0.3% fee</span>
            </div>
          </div>

          <div className="bg-secondary/50 p-5 rounded-lg">
            <h3 className="font-semibold mb-2">Curve Finance</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Optimized for stablecoin trading with low slippage
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">USDC/DAI</span>
              <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">0.04% fee</span>
            </div>
          </div>

          <div className="bg-secondary/50 p-5 rounded-lg">
            <h3 className="font-semibold mb-2">Balancer</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Customizable pools with multiple tokens and weights
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Multi-token</span>
              <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Custom fees</span>
            </div>
          </div>
        </div>

        <h2>Practical Examples</h2>
        <div className="space-y-4">
          <div className="bg-secondary/50 p-5 rounded-lg flex gap-4">
            <div className="bg-background rounded-full p-3 h-fit">
              <Lightbulb className="h-6 w-6 text-yellow-500" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Providing Liquidity</h3>
              <p className="text-muted-foreground">
                Add equal value of two tokens to a pool and earn trading fees. For example, provide ETH and USDC to a
                Uniswap pool and earn 0.3% of all trades.
              </p>
            </div>
          </div>

          <div className="bg-secondary/50 p-5 rounded-lg flex gap-4">
            <div className="bg-background rounded-full p-3 h-fit">
              <Lightbulb className="h-6 w-6 text-yellow-500" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Impermanent Loss</h3>
              <p className="text-muted-foreground">
                When token prices change, liquidity providers may experience impermanent loss. This occurs when the value
                of your tokens in the pool differs from holding them outside the pool.
              </p>
            </div>
          </div>
        </div>

        {/* Future Outlook */}
        <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-6 rounded-xl">
          <div className="flex items-center mb-4">
            <TrendingUp className="h-6 w-6 text-primary mr-2" />
            <h2 className="text-2xl font-bold">The Future of Liquidity Pools</h2>
          </div>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <div className="mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></div>
              <span>
                <strong>Concentrated Liquidity:</strong> New protocols allow liquidity providers to specify price ranges
                for their liquidity, increasing capital efficiency.
              </span>
          </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></div>
              <span>
                <strong>Cross-Chain Pools:</strong> Liquidity pools that span multiple blockchains, enabling seamless
                trading across different networks.
              </span>
          </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></div>
              <span>
                <strong>Advanced Risk Management:</strong> New tools and protocols to help liquidity providers manage
                risks and optimize returns.
              </span>
          </li>
        </ul>
          <p className="text-lg font-medium">
            As DeFi continues to evolve, liquidity pools will become more sophisticated, efficient, and accessible to
            users of all experience levels.
          </p>
        </div>
      </div>
    </div>
  )
}

// Quiz component
function RenderQuiz() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({})
  const [score, setScore] = useState<number>(0)
  const [showResults, setShowResults] = useState<boolean>(false)

  const handleAnswerSelect = (questionId: string, answerIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answerIndex,
    }))
  }

  const calculateScore = () => {
    return quizQuestions.reduce((score, question) => {
      return score + (selectedAnswers[question.question] === question.correctIndex ? 1 : 0)
    }, 0)
  }

  const handleSubmit = () => {
    const finalScore = calculateScore()
    setScore(finalScore)
    setShowResults(true)
  }

  return (
    <div className="space-y-8">
      {quizQuestions.map((question, index) => (
        <div key={index} className="p-6 bg-card rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">{question.question}</h3>
          <div className="space-y-2">
            {question.options.map((option, optionIndex) => (
              <div
                key={optionIndex}
                className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                  showResults && optionIndex === question.correctIndex ? (
                    "bg-green-100 border-green-500 dark:bg-green-900/20"
                  ) : showResults && selectedAnswers[question.question] === optionIndex && optionIndex !== question.correctIndex ? (
                    "bg-red-100 border-red-500 dark:bg-red-900/20"
                  ) : selectedAnswers[question.question] === optionIndex ? (
                    "bg-primary/10 border-primary"
                  ) : (
                    "hover:bg-accent"
                  )
                }`}
                onClick={() => !showResults && handleAnswerSelect(question.question, optionIndex)}
              >
                <div className="flex items-center">
                  <div className="flex-1">{option}</div>
                  {showResults && optionIndex === question.correctIndex && (
                    <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
                  )}
                  {showResults && selectedAnswers[question.question] === optionIndex && optionIndex !== question.correctIndex && (
                    <XCircle className="h-5 w-5 text-red-500 ml-2" />
                  )}
                </div>
              </div>
            ))}
          </div>
          {showResults && (
            <div className="mt-4 p-4 bg-card rounded-lg border">
              <p className="text-sm">{question.explanation}</p>
            </div>
          )}
        </div>
      ))}

      {!showResults && Object.keys(selectedAnswers).length === quizQuestions.length && (
        <Button onClick={handleSubmit} className="w-full">
          Submit Quiz
        </Button>
      )}

      {showResults && (
        <div className="p-6 bg-card rounded-lg border">
          <h3 className="text-lg font-semibold mb-2">Quiz Results</h3>
          <p>
            You scored {score} out of {quizQuestions.length} ({Math.round((score / quizQuestions.length) * 100)}%)
          </p>
        </div>
      )}
    </div>
  )
}

// Export the module components
const DeFiLiquidityPools: ModuleContentInterface = {
  video,
  renderTheory: RenderTheory,
  renderQuiz: RenderQuiz
}

export default DeFiLiquidityPools 