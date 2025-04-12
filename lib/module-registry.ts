import type { ModuleMetadata } from "./module-types"

// Map of module slugs to their metadata
const moduleMetadataMap: Record<string, ModuleMetadata> = {
  "introduction-to-defi": {
    slug: "introduction-to-defi",
    title: "Introduction to DeFi",
    description: "Learn the basics of decentralized finance and its key components",
    level: "Beginner",
    duration: "45 min",
    topics: ["What is DeFi?", "Traditional Finance vs. DeFi", "Key DeFi Components", "DeFi Ecosystem Overview"],
  },
  "blockchain-basics-getting-started": {
    slug: "blockchain-basics-getting-started",
    title: "Blockchain Basics: Getting Started",
    description: "Learn how to create a wallet and start your blockchain journey",
    level: "Beginner",
    duration: "15 min",
    topics: [
      "Creating Your First Crypto Wallet",
      "Securing Your Private Keys",
      "Understanding Wallet Addresses",
      "Making Your First Transaction",
    ],
  },
  "blockchain-fundamentals": {
    slug: "blockchain-fundamentals",
    title: "Blockchain Fundamentals",
    description: "Understand the technology that powers DeFi applications",
    level: "Beginner",
    duration: "60 min",
    topics: ["Blockchain Architecture", "Consensus Mechanisms", "Smart Contracts", "Ethereum Virtual Machine"],
  },
  "defi-lending-protocols": {
    slug: "defi-lending-protocols",
    title: "DeFi Lending Protocols",
    description: "Explore how lending and borrowing works in decentralized finance",
    level: "Intermediate",
    duration: "75 min",
    topics: [
      "Lending Protocol Mechanics",
      "Collateralization",
      "Interest Rate Models",
      "Liquidations",
      "Popular Lending Platforms",
    ],
  },
  "defi-as-a-business": {
    slug: "defi-as-a-business",
    title: "DeFi as a Business",
    description: "Explore business models, opportunities, and strategies in the DeFi ecosystem",
    level: "Advanced",
    duration: "90 min",
    topics: ["Business Models", "Revenue Streams", "Risk Management", "Regulatory Landscape"],
  },
  "defi-liquidity-pools": {
    slug: "defi-liquidity-pools",
    title: "DeFi: Liquidity Pools",
    description: "Understand how liquidity pools work and their role in decentralized finance",
    level: "Intermediate",
    duration: "60 min",
    topics: ["AMM", "Impermanent Loss", "Liquidity Providing", "Yield Farming"],
  },
  "defi-entering-first-liquidity-pool": {
    slug: "defi-entering-first-liquidity-pool",
    title: "DeFi: Entering Your First Liquidity Pool",
    description: "A step-by-step guide to providing liquidity in DeFi protocols",
    level: "Intermediate",
    duration: "60 min",
    topics: ["Wallet Setup", "Token Selection", "Risk Assessment", "LP Token Management"],
  },
  "defi-7-rules-liquidity-pool": {
    slug: "defi-7-rules-liquidity-pool",
    title: "DeFi: 7 Rules to Enter a Liquidity Pool",
    description: "Essential guidelines to follow before providing liquidity in DeFi protocols",
    level: "Advanced",
    duration: "75 min",
    topics: ["Risk Assessment", "TVL Analysis", "Correlation", "Gas Fees"],
  },
}

// Function to get all module metadata
export function getAllModuleMetadata(): ModuleMetadata[] {
  return Object.values(moduleMetadataMap)
}

// Function to get module metadata by slug
export function getModuleMetadata(moduleSlug: string): ModuleMetadata | undefined {
  return moduleMetadataMap[moduleSlug]
}

// Function to get the appropriate module content (from lib/module-content/index.tsx)
import { getModuleContent } from "./module-content"

export { getModuleContent }
