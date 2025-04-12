import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { CheckCircle, Shield, AlertTriangle, Lightbulb, TrendingUp, Circle } from "lucide-react"

export default function CreateWalletPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="md:col-span-3">
          <h1 className="mb-6 text-3xl font-bold">Blockchain Basics: Getting Started</h1>

          <div className="space-y-8">
            <Tabs defaultValue="theory">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="theory">Theory</TabsTrigger>
                <TabsTrigger value="video">Video</TabsTrigger>
                <TabsTrigger value="quiz">Quick Quiz</TabsTrigger>
              </TabsList>

              <TabsContent value="theory" className="mt-6">
                <Card className="p-6">
                  <div className="prose dark:prose-invert max-w-none">
                    <div>
                      <p>
                        Blockchain technology and cryptocurrencies can seem intimidating at first, but getting started
                        is simpler than you might think. This guide will walk you through the essential steps: creating
                        your first crypto wallet, securing your private keys, understanding wallet addresses, and making
                        your first transaction. By the end, you'll have the foundational knowledge to confidently begin
                        your blockchain journey.
                      </p>
                      <p>
                        <em>
                          Disclaimer: This guide is for educational purposes only. Cryptocurrencies are volatile and
                          involve risks. Always do your own research and exercise caution when handling digital assets.
                        </em>
                      </p>

                      <h2>Creating Your First Crypto Wallet</h2>
                      <p>
                        A crypto wallet is a software application that allows you to store, send, and receive
                        cryptocurrencies. Unlike a physical wallet, it doesn't hold your coins directly; instead, it
                        stores your private keys, which are used to access your funds on the blockchain.
                      </p>

                      <h3>Steps to Create a Wallet</h3>
                      <p>
                        For this guide, we'll use MetaMask, a popular and beginner-friendly wallet for Ethereum and
                        other compatible blockchains. Here's how to set it up:
                      </p>
                      <ol>
                        <li>
                          <strong>Step 1:</strong> Download the MetaMask extension for your web browser from the
                          official MetaMask website. Avoid third-party sites to prevent scams.
                        </li>
                        <li>
                          <strong>Step 2:</strong> Click on the MetaMask icon in your browser and select "Create a
                          Wallet."
                        </li>
                        <li>
                          <strong>Step 3:</strong> Create a strong password. This password protects your wallet on your
                          device, so make it unique and secure. Write it down and store it safely.
                        </li>
                        <li>
                          <strong>Step 4:</strong> MetaMask will generate a seed phrase (also called a recovery
                          phrase)—a set of 12 or 24 words. This phrase is crucial; it's the only way to recover your
                          wallet if you lose access to your device. Write it down on paper and store it in a secure,
                          offline location. Never share your seed phrase with anyone.
                        </li>
                        <li>
                          <strong>Step 5:</strong> Confirm your seed phrase by selecting the words in the correct order.
                          Once done, your wallet is ready to use.
                        </li>
                      </ol>
                      <p>
                        <strong>Pro Tip:</strong> Other wallet options like Coinbase Wallet or Trust Wallet are also
                        great for beginners, with similar setup processes.
                      </p>
                    </div>

                    {/* Introduction Hook - Enhanced Version */}
                    <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-background p-6 rounded-xl border border-primary/30 shadow-lg relative overflow-hidden mt-10">
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-10 -mt-10 blur-xl"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full -ml-8 -mb-8 blur-xl"></div>

                      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                        <div className="bg-primary/20 p-4 rounded-full flex items-center justify-center">
                          <Shield className="h-10 w-10 text-primary" />
                        </div>

                        <div className="flex-1">
                          <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
                            Your Keys, Your Crypto
                          </h2>
                          <p className="text-lg relative">
                            <span className="bg-primary/10 px-2 py-1 rounded font-medium">
                              Remember this golden rule:
                            </span>{" "}
                            If you don't control your private keys, you don't truly own your cryptocurrency.
                            Self-custody is the foundation of financial sovereignty in the blockchain world.
                          </p>

                          <div className="mt-4 flex flex-wrap gap-3">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                              Self-Custody
                            </span>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                              Security First
                            </span>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                              Financial Freedom
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10">
                      <h2>Securing Your Private Keys</h2>
                      <p>
                        Your private key is a secret code that gives you control over your cryptocurrency funds. Think
                        of it as the key to a digital safe—anyone with access to it can access your assets. In MetaMask,
                        your private key is derived from your seed phrase, so securing both is critical.
                      </p>

                      <h3>Why It Matters</h3>
                      <p>
                        If someone else gets your private key or seed phrase, they can steal your funds. Unlike a bank,
                        there's no way to recover lost or stolen crypto—security is your responsibility.
                      </p>

                      <h3>Best Practices</h3>
                      <ul>
                        <li>
                          <strong>Store offline:</strong> Write your seed phrase on paper or use a hardware wallet (a
                          physical device like Ledger or Trezor). Avoid digital storage like screenshots or cloud
                          backups.
                        </li>
                        <li>
                          <strong>Never share:</strong> Legitimate services will never ask for your private key or seed
                          phrase.
                        </li>
                        <li>
                          <strong>Beware of phishing:</strong> Verify the authenticity of websites and apps. Scammers
                          often create fake sites to trick you into entering your keys.
                        </li>
                        <li>
                          <strong>Use hardware wallets:</strong> For larger amounts, consider a hardware wallet for
                          extra security.
                        </li>
                      </ul>
                      <p>
                        <strong>Key Takeaway:</strong> Protect your private key like it's the only key to your digital
                        vault.
                      </p>
                    </div>

                    {/* Benefits and Risks */}
                    <div className="mt-10">
                      <h2 className="text-2xl font-bold mb-6">Benefits and Risks of Self-Custody</h2>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="bg-green-950/20 p-6 rounded-lg border border-green-800/20">
                          <div className="flex items-center mb-4">
                            <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                            <h3 className="text-xl font-semibold">Benefits</h3>
                          </div>
                          <ul className="space-y-4">
                            <li className="flex">
                              <div className="mr-2 mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-500"></div>
                              <div>
                                <span className="font-medium">Full Control:</span> You have complete control over your
                                assets without relying on third parties.
                              </div>
                            </li>
                            <li className="flex">
                              <div className="mr-2 mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-500"></div>
                              <div>
                                <span className="font-medium">Privacy:</span> No KYC requirements or account monitoring.
                              </div>
                            </li>
                            <li className="flex">
                              <div className="mr-2 mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-500"></div>
                              <div>
                                <span className="font-medium">No Counterparty Risk:</span> Not vulnerable to exchange
                                hacks or bankruptcies.
                              </div>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-red-950/20 p-6 rounded-lg border border-red-800/20">
                          <div className="flex items-center mb-4">
                            <AlertTriangle className="h-6 w-6 text-red-500 mr-2" />
                            <h3 className="text-xl font-semibold">Risks</h3>
                          </div>
                          <ul className="space-y-4">
                            <li className="flex">
                              <div className="mr-2 mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500"></div>
                              <div>
                                <span className="font-medium">Responsibility:</span> If you lose your keys, you lose
                                your funds permanently.
                              </div>
                            </li>
                            <li className="flex">
                              <div className="mr-2 mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500"></div>
                              <div>
                                <span className="font-medium">Technical Knowledge:</span> Requires understanding of
                                security best practices.
                              </div>
                            </li>
                            <li className="flex">
                              <div className="mr-2 mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500"></div>
                              <div>
                                <span className="font-medium">No Recovery Options:</span> No "forgot password" button or
                                customer support.
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10">
                      <h2>Understanding Wallet Addresses</h2>
                      <p>
                        A wallet address is a unique string of characters used to receive cryptocurrencies, similar to a
                        bank account number. Each cryptocurrency has its own address format, but we'll focus on Ethereum
                        addresses for this guide (used in MetaMask).
                      </p>

                      <h3>What Is a Wallet Address?</h3>
                      <ul>
                        <li>It's generated from your public key (which comes from your private key).</li>
                        <li>It's safe to share because it only allows people to send you funds, not access them.</li>
                        <li>In MetaMask, it starts with "0x" (e.g., 0x123abc...).</li>
                      </ul>

                      <h3>How to Find It</h3>
                      <ul>
                        <li>Open MetaMask and click on your account name at the top.</li>
                        <li>Your wallet address will appear below it—click to copy it.</li>
                      </ul>

                      <h3>Why It's Safe to Share</h3>
                      <p>
                        The blockchain is public, so anyone can see transactions linked to your address. However, they
                        can't touch your funds without your private key.
                      </p>
                      <p>
                        <strong>Analogy:</strong> Your wallet address is like your home address—people can send you mail
                        (crypto), but they can't get inside without the key (private key).
                      </p>
                    </div>

                    {/* Use Cases */}
                    <div className="mt-10">
                      <h2 className="text-2xl font-bold mb-6">Common Wallet Use Cases</h2>
                      <div className="space-y-4">
                        <div className="bg-secondary/50 p-5 rounded-lg flex gap-4">
                          <div className="bg-background rounded-full p-3 h-fit">
                            <Lightbulb className="h-6 w-6 text-yellow-500" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">Storing Cryptocurrency</h3>
                            <p className="text-muted-foreground">
                              The most basic use of a wallet is to securely store your cryptocurrency assets. Unlike
                              keeping funds on an exchange, self-custody gives you complete control.
                            </p>
                          </div>
                        </div>

                        <div className="bg-secondary/50 p-5 rounded-lg flex gap-4">
                          <div className="bg-background rounded-full p-3 h-fit">
                            <Lightbulb className="h-6 w-6 text-yellow-500" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">Sending and Receiving Payments</h3>
                            <p className="text-muted-foreground">
                              Send cryptocurrency to friends, family, or merchants anywhere in the world without
                              intermediaries. Transactions can settle in minutes regardless of borders.
                            </p>
                          </div>
                        </div>

                        <div className="bg-secondary/50 p-5 rounded-lg flex gap-4">
                          <div className="bg-background rounded-full p-3 h-fit">
                            <Lightbulb className="h-6 w-6 text-yellow-500" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">Accessing DeFi Applications</h3>
                            <p className="text-muted-foreground">
                              Your wallet serves as your identity and access key to decentralized applications. Connect
                              your wallet to trade on DEXs, provide liquidity, or earn yield.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10">
                      <h2>Making Your First Transaction</h2>
                      <p>
                        Now that your wallet is set up and secured, let's send a small amount of Ethereum (ETH) to
                        another address.
                      </p>

                      <h3>Steps to Send Crypto</h3>
                      <ol>
                        <li>
                          <strong>Step 1:</strong> Ensure you have ETH in your wallet. Buy it from an exchange (e.g.,
                          Coinbase, Binance) or receive it from someone else.
                        </li>
                        <li>
                          <strong>Step 2:</strong> Open MetaMask and click "Send."
                        </li>
                        <li>
                          <strong>Step 3:</strong> Enter the recipient's wallet address carefully. Double-check
                          it—transactions can't be reversed, and a mistake means lost funds.
                        </li>
                        <li>
                          <strong>Step 4:</strong> Enter the amount (e.g., 0.001 ETH for practice). MetaMask will show a
                          gas fee—the cost of processing the transaction on Ethereum.
                        </li>
                        <li>
                          <strong>Step 5:</strong> Review the details and click "Confirm" to send.
                        </li>
                        <li>
                          <strong>Step 6:</strong> Check the status in the "Activity" tab. It may take a few minutes to
                          complete.
                        </li>
                      </ol>

                      <h3>What Are Gas Fees?</h3>
                      <p>
                        Gas fees are payments to miners who process transactions on the blockchain. They vary based on
                        network demand—think of them as a "shipping fee" for your transaction.
                      </p>
                      <p>
                        <strong>Pro Tip:</strong> Start with a tiny amount to test the process before sending larger
                        sums.
                      </p>
                    </div>

                    {/* A Look Ahead */}
                    <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-6 rounded-xl mt-10">
                      <div className="flex items-center mb-4">
                        <TrendingUp className="h-6 w-6 text-primary mr-2" />
                        <h2 className="text-2xl font-bold">Next Steps in Your Blockchain Journey</h2>
                      </div>
                      <p className="mb-4">
                        Now that you've set up your first wallet, here are some next steps to continue your blockchain
                        journey:
                      </p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start">
                          <div className="mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></div>
                          <span>Learn about different types of tokens (ERC-20, NFTs) and how they work</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></div>
                          <span>Explore decentralized applications (dApps) by connecting your wallet</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></div>
                          <span>Consider setting up a hardware wallet for long-term storage of larger amounts</span>
                        </li>
                      </ul>
                      <p className="text-lg font-medium">
                        Your wallet is your gateway to the entire blockchain ecosystem—continue exploring with
                        confidence!
                      </p>
                    </div>

                    <div className="mt-10">
                      <h2>Final Tips</h2>
                      <ul>
                        <li>
                          <strong>Double-check addresses:</strong> A single typo can cost you your funds.
                        </li>
                        <li>
                          <strong>Avoid scams:</strong> Never enter your seed phrase or private key on suspicious sites.
                        </li>
                        <li>
                          <strong>Backup your seed phrase:</strong> Store it securely—if you lose it and your device,
                          your funds are gone.
                        </li>
                      </ul>
                      <p>With these steps, you're ready to explore the blockchain world safely and confidently!</p>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <Button>Continue to Videos</Button>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="video" className="mt-6">
                <Card className="p-6">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold">Module Video</h2>
                    <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
                      <iframe
                        src="https://www.youtube.com/embed/CgXQC4dbGUE"
                        title="Creating Your First Crypto Wallet"
                        className="absolute top-0 left-0 w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="mt-4">
                      <p className="text-muted-foreground">
                        Watch this video tutorial to learn how to create and secure your first cryptocurrency wallet.
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-between">
                    <Button variant="outline">Back to Theory</Button>
                    <Button>Test Your Knowledge</Button>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="quiz" className="mt-6">
                <Card className="p-6">
                  <div className="space-y-8">
                    <h2 className="text-2xl font-bold">Quick Knowledge Check</h2>
                    <p className="text-muted-foreground mb-6">
                      Test your understanding of crypto wallets and blockchain basics with these questions.
                    </p>

                    <div className="space-y-8">
                      <div className="space-y-4 border-b pb-6">
                        <h3 className="text-lg font-medium">What is a crypto wallet primarily used for?</h3>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2 p-3 rounded-md border border-border">
                            <input type="radio" id="q1-a" name="q1" />
                            <label htmlFor="q1-a" className="flex-1 cursor-pointer">
                              Storing your actual cryptocurrency coins
                            </label>
                          </div>
                          <div className="flex items-center space-x-2 p-3 rounded-md border border-green-500 bg-green-50 dark:bg-green-950/20">
                            <input type="radio" id="q1-b" name="q1" checked />
                            <label htmlFor="q1-b" className="flex-1 cursor-pointer">
                              Storing your private keys to access your funds on the blockchain
                            </label>
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <div className="flex items-center space-x-2 p-3 rounded-md border border-border">
                            <input type="radio" id="q1-c" name="q1" />
                            <label htmlFor="q1-c" className="flex-1 cursor-pointer">
                              Mining new cryptocurrency
                            </label>
                          </div>
                          <div className="flex items-center space-x-2 p-3 rounded-md border border-border">
                            <input type="radio" id="q1-d" name="q1" />
                            <label htmlFor="q1-d" className="flex-1 cursor-pointer">
                              Creating new blockchain networks
                            </label>
                          </div>
                        </div>

                        <div className="mt-4 p-4 bg-secondary/30 rounded-md">
                          <h4 className="font-medium mb-2">Explanation:</h4>
                          <p className="text-sm text-muted-foreground">
                            A crypto wallet doesn't actually store your coins. It stores your private keys, which are
                            used to access and manage your funds that exist on the blockchain.
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4 border-b pb-6">
                        <h3 className="text-lg font-medium">
                          What should you do with your seed phrase (recovery phrase)?
                        </h3>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2 p-3 rounded-md border border-border">
                            <input type="radio" id="q2-a" name="q2" />
                            <label htmlFor="q2-a" className="flex-1 cursor-pointer">
                              Share it with trusted friends for backup
                            </label>
                          </div>
                          <div className="flex items-center space-x-2 p-3 rounded-md border border-border">
                            <input type="radio" id="q2-b" name="q2" />
                            <label htmlFor="q2-b" className="flex-1 cursor-pointer">
                              Store it in a password manager or cloud storage
                            </label>
                          </div>
                          <div className="flex items-center space-x-2 p-3 rounded-md border border-green-500 bg-green-50 dark:bg-green-950/20">
                            <input type="radio" id="q2-c" name="q2" checked />
                            <label htmlFor="q2-c" className="flex-1 cursor-pointer">
                              Write it down and store it securely offline
                            </label>
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <div className="flex items-center space-x-2 p-3 rounded-md border border-border">
                            <input type="radio" id="q2-d" name="q2" />
                            <label htmlFor="q2-d" className="flex-1 cursor-pointer">
                              Take a screenshot and save it on your computer
                            </label>
                          </div>
                        </div>

                        <div className="mt-4 p-4 bg-secondary/30 rounded-md">
                          <h4 className="font-medium mb-2">Explanation:</h4>
                          <p className="text-sm text-muted-foreground">
                            Your seed phrase should be written down on paper and stored securely offline. Never share it
                            with anyone or store it digitally where it could be vulnerable to hacking.
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">
                          Why is it important to double-check wallet addresses before sending cryptocurrency?
                        </h3>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2 p-3 rounded-md border border-border">
                            <input type="radio" id="q3-a" name="q3" />
                            <label htmlFor="q3-a" className="flex-1 cursor-pointer">
                              To avoid paying high gas fees
                            </label>
                          </div>
                          <div className="flex items-center space-x-2 p-3 rounded-md border border-green-500 bg-green-50 dark:bg-green-950/20">
                            <input type="radio" id="q3-b" name="q3" checked />
                            <label htmlFor="q3-b" className="flex-1 cursor-pointer">
                              Because transactions can't be reversed once confirmed
                            </label>
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <div className="flex items-center space-x-2 p-3 rounded-md border border-border">
                            <input type="radio" id="q3-c" name="q3" />
                            <label htmlFor="q3-c" className="flex-1 cursor-pointer">
                              To ensure the transaction processes quickly
                            </label>
                          </div>
                          <div className="flex items-center space-x-2 p-3 rounded-md border border-border">
                            <input type="radio" id="q3-d" name="q3" />
                            <label htmlFor="q3-d" className="flex-1 cursor-pointer">
                              It's not important as long as you have the seed phrase
                            </label>
                          </div>
                        </div>

                        <div className="mt-4 p-4 bg-secondary/30 rounded-md">
                          <h4 className="font-medium mb-2">Explanation:</h4>
                          <p className="text-sm text-muted-foreground">
                            Blockchain transactions are irreversible once confirmed. If you send cryptocurrency to an
                            incorrect address, there's no way to recover the funds, unlike traditional banking where you
                            might be able to reverse a transaction.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-between">
                    <Button variant="outline">Back to Videos</Button>
                    <Link href="/modules/introduction-to-defi">
                      <Button>Next Module</Button>
                    </Link>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Module Navigation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Link href="/guides/create-wallet">
                    <Button variant="default" className="w-full justify-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span className="truncate">Blockchain Basics</span>
                    </Button>
                  </Link>
                  <Link href="/modules/introduction-to-defi">
                    <Button variant="ghost" className="w-full justify-start">
                      <Circle className="mr-2 h-4 w-4" />
                      <span className="truncate">Introduction to DeFi</span>
                    </Button>
                  </Link>
                  <Link href="/modules/blockchain-fundamentals">
                    <Button variant="ghost" className="w-full justify-start">
                      <Circle className="mr-2 h-4 w-4" />
                      <span className="truncate">Blockchain Fundamentals</span>
                    </Button>
                  </Link>
                  <Link href="/modules/defi-lending-protocols">
                    <Button variant="ghost" className="w-full justify-start">
                      <Circle className="mr-2 h-4 w-4" />
                      <span className="truncate">DeFi Lending Protocols</span>
                    </Button>
                  </Link>
                </div>
                <div className="pt-4">
                  <Link href="/quiz/blockchain-basics-getting-started">
                    <Button variant="outline" className="w-full">
                      Take Module Quiz
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
