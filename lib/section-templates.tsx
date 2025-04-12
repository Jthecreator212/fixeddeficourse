import type { TheorySection } from "./module-types"

/**
 * Library of reusable section templates with default content
 * These can be imported and used in any module file
 */

/**
 * Advantages and Disadvantages Section Template
 */
export const advantagesDisadvantagesSection: TheorySection = {
  type: "custom",
  title: "Advantages and Disadvantages",
  content: (
    <div>
      <p>
        Understanding the advantages and disadvantages is crucial for evaluating this technology for specific use cases:
      </p>

      <h4>Advantages</h4>
      <ul>
        <li>
          <strong>Decentralization:</strong> No single entity controls the network, reducing the risk of central points
          of failure
        </li>
        <li>
          <strong>Transparency:</strong> All transactions are visible to network participants, creating an auditable
          trail
        </li>
        <li>
          <strong>Immutability:</strong> Once data is recorded, it cannot be altered or deleted without consensus
        </li>
        <li>
          <strong>Security:</strong> Cryptographic techniques make the network resistant to attacks and fraud
        </li>
        <li>
          <strong>Reduced Intermediaries:</strong> Direct peer-to-peer transactions eliminate the need for trusted third
          parties
        </li>
        <li>
          <strong>Programmability:</strong> Smart contracts enable automated, trustless execution of agreements
        </li>
        <li>
          <strong>Global Accessibility:</strong> Anyone with internet access can participate, regardless of location
        </li>
      </ul>

      <h4>Disadvantages</h4>
      <ul>
        <li>
          <strong>Scalability Issues:</strong> Many systems struggle with transaction throughput and speed
        </li>
        <li>
          <strong>Energy Consumption:</strong> Some consensus mechanisms require significant computational power and
          electricity
        </li>
        <li>
          <strong>Complexity:</strong> The technology has a steep learning curve for users and developers
        </li>
        <li>
          <strong>Regulatory Uncertainty:</strong> Legal frameworks are still evolving in many jurisdictions
        </li>
        <li>
          <strong>Irreversibility:</strong> Transactions cannot be reversed if mistakes are made
        </li>
        <li>
          <strong>Storage Limitations:</strong> Storing large amounts of data directly on-chain is inefficient and
          costly
        </li>
        <li>
          <strong>Public Visibility:</strong> The transparency may be undesirable for sensitive information
        </li>
      </ul>
    </div>
  ),
}

/**
 * Use Cases Section Template
 */
export const useCasesSection: TheorySection = {
  type: "custom",
  title: "Common Use Cases",
  content: (
    <div>
      <p>This technology can be applied to a wide range of industries and scenarios:</p>

      <ul>
        <li>
          <strong>Financial Services:</strong> Payments, remittances, asset tokenization, lending, and trading without
          intermediaries
        </li>
        <li>
          <strong>Supply Chain Management:</strong> Tracking goods from origin to consumer with an unchangeable record,
          ensuring transparency and preventing fraud
        </li>
        <li>
          <strong>Healthcare:</strong> Secure sharing of patient records, drug traceability, and clinical trial
          management
        </li>
        <li>
          <strong>Digital Identity:</strong> Self-sovereign identity solutions that give users control over their
          personal data
        </li>
        <li>
          <strong>Voting Systems:</strong> Transparent, verifiable election systems that prevent fraud and increase
          trust
        </li>
        <li>
          <strong>Intellectual Property:</strong> Proof of creation, ownership, and licensing of creative works
        </li>
        <li>
          <strong>Real Estate:</strong> Property registration, title transfers, and fractional ownership
        </li>
      </ul>
    </div>
  ),
}

/**
 * Comparison Section Template
 */
