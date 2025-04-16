"use client"

import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, TrendingUp, AlertTriangle, Lightbulb } from "lucide-react"
import type { ModuleContentInterface, QuizQuestion } from "./index"

// Define the video for this module
const video = {
  url: "https://www.youtube.com/embed/SSo_EIwHSd4",
  title: "Blockchain Fundamentals: Understanding the Technology",
  description: "A comprehensive introduction to blockchain technology, its core concepts, and how it works.",
}

// Define the quiz questions for this module
const quizQuestions: QuizQuestion[] = [
  {
    question: "What is the primary purpose of a blockchain?",
    options: [
      "To create a centralized database",
      "To maintain a distributed ledger",
      "To process transactions faster than traditional systems",
      "To replace all traditional databases"
    ],
    correctIndex: 1,
    explanation: "The primary purpose of a blockchain is to maintain a distributed ledger that is secure, transparent, and tamper-proof."
  },
  {
    question: "Which of these is NOT a consensus mechanism?",
    options: [
      "Proof of Work",
      "Proof of Stake",
      "Proof of Authority",
      "Proof of Speed"
    ],
    correctIndex: 3,
    explanation: "Proof of Speed is not a recognized consensus mechanism. The main consensus mechanisms are Proof of Work, Proof of Stake, and Proof of Authority."
  },
  {
    question: "What role does cryptography play in blockchain?",
    options: [
      "It's only used for creating digital signatures",
      "It's used for security, privacy, and data integrity",
      "It's optional and not essential to blockchain",
      "It's only used for mining new blocks"
    ],
    correctIndex: 1,
    explanation: "Cryptography is fundamental to blockchain technology, providing security, privacy, and ensuring data integrity through various cryptographic techniques."
  }
]

