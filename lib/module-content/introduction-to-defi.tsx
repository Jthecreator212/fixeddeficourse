"use client"

import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, AlertTriangle, Lightbulb, TrendingUp } from "lucide-react"
import type { ModuleContentInterface, QuizQuestion } from "./index"

// Define the video for this module
const video = {
  url: "https://www.youtube.com/embed/WEQwsfpcudg",
  title: "Introduction to DeFi Video",
  description: "Watch this video tutorial to learn more about DeFi concepts covered in this module.",
}

// Define the quiz questions for this module
const quizQuestions: QuizQuestion[] = [
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

// Component to render the theory content
function RenderTheory() {
  return (
    <div>
      <div className="prose dark:prose-invert max-w-none">
        <h2>Introduction to DeFi</h2>
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
        <ul>
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
        <ul>
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
        {/* Introduction Hook - Enhanced Version */}
        <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-background p-6 rounded-xl border border-primary/30 shadow-lg relative overflow-hidden">
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
                    <span className="font-medium">Regulatory Uncertainty:</span> Laws and regulations around DeFi are
                    still evolving in many jurisdictions, creating potential legal risks.
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-2 mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500"></div>
                  <div>
                    <span className="font-medium">Market Volatility:</span> Cryptocurrency markets can be highly
                    volatile, affecting the stability and security of DeFi applications.
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

            <div className="bg-secondary/50 p-5 rounded-lg">
              <h3 className="font-semibold mb-2">Yield Farming</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Strategies to maximize returns by providing liquidity
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Curve Finance</span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Yearn Finance</span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Convex</span>
              </div>
            </div>

            <div className="bg-secondary/50 p-5 rounded-lg">
              <h3 className="font-semibold mb-2">DAOs</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Community-governed entities that manage DeFi protocols
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">MakerDAO</span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">
                  Uniswap Governance
                </span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Aave DAO</span>
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
      <h2 className="text-2xl font-bold">DeFi Knowledge Check</h2>
      <p className="text-muted-foreground mb-6">
        Test your understanding of decentralized finance concepts from this module.
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
export const IntroductionToDeFi: ModuleContentInterface = {
  renderTheory: RenderTheory,
  renderQuiz: RenderQuiz,
  video,
}
