import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | DeFi Course",
  description: "Terms of Service for the DeFi Course platform",
}

export default function TermsPage() {
  return (
    <div className="container max-w-4xl py-12">
      <h1 className="mb-8 text-4xl font-bold">Terms of Service</h1>

      <div className="space-y-8 text-muted-foreground">
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">1. Introduction</h2>
          <p className="mb-3">
            Welcome to DeFi Course. These Terms of Service govern your use of our website, educational content, and
            services. By accessing or using our platform, you agree to be bound by these Terms.
          </p>
          <p>
            Please read these Terms carefully before using our platform. If you do not agree with any part of these
            Terms, you may not access or use our services.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">2. Definitions</h2>
          <p className="mb-3">
            <strong>"Platform"</strong> refers to the DeFi Course website, applications, and services.
          </p>
          <p className="mb-3">
            <strong>"Content"</strong> refers to all educational materials, courses, videos, quizzes, and other
            resources available on our Platform.
          </p>
          <p className="mb-3">
            <strong>"User"</strong> refers to any individual who accesses or uses our Platform.
          </p>
          <p>
            <strong>"DeFi"</strong> refers to Decentralized Finance, the subject matter of our educational content.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">3. Account Registration</h2>
          <p className="mb-3">
            To access certain features of our Platform, you may need to create an account. You are responsible for
            maintaining the confidentiality of your account credentials and for all activities that occur under your
            account.
          </p>
          <p className="mb-3">
            You agree to provide accurate and complete information when creating an account and to update your
            information as necessary to keep it accurate and current.
          </p>
          <p>
            We reserve the right to suspend or terminate your account if any information provided is found to be
            inaccurate, incomplete, or violates these Terms.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">4. Educational Content</h2>
          <p className="mb-3">
            Our Platform provides educational content about DeFi and blockchain technology. This content is for
            informational and educational purposes only and should not be construed as financial advice.
          </p>
          <p className="mb-3">
            We strive to ensure the accuracy and quality of our Content, but we do not guarantee that all information is
            complete, accurate, or up-to-date. The DeFi ecosystem evolves rapidly, and information may become outdated.
          </p>
          <p>
            You acknowledge that investing in cryptocurrencies and participating in DeFi protocols involves significant
            risks, including but not limited to price volatility, smart contract vulnerabilities, and regulatory
            uncertainty.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">5. Intellectual Property</h2>
          <p className="mb-3">
            All Content on our Platform, including but not limited to text, graphics, logos, images, audio clips,
            digital downloads, and data compilations, is the property of DeFi Course or its content suppliers and is
            protected by international copyright laws.
          </p>
          <p className="mb-3">
            You may access and use our Content for personal, non-commercial purposes only. You may not modify, copy,
            distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer,
            or sell any Content obtained from our Platform without our prior written consent.
          </p>
          <p>Any unauthorized use of our Content may violate copyright, trademark, and other laws.</p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">6. User Conduct</h2>
          <p className="mb-3">You agree not to use our Platform to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-3">
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe upon the rights of others</li>
            <li>Distribute malware or other harmful code</li>
            <li>Interfere with or disrupt the integrity or performance of our Platform</li>
            <li>Attempt to gain unauthorized access to our systems or user accounts</li>
            <li>Collect or store personal data about other users without their consent</li>
            <li>Engage in any activity that could harm our reputation or business interests</li>
          </ul>
          <p>
            We reserve the right to terminate or restrict your access to our Platform if, in our sole discretion, you
            violate any of these Terms.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">7. Disclaimers</h2>
          <p className="mb-3">
            OUR PLATFORM AND CONTENT ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY
            KIND, EITHER EXPRESS OR IMPLIED.
          </p>
          <p className="mb-3">
            WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR
            A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>
          <p className="mb-3">
            WE DO NOT WARRANT THAT OUR PLATFORM WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR
            THAT OUR PLATFORM OR THE SERVERS THAT MAKE IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
          </p>
          <p>YOU ACKNOWLEDGE THAT YOUR USE OF OUR PLATFORM AND CONTENT IS AT YOUR SOLE RISK.</p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">8. Limitation of Liability</h2>
          <p className="mb-3">
            TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
            SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY
            OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-3">
            <li>YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE OUR PLATFORM</li>
            <li>ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON OUR PLATFORM</li>
            <li>ANY CONTENT OBTAINED FROM OUR PLATFORM</li>
            <li>UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT</li>
          </ul>
          <p>
            IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS EXCEED THE AMOUNT PAID BY YOU, IF ANY, FOR
            ACCESSING OUR PLATFORM.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">9. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless DeFi Course, its officers, directors, employees, agents,
            and affiliates from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees
            (including reasonable attorneys' fees) arising from or relating to your violation of these Terms or your use
            of our Platform.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">10. Modifications</h2>
          <p className="mb-3">
            We reserve the right to modify these Terms at any time. All modifications will be effective immediately upon
            posting on our Platform. Your continued use of our Platform following the posting of modified Terms
            constitutes your acceptance of those modifications.
          </p>
          <p>
            We will make reasonable efforts to notify you of significant changes to these Terms, but you are responsible
            for regularly reviewing these Terms to stay informed of any updates.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">11. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which DeFi
            Course is established, without regard to its conflict of law provisions. Any dispute arising from or
            relating to these Terms shall be subject to the exclusive jurisdiction of the courts in that jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">12. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at
            <a href="mailto:support@deficourse.com" className="text-primary hover:underline ml-1">
              support@deficourse.com
            </a>
            .
          </p>
        </section>

        <div className="pt-6 border-t">
          <p className="text-sm">Last updated: March 28, 2025</p>
        </div>
      </div>
    </div>
  )
}
