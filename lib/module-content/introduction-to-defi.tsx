﻿"use client"

import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, AlertTriangle, Lightbulb, TrendingUp } from "lucide-react"
import type { ModuleContentInterface } from "@/lib/types"

// Define the video for this module
const video = {
  url: "https://www.youtube.com/embed/WEQwsfpcudg",
  title: "Introduction to DeFi Video",
  description: "Watch this video tutorial to learn more about DeFi concepts covered in this module.",
}

// Component to render the theory content
function RenderTheory() {
  return (
    <div>
      <div className="prose dark:prose-invert max-w-none">
        
        {/* Introduction Hook - Moved to top */}
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
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
                What if you could manage your money without ever stepping into a bank?
              </h2>
              <p className="text-lg relative">
                <span className="bg-primary/10 px-2 py-1 rounded font-medium">DeFi makes that possible.</span>{" "}
                Decentralized Finance is revolutionizing how we think about money, investments, and financial
                services—all without traditional intermediaries.
              </p>
              
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                  Financial Freedom
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                  Permissionless
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                  Transparent
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                  Programmable
                </span>
              </div>
            </div>
          </div>
        </div>

        <p>
          Decentralized Finance (DeFi) is revolutionizing the financial landscape by leveraging blockchain technology to
          create open, permissionless, and transparent financial services. This module provides a foundational
          understanding of DeFi, contrasting it with traditional finance and exploring its key components.
        </p>

        <h2>What is DeFi?</h2>
        <p>
          DeFi aims to recreate and improve traditional financial instruments using decentralized architectures,
          primarily blockchain networks like Ethereum. By utilizing smart contracts, DeFi platforms automate financial
          processes, reducing the need for intermediaries such as banks and brokers.
        </p>

        <h2>Traditional Finance vs. DeFi</h2>
        <p>
          The core difference lies in the infrastructure. Traditional finance relies on centralized entities, while DeFi
          operates on decentralized networks. This leads to several key advantages:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Accessibility:</strong> DeFi services are available to anyone with an internet connection,
            regardless of their location or financial status.
          </li>
          <li>
            <strong>Transparency:</strong> All transactions are recorded on a public blockchain, providing a high degree
            of transparency.
          </li>
          <li>
            <strong>Control:</strong> Users retain control over their assets, eliminating the need to trust
            intermediaries.
          </li>
          <li>
            <strong>Efficiency:</strong> Smart contracts automate processes, reducing costs and increasing efficiency.
          </li>
        </ul>

        <h2>Key DeFi Components</h2>
        <p>The DeFi ecosystem comprises various interconnected components:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Decentralized Exchanges (DEXs):</strong> Platforms for trading cryptocurrencies directly from user
            wallets, without intermediaries.
          </li>
          <li>
            <strong>Lending and Borrowing Platforms:</strong> Protocols that allow users to lend and borrow crypto
            assets, earning interest or taking out loans.
          </li>
          <li>
            <strong>Stablecoins:</strong> Cryptocurrencies designed to maintain a stable value, often pegged to a fiat
            currency like the US dollar.
          </li>
          <li>
            <strong>Yield Farming:</strong> Strategies for maximizing returns by providing liquidity to DeFi protocols,
            earning rewards in the form of additional tokens.
          </li>
          <li>
            <strong>DAOs (Decentralized Autonomous Organizations):</strong> Community-governed entities that manage DeFi
            protocols, allowing token holders to vote on key decisions.
          </li>
        </ul>
      </div>

      <div className="mt-10 space-y-10">
        {/* Benefits and Risks */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Benefits and Risks of DeFi</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-green-950/20 p-6 rounded-lg border border-green-800/20">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                <h3 className="text-xl font-semibold">Benefits</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="mr-2 mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <div>
                    <span className="font-medium">Financial Inclusion:</span> DeFi opens financial services to people
                    without access to traditional banking, serving the unbanked and underbanked populations worldwide.
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-2 mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <div>
                    <span className="font-medium">Lower Costs:</span> By removing intermediaries, DeFi significantly
                    reduces fees and transaction costs associated with financial services.
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-2 mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <div>
                    <span className="font-medium">Innovation:</span> Open-source protocols encourage the development of
                    new financial tools and services that weren't possible in traditional systems.
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-red-950/20 p-6 rounded-lg border border-red-800/20">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 text-red-500 mr-2" />
                <h3 className="text-xl font-semibold">Risks</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="mr-2 mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500"></div>
                  <div>
                    <span className="font-medium">Smart Contract Vulnerabilities:</span> Code bugs or vulnerabilities
                    can lead to hacks or loss of funds in DeFi protocols.
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-2 mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500"></div>
                  <div>
                    <span className="font-medium">Market Volatility:</span> Cryptocurrency markets can be highly
                    volatile, leading to potential losses in DeFi investments.
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-2 mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500"></div>
                  <div>
                    <span className="font-medium">Regulatory Uncertainty:</span> The evolving regulatory landscape
                    could impact DeFi services and their availability in different jurisdictions.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Real-World Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Key DeFi Components with Real-World Examples</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-secondary/50 p-5 rounded-lg">
              <h3 className="font-semibold mb-2">Decentralized Exchanges (DEXs)</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Platforms for trading cryptocurrencies without intermediaries
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Uniswap</span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">SushiSwap</span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">dYdX</span>
              </div>
            </div>

            <div className="bg-secondary/50 p-5 rounded-lg">
              <h3 className="font-semibold mb-2">Lending Protocols</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Platforms that allow users to lend and borrow crypto assets
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Aave</span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Compound</span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">MakerDAO</span>
              </div>
            </div>

            <div className="bg-secondary/50 p-5 rounded-lg">
              <h3 className="font-semibold mb-2">Stablecoins</h3>
              <p className="text-sm text-muted-foreground mb-2">Cryptocurrencies designed to maintain a stable value</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">DAI</span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">USDC</span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">USDT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Real-World DeFi Use Cases</h2>
          <div className="space-y-4">
            <div className="bg-secondary/50 p-5 rounded-lg flex gap-4">
              <div className="bg-background rounded-full p-3 h-fit">
                <Lightbulb className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Earning Interest Without Banks</h3>
                <p className="text-muted-foreground">
                  Deposit your crypto assets into lending protocols like Aave or Compound to earn interest rates that
                  often exceed traditional savings accounts, all without needing approval from a bank.
                </p>
              </div>
            </div>

            <div className="bg-secondary/50 p-5 rounded-lg flex gap-4">
              <div className="bg-background rounded-full p-3 h-fit">
                <Lightbulb className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Collateralized Borrowing</h3>
                <p className="text-muted-foreground">
                  Use your existing crypto as collateral to borrow other assets or stablecoins, without credit checks or
                  lengthy approval processes. This enables access to liquidity without selling your assets.
                </p>
              </div>
            </div>

            <div className="bg-secondary/50 p-5 rounded-lg flex gap-4">
              <div className="bg-background rounded-full p-3 h-fit">
                <Lightbulb className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Instant Token Trading</h3>
                <p className="text-muted-foreground">
                  Trade tokens instantly on decentralized exchanges like Uniswap without creating an account, submitting
                  KYC documents, or waiting for approval. Connect your wallet and start trading immediately.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* A Look Ahead */}
        <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-6 rounded-xl">
          <div className="flex items-center mb-4">
            <TrendingUp className="h-6 w-6 text-primary mr-2" />
            <h2 className="text-2xl font-bold">The Future of DeFi</h2>
          </div>
          <p className="mb-4">
            DeFi is still in its early stages, with enormous potential to reshape the global financial landscape:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <div className="mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></div>
              <span>
                <strong>Global Financial Inclusion:</strong> DeFi could bring financial services to billions of unbanked
                people worldwide, requiring only an internet connection.
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></div>
              <span>
                <strong>Institutional Adoption:</strong> As regulatory clarity improves, traditional financial
                institutions are increasingly exploring DeFi integration.
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></div>
              <span>
                <strong>New Economic Models:</strong> DeFi enables novel economic structures and incentive systems that
                weren't possible in traditional finance.
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></div>
              <span>
                <strong>Cross-Chain Interoperability:</strong> The future of DeFi will likely involve seamless
                interaction between different blockchain networks.
              </span>
            </li>
          </ul>
          <p className="text-lg font-medium">
            DeFi is just getting started—stick with this course to see where it's headed next and how you can be part of
            this financial revolution.
          </p>
        </div>
      </div>
    </div>
  )
}

