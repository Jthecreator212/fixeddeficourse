import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | DeFi Course",
  description: "Privacy Policy for the DeFi Course platform",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container max-w-4xl py-12">
      <h1 className="mb-8 text-4xl font-bold">Privacy Policy</h1>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4 text-2xl font-semibold">1. Introduction</h2>
          <p className="mb-3 text-muted-foreground">
            Welcome to the DeFi Course platform. We respect your privacy and are committed to protecting your personal
            data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
            use our platform.
          </p>
          <p className="text-muted-foreground">
            Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please
            do not access the platform.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">2. Information We Collect</h2>

          <h3 className="mb-2 text-xl font-medium">2.1 Personal Information</h3>
          <p className="mb-3 text-muted-foreground">
            We may collect personal information that you voluntarily provide when using our platform, including but not
            limited to:
          </p>
          <ul className="mb-4 ml-6 list-disc text-muted-foreground">
            <li>Name and email address when you register for an account</li>
            <li>Profile information such as your photo, bio, and educational background</li>
            <li>Course progress and completion data</li>
            <li>Payment and billing information when purchasing premium content</li>
            <li>Communications with our support team</li>
          </ul>

          <h3 className="mb-2 text-xl font-medium">2.2 Automatically Collected Information</h3>
          <p className="mb-3 text-muted-foreground">
            When you access our platform, we may automatically collect certain information, including:
          </p>
          <ul className="ml-6 list-disc text-muted-foreground">
            <li>Device information (browser type, operating system, device type)</li>
            <li>IP address and general location data</li>
            <li>Usage data (pages visited, time spent, features used)</li>
            <li>Performance data and error reports</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">3. How We Use Your Information</h2>
          <p className="mb-3 text-muted-foreground">
            We use the information we collect for various purposes, including:
          </p>
          <ul className="ml-6 list-disc text-muted-foreground">
            <li>Providing and maintaining our educational services</li>
            <li>Tracking your progress through courses and modules</li>
            <li>Personalizing your learning experience</li>
            <li>Processing transactions and managing your account</li>
            <li>Improving our platform and developing new features</li>
            <li>Communicating with you about updates, new courses, and relevant DeFi developments</li>
            <li>Responding to your inquiries and support requests</li>
            <li>Ensuring the security and integrity of our platform</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">4. Data Storage and Security</h2>
          <p className="mb-3 text-muted-foreground">
            We implement appropriate technical and organizational measures to protect your personal information against
            unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the
            Internet or electronic storage is 100% secure.
          </p>
          <p className="mb-3 text-muted-foreground">
            Your data is stored on secure servers and we retain your information only for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
          </p>
          <p className="text-muted-foreground">
            If you are located in the European Economic Area (EEA), please note that your information may be transferred
            outside of the EEA, including to countries that may not have data protection laws considered adequate by the
            European Commission.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">5. Blockchain and Wallet Interactions</h2>
          <p className="mb-3 text-muted-foreground">
            Our DeFi educational platform may include features that interact with blockchain networks for demonstration
            purposes. Please note:
          </p>
          <ul className="ml-6 list-disc text-muted-foreground">
            <li>Any wallet addresses you connect or transactions you make are recorded on public blockchains</li>
            <li>We do not store your private keys or seed phrases</li>
            <li>Practice transactions in our educational environment are clearly labeled</li>
            <li>We recommend using test networks and separate wallets for educational purposes</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">6. Cookies and Tracking Technologies</h2>
          <p className="mb-3 text-muted-foreground">
            We use cookies and similar tracking technologies to track activity on our platform and hold certain
            information. Cookies are files with small amounts of data that may include an anonymous unique identifier.
          </p>
          <p className="mb-3 text-muted-foreground">We use the following types of cookies:</p>
          <ul className="ml-6 list-disc text-muted-foreground">
            <li>
              <strong>Essential cookies:</strong> Required for the platform to function properly
            </li>
            <li>
              <strong>Functional cookies:</strong> Remember your preferences and settings
            </li>
            <li>
              <strong>Analytics cookies:</strong> Help us understand how you use our platform
            </li>
            <li>
              <strong>Marketing cookies:</strong> Used to deliver relevant content and track the effectiveness of our
              marketing campaigns
            </li>
          </ul>
          <p className="text-muted-foreground">
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if
            you do not accept cookies, you may not be able to use some portions of our platform.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">7. Third-Party Services</h2>
          <p className="mb-3 text-muted-foreground">
            Our platform may include links to third-party websites, plugins, and applications. Clicking on those links
            or enabling those connections may allow third parties to collect or share data about you. We do not control
            these third-party services and are not responsible for their privacy statements.
          </p>
          <p className="text-muted-foreground">We may use third-party service providers to:</p>
          <ul className="ml-6 list-disc text-muted-foreground">
            <li>Host our platform and store data</li>
            <li>Process payments</li>
            <li>Analyze platform usage</li>
            <li>Send communications</li>
            <li>Provide educational content</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">8. Your Privacy Rights</h2>
          <p className="mb-3 text-muted-foreground">
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="ml-6 list-disc text-muted-foreground">
            <li>The right to access the personal information we have about you</li>
            <li>The right to request correction of inaccurate information</li>
            <li>The right to request deletion of your personal information</li>
            <li>The right to restrict or object to processing of your personal information</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent at any time, where processing is based on consent</li>
          </ul>
          <p className="text-muted-foreground">
            To exercise these rights, please contact us using the information provided in the "Contact Us" section.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">9. Children's Privacy</h2>
          <p className="text-muted-foreground">
            Our platform is not intended for children under the age of 18. We do not knowingly collect personal
            information from children under 18. If you are a parent or guardian and believe your child has provided us
            with personal information, please contact us, and we will take steps to remove that information from our
            systems.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">10. Changes to This Privacy Policy</h2>
          <p className="text-muted-foreground">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy
            Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on
            this page.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">11. Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <div className="mt-2 text-muted-foreground">
            <p>Email: privacy@deficourse.com</p>
            <p>Address: 123 Blockchain Street, Crypto City, CC 12345</p>
          </div>
        </section>

        <div className="mt-8 text-sm text-muted-foreground">
          <p>Last Updated: March 28, 2025</p>
        </div>
      </div>
    </div>
  )
}