export const comparisonSection: TheorySection = {
  type: "custom",
  title: "Comparison with Traditional Systems",
  content: (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-300 dark:border-gray-700">
            <th className="py-2 px-4 text-left">Feature</th>
            <th className="py-2 px-4 text-left">Traditional System</th>
            <th className="py-2 px-4 text-left">Blockchain/DeFi System</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200 dark:border-gray-800">
            <td className="py-2 px-4 font-medium">Control</td>
            <td className="py-2 px-4">Centralized (single authority)</td>
            <td className="py-2 px-4">Decentralized (distributed network)</td>
          </tr>
          <tr className="border-b border-gray-200 dark:border-gray-800">
            <td className="py-2 px-4 font-medium">Transparency</td>
            <td className="py-2 px-4">Limited, often opaque</td>
            <td className="py-2 px-4">High, transactions visible to all</td>
          </tr>
          <tr className="border-b border-gray-200 dark:border-gray-800">
            <td className="py-2 px-4 font-medium">Speed</td>
            <td className="py-2 px-4">Variable (often days for settlement)</td>
            <td className="py-2 px-4">Minutes to seconds (depending on protocol)</td>
          </tr>
          <tr className="border-b border-gray-200 dark:border-gray-800">
            <td className="py-2 px-4 font-medium">Cost</td>
            <td className="py-2 px-4">High fees for intermediaries</td>
            <td className="py-2 px-4">Lower fees (varies by network congestion)</td>
          </tr>
          <tr className="border-b border-gray-200 dark:border-gray-800">
            <td className="py-2 px-4 font-medium">Accessibility</td>
            <td className="py-2 px-4">Restricted by geography, status</td>
            <td className="py-2 px-4">Global, permissionless access</td>
          </tr>
          <tr className="border-b border-gray-200 dark:border-gray-800">
            <td className="py-2 px-4 font-medium">Security Model</td>
            <td className="py-2 px-4">Trust in central authority</td>
            <td className="py-2 px-4">Cryptographic verification</td>
          </tr>
          <tr className="border-b border-gray-200 dark:border-gray-800">
            <td className="py-2 px-4 font-medium">Programmability</td>
            <td className="py-2 px-4">Limited, requires integration</td>
            <td className="py-2 px-4">High via smart contracts</td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
}

/**
 * Technical Details Section Template
 */
export const technicalDetailsSection: TheorySection = {
  type: "custom",
  title: "Technical Details",
  content: (
    <div>
      <p>The technical implementation involves several key components working together:</p>

      <h4>Core Components</h4>
      <ul>
        <li>
          <strong>Distributed Ledger:</strong> A database that is shared, replicated, and synchronized among network
          participants
        </li>
        <li>
          <strong>Consensus Algorithm:</strong> The mechanism by which network participants agree on the state of the
          ledger
        </li>
        <li>
          <strong>Cryptographic Primitives:</strong> Hash functions, digital signatures, and public-key cryptography
          that secure the system
        </li>
        <li>
          <strong>Network Protocol:</strong> Rules governing how nodes communicate and share information
        </li>
        <li>
          <strong>State Machine:</strong> The logic that determines valid state transitions in the system
        </li>
      </ul>

      <h4>Implementation Considerations</h4>
      <ul>
        <li>
          <strong>Throughput vs. Decentralization:</strong> Trade-offs between transaction capacity and network
          distribution
        </li>
        <li>
          <strong>Data Storage:</strong> On-chain vs. off-chain storage strategies for different types of data
        </li>
        <li>
          <strong>Privacy Mechanisms:</strong> Techniques like zero-knowledge proofs, ring signatures, or confidential
          transactions
        </li>
        <li>
          <strong>Governance:</strong> On-chain or off-chain decision-making processes for protocol upgrades
        </li>
        <li>
          <strong>Interoperability:</strong> Standards and protocols for communication between different systems
        </li>
      </ul>
    </div>
  ),
}

/**
 * Historical Context Section Template
 */
export const historicalContextSection: TheorySection = {
  type: "custom",
  title: "Historical Context and Evolution",
  content: (
    <div>
      <p>Understanding the historical development provides important context for current implementations:</p>

      <h4>Key Milestones</h4>
      <ul>
        <li>
          <strong>2008:</strong> Bitcoin whitepaper published by Satoshi Nakamoto, introducing the first blockchain
        </li>
        <li>
          <strong>2009:</strong> Bitcoin network launched, creating the first working implementation
        </li>
        <li>
          <strong>2013:</strong> Ethereum whitepaper published by Vitalik Buterin, proposing a programmable blockchain
        </li>
        <li>
          <strong>2015:</strong> Ethereum launched, enabling smart contracts and decentralized applications
        </li>
        <li>
          <strong>2017:</strong> Initial Coin Offering (ICO) boom and first major wave of blockchain adoption
        </li>
        <li>
          <strong>2020:</strong> DeFi summer, with explosive growth in decentralized finance applications
        </li>
        <li>
          <strong>2022:</strong> Ethereum's transition to Proof of Stake with The Merge
        </li>
      </ul>

      <h4>Evolution of Concepts</h4>
      <p>The technology has evolved through several generations:</p>
      <ul>
        <li>
          <strong>First Generation:</strong> Basic cryptocurrency transfers (Bitcoin)
        </li>
        <li>
          <strong>Second Generation:</strong> Programmable smart contracts (Ethereum)
        </li>
        <li>
          <strong>Third Generation:</strong> Scalability, interoperability, and sustainability improvements (Solana,
          Polkadot, Cardano)
        </li>
        <li>
          <strong>Fourth Generation:</strong> Application-specific blockchains, modular designs, and advanced privacy
          features (Cosmos, zkSync, StarkNet)
        </li>
      </ul>
    </div>
  ),
}

/**
 * Security Considerations Section Template
 */
export const securityConsiderationsSection: TheorySection = {
  type: "custom",
  title: "Security Considerations",
  content: (
    <div>
      <p>Security is a critical aspect that requires careful consideration:</p>

      <h4>Common Security Risks</h4>
      <ul>
        <li>
          <strong>51% Attacks:</strong> When a single entity controls the majority of network power, potentially
          allowing double-spending
        </li>
        <li>
          <strong>Smart Contract Vulnerabilities:</strong> Coding errors that can lead to exploits and loss of funds
        </li>
        <li>
          <strong>Private Key Management:</strong> Loss or theft of private keys resulting in permanent loss of access
        </li>
        <li>
          <strong>Oracle Problems:</strong> Manipulation of external data sources that smart contracts rely on
        </li>
        <li>
          <strong>Phishing and Social Engineering:</strong> Attacks targeting users rather than the technology itself
        </li>
        <li>
          <strong>Flash Loan Attacks:</strong> Exploiting price discrepancies using uncollateralized loans
        </li>
        <li>
          <strong>Quantum Computing Threats:</strong> Future risks to current cryptographic methods
        </li>
      </ul>

      <h4>Security Best Practices</h4>
      <ul>
        <li>
          <strong>Code Audits:</strong> Third-party review of smart contract code before deployment
        </li>
        <li>
          <strong>Formal Verification:</strong> Mathematical proof of code correctness
        </li>
        <li>
          <strong>Bug Bounties:</strong> Incentives for ethical hackers to find and report vulnerabilities
        </li>
        <li>
          <strong>Multi-signature Wallets:</strong> Requiring multiple approvals for transactions
        </li>
        <li>
          <strong>Hardware Security Modules:</strong> Specialized devices for secure key storage
        </li>
        <li>
          <strong>Timelocks and Circuit Breakers:</strong> Mechanisms to pause operations during suspicious activity
        </li>
      </ul>
    </div>
  ),
}

/**
 * Regulatory Landscape Section Template
 */
export const regulatoryLandscapeSection: TheorySection = {
  type: "custom",
  title: "Regulatory Landscape",
  content: (
    <div>
      <p>The regulatory environment is evolving and varies significantly by jurisdiction:</p>

      <h4>Key Regulatory Considerations</h4>
      <ul>
        <li>
          <strong>Securities Laws:</strong> Whether tokens are classified as securities and subject to related
          regulations
        </li>
        <li>
          <strong>Anti-Money Laundering (AML):</strong> Requirements for identity verification and transaction
          monitoring
        </li>
        <li>
          <strong>Know Your Customer (KYC):</strong> Procedures to verify the identity of users
        </li>
        <li>
          <strong>Tax Implications:</strong> Treatment of crypto assets and transactions for tax purposes
        </li>
        <li>
          <strong>Consumer Protection:</strong> Safeguards for users against fraud and misleading practices
        </li>
        <li>
          <strong>Data Privacy:</strong> Intersection with data protection regulations like GDPR
        </li>
      </ul>

      <h4>Regional Approaches</h4>
      <p>Regulatory approaches vary widely across different regions:</p>
      <ul>
        <li>
          <strong>United States:</strong> Multiple agencies with overlapping jurisdiction (SEC, CFTC, FinCEN)
        </li>
        <li>
          <strong>European Union:</strong> Markets in Crypto-Assets (MiCA) regulation providing a comprehensive
          framework
        </li>
        <li>
          <strong>Singapore:</strong> Progressive approach with clear licensing requirements
        </li>
        <li>
          <strong>Japan:</strong> Early adopter of crypto regulation with licensing for exchanges
        </li>
        <li>
          <strong>China:</strong> Restrictive approach with bans on various crypto activities
        </li>
        <li>
          <strong>El Salvador:</strong> Adoption of Bitcoin as legal tender
        </li>
      </ul>
      <p>
        <em>
          Note: Regulatory information changes frequently. Always consult with legal experts for the most current
          guidance.
        </em>
      </p>
    </div>
  ),
}

/**
 * Future Trends Section Template
 */
export const futureTrendsSection: TheorySection = {
  type: "custom",
  title: "Future Trends and Developments",
  content: (
    <div>
      <p>Several emerging trends are likely to shape the future of this technology:</p>

      <h4>Technical Innovations</h4>
      <ul>
        <li>
          <strong>Zero-Knowledge Proofs:</strong> Enabling privacy while maintaining verification capabilities
        </li>
        <li>
          <strong>Sharding:</strong> Partitioning the network to improve scalability
        </li>
        <li>
          <strong>Layer 2 Solutions:</strong> Off-chain scaling solutions that maintain security guarantees
        </li>
        <li>
          <strong>Cross-Chain Interoperability:</strong> Seamless communication between different blockchain networks
        </li>
        <li>
          <strong>Quantum-Resistant Cryptography:</strong> New algorithms to withstand quantum computing attacks
        </li>
      </ul>

      <h4>Industry and Adoption Trends</h4>
      <ul>
        <li>
          <strong>Institutional Adoption:</strong> Increasing integration by traditional financial institutions
        </li>
        <li>
          <strong>Central Bank Digital Currencies (CBDCs):</strong> Government-issued digital currencies
        </li>
        <li>
          <strong>Decentralized Identity:</strong> Self-sovereign identity solutions gaining mainstream adoption
        </li>
        <li>
          <strong>Tokenization of Real-World Assets:</strong> Representing physical assets on-chain
        </li>
        <li>
          <strong>DAO Governance:</strong> Evolution of decentralized autonomous organizations for coordination
        </li>
        <li>
          <strong>Regenerative Finance (ReFi):</strong> Using DeFi mechanisms to fund public goods and environmental
          initiatives
        </li>
      </ul>
    </div>
  ),
}
