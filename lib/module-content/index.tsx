import { IntroductionToDeFi } from "./introduction-to-defi"
import { BlockchainBasics } from "./blockchain-basics-getting-started"
import { BlockchainFundamentals } from "./blockchain-fundamentals"
import { DeFiLendingProtocols } from "./defi-lending-protocols"
import { DeFiAsABusiness } from "./defi-as-a-business"
import { DeFiLiquidityPools } from "./defi-liquidity-pools"
import { DeFiEnteringLiquidityPool } from "./defi-entering-first-liquidity-pool"
import Defi7RulesLiquidityPool from "./defi-7-rules-liquidity-pool"
import type { JSX } from "react"

// Map of module slugs to their content components
const moduleContentMap = {
  "introduction-to-defi": IntroductionToDeFi,
  "blockchain-basics-getting-started": BlockchainBasics,
  "blockchain-fundamentals": BlockchainFundamentals,
  "defi-lending-protocols": DeFiLendingProtocols,
  "defi-as-a-business": DeFiAsABusiness,
  "defi-liquidity-pools": DeFiLiquidityPools,
  "defi-entering-first-liquidity-pool": DeFiEnteringLiquidityPool,
  "defi-7-rules-liquidity-pool": Defi7RulesLiquidityPool,
}

// Direct module access map to handle cases where moduleContentMap lookup fails
const directModules = {
  DeFiAsABusiness,
  DeFiLiquidityPools,
  DeFiEnteringLiquidityPool,
  Defi7RulesLiquidityPool,
  BlockchainBasics,
  BlockchainFundamentals,
  DeFiLendingProtocols,
  IntroductionToDeFi
}

// Function to get the appropriate module content
export function getModuleContent(moduleSlug: string) {
  try {
    console.log("Looking for module:", moduleSlug);
    console.log("Available modules:", Object.keys(moduleContentMap));
    
    if (!moduleSlug) {
      console.error("Module slug is undefined or empty");
      return null;
    }
    
    // Method 1: Try direct lookup first
    if (moduleSlug in moduleContentMap) {
      console.log("Found module using direct lookup:", moduleSlug);
      return moduleContentMap[moduleSlug as keyof typeof moduleContentMap];
    }
    
    // Method 2: Try normalized slug
    const normalizedSlug = moduleSlug.replace(/[-_]/g, '').toLowerCase();
    const keys = Object.keys(moduleContentMap);
    
    for (const key of keys) {
      const normalizedKey = key.replace(/[-_]/g, '').toLowerCase();
      if (normalizedKey === normalizedSlug) {
        console.log(`Found module with normalized key: ${key} for slug: ${moduleSlug}`);
        return moduleContentMap[key as keyof typeof moduleContentMap];
      }
    }
    
    // Method 3: Try converting slug to PascalCase component name
    const componentName = moduleSlug
      .split('-')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join('');
    
    // Add "DeFi" prefix if not already present
    const possibleComponentNames = [
      componentName,
      `DeFi${componentName}`,
      `${componentName.replace('Defi', 'DeFi')}`
    ];
    
    for (const name of possibleComponentNames) {
      if (name in directModules) {
        console.log(`Found module using component name: ${name}`);
        return directModules[name as keyof typeof directModules];
      }
    }
    
    // Method 4: Last resort - check if there's a special case
    if (moduleSlug === "defi-as-a-business") {
      console.log("Special case: returning DeFiAsABusiness directly");
      return DeFiAsABusiness;
    }
    
    // Return null if no matching module is found
    console.log("Module not found after all attempts:", moduleSlug);
    return null;
  } catch (error) {
    console.error("Error in getModuleContent:", error);
    return null;
  }
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
