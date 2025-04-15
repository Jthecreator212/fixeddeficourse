"use client"

import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, TrendingUp, AlertTriangle, Lightbulb } from "lucide-react"
import type { ModuleContentInterface, QuizQuestion } from "./index"

// Define the video for this module
const video = {
  url: "https://www.youtube.com/embed/WEQwsfpcudg",
  title: "DeFi as a Business: Understanding Protocol Economics",
  description: "Learn about the business models and economic incentives that power DeFi protocols.",
}

// Define the quiz questions for this module
const quizQuestions: QuizQuestion[] = [
  {
    question: "What is the primary revenue source for most DeFi protocols?",
    options: [
      "Transaction fees",
      "Token sales",
      "Advertising",
      "Government grants",
    ],
    correctIndex: 0,
    explanation:
      "Most DeFi protocols generate revenue primarily through transaction fees, which are typically a small percentage of each transaction. These fees are often distributed to token holders or used to fund protocol development.",
  },
  {
    question: "What is the purpose of governance tokens in DeFi protocols?",
    options: [
      "To provide voting rights on protocol decisions",
      "To serve as a store of value",
      "To enable faster transactions",
      "To reduce gas fees",
    ],
    correctIndex: 0,
    explanation:
      "Governance tokens give holders the right to vote on protocol decisions, such as parameter changes, new features, or treasury management. This decentralized governance model is a key feature of many DeFi protocols.",
  },
  {
    question: "What is the main challenge for DeFi protocols in terms of sustainability?",
    options: [
      "Finding enough users",
      "Maintaining high token prices",
      "Balancing incentives between different stakeholders",
      "Getting listed on major exchanges",
    ],
    correctIndex: 2,
    explanation:
      "The main challenge is balancing incentives between different stakeholders (users, liquidity providers, token holders, etc.) to ensure long-term sustainability while maintaining protocol security and efficiency.",
  },
  {
    question: "What is the role of liquidity mining in DeFi protocols?",
    options: [
      "To mine new tokens",
      "To provide liquidity to the protocol in exchange for rewards",
      "To secure the blockchain",
      "To validate transactions",
    ],
    correctIndex: 1,
    explanation:
      "Liquidity mining incentivizes users to provide liquidity to the protocol by rewarding them with tokens. This helps bootstrap liquidity and distribute governance tokens to the community.",
  },
  {
    question: "What is the significance of Total Value Locked (TVL) in DeFi?",
    options: [
      "It measures the total number of transactions",
      "It represents the total value of assets locked in a protocol",
      "It shows the number of active users",
      "It indicates the protocol's revenue",
    ],
    correctIndex: 1,
    explanation:
      "TVL represents the total value of assets locked in a protocol's smart contracts. It's a key metric for measuring a protocol's size, popularity, and security, as it indicates how much value users trust the protocol with.",
  },
]

