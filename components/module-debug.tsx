"use client"

import { useState } from "react"
import { DeFiAsABusiness } from "@/lib/module-content/defi-as-a-business"
import { DeFiLiquidityPools } from "@/lib/module-content/defi-liquidity-pools"
import { DeFiEnteringLiquidityPool } from "@/lib/module-content/defi-entering-first-liquidity-pool"
import { DeFi7RulesLiquidityPool } from "@/lib/module-content/defi-7-rules-liquidity-pool"
import { getModuleContent } from "@/lib/module-content"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ModuleDebug() {
  const [testSlug, setTestSlug] = useState("defi-as-a-business")
  const [testResult, setTestResult] = useState<any>(null)
  const [testError, setTestError] = useState<string | null>(null)

  const testModules = [
    { name: "DeFiAsABusiness", component: DeFiAsABusiness, slug: "defi-as-a-business" },
    { name: "DeFiLiquidityPools", component: DeFiLiquidityPools, slug: "defi-liquidity-pools" },
    { name: "DeFiEnteringLiquidityPool", component: DeFiEnteringLiquidityPool, slug: "defi-entering-first-liquidity-pool" },
    { name: "DeFi7RulesLiquidityPool", component: DeFi7RulesLiquidityPool, slug: "defi-7-rules-liquidity-pool" }
  ]

  const testModuleLoader = () => {
    try {
      setTestError(null)
      const module = getModuleContent(testSlug)
      setTestResult({
        found: !!module,
        keys: module ? Object.keys(module) : [],
        hasRenderTheory: module && typeof module.renderTheory === 'function',
        hasRenderQuiz: module && typeof module.renderQuiz === 'function',
        hasVideo: module && module.video && typeof module.video === 'object'
      })
    } catch (error) {
      setTestError(String(error))
      setTestResult(null)
    }
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Module Import Test</CardTitle>
          <CardDescription>Test direct module imports</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {testModules.map((module) => (
              <li key={module.name} className="flex items-center justify-between p-2 border rounded-md">
                <div>
                  <span className="font-medium">{module.name}</span>
                  <span className="ml-2 text-sm text-gray-500">({module.slug})</span>
                </div>
                <span>{module.component ? '✅ Loaded' : '❌ Failed'}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Module Resolver Test</CardTitle>
          <CardDescription>Test the getModuleContent function with any slug</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2 mb-4">
            <Input 
              value={testSlug} 
              onChange={(e) => setTestSlug(e.target.value)} 
              placeholder="Enter module slug to test"
            />
            <Button onClick={testModuleLoader}>Test</Button>
          </div>

          {testResult && (
            <div className="p-4 border rounded-md">
              <h3 className="text-lg font-medium mb-2">Result:</h3>
              <div className="space-y-1 text-sm">
                <p><strong>Found:</strong> {testResult.found ? 'Yes' : 'No'}</p>
                {testResult.found && (
                  <>
                    <p><strong>Available Methods:</strong> {testResult.keys.join(', ')}</p>
                    <p><strong>renderTheory:</strong> {testResult.hasRenderTheory ? 'Available' : 'Missing'}</p>
                    <p><strong>renderQuiz:</strong> {testResult.hasRenderQuiz ? 'Available' : 'Missing'}</p>
                    <p><strong>video:</strong> {testResult.hasVideo ? 'Available' : 'Missing'}</p>
                  </>
                )}
              </div>
            </div>
          )}

          {testError && (
            <div className="p-4 border border-red-200 bg-red-50 rounded-md text-sm">
              <h3 className="font-medium text-red-700 mb-1">Error:</h3>
              <p className="text-red-600">{testError}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
} 