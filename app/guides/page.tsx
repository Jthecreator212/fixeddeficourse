import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Zap, BookOpen } from "lucide-react"

export default function GuidesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">DeFi Guides</h1>
        <p className="mt-4 text-muted-foreground md:text-xl">
          Step-by-step guides to help you navigate the world of decentralized finance
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="flex flex-col border-2 border-primary bg-secondary/30">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="bg-primary/20 p-3 rounded-full">
                <Shield className="h-6 w-6 text-primary" />
              </div>
            </div>
            <CardTitle className="mt-4">Create Your First Crypto Wallet</CardTitle>
            <CardDescription>Learn how to create a wallet and start your blockchain journey</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="ml-6 list-disc text-sm text-muted-foreground">
              <li>Creating your first crypto wallet</li>
              <li>Securing your private keys</li>
              <li>Understanding wallet addresses</li>
              <li>Making your first transaction</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/guides/create-wallet" className="w-full">
              <Button className="w-full bg-primary hover:bg-primary/90">Read Guide</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="flex flex-col bg-secondary/30">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="bg-blue-500/20 p-3 rounded-full">
                <Zap className="h-6 w-6 text-blue-500" />
              </div>
            </div>
            <CardTitle className="mt-4">How to Swap Tokens on a DEX</CardTitle>
            <CardDescription>Learn how to trade cryptocurrencies without intermediaries</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="ml-6 list-disc text-sm text-muted-foreground">
              <li>Understanding decentralized exchanges</li>
              <li>Connecting your wallet to a DEX</li>
              <li>Executing your first swap</li>
              <li>Managing slippage and gas fees</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/guides/swap-tokens" className="w-full">
              <Button variant="outline" className="w-full border-blue-500 text-blue-500 hover:bg-blue-500/10">
                Coming Soon
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="flex flex-col bg-secondary/30">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="bg-pink-500/20 p-3 rounded-full">
                <BookOpen className="h-6 w-6 text-pink-500" />
              </div>
            </div>
            <CardTitle className="mt-4">Lending and Borrowing in DeFi</CardTitle>
            <CardDescription>Earn interest or get a loan using decentralized protocols</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="ml-6 list-disc text-sm text-muted-foreground">
              <li>How DeFi lending works</li>
              <li>Supplying assets to earn interest</li>
              <li>Borrowing against your collateral</li>
              <li>Understanding risks and liquidations</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/guides/defi-lending" className="w-full">
              <Button variant="outline" className="w-full border-pink-500 text-pink-500 hover:bg-pink-500/10">
                Coming Soon
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