// Component to render the theory content
function RenderTheory() {
  return (
    <div>
      <div className="prose dark:prose-invert max-w-none">
      {/* Introduction Hook */}
      <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-background p-6 rounded-xl border border-primary/30 shadow-lg relative overflow-hidden mb-8">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-10 -mt-10 blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full -ml-8 -mb-8 blur-xl"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="bg-primary/20 p-4 rounded-full flex items-center justify-center">
              <TrendingUp className="h-10 w-10 text-primary" />
          </div>

          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
                What if you could build a financial business without traditional infrastructure?
            </h2>
            <p className="text-lg relative">
                <span className="bg-primary/10 px-2 py-1 rounded font-medium">DeFi makes that possible.</span>{" "}
                Decentralized Finance protocols are revolutionizing how financial services are built and operated, creating new business models and economic opportunities.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                Revenue Models
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                Governance
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                  Tokenomics
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                  Sustainability
              </span>
              </div>
          </div>
        </div>
      </div>

        <p>
          DeFi protocols operate as decentralized businesses, with unique economic models and governance structures. 
          This module explores how these protocols generate value, distribute rewards, and maintain sustainability in a competitive market.
        </p>

        {/* Main Content Area */}
        <div className="space-y-8">
          {/* Revenue Models Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              Revenue Models in DeFi
            </h2>
            <p className="text-lg mb-4">
              DeFi protocols generate revenue through various mechanisms, primarily transaction fees. These fees are typically 
              a small percentage of each transaction and are used to:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></div>
                <div>
                  <span className="font-medium">Reward liquidity providers:</span> Incentivize users to provide liquidity to the protocol
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></div>
                <div>
                  <span className="font-medium">Fund protocol development:</span> Support ongoing development and maintenance
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></div>
                <div>
                  <span className="font-medium">Support governance token holders:</span> Distribute revenue to token holders
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></div>
                <div>
                  <span className="font-medium">Maintain protocol security:</span> Fund security audits and improvements
                </div>
              </li>
            </ul>
          </div>

          {/* Governance and Tokenomics Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <svg
                className="h-6 w-6 text-primary"
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
              Governance and Tokenomics
            </h2>
            <p className="text-lg mb-4">
              Governance tokens play a crucial role in DeFi protocols, serving multiple purposes:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></div>
                <div>
                  <span className="font-medium">Voting rights:</span> Token holders can vote on protocol decisions
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></div>
                <div>
                  <span className="font-medium">Revenue sharing:</span> Tokens often entitle holders to a share of protocol fees
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></div>
                <div>
                  <span className="font-medium">Incentivization:</span> Tokens are used to incentivize long-term participation
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></div>
                <div>
                  <span className="font-medium">Alignment:</span> Tokens help align the interests of different stakeholders
                </div>
              </li>
            </ul>
          </div>

          {/* Sustainability Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <svg
                className="h-6 w-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              Sustainability Challenges
            </h2>
            <p className="text-lg mb-4">
              Maintaining protocol sustainability requires careful balance of:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></div>
                <div>
                  <span className="font-medium">Incentive structures:</span> Ensuring rewards are properly aligned with protocol goals
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></div>
                <div>
                  <span className="font-medium">Token distribution:</span> Fair and effective distribution of governance tokens
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></div>
                <div>
                  <span className="font-medium">Fee models:</span> Setting appropriate fee levels to sustain the protocol
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></div>
                <div>
                  <span className="font-medium">Security measures:</span> Maintaining robust security while controlling costs
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Benefits and Risks Section */}
        <div className="mt-10 space-y-10">
          <div>
            <h2 className="text-2xl font-bold mb-6">Benefits and Risks of DeFi Business Models</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Benefits */}
              <div className="bg-green-950/20 p-6 rounded-lg border border-green-800/20">
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                  <h3 className="text-xl font-semibold">Benefits</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="mr-2 mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    <div>
                      <span className="font-medium">Automated Revenue Generation:</span> Smart contracts automatically handle fee collection and distribution
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-2 mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    <div>
                      <span className="font-medium">Community Ownership:</span> Users can participate in governance and earn rewards
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-2 mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    <div>
                      <span className="font-medium">Low Operational Costs:</span> No need for traditional business infrastructure
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-2 mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    <div>
                      <span className="font-medium">Global Accessibility:</span> Anyone can participate without geographical restrictions
                    </div>
                  </li>
                </ul>
              </div>

              {/* Risks */}
              <div className="bg-red-950/20 p-6 rounded-lg border border-red-800/20">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-red-500 mr-2" />
                  <h3 className="text-xl font-semibold">Risks</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="mr-2 mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500"></div>
                    <div>
                      <span className="font-medium">Smart Contract Risk:</span> Vulnerabilities in code could lead to loss of funds
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-2 mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500"></div>
                    <div>
                      <span className="font-medium">Regulatory Uncertainty:</span> Changing regulations could impact protocol operations
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-2 mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500"></div>
                    <div>
                      <span className="font-medium">Economic Attacks:</span> Malicious actors could exploit tokenomics for profit
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-2 mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500"></div>
                    <div>
                      <span className="font-medium">Market Volatility:</span> Token price fluctuations can affect protocol stability
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Components Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6">Key DeFi Business Components</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-secondary/50 p-5 rounded-lg">
              <h3 className="font-semibold mb-2">Revenue Models</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Different ways DeFi protocols generate and distribute value
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Transaction Fees</span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Yield Farming</span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Token Sales</span>
            </div>
          </div>

          <div className="bg-secondary/50 p-5 rounded-lg">
              <h3 className="font-semibold mb-2">Governance Systems</h3>
            <p className="text-sm text-muted-foreground mb-2">
                Decentralized decision-making and protocol management
            </p>
            <div className="flex flex-wrap gap-2">
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Token Voting</span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Proposals</span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Treasury</span>
              </div>
          </div>

          <div className="bg-secondary/50 p-5 rounded-lg">
              <h3 className="font-semibold mb-2">Tokenomics</h3>
            <p className="text-sm text-muted-foreground mb-2">
                Economic models and incentive structures
            </p>
            <div className="flex flex-wrap gap-2">
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Supply</span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Distribution</span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Utility</span>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Use Cases */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6">Real-World DeFi Business Applications</h2>
        <div className="space-y-4">
          <div className="bg-secondary/50 p-5 rounded-lg flex gap-4">
            <div className="bg-background rounded-full p-3 h-fit">
              <Lightbulb className="h-6 w-6 text-yellow-500" />
            </div>
            <div>
                <h3 className="font-semibold mb-1">Automated Market Making</h3>
              <p className="text-muted-foreground">
                  Protocols like Uniswap demonstrate how automated market makers can generate consistent revenue through trading fees while providing essential liquidity to the ecosystem.
              </p>
            </div>
          </div>

          <div className="bg-secondary/50 p-5 rounded-lg flex gap-4">
            <div className="bg-background rounded-full p-3 h-fit">
              <Lightbulb className="h-6 w-6 text-yellow-500" />
            </div>
            <div>
                <h3 className="font-semibold mb-1">Lending Protocols</h3>
                <p className="text-muted-foreground">
                  Platforms like Aave and Compound show how DeFi can create profitable lending businesses through interest rate spreads and liquidation fees.
                </p>
              </div>
            </div>

            <div className="bg-secondary/50 p-5 rounded-lg flex gap-4">
              <div className="bg-background rounded-full p-3 h-fit">
                <Lightbulb className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Yield Aggregation</h3>
              <p className="text-muted-foreground">
                  Services like Yearn Finance illustrate how DeFi can create value by optimizing yield across multiple protocols and charging performance fees.
              </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Future Outlook */}
        <div className="mt-10 bg-gradient-to-br from-primary/20 to-primary/5 p-6 rounded-xl">
          <div className="flex items-center mb-4">
            <TrendingUp className="h-6 w-6 text-primary mr-2" />
            <h2 className="text-2xl font-bold">The Future of DeFi Business Models</h2>
          </div>
          <p className="mb-4">
            DeFi business models are evolving rapidly, with several exciting developments on the horizon:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <div className="mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></div>
              <span>
                <strong>Institutional DeFi:</strong> Traditional financial institutions are beginning to explore DeFi protocols, creating new revenue opportunities and business models.
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></div>
              <span>
                <strong>Layer 2 Solutions:</strong> Scaling solutions will enable more efficient and profitable DeFi businesses with lower transaction costs.
              </span>
          </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></div>
              <span>
                <strong>Cross-Chain Integration:</strong> Interoperability between different blockchains will create new business opportunities and revenue streams.
              </span>
          </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></div>
              <span>
                <strong>Regulatory Clarity:</strong> As regulations become clearer, DeFi businesses will be able to operate with more confidence and attract institutional capital.
              </span>
          </li>
        </ul>
          <p className="text-lg font-medium">
            The DeFi business landscape is just beginning to take shape—continue learning to understand how you can participate in this financial revolution.
          </p>
        </div>
      </div>
    </div>
  )
}

// Component to render the quiz
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
            {question.options.map((option, optionIndex) => (
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
const DeFiAsABusiness: ModuleContentInterface = {
  video,
  renderTheory: RenderTheory,
  renderQuiz: RenderQuiz,
} 

export default DeFiAsABusiness 