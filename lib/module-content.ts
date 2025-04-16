import IntroductionToDeFi from "./module-content/introduction-to-defi"
import BlockchainBasics from "./module-content/blockchain-basics-getting-started"
import BlockchainFundamentalsModule from "./module-content/blockchain-fundamentals"
import DeFiLendingProtocols from "./module-content/defi-lending-protocols"
import DeFiAsABusiness from "./module-content/defi-as-a-business"
import DeFiLiquidityPools from "./module-content/defi-liquidity-pools"
import DeFiEnteringLiquidityPool from "./module-content/defi-entering-first-liquidity-pool"
import DeFi7RulesLiquidityPool from "./module-content/defi-7-rules-liquidity-pool"

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

// Function to get the appropriate module content
export function getModuleContent(moduleSlug: string) {
  if (moduleSlug && moduleSlug in moduleContentMap) {
    return moduleContentMap[moduleSlug as keyof typeof moduleContentMap]
  }

  // Return null if no matching module is found
  return null
}
