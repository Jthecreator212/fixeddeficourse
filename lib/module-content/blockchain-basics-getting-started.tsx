"use client"

import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, TrendingUp } from "lucide-react"
import type { ModuleContentInterface, QuizQuestion } from "./index"

// Define the video for this module
const video = {
  url: "https://www.youtube.com/embed/4PvA7oYDXu8",
  title: "Creating Your First Crypto Wallet",
  description: "Watch this video tutorial to learn how to create and secure your first cryptocurrency wallet.",
}

// Define the quiz questions for this module
const quizQuestions: QuizQuestion[] = [
  {
    question: "What is the primary purpose of a hardware wallet?",
    options: [
      "To increase transaction speed",
      "To store private keys offline away from internet threats",
      "To automatically generate new wallet addresses",
      "To connect directly to exchanges",
    ],
    correctIndex: 1,
    explanation:
      "Hardware wallets are physical devices designed to store your private keys offline (cold storage), keeping them isolated from internet-connected devices and therefore protected from online threats like malware and phishing attacks.",
  },
  {
    question: "Why is the phrase 'not your keys, not your coins' important in cryptocurrency?",
    options: [
      "It's just a marketing slogan with no real meaning",
      "It reminds users to write down their private keys",
      "It emphasizes that without control of private keys, you don't truly own your cryptocurrency",
      "It's a warning about government regulation",
    ],
    correctIndex: 2,
    explanation:
      "This phrase emphasizes the fundamental principle of self-custody: if you don't control your private keys (like when your crypto is stored on an exchange), you're trusting a third party with your assets. True ownership comes only when you control your private keys.",
  },
  {
    question: "What is a block explorer used for in the context of wallet security?",
    options: [
      "Mining new blocks",
      "Creating new wallets",
      "Verifying transactions and monitoring wallet activity",
      "Generating seed phrases",
    ],
    correctIndex: 2,
    explanation:
      "Block explorers allow you to verify transactions and monitor wallet activity by searching for your wallet address or transaction hash. This helps you confirm that transactions were processed correctly and detect any unauthorized activity.",
  },
  {
    question: "Which of the following is NOT an advantage of self-custody?",
    options: [
      "Full control over your assets",
      "Protection from exchange hacks",
      "Easy recovery if you forget your password",
      "Enhanced privacy",
    ],
    correctIndex: 2,
    explanation:
      "Self-custody does NOT provide easy recovery if you forget your password or lose your seed phrase. In fact, this is one of the main disadvantages - there is no 'forgot password' button or customer support to help recover lost keys. With self-custody comes complete responsibility.",
  },
  {
    question: "Why is self-custody considered the future of digital asset management?",
    options: [
      "Because it's easier than using exchanges",
      "Because it provides financial sovereignty and protection from third-party risks",
      "Because it's the only legal way to hold cryptocurrency",
      "Because it offers higher returns on investment",
    ],
    correctIndex: 1,
    explanation:
      "Self-custody is considered the future because it provides true financial sovereignty - freedom from third-party control, censorship, and the risks associated with trusting centralized entities. As self-custody solutions become more user-friendly, this fundamental innovation will reshape how we manage digital assets.",
  },
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
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>

          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
              Protect Your Digital Assets
            </h2>
            <p className="text-lg relative">
              <span className="bg-primary/10 px-2 py-1 rounded font-medium">Your wallet is your vault.</span> Securing
              your crypto wallet is the most critical step in your blockchain journey. Remember: if you lose your
              keys, you lose your funds—permanently.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                Seed Phrase Security
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                Hardware Wallets
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                Phishing Prevention
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                Backup Strategies
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <div
          dangerouslySetInnerHTML={{
            __html: `
            <h2>Blockchain Basics: Getting Started</h2>
            <p>Blockchain technology and cryptocurrencies can seem intimidating at first, but getting started is simpler than you might think. This guide will walk you through the essential steps: creating your first crypto wallet, securing your private keys, understanding wallet addresses, and making your first transaction. By the end, you'll have the foundational knowledge to confidently begin your blockchain journey.</p>
            <p><em>Disclaimer: This guide is for educational purposes only. Cryptocurrencies are volatile and involve risks. Always do your own research and exercise caution when handling digital assets.</em></p>
            
            <h2>Creating Your First Crypto Wallet</h2>
            <p>A crypto wallet is a software application that allows you to store, send, and receive cryptocurrencies. Unlike a physical wallet, it doesn't hold your coins directly; instead, it stores your private keys, which are used to access your funds on the blockchain.</p>
            
            <h3 style="font-weight: 700;">Steps to Create a Wallet</h3>
            <p>For this guide, we'll use MetaMask, a popular and beginner-friendly wallet for Ethereum and other compatible blockchains. Here's how to set it up:</p>
            <ol>
              <li><strong>Step 1:</strong> Download the MetaMask extension for your web browser from the official MetaMask website. Avoid third-party sites to prevent scams.</li>
              <li><strong>Step 2:</strong> Click on the MetaMask icon in your browser and select "Create a Wallet."</li>
              <li><strong>Step 3:</strong> Create a strong password. This password protects your wallet on your device, so make it unique and secure. Write it down and store it safely.</li>
              <li><strong>Step 4:</strong> MetaMask will generate a seed phrase (also called a recovery phrase)—a set of 12 or 24 words. This phrase is crucial; it's the only way to recover your wallet if you lose access to your device. Write it down on paper and store it in a secure, offline location. Never share your seed phrase with anyone.</li>
              <li><strong>Step 5:</strong> Confirm your seed phrase by selecting the words in the correct order. Once done, your wallet is ready to use.</li>
            </ol>
            <p><strong>Pro Tip:</strong> Other wallet options like Coinbase Wallet or Trust Wallet are also great for beginners, with similar setup processes.</p>
            
            <h2>Securing Your Private Keys</h2>
            <p>Your private key is a secret code that gives you control over your cryptocurrency funds. Think of it as the key to a digital safe—anyone with access to it can access your assets. In MetaMask, your private key is derived from your seed phrase, so securing both is critical.</p>
            
            <h3 style="font-weight: 700;">Why It Matters</h3>
            <p>If someone else gets your private key or seed phrase, they can steal your funds. Unlike a bank, there's no way to recover lost or stolen crypto—security is your responsibility.</p>
            
            <h3 style="font-weight: 700;">Best Practices</h3>
            <ul>
              <li><strong>Store offline:</strong> Write your seed phrase on paper or use a hardware wallet (a physical device like Ledger or Trezor). Avoid digital storage like screenshots or cloud backups.</li>
              <li><strong>Never share:</strong> Legitimate services will never ask for your private key or seed phrase.</li>
              <li><strong>Beware of phishing:</strong> Verify the authenticity of websites and apps. Scammers often create fake sites to trick you into entering your keys.</li>
              <li><strong>Use hardware wallets:</strong> For larger amounts, consider a hardware wallet for extra security.</li>
            </ul>
            <p><strong>Key Takeaway:</strong> Protect your private key like it's the only key to your digital vault.</p>
            
            <h2>Understanding Wallet Addresses</h2>
            <p>A wallet address is a unique string of characters used to receive cryptocurrencies, similar to a bank account number. Each cryptocurrency has its own address format, but we'll focus on Ethereum addresses for this guide (used in MetaMask).</p>
            
            <h3 style="font-weight: 700;">What Is a Wallet Address?</h3>
            <ul>
              <li>It's generated from your public key (which comes from your private key).</li>
              <li>It's safe to share because it only allows people to send you funds, not access them.</li>
              <li>In MetaMask, it starts with "0x" (e.g., 0x123abc...).</li>
            </ul>
            
            <h3 style="font-weight: 700;">How to Find It</h3>
            <ul>
              <li>Open MetaMask and click on your account name at the top.</li>
              <li>Your wallet address will appear below it—click to copy it.</li>
            </ul>
            
            <h3 style="font-weight: 700;">Why It's Safe to Share</h3>
            <p>The blockchain is public, so anyone can see transactions linked to your address. However, they can't touch your funds without your private key.</p>
            <p><strong>Analogy:</strong> Your wallet address is like your home address—people can send you mail (crypto), but they can't get inside without the key (private key).</p>
            
            <h2>Making Your First Transaction</h2>
            <p>Now that your wallet is set up and secured, let's send a small amount of Ethereum (ETH) to another address.</p>
            
            <h3 style="font-weight: 700;">Steps to Send Crypto</h3>
            <ol>
              <li><strong>Step 1:</strong> Ensure you have ETH in your wallet. Buy it from an exchange (e.g., Coinbase, Binance) or receive it from someone else.</li>
              <li><strong>Step 2:</strong> Open MetaMask and click "Send."</li>
              <li><strong>Step 3:</strong> Enter the recipient's wallet address carefully. Double-check it—transactions can't be reversed, and a mistake means lost funds.</li>
              <li><strong>Step 4:</strong> Enter the amount (e.g., 0.001 ETH for practice). MetaMask will show a gas fee—the cost of processing the transaction on Ethereum.</li>
              <li><strong>Step 5:</strong> Review the details and click "Confirm" to send.</li>
              <li><strong>Step 6:</strong> Check the status in the "Activity" tab. It may take a few minutes to complete.</li>
            </ol>
            
            <h3 style="font-weight: 700;">What Are Gas Fees?</h3>
            <p>Gas fees are payments to miners who process transactions on the blockchain. They vary based on network demand—think of them as a "shipping fee" for your transaction.</p>
            <p><strong>Pro Tip:</strong> Start with a tiny amount to test the process before sending larger sums.</p>
            
            <h2>Final Tips</h2>
            <ul>
              <li><strong>Double-check addresses:</strong> A single typo can cost you your funds.</li>
              <li><strong>Avoid scams:</strong> Never enter your seed phrase or private key on suspicious sites.</li>
              <li><strong>Backup your seed phrase:</strong> Store it securely—if you lose it and your device, your funds are gone.</li>
            </ul>
            <p>With these steps, you're ready to explore the blockchain world safely and confidently!</p>
          `,
          }}
        />
      </div>

      <div className="mt-10 space-y-10">
        {/* Types of Wallets */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Types of Wallets and Examples</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            <div className="bg-secondary/50 p-5 rounded-lg">
              <h3 className="font-semibold mb-2">Hardware Wallets</h3>
              <p className="text-sm text-muted-foreground mb-2">Physical devices that store private keys offline</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Ledger Nano</span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Trezor</span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">KeepKey</span>
              </div>
            </div>

            <div className="bg-secondary/50 p-5 rounded-lg">
              <h3 className="font-semibold mb-2">Browser Extensions</h3>
              <p className="text-sm text-muted-foreground mb-2">Wallet extensions for web browsers</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">MetaMask</span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Phantom</span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Keplr</span>
              </div>
            </div>

            <div className="bg-secondary/50 p-5 rounded-lg">
              <h3 className="font-semibold mb-2">Mobile Wallets</h3>
              <p className="text-sm text-muted-foreground mb-2">Smartphone apps for managing crypto</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Trust Wallet</span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Coinbase Wallet</span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Exodus</span>
              </div>
            </div>

            <div className="bg-secondary/50 p-5 rounded-lg">
              <h3 className="font-semibold mb-2">Desktop Wallets</h3>
              <p className="text-sm text-muted-foreground mb-2">Software wallets for computers</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Electrum</span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Exodus</span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">Atomic</span>
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
            The future of blockchain technology looks promising, with self-custody at its core. This fundamental
            innovation will reshape our financial landscape in several ways:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <div className="mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></div>
              <span>
                <strong>Financial Sovereignty:</strong> As centralized institutions face increasing scrutiny and
                regulation, self-custody provides true ownership that can't be frozen, seized, or censored by any third
                party.
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></div>
              <span>
                <strong>Exchange Vulnerabilities:</strong> The collapse of major exchanges like FTX and Mt. Gox has
                proven that even the largest custodial services can fail, making "not your keys, not your coins" more
                than just a slogan.
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></div>
              <span>
                <strong>Technological Evolution:</strong> Expect advancements in scalability, privacy, and
                interoperability, alongside more user-friendly self-custody solutions with innovations like social
                recovery and multisig wallets.
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></div>
              <span>
                <strong>Widespread Adoption:</strong> These improvements will drive adoption across industries like
                finance, supply chain, and healthcare, revolutionizing how we interact with technology while maintaining
                individual control.
              </span>
            </li>
          </ul>
          <p className="text-lg font-medium">
            As blockchain technology and self-custody tools become more intuitive and secure, we're moving toward a
            world where individuals—not institutions—control their financial destiny.
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
      <h2 className="text-2xl font-bold">Wallet Security Knowledge Check</h2>
      <p className="text-muted-foreground mb-6">
        Test your understanding of wallet security and self-custody concepts from this module.
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
export const BlockchainBasics: ModuleContentInterface = {
  renderTheory: RenderTheory,
  renderQuiz: RenderQuiz,
  video,
}
