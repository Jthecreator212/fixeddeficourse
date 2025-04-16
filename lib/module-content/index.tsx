import IntroductionToDeFi from "./introduction-to-defi"
import BlockchainBasics from "./blockchain-basics-getting-started"
import BlockchainFundamentalsModule from "./blockchain-fundamentals"
import DeFiLendingProtocols from "./defi-lending-protocols"
import DeFiAsABusiness from "./defi-as-a-business"
import DeFiLiquidityPools from "./defi-liquidity-pools"
import DeFiEnteringLiquidityPool from "./defi-entering-first-liquidity-pool"
import DeFi7RulesLiquidityPool from "./defi-7-rules-liquidity-pool"
import type { JSX } from "react"
import type { ModuleContentInterface } from "../types"

// Map of module slugs to their content components
const moduleContentMap = {
  "introduction-to-defi": IntroductionToDeFi,
  "blockchain-basics-getting-started": BlockchainBasics,
  "blockchain-fundamentals": BlockchainFundamentalsModule,
  "defi-lending-protocols": DeFiLendingProtocols,
  "defi-as-a-business": DeFiAsABusiness,
  "defi-liquidity-pools": DeFiLiquidityPools,
  "defi-entering-first-liquidity-pool": DeFiEnteringLiquidityPool,
  "defi-7-rules-liquidity-pool": DeFi7RulesLiquidityPool,
}

export function getModuleContent(moduleSlug: string) {
  if (moduleSlug && moduleSlug in moduleContentMap) {
    return moduleContentMap[moduleSlug as keyof typeof moduleContentMap]
  }
  return null
}
