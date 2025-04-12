"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Copy, BookOpen, Lightbulb, Code, FileQuestion } from "lucide-react"
import { useState } from "react"

interface PromptTemplate {
  title: string
  description: string
  prompt: string
  icon: React.ReactNode
}

const promptTemplates: PromptTemplate[] = [
  {
    title: "Beginner-Friendly Explanation",
    description: "Create a simple, accessible explanation of a complex DeFi concept",
    prompt:
      "Create a beginner-friendly explanation of [TOPIC] that uses simple analogies and avoids technical jargon. Include 3-5 key points that are essential for beginners to understand.",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: "Technical Deep Dive",
    description: "Generate in-depth technical content for advanced users",
    prompt:
      "Create a technical deep dive into [TOPIC] for advanced users who already understand the fundamentals. Include code examples, technical diagrams, and references to relevant protocols or standards.",
    icon: <Code className="h-5 w-5" />,
  },
  {
    title: "Practical Use Cases",
    description: "Showcase real-world applications and examples",
    prompt:
      "Generate 5-7 practical use cases for [TOPIC] in the DeFi ecosystem. For each use case, explain the problem it solves, how it works, and provide a real-world example of implementation.",
    icon: <Lightbulb className="h-5 w-5" />,
  },
  {
    title: "Quiz Questions",
    description: "Create assessment questions to test knowledge",
    prompt:
      "Create 10 quiz questions about [TOPIC] with varying difficulty levels (3 easy, 4 medium, 3 hard). Include multiple-choice options and provide the correct answer with a brief explanation for each question.",
    icon: <FileQuestion className="h-5 w-5" />,
  },
]

export function AIPromptTemplates({ onSelectTemplate }: { onSelectTemplate: (prompt: string) => void }) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const handleCopy = (index: number, prompt: string) => {
    navigator.clipboard.writeText(prompt)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Prompt Templates</h3>
      <p className="text-muted-foreground">
        Use these templates to help generate specific types of content. Click to use or copy.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {promptTemplates.map((template, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="p-4 flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-md">{template.icon}</div>
                <div className="flex-1">
                  <h4 className="font-medium">{template.title}</h4>
                  <p className="text-sm text-muted-foreground">{template.description}</p>
                </div>
              </div>

              <div className="border-t p-4 flex justify-between items-center">
                <Button variant="ghost" size="sm" onClick={() => onSelectTemplate(template.prompt)}>
                  Use Template
                </Button>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" onClick={() => handleCopy(index, template.prompt)}>
                        <Copy className="h-4 w-4" />
                        <span className="sr-only">Copy</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>{copiedIndex === index ? "Copied!" : "Copy to clipboard"}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
