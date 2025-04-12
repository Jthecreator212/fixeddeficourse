import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FAQPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions about DeFi concepts and our course
        </p>
      </div>

      <Tabs defaultValue="basics" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="basics">DeFi Basics</TabsTrigger>
          <TabsTrigger value="liquidity">Liquidity Pools</TabsTrigger>
          <TabsTrigger value="wallets">Wallets & Security</TabsTrigger>
          <TabsTrigger value="course">Course Info</TabsTrigger>
        </TabsList>

        <Card className="p-6">
          <TabsContent value="basics">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="what-is-defi">
                <AccordionTrigger>What is DeFi?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    Decentralized Finance (DeFi) refers to financial applications built on blockchain technology that
                    operate without centralized intermediaries like banks or financial institutions.
                  </p>
                  <p>
                    DeFi applications aim to create an open, permissionless financial system where anyone with an
                    internet connection can access financial services like lending, borrowing, trading, and earning
                    interest.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="defi-vs-traditional">
                <AccordionTrigger>How does DeFi differ from traditional finance?</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Decentralization:</strong> No central authority controls the system
                    </li>
                    <li>
                      <strong>Permissionless:</strong> Anyone can access services without approval
                    </li>
                    <li>
                      <strong>Transparency:</strong> All transactions are visible on the blockchain
                    </li>
                    <li>
                      <strong>Programmability:</strong> Smart contracts automate financial operations
                    </li>
                    <li>
                      <strong>Composability:</strong> DeFi protocols can be combined like "money legos"
                    </li>
                    <li>
                      <strong>Self-custody:</strong> Users maintain control of their assets
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="defi-risks">
                <AccordionTrigger>What are the risks of DeFi?</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Smart Contract Risk:</strong> Bugs or exploits in code can lead to loss of funds
                    </li>
                    <li>
                      <strong>Market Risk:</strong> Crypto assets can be highly volatile
                    </li>
                    <li>
                      <strong>Impermanent Loss:</strong> Specific to liquidity providers in AMMs
                    </li>
                    <li>
                      <strong>Governance Risk:</strong> Protocol changes may affect your investments
                    </li>
                    <li>
                      <strong>User Error:</strong> Mistakes like sending to wrong addresses are irreversible
                    </li>
                    <li>
                      <strong>Regulatory Risk:</strong> Changing regulations may impact DeFi applications
                    </li>
                  </ul>
                  <p className="mt-4">
                    Our course teaches risk management strategies to help you navigate these challenges safely.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="get-started">
                <AccordionTrigger>How do I get started with DeFi?</AccordionTrigger>
                <AccordionContent>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Set up a non-custodial wallet (like Phantom for Solana)</li>
                    <li>Purchase cryptocurrency through an exchange</li>
                    <li>Transfer your crypto to your wallet</li>
                    <li>Start with simple DeFi activities like staking or providing liquidity</li>
                    <li>Begin with small amounts while learning</li>
                  </ol>
                  <p className="mt-4">
                    Our "Blockchain Basics: Getting Started" module walks you through these steps in detail.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          <TabsContent value="liquidity">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="liquidity-pools">
                <AccordionTrigger>What are liquidity pools?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    Liquidity pools are smart contracts that hold pairs of tokens to facilitate trading on decentralized
                    exchanges (DEXs). Users who deposit tokens into these pools are called liquidity providers.
                  </p>
                  <p>
                    When traders swap tokens on a DEX, they pay fees that are distributed to liquidity providers
                    proportional to their share of the pool. This creates a passive income opportunity for liquidity
                    providers.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="impermanent-loss">
                <AccordionTrigger>What is impermanent loss?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    Impermanent loss occurs when the price of tokens in a liquidity pool changes compared to when they
                    were deposited. The greater the price change, the more significant the impermanent loss.
                  </p>
                  <p className="mb-4">
                    It's called "impermanent" because the loss is only realized when you withdraw your liquidity. If
                    prices return to their original ratio, the impermanent loss disappears.
                  </p>
                  <p>
                    Our "DeFi: 7 Rules to Enter a Liquidity Pool" module explains strategies to minimize impermanent
                    loss.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="choose-pool">
                <AccordionTrigger>How do I choose which liquidity pool to enter?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">Follow these key criteria when selecting a liquidity pool:</p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>
                      <strong>Long-term belief in both assets</strong> - Would you hold these tokens anyway?
                    </li>
                    <li>
                      <strong>Sufficient TVL</strong> - Look for at least $250K, preferably $1M+
                    </li>
                    <li>
                      <strong>Correlation between assets</strong> - Highly correlated pairs reduce impermanent loss
                    </li>
                    <li>
                      <strong>Market trend awareness</strong> - Different strategies for up/down/sideways markets
                    </li>
                    <li>
                      <strong>Volume vs. liquidity ratio</strong> - Higher volume relative to liquidity means more fees
                    </li>
                    <li>
                      <strong>Reputable DEX</strong> - Stick to established platforms with security track records
                    </li>
                    <li>
                      <strong>Low gas fees</strong> - Choose blockchains with reasonable transaction costs
                    </li>
                  </ol>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="apy-calculation">
                <AccordionTrigger>How is APY calculated for liquidity pools?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    APY (Annual Percentage Yield) for liquidity pools typically comes from three sources:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Trading fees</strong> - A percentage of each swap goes to liquidity providers
                    </li>
                    <li>
                      <strong>Incentive rewards</strong> - Additional tokens given to liquidity providers
                    </li>
                    <li>
                      <strong>Price appreciation</strong> - Potential growth in value of the underlying assets
                    </li>
                  </ul>
                  <p className="mt-4">
                    The displayed APY is usually an estimate based on recent trading volume and may fluctuate
                    significantly. Always factor in potential impermanent loss when evaluating the true return.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          <TabsContent value="wallets">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="wallet-types">
                <AccordionTrigger>What types of wallets should I use for DeFi?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    For DeFi, non-custodial wallets are recommended as they give you full control of your private keys.
                    Common types include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Browser extensions</strong> (Phantom, MetaMask) - Convenient for regular DeFi use
                    </li>
                    <li>
                      <strong>Mobile wallets</strong> (Trust Wallet, Exodus) - Good for on-the-go access
                    </li>
                    <li>
                      <strong>Hardware wallets</strong> (Ledger, Trezor) - Most secure option for larger holdings
                    </li>
                  </ul>
                  <p className="mt-4">
                    For maximum security, consider using a hardware wallet for long-term storage and a browser extension
                    for active DeFi participation.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="wallet-security">
                <AccordionTrigger>How do I keep my wallet secure?</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Never share your seed phrase or private keys with anyone</li>
                    <li>Store your seed phrase offline in a secure location (not digitally)</li>
                    <li>Use hardware wallets for large amounts</li>
                    <li>Enable additional security features like 2FA where available</li>
                    <li>Be cautious of phishing attempts and only download wallets from official sources</li>
                    <li>Verify all transaction details before confirming</li>
                    <li>Consider using a dedicated device for crypto transactions</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="self-custody">
                <AccordionTrigger>What is self-custody and why is it important?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    Self-custody means you have complete control over your crypto assets through ownership of your
                    private keys, rather than relying on a third party like an exchange to hold them for you.
                  </p>
                  <p className="mb-4">
                    The phrase "not your keys, not your coins" highlights that without self-custody, you're trusting
                    someone else with your assets.
                  </p>
                  <p>
                    Self-custody is fundamental to DeFi's philosophy of financial sovereignty and removes counterparty
                    risk from centralized entities that may face hacks, insolvency, or regulatory issues.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="transaction-verification">
                <AccordionTrigger>How can I verify my transactions on the blockchain?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    You can verify transactions using blockchain explorers specific to each network:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Solana:</strong> Solscan or Solana Explorer
                    </li>
                    <li>
                      <strong>Ethereum:</strong> Etherscan
                    </li>
                    <li>
                      <strong>Binance Smart Chain:</strong> BscScan
                    </li>
                    <li>
                      <strong>Polygon:</strong> PolygonScan
                    </li>
                  </ul>
                  <p className="mt-4">
                    Simply copy your transaction hash (txid) or wallet address and paste it into the explorer's search
                    bar. This allows you to confirm transaction status, amounts, and other details.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          <TabsContent value="course">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="course-structure">
                <AccordionTrigger>How is the course structured?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">Our DeFi course is structured in progressive modules that build on each other:</p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>
                      <strong>Blockchain Basics:</strong> Fundamental concepts and wallet setup
                    </li>
                    <li>
                      <strong>DeFi Fundamentals:</strong> Core concepts and terminology
                    </li>
                    <li>
                      <strong>Liquidity Pools:</strong> Understanding and participating in liquidity provision
                    </li>
                    <li>
                      <strong>Advanced Strategies:</strong> Optimizing returns and managing risk
                    </li>
                  </ol>
                  <p className="mt-4">
                    Each module contains theory sections, practical examples, video demonstrations, and quizzes to test
                    your knowledge.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="progress-tracking">
                <AccordionTrigger>How is my progress tracked?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">Your progress is automatically tracked as you complete:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Module theory sections</li>
                    <li>Video lessons</li>
                    <li>Quizzes (minimum passing score of 70%)</li>
                  </ul>
                  <p className="mt-4">
                    You can view your overall progress on your dashboard, including completed modules and quiz scores.
                    You can revisit any section at any time to refresh your knowledge.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="prerequisites">
                <AccordionTrigger>Are there any prerequisites for this course?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    No prior knowledge of blockchain or DeFi is required. We start with the basics and gradually
                    introduce more complex concepts.
                  </p>
                  <p>
                    However, basic computer literacy and familiarity with managing digital accounts will be helpful. If
                    you're completely new to cryptocurrency, our "Blockchain Basics" module will give you the foundation
                    you need.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="certification">
                <AccordionTrigger>Will I receive a certificate upon completion?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    Yes, upon completing all modules and passing all quizzes, you'll receive a digital certificate of
                    completion that you can share on your resume or LinkedIn profile.
                  </p>
                  <p>
                    Our certificates are recognized in the DeFi community and demonstrate your practical knowledge of
                    decentralized finance concepts and applications.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Card>
      </Tabs>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground mb-4">Don't see your question answered here?</p>
        <div className="flex justify-center">
          <a
            href="mailto:support@defimaster.com"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Ask a Question
          </a>
        </div>
      </div>
    </div>
  )
}
