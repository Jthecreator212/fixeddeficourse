import { IntroductionToDeFi } from "./introduction-to-defi"
import { BlockchainBasics } from "./blockchain-basics-getting-started"
import { BlockchainFundamentals } from "./blockchain-fundamentals"
import { DeFiLendingProtocols } from "./defi-lending-protocols"
import type { JSX } from "react"

// Map of module slugs to their content components
const moduleContentMap = {
  "introduction-to-defi": IntroductionToDeFi,
  "blockchain-basics-getting-started": BlockchainBasics,
  "blockchain-fundamentals": BlockchainFundamentals,
  "defi-lending-protocols": DeFiLendingProtocols,
}

// Function to get the appropriate module content
export function getModuleContent(moduleSlug: string) {
  if (moduleSlug && moduleSlug in moduleContentMap) {
    return moduleContentMap[moduleSlug as keyof typeof moduleContentMap]
  }

  // Return null if no matching module is found
  return null
}

// Export common types used across module content
export interface ModuleVideo {
  url: string
  title: string
  description: string
}

export interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

// Export a base interface that all module content should implement
export interface ModuleContentInterface {
  renderTheory: () => JSX.Element
  renderQuiz: () => JSX.Element
  video: ModuleVideo
}
