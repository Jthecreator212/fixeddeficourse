"use client"

import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle } from "lucide-react"
import type { ModuleContentInterface, QuizQuestion } from "./index"

// Define the video for this module
const video = {
  url: "https://www.youtube.com/embed/SSo_EIwHSd4",
  title: "Blockchain Fundamentals Explained",
  description: "This video explains the core concepts of blockchain technology and how it works.",
}

// Define the quiz questions for this module
const quizQuestions: QuizQuestion[] = [
  {
    question: "What is a blockchain?",
    options: [
      "A type of cryptocurrency",
      "A distributed ledger technology",
      "A centralized database",
      "A programming language",
    ],
    correctIndex: 1,
    explanation:
      "A blockchain is a distributed ledger technology that records transactions across many computers in a way that ensures the data cannot be altered retroactively.",
  },
  {
    question: "What is the purpose of consensus mechanisms in blockchain?",
    options: [
      "To encrypt transactions",
      "To create new cryptocurrencies",
      "To agree on the state of the blockchain",
      "To connect to the internet",
    ],
    correctIndex: 2,
    explanation:
      "Consensus mechanisms are protocols that ensure all nodes in the blockchain network agree on the current state of the blockchain, validating transactions and maintaining the integrity of the network.",
  },
  {
    question: "Which of the following is NOT a common consensus mechanism?",
    options: ["Proof of Work (PoW)", "Proof of Stake (PoS)", "Proof of Authority (PoA)", "Proof of Knowledge (PoK)"],
    correctIndex: 3,
    explanation:
      "Proof of Knowledge (PoK) is not a common consensus mechanism. The common ones include Proof of Work (used by Bitcoin), Proof of Stake (used by Ethereum 2.0), and Proof of Authority (used in private blockchains).",
  },
  {
    question: "What is a smart contract?",
    options: [
      "A legal agreement between blockchain developers",
      "Self-executing code that runs on a blockchain",
      "A contract that requires a lawyer's approval",
      "A hardware device for storing cryptocurrency",
    ],
    correctIndex: 1,
    explanation:
      "Smart contracts are self-executing code that runs on a blockchain. They automatically execute, control, or document legally relevant events and actions according to the terms of the contract or agreement.",
  },
  {
    question: "What is the main advantage of blockchain technology?",
    options: [
      "It's faster than traditional databases",
      "It's cheaper to maintain than centralized systems",
      "It provides trustless, transparent, and immutable record-keeping",
      "It uses less energy than other technologies",
    ],
    correctIndex: 2,
    explanation:
      "The main advantage of blockchain technology is that it provides trustless, transparent, and immutable record-keeping. This means that transactions can be verified without the need for a central authority, creating a system where participants don't need to trust each other but can trust the system itself. The immutability ensures that once data is recorded, it cannot be altered or deleted.",
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
            <h2>Blockchain Architecture</h2>
            <p>A blockchain is a distributed ledger that records transactions across many computers. This ensures that the record cannot be altered retroactively without the alteration of all subsequent blocks.</p>
            
            <h2>Consensus Mechanisms</h2>
            <p>Consensus mechanisms are protocols that ensure all nodes in the blockchain network agree on the current state of the blockchain. The two most common mechanisms are:</p>
            <ul>
              <li><strong>Proof of Work (PoW):</strong> Miners solve complex mathematical puzzles to validate transactions and create new blocks</li>
              <li><strong>Proof of Stake (PoS):</strong> Validators are selected to create new blocks based on the amount of cryptocurrency they hold and are willing to "stake" as collateral</li>
            </ul>
            
            <h2>Smart Contracts</h2>
            <p>Smart contracts are self-executing contracts with the terms directly written into code. They automatically execute when predefined conditions are met, enabling trustless transactions without intermediaries.</p>
            
            <h2>Blockchain Layers</h2>
            <p>Blockchain systems are often described in terms of layers:</p>
            <ul>
              <li><strong>Layer 1:</strong> The base blockchain protocol (e.g., Bitcoin, Ethereum)</li>
              <li><strong>Layer 2:</strong> Solutions built on top of Layer 1 to improve scalability (e.g., Lightning Network, Optimistic Rollups)</li>
            </ul>
            
            <h2>Types of Blockchains</h2>
            <p>There are several types of blockchains, each with different characteristics:</p>
            <ul>
              <li><strong>Public Blockchains:</strong> Open to anyone, fully decentralized (e.g., Bitcoin, Ethereum)</li>
              <li><strong>Private Blockchains:</strong> Restricted to specific participants, often used in enterprise settings</li>
              <li><strong>Consortium Blockchains:</strong> Controlled by a group of organizations rather than a single entity</li>
              <li><strong>Hybrid Blockchains:</strong> Combine features of both public and private blockchains</li>
            </ul>
            
            <h2>Blockchain Security</h2>
            <p>Security in blockchain systems is maintained through:</p>
            <ul>
              <li><strong>Cryptographic Hashing:</strong> Creating unique, fixed-length strings from input data</li>
              <li><strong>Digital Signatures:</strong> Verifying the authenticity of transactions</li>
              <li><strong>Consensus Mechanisms:</strong> Ensuring agreement on the state of the blockchain</li>
              <li><strong>Decentralization:</strong> Distributing the network across many nodes to prevent single points of failure</li>
            </ul>
          `,
          }}
        />
      </div>

      <div className="mt-10 space-y-10">
        {/* Additional content specific to blockchain fundamentals could be added here */}
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
export const BlockchainFundamentals: ModuleContentInterface = {
  renderTheory: RenderTheory,
  renderQuiz: RenderQuiz,
  video,
}
