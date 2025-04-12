"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { InfoIcon, ArrowRightLeft, BarChart3, Percent, Calculator, AlertTriangle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function DeFiCalculator() {
  // Swap Calculator State
  const [token1Amount, setToken1Amount] = useState<string>("")
  const [token1Price, setToken1Price] = useState<string>("")
  const [token2Amount, setToken2Amount] = useState<string>("")
  const [token2Price, setToken2Price] = useState<string>("")
  const [results, setResults] = useState<{
    ratio: string
    totalValue: string
    token1Value: string
    token2Value: string
  } | null>(null)

  // Calculate swap amounts
  const calculateSwap = () => {
    if (!token1Amount || !token1Price || !token2Amount || !token2Price) return

    const amount1 = Number.parseFloat(token1Amount)
    const price1 = Number.parseFloat(token1Price)
    const amount2 = Number.parseFloat(token2Amount)
    const price2 = Number.parseFloat(token2Price)

    const value1 = amount1 * price1
    const value2 = amount2 * price2
    const totalValue = value1 + value2
    const ratio = ((value1 / totalValue) * 100).toFixed(2)

    setResults({
      ratio: ratio,
      totalValue: totalValue.toFixed(2),
      token1Value: value1.toFixed(2),
      token2Value: value2.toFixed(2),
    })
  }

  // Impermanent Loss Calculator State
  const [initialPrice, setInitialPrice] = useState<string>("1")
  const [newPrice, setNewPrice] = useState<string>("1")
  const [ammType, setAmmType] = useState<string>("constant-product")
  const [ilResults, setIlResults] = useState<{
    impermanentLoss: string
    hodlValue: string
    lpValue: string
    difference: string
    tokenRatio: string
    priceRatio: string
  } | null>(null)
  const [priceChangePercent, setPriceChangePercent] = useState<number>(0)

  // Update price change percent when prices change
  useEffect(() => {
    if (initialPrice && newPrice) {
      const initial = Number.parseFloat(initialPrice)
      const current = Number.parseFloat(newPrice)
      if (initial > 0 && current > 0) {
        const percentChange = ((current - initial) / initial) * 100
        setPriceChangePercent(percentChange)
      }
    }
  }, [initialPrice, newPrice])

  // Update new price when price change percent changes
  const handleSliderChange = (value: number[]) => {
    const percentChange = value[0]
    setPriceChangePercent(percentChange)

    if (initialPrice) {
      const initial = Number.parseFloat(initialPrice)
      if (initial > 0) {
        const newPriceValue = initial * (1 + percentChange / 100)
        setNewPrice(newPriceValue.toFixed(4))
      }
    }
  }

  // Calculate impermanent loss
  const calculateIL = () => {
    if (!initialPrice || !newPrice) return

    const p0 = Number.parseFloat(initialPrice)
    const p1 = Number.parseFloat(newPrice)

    if (p0 <= 0 || p1 <= 0) return

    const priceRatio = p1 / p0

    // Initial investment (assuming $100 for simplicity)
    const initialToken1Value = 50
    const initialToken2Value = 50

    const initialToken1Amount = initialToken1Value / p0
    const initialToken2Amount = initialToken2Value / 1 // Token2 price is assumed to be 1

    // Value if held (HODL strategy)
    const hodlValue = initialToken1Amount * p1 + initialToken2Amount

    let lpValue = 0
    let tokenRatio = ""

    if (ammType === "constant-product") {
      // Constant product formula (x * y = k)
      const k = initialToken1Amount * initialToken2Amount

      // New token amounts after price change
      const newToken1Amount = Math.sqrt(k / priceRatio)
      const newToken2Amount = Math.sqrt(k * priceRatio)

      // Value of LP position after price change
      lpValue = newToken1Amount * p1 + newToken2Amount

      // Calculate token ratio after price change
      const token1Percent = (((newToken1Amount * p1) / lpValue) * 100).toFixed(2)
      const token2Percent = (100 - Number.parseFloat(token1Percent)).toFixed(2)
      tokenRatio = `${token1Percent}% / ${token2Percent}%`
    } else if (ammType === "constant-sum") {
      // Constant sum AMMs don't experience impermanent loss
      lpValue = hodlValue
      tokenRatio = "50% / 50%"
    }

    // Calculate impermanent loss
    const impermanentLoss = ((lpValue - hodlValue) / hodlValue) * 100

    setIlResults({
      impermanentLoss: impermanentLoss.toFixed(2),
      hodlValue: hodlValue.toFixed(2),
      lpValue: lpValue.toFixed(2),
      difference: (lpValue - hodlValue).toFixed(2),
      tokenRatio: tokenRatio,
      priceRatio: priceRatio.toFixed(4),
    })
  }

  // APY Calculator State
  const [dailyVolume, setDailyVolume] = useState<string>("")
  const [poolTVL, setPoolTVL] = useState<string>("")
  const [feeTier, setFeeTier] = useState<string>("")
  const [apyResults, setApyResults] = useState<{
    apy: string
    dailyFees: string
    annualFees: string
  } | null>(null)

  // Calculate APY
  const calculateAPY = () => {
    if (!dailyVolume || !poolTVL || !feeTier) return

    const volume = Number.parseFloat(dailyVolume)
    const tvl = Number.parseFloat(poolTVL)
    const fee = Number.parseFloat(feeTier) / 100

    if (volume <= 0 || tvl <= 0 || fee <= 0) return

    const dailyFees = volume * fee
    const annualFees = dailyFees * 365
    const apy = ((annualFees / tvl) * 100).toFixed(2)

    setApyResults({
      apy: apy,
      dailyFees: dailyFees.toFixed(2),
      annualFees: annualFees.toFixed(2),
    })
  }

  return (
    <div className="container py-10 px-4 md:px-8 lg:px-12">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight">DeFi Calculator</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Tools to help you make informed decisions when entering liquidity pools and other DeFi opportunities
        </p>
      </div>

      <Tabs defaultValue="swap" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="swap" className="flex items-center gap-2">
            <ArrowRightLeft className="h-4 w-4" />
            <span>Swap Calculator</span>
          </TabsTrigger>
          <TabsTrigger value="il" className="flex items-center gap-2">
            <Percent className="h-4 w-4" />
            <span>Impermanent Loss</span>
          </TabsTrigger>
          <TabsTrigger value="apy" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            <span>APY Calculator</span>
          </TabsTrigger>
        </TabsList>

        {/* Swap Calculator */}
        <TabsContent value="swap">
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Liquidity Pool Swap Calculator</CardTitle>
                <CardDescription>Calculate the optimal token amounts for entering a liquidity pool</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="token1Amount">Token 1 Amount</Label>
                      <Input
                        id="token1Amount"
                        placeholder="0.0"
                        value={token1Amount}
                        onChange={(e) => setToken1Amount(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="token1Price">Token 1 Price ($)</Label>
                      <Input
                        id="token1Price"
                        placeholder="0.0"
                        value={token1Price}
                        onChange={(e) => setToken1Price(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="token2Amount">Token 2 Amount</Label>
                      <Input
                        id="token2Amount"
                        placeholder="0.0"
                        value={token2Amount}
                        onChange={(e) => setToken2Amount(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="token2Price">Token 2 Price ($)</Label>
                      <Input
                        id="token2Price"
                        placeholder="0.0"
                        value={token2Price}
                        onChange={(e) => setToken2Price(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <Button className="w-full" onClick={calculateSwap}>
                  Calculate
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Results</CardTitle>
                <CardDescription>Your liquidity pool position details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {results ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-lg bg-muted p-4">
                        <div className="text-sm font-medium text-muted-foreground">Token 1 Value</div>
                        <div className="mt-1 text-2xl font-bold">${results.token1Value}</div>
                      </div>
                      <div className="rounded-lg bg-muted p-4">
                        <div className="text-sm font-medium text-muted-foreground">Token 2 Value</div>
                        <div className="mt-1 text-2xl font-bold">${results.token2Value}</div>
                      </div>
                    </div>

                    <div className="rounded-lg bg-muted p-4">
                      <div className="text-sm font-medium text-muted-foreground">Total Value</div>
                      <div className="mt-1 text-2xl font-bold">${results.totalValue}</div>
                    </div>

                    <div className="rounded-lg bg-muted p-4">
                      <div className="text-sm font-medium text-muted-foreground">Token Ratio</div>
                      <div className="mt-1 text-2xl font-bold">
                        {results.ratio}% / {(100 - Number.parseFloat(results.ratio)).toFixed(2)}%
                      </div>
                    </div>

                    <Alert>
                      <InfoIcon className="h-4 w-4" />
                      <AlertTitle>Optimal Ratio</AlertTitle>
                      <AlertDescription>
                        For most liquidity pools, a 50/50 value ratio is recommended. Consider adjusting your token
                        amounts to get closer to a balanced ratio.
                      </AlertDescription>
                    </Alert>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-64 text-center">
                    <Calculator className="h-12 w-12 text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">Enter token amounts and prices to see your results</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>How to Use This Calculator</CardTitle>
                <CardDescription>Understanding the swap calculator for liquidity pools</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  When entering a liquidity pool, you typically need to provide an equal value of two tokens. This
                  calculator helps you determine the optimal amounts to swap to achieve a balanced position.
                </p>

                <div className="space-y-2">
                  <h3 className="font-semibold">Step 1: Enter Your Token Information</h3>
                  <p>Input the amount of each token you have and their current prices in USD.</p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold">Step 2: Review the Results</h3>
                  <p>
                    The calculator will show you the value of each token and the ratio between them. For most liquidity
                    pools, you want a 50/50 value ratio.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold">Step 3: Adjust Your Position</h3>
                  <p>
                    If your ratio is not 50/50, you may need to swap some of one token for the other before entering the
                    pool.
                  </p>
                </div>

                <Alert className="mt-4">
                  <InfoIcon className="h-4 w-4" />
                  <AlertTitle>Pro Tip</AlertTitle>
                  <AlertDescription>
                    Remember to account for slippage and gas fees when making your final swaps. It's often better to
                    have a small buffer of extra tokens.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Impermanent Loss Calculator */}
        <TabsContent value="il">
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Impermanent Loss Calculator</CardTitle>
                <CardDescription>Estimate potential impermanent loss based on price changes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="ammType">AMM Type</Label>
                    <Select value={ammType} onValueChange={setAmmType}>
                      <SelectTrigger id="ammType">
                        <SelectValue placeholder="Select AMM Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="constant-product">Constant Product (Uniswap V2, SushiSwap)</SelectItem>
                        <SelectItem value="constant-sum">Constant Sum (Stable Pools)</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground">
                      Different AMM types use different formulas for calculating token swaps
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="initialPrice">Initial Price Ratio (Token1/Token2)</Label>
                    <Input
                      id="initialPrice"
                      placeholder="1.0"
                      value={initialPrice}
                      onChange={(e) => setInitialPrice(e.target.value)}
                    />
                    <p className="text-sm text-muted-foreground">The price ratio when you first entered the pool</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="newPrice">New Price Ratio (Token1/Token2)</Label>
                    <Input
                      id="newPrice"
                      placeholder="1.0"
                      value={newPrice}
                      onChange={(e) => setNewPrice(e.target.value)}
                    />
                    <p className="text-sm text-muted-foreground">The current or expected future price ratio</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Price Change: {priceChangePercent.toFixed(2)}%</Label>
                      <span className="text-sm text-muted-foreground">
                        {priceChangePercent >= 0 ? "Increase" : "Decrease"}
                      </span>
                    </div>
                    <Slider
                      value={[priceChangePercent]}
                      min={-90}
                      max={1000}
                      step={1}
                      onValueChange={handleSliderChange}
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>-90%</span>
                      <span>0%</span>
                      <span>+1000%</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full" onClick={calculateIL}>
                  Calculate Impermanent Loss
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Impermanent Loss Results</CardTitle>
                <CardDescription>Comparison between LP position and holding tokens</CardDescription>
              </CardHeader>
              <CardContent>
                {ilResults ? (
                  <div className="space-y-4">
                    <div className="rounded-lg bg-muted p-6 text-center">
                      <div className="text-sm font-medium text-muted-foreground">Impermanent Loss</div>
                      <div
                        className={`mt-2 text-3xl font-bold ${
                          Number.parseFloat(ilResults.impermanentLoss) < 0 ? "text-destructive" : "text-green-500"
                        }`}
                      >
                        {ilResults.impermanentLoss}%
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-lg bg-muted p-4">
                        <div className="text-sm font-medium text-muted-foreground">HODL Value</div>
                        <div className="mt-1 text-2xl font-bold">${ilResults.hodlValue}</div>
                      </div>
                      <div className="rounded-lg bg-muted p-4">
                        <div className="text-sm font-medium text-muted-foreground">LP Value</div>
                        <div className="mt-1 text-2xl font-bold">${ilResults.lpValue}</div>
                      </div>
                    </div>

                    <div className="rounded-lg bg-muted p-4">
                      <div className="text-sm font-medium text-muted-foreground">Difference</div>
                      <div
                        className={`mt-1 text-2xl font-bold ${
                          Number.parseFloat(ilResults.difference) < 0 ? "text-destructive" : "text-green-500"
                        }`}
                      >
                        ${ilResults.difference}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-lg bg-muted p-4">
                        <div className="text-sm font-medium text-muted-foreground">New Token Ratio</div>
                        <div className="mt-1 text-lg font-bold">{ilResults.tokenRatio}</div>
                      </div>
                      <div className="rounded-lg bg-muted p-4">
                        <div className="text-sm font-medium text-muted-foreground">Price Ratio</div>
                        <div className="mt-1 text-lg font-bold">{ilResults.priceRatio}</div>
                      </div>
                    </div>

                    {Number.parseFloat(ilResults.impermanentLoss) < -1 && (
                      <Alert variant="destructive">
                        <AlertTriangle className="h-4 w-4" />
                        <AlertTitle>Significant Impermanent Loss</AlertTitle>
                        <AlertDescription>
                          This price change would result in significant impermanent loss. Consider if the trading fees
                          or rewards would offset this loss.
                        </AlertDescription>
                      </Alert>
                    )}

                    {Number.parseFloat(ilResults.impermanentLoss) >= 0 && (
                      <Alert>
                        <InfoIcon className="h-4 w-4" />
                        <AlertTitle>No Impermanent Loss</AlertTitle>
                        <AlertDescription>
                          This AMM type or price change doesn't result in impermanent loss. Stable pools (constant sum)
                          typically don't experience impermanent loss.
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-64 text-center">
                    <Percent className="h-12 w-12 text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">Enter price ratios to calculate potential impermanent loss</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Understanding Impermanent Loss</CardTitle>
                <CardDescription>A comprehensive guide to impermanent loss in liquidity pools</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Impermanent loss is the difference in value between holding tokens in a liquidity pool versus holding
                  them in your wallet. It occurs when the price ratio of the tokens in the pool changes after you
                  deposit them.
                </p>

                <div className="space-y-2">
                  <h3 className="font-semibold">Why Does It Happen?</h3>
                  <p>
                    Automated Market Makers (AMMs) like Uniswap use a constant product formula (x * y = k) to determine
                    token prices. When external market prices change, arbitrageurs trade with the pool until its prices
                    match the market, changing the token composition of the pool.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold">Key Factors Affecting Impermanent Loss</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Price volatility: Higher volatility leads to greater impermanent loss</li>
                    <li>AMM type: Different AMMs use different formulas that affect impermanent loss</li>
                    <li>Time in pool: Longer exposure increases the chance of price divergence</li>
                    <li>Token correlation: Correlated tokens (like stablecoins) experience less impermanent loss</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold">Mitigating Impermanent Loss</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Provide liquidity for correlated token pairs (e.g., stablecoin pairs)</li>
                    <li>Consider pools with incentives that may offset potential losses</li>
                    <li>Use concentrated liquidity positions (like in Uniswap V3) to reduce exposure</li>
                    <li>Monitor price movements and consider exiting positions during high volatility</li>
                  </ul>
                </div>

                <Alert>
                  <InfoIcon className="h-4 w-4" />
                  <AlertTitle>Important Note</AlertTitle>
                  <AlertDescription>
                    Impermanent loss is only realized when you withdraw from the pool. If prices return to their
                    original ratio before you withdraw, the impermanent loss disappears. Additionally, trading fees
                    earned while providing liquidity can offset or even exceed impermanent loss.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* APY Calculator */}
        <TabsContent value="apy">
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Liquidity Pool APY Calculator</CardTitle>
                <CardDescription>Estimate the Annual Percentage Yield (APY) for a liquidity pool</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="dailyVolume">Daily Volume ($)</Label>
                    <Input
                      id="dailyVolume"
                      placeholder="0.0"
                      value={dailyVolume}
                      onChange={(e) => setDailyVolume(e.target.value)}
                    />
                    <p className="text-sm text-muted-foreground">The average daily trading volume for the pool</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="poolTVL">Pool TVL ($)</Label>
                    <Input
                      id="poolTVL"
                      placeholder="0.0"
                      value={poolTVL}
                      onChange={(e) => setPoolTVL(e.target.value)}
                    />
                    <p className="text-sm text-muted-foreground">The total value locked in the liquidity pool</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="feeTier">Fee Tier (%)</Label>
                    <Select value={feeTier} onValueChange={setFeeTier}>
                      <SelectTrigger id="feeTier">
                        <SelectValue placeholder="Select Fee Tier" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0.01">0.01%</SelectItem>
                        <SelectItem value="0.05">0.05%</SelectItem>
                        <SelectItem value="0.3">0.3%</SelectItem>
                        <SelectItem value="1">1%</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground">The trading fee charged by the pool</p>
                  </div>
                </div>

                <Button className="w-full" onClick={calculateAPY}>
                  Calculate APY
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>APY Results</CardTitle>
                <CardDescription>Estimated annual percentage yield</CardDescription>
              </CardHeader>
              <CardContent>
                {apyResults ? (
                  <div className="space-y-4">
                    <div className="rounded-lg bg-muted p-6 text-center">
                      <div className="text-sm font-medium text-muted-foreground">Estimated APY</div>
                      <div className="mt-2 text-3xl font-bold">{apyResults.apy}%</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-lg bg-muted p-4">
                        <div className="text-sm font-medium text-muted-foreground">Daily Fees</div>
                        <div className="mt-1 text-2xl font-bold">${apyResults.dailyFees}</div>
                      </div>
                      <div className="rounded-lg bg-muted p-4">
                        <div className="text-sm font-medium text-muted-foreground">Annual Fees</div>
                        <div className="mt-1 text-2xl font-bold">${apyResults.annualFees}</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-64 text-center">
                    <BarChart3 className="h-12 w-12 text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">Enter pool details to calculate potential APY</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Understanding APY</CardTitle>
                <CardDescription>A comprehensive guide to Annual Percentage Yield in DeFi</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Annual Percentage Yield (APY) is the effective annual rate of return taking into account the effect of
                  compounding interest. In the context of liquidity pools, APY represents the estimated annual earnings
                  from trading fees and other incentives, relative to the amount of capital you provide.
                </p>

                <div className="space-y-2">
                  <h3 className="font-semibold">Key Factors Affecting APY</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Trading volume: Higher volume leads to more fees</li>
                    <li>Fee tier: Pools with higher fee tiers generate more revenue</li>
                    <li>Incentive rewards: Additional token rewards can significantly boost APY</li>
                    <li>Pool TVL: Lower TVL means a larger share of fees for each provider</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold">Important Considerations</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>APY is an estimate based on past performance and is not guaranteed</li>
                    <li>Impermanent loss can reduce or even negate your APY</li>
                    <li>APY can fluctuate significantly due to market conditions and protocol changes</li>
                    <li>Always research the protocol and understand the risks before providing liquidity</li>
                  </ul>
                </div>

                <Alert>
                  <InfoIcon className="h-4 w-4" />
                  <AlertTitle>Disclaimer</AlertTitle>
                  <AlertDescription>
                    This APY calculator provides an estimate based on the provided inputs. Actual returns may vary
                    significantly due to market conditions and other factors.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
