"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

// Define the glossary terms
const glossaryTerms = [
  {
    term: "AMM (Automated Market Maker)",
    definition:
      "A type of decentralized exchange protocol that uses a mathematical formula to price assets. Instead of using an order book like a traditional exchange, assets are priced according to a pricing algorithm.",
    category: "Exchanges",
  },
  {
    term: "APR (Annual Percentage Rate)",
    definition:
      "The annual rate of return on an investment, without accounting for the effect of compounding. In DeFi, APR is often used to describe lending and borrowing rates.",
    category: "Yield",
  },
  {
    term: "APY (Annual Percentage Yield)",
    definition:
      "The annual rate of return on an investment, accounting for the effect of compounding. APY is typically higher than APR for the same nominal interest rate.",
    category: "Yield",
  },
  {
    term: "Blockchain",
    definition:
      "A distributed ledger technology that records transactions across many computers so that the record cannot be altered retroactively without the alteration of all subsequent blocks and the consensus of the network.",
    category: "Technology",
  },
  {
    term: "Collateralization",
    definition:
      "The process of securing a loan with an asset. In DeFi, users often need to over-collateralize their loans due to the volatility of crypto assets.",
    category: "Lending",
  },
  {
    term: "DAO (Decentralized Autonomous Organization)",
    definition:
      "An organization represented by rules encoded as a computer program that is transparent, controlled by the organization members, and not influenced by a central government.",
    category: "Governance",
  },
  {
    term: "DApp (Decentralized Application)",
    definition: "An application that runs on a decentralized network, avoiding a single point of failure and control.",
    category: "Technology",
  },
  {
    term: "DeFi (Decentralized Finance)",
    definition:
      "A movement that aims to create an open-source, permissionless, and transparent financial service ecosystem that is available to everyone and operates without any central authority.",
    category: "General",
  },
  {
    term: "DEX (Decentralized Exchange)",
    definition:
      "A type of cryptocurrency exchange which allows for direct peer-to-peer cryptocurrency transactions to take place online securely and without the need for an intermediary.",
    category: "Exchanges",
  },
  {
    term: "Flash Loan",
    definition:
      "A type of uncollateralized loan where the borrowed assets must be returned within the same transaction block. If the loan is not repaid, the transaction is reversed as if it never happened.",
    category: "Lending",
  },
  {
    term: "Gas",
    definition:
      "A fee paid to network validators for processing transactions on the blockchain. Gas prices can vary based on network congestion.",
    category: "Technology",
  },
  {
    term: "Governance Token",
    definition:
      "A token that gives holders voting rights on proposed changes to a protocol. Governance tokens are used to decentralize decision-making in DeFi protocols.",
    category: "Governance",
  },
  {
    term: "Impermanent Loss",
    definition:
      "The temporary loss of funds experienced by liquidity providers due to volatility in a trading pair. The loss is 'impermanent' because it can be recovered if the prices return to their original values.",
    category: "Liquidity",
  },
  {
    term: "Liquidity Mining",
    definition:
      "A process where users provide liquidity to a protocol and receive tokens as a reward. This is often used to bootstrap liquidity for new DeFi protocols.",
    category: "Yield",
  },
  {
    term: "Liquidity Pool",
    definition:
      "A collection of funds locked in a smart contract. Liquidity pools are used to facilitate decentralized trading, lending, and other DeFi activities.",
    category: "Liquidity",
  },
  {
    term: "Liquidation",
    definition:
      "The process of selling collateral to repay a loan when the value of the collateral falls below a certain threshold. In DeFi, liquidations are typically automated through smart contracts.",
    category: "Lending",
  },
  {
    term: "NFT (Non-Fungible Token)",
    definition:
      "A type of cryptographic token that represents a unique asset. NFTs are tokenized versions of digital or real-world assets that are not interchangeable with each other.",
    category: "Assets",
  },
  {
    term: "Oracle",
    definition:
      "A service that provides external data to a blockchain. Oracles are used to bring real-world data, such as price information, onto the blockchain for use in smart contracts.",
    category: "Technology",
  },
  {
    term: "Proof of Stake (PoS)",
    definition:
      "A consensus mechanism where validators are chosen to create new blocks based on the number of coins they hold and are willing to 'stake' as collateral.",
    category: "Technology",
  },
  {
    term: "Proof of Work (PoW)",
    definition:
      "A consensus mechanism where miners solve complex mathematical puzzles to validate transactions and create new blocks. Bitcoin uses PoW.",
    category: "Technology",
  },
  {
    term: "Smart Contract",
    definition:
      "Self-executing contracts with the terms directly written into code. Smart contracts automatically execute actions when predetermined conditions are met.",
    category: "Technology",
  },
  {
    term: "Stablecoin",
    definition:
      "A type of cryptocurrency designed to maintain a stable value, often pegged to a fiat currency like the US dollar. Examples include USDT, USDC, and DAI.",
    category: "Assets",
  },
  {
    term: "Staking",
    definition:
      "The process of actively participating in transaction validation on a proof-of-stake blockchain. Users lock up their coins to be randomly selected as validators, earning rewards in the process.",
    category: "Yield",
  },
  {
    term: "Token",
    definition:
      "A unit of value issued by a tech or crypto startup, intended to be a piece in the ecosystem of a business that should appreciate in value as the business grows.",
    category: "Assets",
  },
  {
    term: "Total Value Locked (TVL)",
    definition:
      "The total value of crypto assets deposited in a DeFi protocol. TVL is often used as a metric to measure the growth and adoption of DeFi protocols.",
    category: "General",
  },
  {
    term: "Wallet",
    definition:
      "A digital tool that allows users to store, manage, and interact with their cryptocurrencies. Wallets can be hardware devices, software applications, or web services.",
    category: "Technology",
  },
  {
    term: "Yield Farming",
    definition:
      "The practice of staking or lending crypto assets in order to generate high returns or rewards in the form of additional cryptocurrency.",
    category: "Yield",
  },
  {
    term: "Yield Aggregator",
    definition:
      "A platform that automatically moves users' funds between different yield farming protocols to maximize returns. Examples include Yearn Finance.",
    category: "Yield",
  },
]

