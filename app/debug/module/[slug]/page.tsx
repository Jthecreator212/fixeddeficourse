"use client"

import { useState, useEffect } from "react"
import * as AllModules from "@/lib/module-content"
import { DeFiAsABusiness } from "@/lib/module-content/defi-as-a-business"
import { DeFiLiquidityPools } from "@/lib/module-content/defi-liquidity-pools"
import { DeFiEnteringLiquidityPool } from "@/lib/module-content/defi-entering-first-liquidity-pool"
import { DeFi7RulesLiquidityPool } from "@/lib/module-content/defi-7-rules-liquidity-pool"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"

const modules = {
  "defi-as-a-business": DeFiAsABusiness,
  "defi-liquidity-pools": DeFiLiquidityPools,
  "defi-entering-first-liquidity-pool": DeFiEnteringLiquidityPool,
  "defi-7-rules-liquidity-pool": DeFi7RulesLiquidityPool
}

export default function DirectModulePage({ params }: { params: { slug: string } }) {
  const [activeTab, setActiveTab] = useState("theory")
  const [loading, setLoading] = useState(true)
  const [moduleComponent, setModuleComponent] = useState<any>(null)
  const [error, setError] = useState(false)
  const [errorDetails, setErrorDetails] = useState("")
  
  useEffect(() => {
    async function loadModule() {
      try {
        const slug = params.slug
        console.log("Debug page: Loading module for slug:", slug)
        
        // Try direct lookup by slug
        const component = modules[slug as keyof typeof modules]
        
        if (component) {
          console.log("Found module via direct lookup")
          setModuleComponent(component)
        } else {
          // If not found, try converting slug to PascalCase
          const pascalCaseKey = slug
            .split('-')
            .map(part => part.charAt(0).toUpperCase() + part.slice(1))
            .join('')
          
          // Try with DeFi prefix
          const possibleKeys = [
            pascalCaseKey,
            `DeFi${pascalCaseKey}`,
            pascalCaseKey.replace('Defi', 'DeFi')
          ]
          
          let found = false
          for (const key of possibleKeys) {
            const directComponent = (AllModules as any)[key]
            if (directComponent) {
              console.log(`Found module via PascalCase key: ${key}`)
              setModuleComponent(directComponent)
              found = true
              break
            }
          }
          
          if (!found) {
            console.error("Module not found for slug:", slug)
            setError(true)
            setErrorDetails(`Failed to find module for slug: ${slug}`)
          }
        }
      } catch (err) {
        console.error("Error loading module:", err)
        setError(true)
        setErrorDetails(String(err))
      } finally {
        setLoading(false)
      }
    }
    
    loadModule()
  }, [params.slug])
  
  if (loading) {
    return (
      <div className="p-6 text-center">
        <p>Loading module content...</p>
      </div>
    )
  }
  
  if (error || !moduleComponent) {
    return (
      <div className="space-y-4">
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Module Content Not Found</AlertTitle>
          <AlertDescription>
            Failed to load module content directly.
          </AlertDescription>
        </Alert>
        
        <div className="p-4 border rounded-md">
          <h3 className="font-medium mb-2">Debug Details:</h3>
          <p className="text-sm">{errorDetails}</p>
          <p className="mt-2 text-sm">Slug: {params.slug}</p>
          <p className="mt-2 text-sm">Available direct modules: {Object.keys(modules).join(", ")}</p>
        </div>
      </div>
    )
  }
  
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Debug: Direct Module View</h1>
        <div className="text-sm px-2 py-1 bg-green-100 text-green-800 rounded">
          Slug: {params.slug}
        </div>
      </div>
      
      <Tabs defaultValue="theory" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="theory">Theory</TabsTrigger>
          <TabsTrigger value="video">Videos</TabsTrigger>
          <TabsTrigger value="quiz">Quick Quiz</TabsTrigger>
        </TabsList>
        <TabsContent value="theory" className="mt-0">
          <div className="rounded-lg border p-6">
            <moduleComponent.renderTheory />
          </div>
        </TabsContent>
        <TabsContent value="video" className="mt-0">
          <div className="rounded-lg border p-6">
            <h2 className="text-2xl font-bold mb-4">{moduleComponent.video.title}</h2>
            <p className="mb-6 text-muted-foreground">{moduleComponent.video.description}</p>
            <div className="aspect-video overflow-hidden rounded-lg">
              <iframe
                src={moduleComponent.video.url}
                title={moduleComponent.video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="quiz" className="mt-0">
          <div className="rounded-lg border p-6">
            <moduleComponent.renderQuiz />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 