// Component to render the quiz content
function RenderQuiz() {
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  interface QuizQuestion {
    question: string
    options: string[]
    correctIndex: number
    explanation: string
  }

  const quizQuestions: QuizQuestion[] = [
    {
      question: "What is the primary advantage of DeFi over traditional finance?",
      options: [
        "Higher interest rates",
        "No need for intermediaries",
        "Better customer service",
        "More physical branches"
      ],
      correctIndex: 1,
      explanation: "DeFi eliminates intermediaries by using smart contracts on blockchain networks, allowing direct peer-to-peer transactions."
    },
    {
      question: "What does DeFi stand for?",
      options: [
        "Digital Finance",
        "Decentralized Finance",
        "Distributed Financial Infrastructure",
        "Direct Finance Investment",
      ],
      correctIndex: 1,
      explanation:
        "DeFi stands for Decentralized Finance, which refers to financial applications built on blockchain technology that don't rely on centralized intermediaries like banks or brokerages.",
    },
    {
      question: "Which of the following is a key advantage of DeFi over traditional finance?",
      options: [
        "Government insurance on deposits",
        "Customer service call centers",
        "Permissionless access for anyone with an internet connection",
        "Lower volatility in asset prices",
      ],
      correctIndex: 2,
      explanation:
        "One of the main advantages of DeFi is its permissionless nature - anyone with an internet connection can access DeFi services regardless of their location, income level, or social status. Traditional finance often has barriers to entry like minimum balances, credit checks, or geographic limitations.",
    },
    {
      question: "What are smart contracts in the context of DeFi?",
      options: [
        "Legal agreements written by lawyers",
        "Self-executing code that automatically enforces the terms of an agreement",
        "Insurance policies for cryptocurrency investments",
        "Contracts that require government approval",
      ],
      correctIndex: 1,
      explanation:
        "Smart contracts are self-executing code that automatically enforce and execute the terms of an agreement when predefined conditions are met. They are the backbone of DeFi applications, enabling trustless transactions without intermediaries.",
    },
    {
      question: "Which of the following is NOT a common component of the DeFi ecosystem?",
      options: [
        "Decentralized Exchanges (DEXs)",
        "Lending Protocols",
        "Central Bank Digital Currencies (CBDCs)",
        "Yield Farming Platforms",
      ],
      correctIndex: 2,
      explanation:
        "Central Bank Digital Currencies (CBDCs) are not part of the DeFi ecosystem. They are digital versions of national currencies issued and controlled by central banks, which goes against the decentralized nature of DeFi. The other options - DEXs, lending protocols, and yield farming platforms - are all key components of DeFi.",
    },
    {
      question: "What is a significant risk associated with DeFi?",
      options: [
        "Smart contract vulnerabilities that could lead to loss of funds",
        "Too much regulatory oversight",
        "Slow transaction processing times",
        "Limited availability of assets to trade",
      ],
      correctIndex: 0,
      explanation:
        "Smart contract vulnerabilities are a significant risk in DeFi. If there are bugs or security flaws in the code of a DeFi protocol, it could potentially be exploited by attackers, leading to loss of user funds. This has happened multiple times in the history of DeFi, resulting in millions of dollars in losses.",
    },
  ]

  const handleAnswerSelect = (questionIndex: number, answerIndex: number): void => {
    try {
      const newAnswers = [...selectedAnswers]
      newAnswers[questionIndex] = answerIndex
      setSelectedAnswers(newAnswers)
      setError(null) // Clear any previous errors
    } catch (err) {
      setError('Failed to select answer. Please try again.')
    }
  }

  const handleSubmit = async (): Promise<void> => {
    try {
      setIsSubmitting(true)
      setError(null)
      
      // Validate all questions are answered
      if (selectedAnswers.length !== quizQuestions.length) {
        setError('Please answer all questions before submitting.')
        return
      }
      
      setShowResults(true)
    } catch (err) {
      setError('Failed to submit quiz. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const calculateScore = (): number => {
    return quizQuestions.reduce((score: number, question: QuizQuestion, index: number) => {
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
      
      {quizQuestions.map((question: QuizQuestion, questionIndex: number) => (
        <div key={questionIndex} className="space-y-4">
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
          <p className="text-lg font-semibold">Your Score: {calculateScore()} out of {quizQuestions.length}</p>
          <p className="text-sm text-muted-foreground mt-2">
            {calculateScore() === quizQuestions.length 
              ? 'Perfect! You have a great understanding of DeFi basics.' 
              : 'Good effort! Review the explanations to improve your understanding.'}
          </p>
        </div>
      )}
    </div>
  )
}

// Export the module content
const moduleContent: ModuleContentInterface = {
  video,
  renderTheory: RenderTheory,
  renderQuiz: RenderQuiz
}

export default moduleContent

