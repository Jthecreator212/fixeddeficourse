"use client"

import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, AlertTriangle, Lightbulb, TrendingUp } from "lucide-react"
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
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
              Unlocking Capital Efficiency
            </h2>
            <p className="text-lg relative">
              <span className="bg-primary/10 px-2 py-1 rounded font-medium">Borrow and lend without banks.</span> DeFi 
              lending protocols have revolutionized how users can put their crypto assets to work, creating new 
              opportunities for yield generation and liquidity.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                Collateralization
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                Liquidations
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                Interest Rates
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                Yield Strategies
              </span>
            </div>
          </div>
        </div>
      </div>

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
        {/* Benefits and Risks */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Benefits and Risks of DeFi Lending</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Benefits Section */}
            <div className="bg-green-950/20 p-6 rounded-lg border border-green-800/20">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                <h3 className="text-xl font-semibold">Benefits</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="mr-2 mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <div>
                    <span className="font-medium">Permissionless Access:</span> Anyone with an internet connection and crypto assets can participate without approval from a central authority.
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-2 mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <div>
                    <span className="font-medium">Higher Yields:</span> Lenders often earn significantly higher interest rates compared to traditional financial institutions.
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-2 mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <div>
                    <span className="font-medium">Transparency:</span> All transactions and protocol rules are visible on the blockchain, creating trust through verifiability rather than reputation.
                  </div>
                </li>
              </ul>
            </div>

            {/* Risks Section */}
            <div className="bg-red-950/20 p-6 rounded-lg border border-red-800/20">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 text-red-500 mr-2" />
                <h3 className="text-xl font-semibold">Risks</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="mr-2 mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500"></div>
                  <div>
                    <span className="font-medium">Smart Contract Vulnerabilities:</span> Code bugs can lead to funds being stolen or locked permanently in the protocol.
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-2 mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500"></div>
                  <div>
                    <span className="font-medium">Liquidation Risk:</span> Market volatility can trigger automatic liquidations, potentially resulting in losses greater than in traditional margin trading.
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-2 mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500"></div>
                  <div>
                    <span className="font-medium">Oracle Failures:</span> Price feeds that determine collateral values can be manipulated or experience technical failures.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Major Lending Protocols */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Major DeFi Lending Protocols</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-secondary/50 p-5 rounded-lg">
              <h3 className="font-semibold mb-2">Aave</h3>
              <p className="text-sm text-muted-foreground mb-2">Multi-asset liquidity protocol with variable and stable interest rates</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Flash Loans</span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Multiple Markets</span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Governance</span>
              </div>
            </div>

            <div className="bg-secondary/50 p-5 rounded-lg">
              <h3 className="font-semibold mb-2">Compound</h3>
              <p className="text-sm text-muted-foreground mb-2">Algorithmically managed lending protocol</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">COMP Token</span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">DAO Governance</span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Utilization Curve</span>
              </div>
            </div>

            <div className="bg-secondary/50 p-5 rounded-lg">
              <h3 className="font-semibold mb-2">MakerDAO</h3>
              <p className="text-sm text-muted-foreground mb-2">Decentralized stablecoin issuer through collateralized debt</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">DAI Stablecoin</span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Vaults</span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Stability Fees</span>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Practical Lending Strategies</h2>
          <div className="space-y-4">
            <div className="bg-secondary/50 p-5 rounded-lg flex gap-4">
              <div className="bg-background rounded-full p-3 h-fit">
                <Lightbulb className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Earning Passive Income</h3>
                <p className="text-muted-foreground">
                  Deposit stablecoins like USDC or DAI into lending protocols to earn consistent interest rates. This strategy minimizes volatility risk while generating yield that typically exceeds traditional savings accounts.
                </p>
              </div>
            </div>

            <div className="bg-secondary/50 p-5 rounded-lg flex gap-4">
              <div className="bg-background rounded-full p-3 h-fit">
                <Lightbulb className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Leveraged Long Positions</h3>
                <p className="text-muted-foreground">
                  Deposit ETH as collateral, borrow stablecoins, and use those to purchase more ETH. This amplifies exposure to ETH price movements, but requires careful monitoring of collateralization ratios to avoid liquidation.
                </p>
              </div>
            </div>

            <div className="bg-secondary/50 p-5 rounded-lg flex gap-4">
              <div className="bg-background rounded-full p-3 h-fit">
                <Lightbulb className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Yield Farming with Borrowed Assets</h3>
                <p className="text-muted-foreground">
                  Borrow an asset with a low interest rate, then deposit it in another protocol offering higher yields. This spread can generate profits if the yield differential exceeds the borrowing cost.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Looking Ahead */}
        <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-6 rounded-xl">
          <div className="flex items-center mb-4">
            <TrendingUp className="h-6 w-6 text-primary mr-2" />
            <h2 className="text-2xl font-bold">The Future of DeFi Lending</h2>
          </div>
          <p className="mb-4">
            DeFi lending protocols continue to evolve rapidly, with several key trends emerging:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <div className="mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></div>
              <span>
                <strong>Under-collateralized Lending:</strong> New protocols are exploring reputation-based or identity-based systems to enable loans without requiring full collateralization, making DeFi lending more accessible.
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></div>
              <span>
                <strong>Real-World Asset Integration:</strong> The tokenization of real-world assets like real estate and stocks will expand the collateral types available in DeFi lending markets.
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></div>
              <span>
                <strong>Cross-chain Lending:</strong> Protocols are developing technologies to enable lending and borrowing across different blockchains, increasing capital efficiency and market depth.
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></div>
              <span>
                <strong>Institutional Adoption:</strong> Traditional financial institutions are beginning to integrate with DeFi lending protocols, bringing increased liquidity and mainstream credibility.
              </span>
            </li>
          </ul>
          <p className="text-lg font-medium">
            As these innovations mature, DeFi lending will continue to challenge traditional financial systems by offering more efficient, transparent, and accessible financial services to users worldwide.
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
const DeFiLendingProtocols: ModuleContentInterface = {
  renderTheory: RenderTheory,
  renderQuiz: RenderQuiz,
  video,
}

export default DeFiLendingProtocols
