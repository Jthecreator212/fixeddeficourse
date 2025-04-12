import { IntroductionToDeFi } from "./module-content/introduction-to-defi"
import { BlockchainBasics } from "./module-content/blockchain-basics-getting-started"
import { BlockchainFundamentals } from "./module-content/blockchain-fundamentals"
import { DeFiLendingProtocols } from "./module-content/defi-lending-protocols"

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
