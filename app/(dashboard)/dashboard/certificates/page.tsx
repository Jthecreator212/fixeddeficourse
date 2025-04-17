import type { Metadata } from "next"
import { CertificatesList } from "@/components/user/certificates-list"

export const metadata: Metadata = {
  title: "Certificates | DeFi Master Course",
  description: "View your earned certificates",
}

export default function CertificatesPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Certificates</h1>
      </div>
      <CertificatesList />
    </div>
  )
}
