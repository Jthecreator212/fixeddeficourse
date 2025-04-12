import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Tools & Resources | DeFi Course",
  description: "Essential tools and resources for DeFi investors and liquidity providers",
}

interface ResourceProps {
  title: string
  description: string
  url: string
  tags?: string[]
}

function Resource({ title, description, url, tags }: ResourceProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg">{title}</CardTitle>
          <Link href={url} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
            <ExternalLink size={18} />
          </Link>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags?.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

export default function ToolsPage() {
  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Tools & Resources</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Essential tools and resources to help you navigate the DeFi ecosystem safely and effectively.
        </p>

        <Tabs defaultValue="analytics" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="dexs">DEXs</TabsTrigger>
            <TabsTrigger value="wallets">Wallets</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Resource
                title="DefiLlama"
                description="The largest TVL aggregator for DeFi. Track protocol TVL, yields, and new opportunities across all chains."
                url="https://defillama.com/"
                tags={["TVL Tracking", "Multi-chain", "Yields"]}
              />
              <Resource
                title="DexScreener"
                description="Real-time price charts and trading data for tokens across multiple DEXs and blockchains."
                url="https://dexscreener.com/"
                tags={["Price Charts", "Trading Volume", "Multi-chain"]}
              />
              <Resource
                title="DeBank"
                description="Portfolio tracker that shows all your DeFi assets and liabilities across multiple chains in one dashboard."
                url="https://debank.com/"
                tags={["Portfolio", "Multi-chain", "Net Worth"]}
              />
              <Resource
                title="Nansen"
                description="Analytics platform that enriches on-chain data with millions of wallet labels to help you track smart money."
                url="https://www.nansen.ai/"
                tags={["On-chain Data", "Smart Money", "Premium"]}
              />
            </div>
          </TabsContent>

          <TabsContent value="dexs" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Resource
                title="Uniswap"
                description="The largest decentralized exchange by volume. Swap tokens and provide liquidity across multiple chains."
                url="https://app.uniswap.org/"
                tags={["Ethereum", "Multi-chain", "High Volume"]}
              />
              <Resource
                title="Orca"
                description="Solana-based DEX with concentrated liquidity and a user-friendly interface for swapping and providing liquidity."
                url="https://www.orca.so/"
                tags={["Solana", "Concentrated Liquidity"]}
              />
              <Resource
                title="Trader Joe"
                description="DEX on Avalanche with trading, lending, and staking features. Known for its user-friendly interface."
                url="https://traderjoexyz.com/"
                tags={["Avalanche", "Multi-feature"]}
              />
              <Resource
                title="PancakeSwap"
                description="Leading DEX on BNB Chain with low fees and high trading volume. Features farms, pools, and prediction markets."
                url="https://pancakeswap.finance/"
                tags={["BNB Chain", "High Volume", "Multi-feature"]}
              />
            </div>
          </TabsContent>

          <TabsContent value="wallets" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Resource
                title="Phantom"
                description="User-friendly Solana wallet with built-in NFT support, staking, and swaps. Available as browser extension and mobile app."
                url="https://phantom.app/"
                tags={["Solana", "Mobile", "Browser Extension"]}
              />
              <Resource
                title="MetaMask"
                description="The most widely used Ethereum wallet. Connect to dApps, swap tokens, and manage your assets across EVM chains."
                url="https://metamask.io/"
                tags={["Ethereum", "EVM Chains", "Browser Extension"]}
              />
              <Resource
                title="Ledger"
                description="Hardware wallet that keeps your private keys offline for maximum security. Supports 5,500+ coins and tokens."
                url="https://www.ledger.com/"
                tags={["Hardware", "Cold Storage", "Multi-chain"]}
              />
              <Resource
                title="Rabby"
                description="Enhanced MetaMask alternative with better security features, gas estimation, and transaction simulation."
                url="https://rabby.io/"
                tags={["Ethereum", "EVM Chains", "Security"]}
              />
            </div>
          </TabsContent>

          <TabsContent value="education" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Resource
                title="Finematics"
                description="Educational YouTube channel and website with in-depth explanations of DeFi concepts and protocols."
                url="https://finematics.com/"
                tags={["Videos", "Explainers", "Protocols"]}
              />
              <Resource
                title="DeFi Pulse"
                description="DeFi analytics site with educational resources, including 'The DeFi List' of vetted projects."
                url="https://defipulse.com/"
                tags={["Analytics", "Project List", "Education"]}
              />
              <Resource
                title="Bankless"
                description="Media and content ecosystem with podcast, newsletter, and articles about DeFi and crypto."
                url="https://bankless.com/"
                tags={["Podcast", "Newsletter", "Community"]}
              />
              <Resource
                title="DeFi Dad"
                description="Educational content creator with step-by-step tutorials on using various DeFi protocols safely."
                url="https://defidad.io/"
                tags={["Tutorials", "How-to", "Safety"]}
              />
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Safety First</h2>
          <p className="mb-4">Always remember to follow these safety practices when using DeFi tools:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Never share your private keys or seed phrases with anyone</li>
            <li>Always verify contract addresses before interacting with them</li>
            <li>Start with small amounts when trying new protocols</li>
            <li>Use hardware wallets for storing significant amounts</li>
            <li>Be wary of high APYs that seem too good to be true</li>
            <li>Check protocol audits and security measures before depositing funds</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
