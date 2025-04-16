"use client"

import { useEffect, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { getModuleContent } from "@/lib/module-content"
import type { ModuleContentInterface } from "@/lib/types"

interface ModuleContentProps {
  moduleSlug: string
}

export function ModuleContent({ moduleSlug }: ModuleContentProps) {
  const [activeTab, setActiveTab] = useState("theory")
  const [moduleContent, setModuleContent] = useState<ModuleContentInterface | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    console.log("🔍 [ModuleContent] Starting module load for:", moduleSlug)
    console.log("📦 [ModuleContent] Component props:", { moduleSlug })

    try {
      const content = getModuleContent(moduleSlug)
      console.log("📦 [ModuleContent] Module content result:", {
        exists: !!content,
        type: typeof content,
        keys: content ? Object.keys(content) : [],
        hasVideo: !!content?.video,
        hasRenderTheory: !!content?.renderTheory,
        hasRenderQuiz: !!content?.renderQuiz,
        videoUrl: content?.video?.url,
        videoTitle: content?.video?.title
      })

      if (!content) {
        const errorMsg = `Module content is null or undefined for slug: ${moduleSlug}`
        console.error("❌ [ModuleContent] Module not found:", {
          moduleSlug,
          error: errorMsg,
          stack: new Error().stack
        })
        setError(errorMsg)
        return
      }

      setModuleContent(content)
      console.log("✅ [ModuleContent] Successfully loaded module content:", {
        moduleSlug,
        hasVideo: !!content.video,
        hasTheory: !!content.renderTheory,
        hasQuiz: !!content.renderQuiz
      })
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Unknown error occurred"
      console.error("❌ [ModuleContent] Error loading module:", {
        moduleSlug,
        error: errorMsg,
        stack: err instanceof Error ? err.stack : undefined
      })
      setError(errorMsg)
    }
  }, [moduleSlug])

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          {error}
          <div className="mt-2 text-sm text-muted-foreground">
            Please try refreshing the page or contact support if the issue persists.
          </div>
        </AlertDescription>
      </Alert>
    )
  }

  if (!moduleContent) {
    return (
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Loading</AlertTitle>
        <AlertDescription>Loading module content...</AlertDescription>
      </Alert>
    )
  }

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="theory">Theory</TabsTrigger>
        <TabsTrigger value="video">Video</TabsTrigger>
        <TabsTrigger value="quiz">Quiz</TabsTrigger>
      </TabsList>
      <TabsContent value="theory">
        {moduleContent.renderTheory && <moduleContent.renderTheory />}
      </TabsContent>
      <TabsContent value="video">
        {moduleContent.video && (
          <div className="aspect-video w-full">
            <iframe
              src={moduleContent.video.url}
              title={moduleContent.video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full rounded-lg"
            />
          </div>
        )}
      </TabsContent>
      <TabsContent value="quiz">
        {moduleContent.renderQuiz && <moduleContent.renderQuiz />}
      </TabsContent>
    </Tabs>
  )
}
