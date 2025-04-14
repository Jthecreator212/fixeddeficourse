"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getModuleContent } from "@/lib/module-content"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"

interface ModuleContentProps {
  moduleSlug: string
}

export function ModuleContent({ moduleSlug }: ModuleContentProps) {
  const [activeTab, setActiveTab] = useState("theory")
  const ModuleContentComponent = getModuleContent(moduleSlug)

  if (!ModuleContentComponent) {
    return (
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Module Content Not Found</AlertTitle>
        <AlertDescription>
          The content for this module could not be found. Please try another module or contact support.
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <Tabs defaultValue="theory" value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="mb-4">
        <TabsTrigger value="theory">Theory</TabsTrigger>
        <TabsTrigger value="video">Videos</TabsTrigger>
        <TabsTrigger value="quiz">Quick Quiz</TabsTrigger>
      </TabsList>
      <TabsContent value="theory" className="mt-0">
        <div className="rounded-lg border p-6">
          <ModuleContentComponent.renderTheory />
        </div>
      </TabsContent>
      <TabsContent value="video" className="mt-0">
        <div className="rounded-lg border p-6">
          <h2 className="text-2xl font-bold mb-4">{ModuleContentComponent.video.title}</h2>
          <p className="mb-6 text-muted-foreground">{ModuleContentComponent.video.description}</p>
          <div className="aspect-video overflow-hidden rounded-lg">
            <iframe
              src={ModuleContentComponent.video.url}
              title={ModuleContentComponent.video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="quiz" className="mt-0">
        <div className="rounded-lg border p-6">
          <ModuleContentComponent.renderQuiz />
        </div>
      </TabsContent>
    </Tabs>
  )
}
