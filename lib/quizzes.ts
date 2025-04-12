// This is a mock data file that would typically be connected to a database or API
// In a real application, you would fetch this data from a backend service

export interface Question {
  id: string
  text: string
  options: {
    id: string
    text: string
  }[]
  correctOptionId: string
  explanation: string
}

export interface Quiz {
  slug: string
  title: string
  description: string
  moduleSlug: string
  questions: Question[]
}

const quizzes: Quiz[] = [
  {
    slug: "blockchain-basics-getting-started",
    title: "Blockchain Basics: Getting Started Quiz",
    description: "Test your knowledge of crypto wallets and blockchain basics",
    moduleSlug: "blockchain-basics-getting-started",
    questions: [
      {
        id: "q1",
        text: "What is a crypto wallet primarily used for?",
        options: [
          { id: "a", text: "Storing your actual cryptocurrency coins" },
          { id: "b", text: "Storing your private keys to access your funds on the blockchain" },
          { id: "c", text: "Mining new cryptocurrency" },
          { id: "d", text: "Creating new blockchain networks" },
        ],
        correctOptionId: "b",
        explanation:
          "A crypto wallet doesn't actually store your coins. It stores your private keys, which are used to access and manage your funds that exist on the blockchain.",
      },
      {
        id: "q2",
        text: "What should you do with your seed phrase (recovery phrase)?",
        options: [
          { id: "a", text: "Share it with trusted friends for backup" },
          { id: "b", text: "Store it in a password manager or cloud storage" },
          { id: "c", text: "Write it down and store it securely offline" },
          { id: "d", text: "Take a screenshot and save it on your computer" },
        ],
        correctOptionId: "c",
        explanation:
          "Your seed phrase should be written down on paper and stored securely offline. Never share it with anyone or store it digitally where it could be vulnerable to hacking.",
      },
      {
        id: "q3",
        text: "What is a wallet address?",
        options: [
          { id: "a", text: "The physical location where your crypto is stored" },
          { id: "b", text: "Your private key" },
          { id: "c", text: "A unique string of characters used to receive cryptocurrency" },
          { id: "d", text: "Your seed phrase" },
        ],
        correctOptionId: "c",
        explanation:
          "A wallet address is a unique string of characters that serves as a destination for receiving cryptocurrency, similar to a bank account number.",
      },
      {
        id: "q4",
        text: "What are gas fees in the context of blockchain transactions?",
        options: [
          { id: "a", text: "Fees paid to cryptocurrency exchanges" },
          { id: "b", text: "Payments to miners/validators for processing transactions" },
          { id: "c", text: "Subscription fees for wallet services" },
          { id: "d", text: "Taxes on cryptocurrency profits" },
        ],
        correctOptionId: "b",
        explanation:
          "Gas fees are payments made to miners or validators who process transactions on the blockchain. They vary based on network demand and complexity of the transaction.",
      },
      {
        id: "q5",
        text: "Why is it important to double-check wallet addresses before sending cryptocurrency?",
        options: [
          { id: "a", text: "To avoid paying high gas fees" },
          { id: "b", text: "Because transactions can't be reversed once confirmed" },
          { id: "c", text: "To ensure the transaction processes quickly" },
          { id: "d", text: "It's not important as long as you have the seed phrase" },
        ],
        correctOptionId: "b",
        explanation:
          "Blockchain transactions are irreversible once confirmed. If you send cryptocurrency to an incorrect address, there's no way to recover the funds, unlike traditional banking where you might be able to reverse a transaction.",
      },
    ],
  },
  {
    slug: "introduction-to-defi",
    title: "Introduction to DeFi Quiz",
    description: "Test your knowledge of DeFi fundamentals",
    moduleSlug: "introduction-to-defi",
    questions: [
      {
        id: "q1",
        text: "What does DeFi stand for?",
        options: [
          { id: "a", text: "Decentralized Finances" },
          { id: "b", text: "Decentralized Finance" },
          { id: "c", text: "Digital Finance" },
          { id: "d", text: "Distributed Finance" },
        ],
        correctOptionId: "b",
        explanation:
          "DeFi stands for Decentralized Finance, which refers to financial applications built on blockchain technology that don't rely on centralized intermediaries.",
      },
      {
        id: "q2",
        text: "Which of the following is NOT a key component of DeFi?",
        options: [
          { id: "a", text: "Decentralized Exchanges (DEXs)" },
          { id: "b", text: "Lending Protocols" },
          { id: "c", text: "Central Banks" },
          { id: "d", text: "Stablecoins" },
        ],
        correctOptionId: "c",
        explanation:
          "Central Banks are part of the traditional financial system, not DeFi. DeFi aims to create financial services without centralized intermediaries like central banks.",
      },
      {
        id: "q3",
        text: "What makes DeFi different from traditional finance?",
        options: [
          { id: "a", text: "DeFi requires a bank account" },
          { id: "b", text: "DeFi is controlled by governments" },
          { id: "c", text: "DeFi operates without intermediaries" },
          { id: "d", text: "DeFi only works with physical cash" },
        ],
        correctOptionId: "c",
        explanation:
          "DeFi operates without intermediaries like banks or brokerages. Instead, it uses smart contracts on blockchain networks to enable peer-to-peer financial services.",
      },
      {
        id: "q4",
        text: "What are smart contracts in the context of DeFi?",
        options: [
          { id: "a", text: "Legal agreements signed by lawyers" },
          { id: "b", text: "Self-executing code that automates financial agreements" },
          { id: "c", text: "Paper contracts that are very well written" },
          { id: "d", text: "Contracts that require government approval" },
        ],
        correctOptionId: "b",
        explanation:
          "Smart contracts are self-executing code that automatically enforce and execute the terms of an agreement when predefined conditions are met. They are the backbone of DeFi applications.",
      },
      {
        id: "q5",
        text: "Which blockchain is currently the most widely used for DeFi applications?",
        options: [
          { id: "a", text: "Bitcoin" },
          { id: "b", text: "Ethereum" },
          { id: "c", text: "Ripple" },
          { id: "d", text: "Litecoin" },
        ],
        correctOptionId: "b",
        explanation:
          "Ethereum is currently the most widely used blockchain for DeFi applications due to its smart contract functionality, although other blockchains like Solana, Avalanche, and Binance Smart Chain are gaining popularity.",
      },
    ],
  },
  {
    slug: "blockchain-fundamentals",
    title: "Blockchain Fundamentals Quiz",
    description: "Test your understanding of blockchain technology",
    moduleSlug: "blockchain-fundamentals",
    questions: [
      {
        id: "q1",
        text: "What is a blockchain?",
        options: [
          { id: "a", text: "A type of cryptocurrency" },
          { id: "b", text: "A distributed ledger technology" },
          { id: "c", text: "A centralized database" },
          { id: "d", text: "A programming language" },
        ],
        correctOptionId: "b",
        explanation:
          "A blockchain is a distributed ledger technology that records transactions across many computers in a way that ensures the data cannot be altered retroactively.",
      },
      {
        id: "q2",
        text: "What is the purpose of consensus mechanisms in blockchain?",
        options: [
          { id: "a", text: "To encrypt transactions" },
          { id: "b", text: "To create new cryptocurrencies" },
          { id: "c", text: "To agree on the state of the blockchain" },
          { id: "d", text: "To connect to the internet" },
        ],
        correctOptionId: "c",
        explanation:
          "Consensus mechanisms are protocols that ensure all nodes in the blockchain network agree on the current state of the blockchain, validating transactions and maintaining the integrity of the network.",
      },
    ],
  },
  {
    slug: "defi-lending-protocols",
    title: "DeFi Lending Protocols Quiz",
    description: "Test your understanding of DeFi lending and borrowing concepts",
    moduleSlug: "defi-lending-protocols",
    questions: [
      {
        id: "q1",
        text: "What is the primary purpose of DeFi lending protocols?",
        options: [
          { id: "a", text: "To replace traditional banks entirely" },
          { id: "b", text: "To enable peer-to-peer lending and borrowing without intermediaries" },
          { id: "c", text: "To provide free loans to cryptocurrency holders" },
          { id: "d", text: "To create new cryptocurrencies" },
        ],
        correctOptionId: "b",
        explanation:
          "DeFi lending protocols are designed to enable peer-to-peer lending and borrowing without traditional financial intermediaries like banks. They use smart contracts to automate the process, allowing users to earn interest on their deposits or borrow assets by providing collateral.",
      },
      {
        id: "q2",
        text: "What is overcollateralization in DeFi lending?",
        options: [
          { id: "a", text: "Borrowing more than the value of your collateral" },
          { id: "b", text: "Providing collateral worth more than the amount you're borrowing" },
          { id: "c", text: "Lending more than you can afford to lose" },
          { id: "d", text: "Having multiple loans on different platforms" },
        ],
        correctOptionId: "b",
        explanation:
          "Overcollateralization means providing collateral that exceeds the value of the loan you're taking. For example, you might need to deposit $150 worth of ETH to borrow $100 worth of a stablecoin. This protects the protocol from losses due to market volatility and ensures there are always sufficient funds to cover loans.",
      },
      {
        id: "q3",
        text: "What happens during a liquidation in DeFi lending?",
        options: [
          { id: "a", text: "The borrower's collateral is sold to repay the loan" },
          { id: "b", text: "The lending protocol shuts down temporarily" },
          { id: "c", text: "The borrower receives additional time to repay" },
          { id: "d", text: "The interest rate is increased as a penalty" },
        ],
        correctOptionId: "a",
        explanation:
          "During a liquidation, a portion of the borrower's collateral is automatically sold (often at a discount) to repay the loan when the collateral-to-loan ratio falls below a certain threshold. This happens when the value of the collateral decreases or the value of the borrowed assets increases significantly.",
      },
      {
        id: "q4",
        text: "Which of the following is NOT a major DeFi lending protocol?",
        options: [
          { id: "a", text: "Aave" },
          { id: "b", text: "Compound" },
          { id: "c", text: "MakerDAO" },
          { id: "d", text: "BitLend" },
        ],
        correctOptionId: "d",
        explanation:
          "BitLend is not a major DeFi lending protocol. The major protocols include Aave, Compound, and MakerDAO, which are well-established platforms with billions of dollars in total value locked (TVL).",
      },
      {
        id: "q5",
        text: "What is the primary risk of using DeFi lending protocols?",
        options: [
          { id: "a", text: "Smart contract vulnerabilities" },
          { id: "b", text: "High transaction fees" },
          { id: "c", text: "Slow transaction processing" },
          { id: "d", text: "Limited asset selection" },
        ],
        correctOptionId: "a",
        explanation:
          "Smart contract vulnerabilities represent the primary risk in DeFi lending protocols. If there are bugs or security flaws in the code, hackers could potentially exploit them to drain funds from the protocol. This has happened several times in the history of DeFi, resulting in millions of dollars in losses.",
      },
    ],
  },
  {
    slug: "defi-as-a-business",
    title: "DeFi as a Business Quiz",
    description: "Test your understanding of DeFi business models and opportunities",
    moduleSlug: "defi-as-a-business",
    questions: [
      {
        id: "q1",
        text: "What is the primary revenue model for most decentralized exchanges (DEXs)?",
        options: [
          { id: "a", text: "Subscription fees" },
          { id: "b", text: "Trading fees" },
          { id: "c", text: "Advertising revenue" },
          { id: "d", text: "Selling user data" },
        ],
        correctOptionId: "b",
        explanation:
          "Most decentralized exchanges (DEXs) generate revenue through trading fees, typically charging a small percentage (e.g., 0.3% on Uniswap) on each swap. Unlike centralized exchanges, they don't typically rely on subscription models or selling user data, maintaining their decentralized ethos.",
      },
      {
        id: "q2",
        text: "Which of the following is NOT a common business model in DeFi?",
        options: [
          { id: "a", text: "Liquidity provision" },
          { id: "b", text: "Yield farming protocols" },
          { id: "c", text: "Centralized customer service centers" },
          { id: "d", text: "Insurance protocols" },
        ],
        correctOptionId: "c",
        explanation:
          "Centralized customer service centers are not a common business model in DeFi, as they contradict the decentralized nature of these protocols. DeFi projects typically operate through smart contracts with minimal human intervention, relying on community governance and documentation rather than traditional customer service.",
      },
      {
        id: "q3",
        text: "How do lending protocols typically generate revenue?",
        options: [
          { id: "a", text: "Through the spread between borrowing and lending rates" },
          { id: "b", text: "By selling insurance policies" },
          { id: "c", text: "Through monthly subscription fees" },
          { id: "d", text: "By mining new tokens" },
        ],
        correctOptionId: "a",
        explanation:
          "Lending protocols like Aave and Compound generate revenue through the spread between borrowing and lending rates. They charge borrowers a slightly higher interest rate than what they pay to lenders, with the difference going to the protocol treasury and/or token holders.",
      },
      {
        id: "q4",
        text: "What is a 'protocol-owned liquidity' business model?",
        options: [
          { id: "a", text: "When users provide liquidity to a protocol" },
          { id: "b", text: "When a protocol owns its own liquidity rather than renting it from users" },
          { id: "c", text: "When a central bank provides liquidity to DeFi protocols" },
          { id: "d", text: "When liquidity is locked for a fixed period" },
        ],
        correctOptionId: "b",
        explanation:
          "Protocol-owned liquidity (POL) is a business model where the protocol itself owns the liquidity in its pools rather than renting it from users through incentives. This model, pioneered by Olympus DAO, allows protocols to have more sustainable economics as they don't need to continuously pay high yields to attract liquidity providers.",
      },
      {
        id: "q5",
        text: "What regulatory challenge is most pressing for DeFi businesses operating globally?",
        options: [
          { id: "a", text: "Environmental regulations" },
          { id: "b", text: "Jurisdictional compliance across different countries" },
          { id: "c", text: "Employee benefits requirements" },
          { id: "d", text: "Physical office space regulations" },
        ],
        correctOptionId: "b",
        explanation:
          "Jurisdictional compliance across different countries is the most pressing regulatory challenge for global DeFi businesses. Different countries have vastly different approaches to regulating cryptocurrency and DeFi activities, from permissive frameworks to outright bans, making it challenging to operate a compliant global DeFi business.",
      },
    ],
  },
  {
    slug: "defi-liquidity-pools",
    title: "DeFi: Liquidity Pools Quiz",
    description: "Test your understanding of liquidity pools and automated market makers",
    moduleSlug: "defi-liquidity-pools",
    questions: [
      {
        id: "q1",
        text: "What is a liquidity pool in DeFi?",
        options: [
          { id: "a", text: "A centralized exchange's order book" },
          { id: "b", text: "A collection of funds locked in a smart contract" },
          { id: "c", text: "A type of cryptocurrency wallet" },
          { id: "d", text: "A regulatory compliance mechanism" },
        ],
        correctOptionId: "b",
        explanation:
          "A liquidity pool is a collection of funds locked in a smart contract that provides liquidity to decentralized exchanges and other DeFi protocols. It enables trading, lending, and other financial activities without relying on traditional market makers or order books.",
      },
      {
        id: "q2",
        text: "What is the primary function of Automated Market Makers (AMMs)?",
        options: [
          { id: "a", text: "To manually match buy and sell orders" },
          { id: "b", text: "To provide loans to cryptocurrency users" },
          { id: "c", text: "To use mathematical formulas to price assets and enable permissionless trading" },
          { id: "d", text: "To verify the identity of traders" },
        ],
        correctOptionId: "c",
        explanation:
          "Automated Market Makers (AMMs) use mathematical formulas (like the constant product formula x*y=k) to price assets and enable permissionless trading. They replace traditional order books with algorithmic pricing, allowing anyone to trade without needing a counterparty.",
      },
      {
        id: "q3",
        text: "What is impermanent loss?",
        options: [
          { id: "a", text: "The loss of funds due to smart contract hacks" },
          {
            id: "b",
            text: "The temporary loss of value that liquidity providers experience when asset prices change after deposit",
          },
          { id: "c", text: "The transaction fees paid when withdrawing from a liquidity pool" },
          { id: "d", text: "The decrease in token value due to inflation" },
        ],
        correctOptionId: "b",
        explanation:
          "Impermanent loss is the temporary loss of value that liquidity providers experience when the prices of assets in the pool change compared to when they were deposited. It's called 'impermanent' because the loss is only realized when liquidity is withdrawn; if prices return to their original ratio, the loss disappears.",
      },
      {
        id: "q4",
        text: "Which of the following is NOT a common AMM formula used in liquidity pools?",
        options: [
          { id: "a", text: "Constant Product (x*y=k)" },
          { id: "b", text: "Constant Sum (x+y=k)" },
          { id: "c", text: "Constant Mean ((x^w1 * y^w2)=k)" },
          { id: "d", text: "Constant Volatility (x^2/y=k)" },
        ],
        correctOptionId: "d",
        explanation:
          "Constant Volatility (x^2/y=k) is not a common AMM formula. The three main types are: Constant Product (used by Uniswap), Constant Sum (used by mStable), and Constant Mean/Weighted Product (used by Balancer). Each formula has different characteristics regarding slippage, impermanent loss, and capital efficiency.",
      },
      {
        id: "q5",
        text: "How do liquidity providers earn returns in most AMM protocols?",
        options: [
          { id: "a", text: "Through fixed interest payments from borrowers" },
          { id: "b", text: "By collecting a portion of trading fees generated by the pool" },
          { id: "c", text: "Through direct payments from the protocol treasury" },
          { id: "d", text: "By staking governance tokens" },
        ],
        correctOptionId: "b",
        explanation:
          "Liquidity providers earn returns primarily by collecting a portion of the trading fees generated by the pool. For example, Uniswap charges a 0.3% fee on all trades, which is distributed proportionally to all liquidity providers. Some protocols also distribute additional token rewards ('liquidity mining') to incentivize liquidity provision.",
      },
    ],
  },
  {
    slug: "defi-entering-first-liquidity-pool",
    title: "DeFi: Entering Your First Liquidity Pool Quiz",
    description: "Test your understanding of providing liquidity to DeFi protocols",
    moduleSlug: "defi-entering-first-liquidity-pool",
    questions: [
      {
        id: "q1",
        text: "What should you do BEFORE providing liquidity to a pool?",
        options: [
          { id: "a", text: "Immediately deposit all your available tokens" },
          { id: "b", text: "Research the protocol, understand impermanent loss, and assess token fundamentals" },
          { id: "c", text: "Take out a loan to maximize your position size" },
          { id: "d", text: "Wait for the market to crash to get better prices" },
        ],
        correctOptionId: "b",
        explanation:
          "Before providing liquidity, it's essential to research the protocol's security history, understand impermanent loss risks, and assess the fundamentals of both tokens in the pair. This due diligence helps minimize risks and ensures you're making an informed decision.",
      },
      {
        id: "q2",
        text: "What is the typical first step when providing liquidity to a pool?",
        options: [
          { id: "a", text: "Selling half your tokens" },
          { id: "b", text: "Creating a new liquidity pool" },
          { id: "c", text: "Ensuring you have balanced amounts of both tokens in the pair" },
          { id: "d", text: "Borrowing additional tokens to increase your position" },
        ],
        correctOptionId: "c",
        explanation:
          "The first step is typically ensuring you have balanced amounts of both tokens in the pair (e.g., equal value of ETH and USDC for an ETH-USDC pool). Most liquidity pools require you to provide both assets in the correct ratio, usually 50/50 by value.",
      },
      {
        id: "q3",
        text: "What is 'slippage tolerance' when adding liquidity?",
        options: [
          { id: "a", text: "The maximum percentage of impermanent loss you're willing to accept" },
          {
            id: "b",
            text: "The maximum percentage price movement you'll accept between transaction submission and execution",
          },
          { id: "c", text: "The percentage of your position that goes to the protocol as a fee" },
          { id: "d", text: "The minimum return you expect from providing liquidity" },
        ],
        correctOptionId: "b",
        explanation:
          "Slippage tolerance is the maximum percentage price movement you'll accept between when you submit your transaction and when it's executed. Setting an appropriate slippage tolerance helps protect you from price movements in volatile markets while ensuring your transaction can still complete.",
      },
      {
        id: "q4",
        text: "What do LP tokens represent?",
        options: [
          { id: "a", text: "Loyalty points that can be redeemed for discounts on trading fees" },
          { id: "b", text: "Long position tokens that increase in value when the market goes up" },
          {
            id: "c",
            text: "Tokens representing your share of the liquidity pool that can be redeemed for your underlying assets",
          },
          { id: "d", text: "Tokens that give you voting rights in the protocol's governance" },
        ],
        correctOptionId: "c",
        explanation:
          "LP (Liquidity Provider) tokens represent your proportional share of a liquidity pool. They're issued when you deposit assets and can be redeemed later to withdraw your share of the pool, including any accrued trading fees. They essentially serve as a receipt for your liquidity contribution.",
      },
      {
        id: "q5",
        text: "What is a common strategy to minimize impermanent loss when providing liquidity?",
        options: [
          { id: "a", text: "Always choose pools with the highest trading volume" },
          { id: "b", text: "Provide liquidity to stablecoin pairs or assets that tend to move together in price" },
          { id: "c", text: "Constantly swap between different pools to chase the highest yields" },
          { id: "d", text: "Use as much leverage as possible to maximize returns" },
        ],
        correctOptionId: "b",
        explanation:
          "Providing liquidity to stablecoin pairs (like USDC-USDT) or assets that tend to move together in price minimizes impermanent loss, which occurs when asset prices in the pool diverge. Since stablecoins are designed to maintain the same value, they experience minimal price divergence, reducing impermanent loss risk.",
      },
    ],
  },
  {
    slug: "defi-7-rules-liquidity-pool",
    title: "DeFi: 7 Rules to Enter a Liquidity Pool Quiz",
    description: "Test your understanding of the essential rules for safely providing liquidity",
    moduleSlug: "defi-7-rules-liquidity-pool",
    questions: [
      {
        id: "q1",
        text: "What is the first and most important rule when considering assets for a liquidity pool?",
        options: [
          { id: "a", text: "Choose assets with the highest APY" },
          { id: "b", text: "Would I want to hold each of these assets long-term?" },
          { id: "c", text: "Always choose stablecoin pairs" },
          { id: "d", text: "Pick the newest tokens for maximum growth" },
        ],
        correctOptionId: "b",
        explanation:
          "The most important rule is to choose assets you'd want to hold long-term, which reduces impermanent loss risk and prevents panic selling if prices drop.",
      },
      {
        id: "q2",
        text: "What is the minimum recommended Total Value Locked (TVL) for a liquidity pool?",
        options: [
          { id: "a", text: "$10,000" },
          { id: "b", text: "$100,000" },
          { id: "c", text: "$250,000" },
          { id: "d", text: "$1,000,000" },
        ],
        correctOptionId: "c",
        explanation:
          "The minimum recommended TVL is $250,000, though $1,000,000+ is preferred for additional security and stability.",
      },
      {
        id: "q3",
        text: "In an uptrend market, what type of asset correlation is generally preferred?",
        options: [
          { id: "a", text: "Highly correlated assets (close to 1.0)" },
          { id: "b", text: "Negatively correlated assets (close to -1.0)" },
          { id: "c", text: "Uncorrelated assets (close to 0)" },
          { id: "d", text: "Correlation doesn't matter in uptrends" },
        ],
        correctOptionId: "a",
        explanation:
          "In uptrends, highly correlated assets (close to 1.0) are preferred as they tend to move together, reducing impermanent loss while both assets appreciate.",
      },
      {
        id: "q4",
        text: "What relationship between volume and liquidity generally indicates better returns for liquidity providers?",
        options: [
          { id: "a", text: "Volume should be less than liquidity" },
          { id: "b", text: "Volume should equal liquidity" },
          { id: "c", text: "Volume should exceed liquidity" },
          { id: "d", text: "There is no relationship between volume and returns" },
        ],
        correctOptionId: "c",
        explanation:
          "Higher trading volume relative to liquidity generally means better returns for liquidity providers, as more trades generate more fees.",
      },
      {
        id: "q5",
        text: "Which blockchain consideration is most important when investing smaller amounts in liquidity pools?",
        options: [
          { id: "a", text: "Transaction speed" },
          { id: "b", text: "Gas fees" },
          { id: "c", text: "Network security" },
          { id: "d", text: "Number of available DEXs" },
        ],
        correctOptionId: "b",
        explanation:
          "Gas fees are particularly important for smaller investments, as high fees (like on Ethereum mainnet) can significantly impact profitability.",
      },
    ],
  },
]

export function getQuizzes(): Quiz[] {
  return quizzes
}

export function getQuizBySlug(slug: string): Quiz | undefined {
  return quizzes.find((quiz) => quiz.slug === slug)
}