// Sort terms alphabetically
const sortedTerms = [...glossaryTerms].sort((a, b) => a.term.localeCompare(b.term))

// Group terms by first letter
const groupedTerms = sortedTerms.reduce(
  (acc, term) => {
    const firstLetter = term.term[0].toUpperCase()
    if (!acc[firstLetter]) {
      acc[firstLetter] = []
    }
    acc[firstLetter].push(term)
    return acc
  },
  {} as Record<string, typeof glossaryTerms>,
)

// Get all unique first letters
const alphabet = Object.keys(groupedTerms).sort()

// Get all unique categories
const categories = Array.from(new Set(glossaryTerms.map((term) => term.category))).sort()

export default function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Filter terms based on search and category
  const filteredTerms = sortedTerms.filter((term) => {
    const matchesSearch =
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory ? term.category === selectedCategory : true
    return matchesSearch && matchesCategory
  })

  // Group filtered terms by first letter
  const filteredGroupedTerms = filteredTerms.reduce(
    (acc, term) => {
      const firstLetter = term.term[0].toUpperCase()
      if (!acc[firstLetter]) {
        acc[firstLetter] = []
      }
      acc[firstLetter].push(term)
      return acc
    },
    {} as Record<string, typeof glossaryTerms>,
  )

  // Get all unique first letters from filtered terms
  const filteredAlphabet = Object.keys(filteredGroupedTerms).sort()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">DeFi Glossary</h1>
        <p className="mt-4 text-muted-foreground md:text-xl">
          A comprehensive guide to decentralized finance terminology
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search terms..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => setSelectedCategory(null)}
            className={selectedCategory === null ? "bg-primary" : ""}
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-primary" : ""}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Alphabet Navigation */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {alphabet.map((letter) => (
          <a
            key={letter}
            href={`#${letter}`}
            className={`flex h-8 w-8 items-center justify-center rounded-full border ${
              filteredAlphabet.includes(letter)
                ? "border-primary bg-primary/10 text-primary hover:bg-primary/20"
                : "border-muted-foreground/20 text-muted-foreground"
            }`}
          >
            {letter}
          </a>
        ))}
      </div>

      {/* Glossary Content */}
      <div className="space-y-8">
        {filteredAlphabet.length > 0 ? (
          filteredAlphabet.map((letter) => (
            <div key={letter} id={letter} className="scroll-mt-20">
              <h2 className="mb-4 text-2xl font-bold">{letter}</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredGroupedTerms[letter].map((term) => (
                  <div key={term.term} className="rounded-lg border bg-card p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold">{term.term}</h3>
                      <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        {term.category}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{term.definition}</p>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="rounded-lg border bg-card p-8 text-center">
            <h3 className="text-lg font-medium">No terms found</h3>
            <p className="mt-2 text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}