// Component to render the theory content
function RenderTheory() {
  return (
    <div>
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
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>

          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
              Understanding Blockchain Technology
            </h2>
            <p className="text-lg relative">
              <span className="bg-primary/10 px-2 py-1 rounded font-medium">The foundation of decentralized systems.</span> Blockchain technology represents a revolutionary approach to data management and digital trust, enabling secure, transparent, and tamper-proof record-keeping without centralized authorities.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                Distributed Ledger
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                Consensus Mechanisms
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                Cryptography
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                Smart Contracts
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <div
          dangerouslySetInnerHTML={{
            __html: `
            <h2>Blockchain Fundamentals</h2>
            <p>Blockchain technology is revolutionizing how we store and transfer data. This guide will help you understand the core concepts, benefits, and practical applications of blockchain technology. By the end, you'll have a solid foundation to explore more advanced topics in the blockchain space.</p>
            <p><em>Disclaimer: This guide is for educational purposes only. Blockchain technology is complex and constantly evolving. Always do your own research and stay updated with the latest developments.</em></p>
            
            <h2>Core Concepts of Blockchain</h2>
            <p>Blockchain technology is built on several fundamental concepts that work together to create a secure and decentralized system. Understanding these concepts is crucial for grasping how blockchain works and its potential applications.</p>
            
            <h3 style="font-weight: 700;">1. Distributed Ledger Technology</h3>
            <p>A blockchain is essentially a distributed database that maintains a continuously growing list of ordered records, called blocks. Each block contains a timestamp and a link to the previous block, creating an immutable chain of data.</p>
            
            <h3 style="font-weight: 700;">2. Decentralization</h3>
            <p>Unlike traditional databases that are controlled by a single entity, blockchains are maintained by a network of computers (nodes) that work together to validate and record transactions. This decentralization provides several key benefits:</p>
            <ul>
              <li>No single point of failure</li>
              <li>Resistance to censorship</li>
              <li>Increased transparency</li>
              <li>Enhanced security</li>
            </ul>
            
            <h3 style="font-weight: 700;">3. Consensus Mechanisms</h3>
            <p>Blockchains use consensus mechanisms to ensure all participants agree on the state of the ledger. Common mechanisms include:</p>
            <ul>
              <li><strong>Proof of Work (PoW):</strong> Miners solve complex mathematical puzzles to validate transactions and create new blocks</li>
              <li><strong>Proof of Stake (PoS):</strong> Validators are selected to create new blocks based on the amount of cryptocurrency they hold and are willing to "stake"</li>
              <li><strong>Delegated Proof of Stake (DPoS):</strong> Token holders vote for delegates who validate transactions and create blocks</li>
            </ul>
            
            <h3 style="font-weight: 700;">4. Cryptography</h3>
            <p>Blockchain relies heavily on cryptographic techniques to ensure security and privacy:</p>
            <ul>
              <li><strong>Hash functions:</strong> Create unique, fixed-length strings from input data</li>
              <li><strong>Public-key cryptography:</strong> Enables secure digital signatures and encryption</li>
              <li><strong>Merkle trees:</strong> Efficiently verify data integrity</li>
            </ul>
          `,
          }}
        />
      </div>

      <div className="mt-10 space-y-10">
        {/* Types of Blockchains */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Types of Blockchains and Examples</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            <div className="bg-secondary/50 p-5 rounded-lg">
              <h3 className="font-semibold mb-2">Public Blockchains</h3>
              <p className="text-sm text-muted-foreground mb-2">Open, permissionless networks</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Bitcoin</span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Ethereum</span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Solana</span>
              </div>
            </div>

            <div className="bg-secondary/50 p-5 rounded-lg">
              <h3 className="font-semibold mb-2">Private Blockchains</h3>
              <p className="text-sm text-muted-foreground mb-2">Permissioned networks for enterprises</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Hyperledger</span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Corda</span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Quorum</span>
              </div>
            </div>

            <div className="bg-secondary/50 p-5 rounded-lg">
              <h3 className="font-semibold mb-2">Consortium Blockchains</h3>
              <p className="text-sm text-muted-foreground mb-2">Semi-decentralized networks</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">R3 Corda</span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Hyperledger Fabric</span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Quorum</span>
              </div>
            </div>

            <div className="bg-secondary/50 p-5 rounded-lg">
              <h3 className="font-semibold mb-2">Hybrid Blockchains</h3>
              <p className="text-sm text-muted-foreground mb-2">Combining public and private features</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Dragonchain</span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">XinFin</span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Aion</span>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits and Risks */}
        <div className="mt-10 mb-10">
          <h2 className="text-2xl font-bold mb-6">Benefits and Risks</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Benefits Section */}
            <div className="bg-green-950/20 p-6 rounded-lg border border-green-800/20">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                <h3 className="text-xl font-semibold">Benefits of Blockchain</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="mr-2 mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <div>
                    <span className="font-medium">Decentralization:</span> No single entity controls the network, reducing the risk of central points of failure.
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-2 mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <div>
                    <span className="font-medium">Transparency:</span> All transactions are visible to network participants, creating an auditable trail.
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-2 mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <div>
                    <span className="font-medium">Immutability:</span> Once data is recorded, it cannot be altered or deleted without consensus.
                  </div>
                </li>
              </ul>
            </div>

            {/* Risks Section */}
            <div className="bg-red-950/20 p-6 rounded-lg border border-red-800/20">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 text-red-500 mr-2" />
                <h3 className="text-xl font-semibold">Risks of Blockchain</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="mr-2 mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500"></div>
                  <div>
                    <span className="font-medium">Scalability Issues:</span> Many blockchains struggle with transaction throughput and speed.
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-2 mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500"></div>
                  <div>
                    <span className="font-medium">Energy Consumption:</span> Some consensus mechanisms require significant computational power and electricity.
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-2 mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500"></div>
                  <div>
                    <span className="font-medium">Complexity:</span> The technology has a steep learning curve for users and developers.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Real-World Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Practical Use Cases</h2>
          <div className="space-y-4">
            <div className="bg-secondary/50 p-5 rounded-lg flex gap-4">
              <div className="bg-background rounded-full p-3 h-fit">
                <Lightbulb className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Supply Chain Management</h3>
                <p className="text-muted-foreground">
                  Blockchain tracks goods from origin to consumer with an unchangeable record, ensuring transparency and preventing fraud. Walmart uses it to quickly trace and remove contaminated food.
                </p>
              </div>
            </div>
            
            <div className="bg-secondary/50 p-5 rounded-lg flex gap-4">
              <div className="bg-background rounded-full p-3 h-fit">
                <Lightbulb className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Digital Identity</h3>
                <p className="text-muted-foreground">
                  Self-sovereign identity solutions give users control over their personal data, allowing selective disclosure of information without relying on centralized identity providers.
                </p>
              </div>
            </div>
            
            <div className="bg-secondary/50 p-5 rounded-lg flex gap-4">
              <div className="bg-background rounded-full p-3 h-fit">
                <Lightbulb className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Voting Systems</h3>
                <p className="text-muted-foreground">
                  Blockchain-based voting provides transparent, verifiable election systems that prevent fraud and increase trust in the democratic process.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Looking Ahead */}
        <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-6 rounded-xl">
          <div className="flex items-center mb-4">
            <TrendingUp className="h-6 w-6 text-primary mr-2" />
            <h2 className="text-2xl font-bold">Looking Ahead</h2>
          </div>
          <p className="mb-4">
            The future of blockchain technology looks promising, with advancements in several key areas:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <div className="mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></div>
              <span>
                <strong>Scalability Solutions:</strong> Layer 2 solutions and sharding will help blockchains process more transactions at lower costs.
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></div>
              <span>
                <strong>Interoperability:</strong> Cross-chain protocols will enable different blockchains to communicate and share data seamlessly.
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></div>
              <span>
                <strong>Privacy Features:</strong> Zero-knowledge proofs and other privacy technologies will enhance confidentiality while maintaining transparency.
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></div>
              <span>
                <strong>Institutional Adoption:</strong> As regulatory clarity improves, more institutions will integrate blockchain technology into their operations.
              </span>
            </li>
          </ul>
          <p className="text-lg font-medium">
            As these technologies mature, blockchain will become more accessible, efficient, and integrated into everyday applications, fundamentally changing how we exchange value and information.
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
      <h2 className="text-2xl font-bold">Blockchain Fundamentals Quiz</h2>
      <p className="text-muted-foreground mb-6">
        Test your understanding of blockchain technology concepts from this module.
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
const BlockchainFundamentalsModule: ModuleContentInterface = {
  renderTheory: RenderTheory,
  renderQuiz: RenderQuiz,
  video,
}

export default BlockchainFundamentalsModule
