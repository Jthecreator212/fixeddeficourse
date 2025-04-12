import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, XCircle } from "lucide-react"

// Benefits and Risks Section Component
export interface BenefitsRisksSectionProps {
  benefits: {
    title: string
    items: {
      label: string
      description: string
    }[]
  }
  risks: {
    title: string
    items: {
      label: string
      description: string
    }[]
  }
}

export function BenefitsRisksSection({ benefits, risks }: BenefitsRisksSectionProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="text-green-600 flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            {benefits.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {benefits.items.map((item, index) => (
              <li key={index} className="space-y-1">
                <h4 className="font-medium text-green-600">{item.label}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-red-600 flex items-center gap-2">
            <XCircle className="h-5 w-5" />
            {risks.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {risks.items.map((item, index) => (
              <li key={index} className="space-y-1">
                <h4 className="font-medium text-red-600">{item.label}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

// Use Case Item Component
export interface UseCaseItemProps {
  title: string
  description: string
}

export function UseCaseItem({ title, description }: UseCaseItemProps) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      <Separator className="mt-4" />
    </div>
  )
}

// Module Template Component
export interface ModuleTemplateProps {
  title: string
  description: string
  children: React.ReactNode
}

export function ModuleTemplate({ title, description, children }: ModuleTemplateProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <Separator />
      <div>{children}</div>
    </div>
  )
}
