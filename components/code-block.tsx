"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Copy } from "lucide-react"

interface CodeBlockProps {
  code: string
  language: string
  showLineNumbers?: boolean
}

export function CodeBlock({ code, language, showLineNumbers = true }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Function to add line numbers if needed
  const formatCodeWithLineNumbers = () => {
    if (!showLineNumbers) return code

    return code
      .split("\n")
      .map((line, i) => `${i + 1}. ${line}`)
      .join("\n")
  }

  return (
    <div className="relative rounded-md overflow-hidden">
      <div className="absolute right-2 top-2 z-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={copyToClipboard}
          className="h-8 w-8 rounded-md bg-background/80 backdrop-blur-sm"
        >
          {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
          <span className="sr-only">Copy code</span>
        </Button>
      </div>
      <div className="bg-zinc-950 text-zinc-100 p-4 rounded-md overflow-x-auto">
        <div className="flex items-center justify-between mb-2 text-xs text-zinc-400">
          <span>{language.toUpperCase()}</span>
        </div>
        <pre className="font-mono text-sm whitespace-pre">
          <code>{showLineNumbers ? formatCodeWithLineNumbers() : code}</code>
        </pre>
      </div>
    </div>
  )
}
