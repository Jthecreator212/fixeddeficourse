"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Loader2, Sparkles, Check, LightbulbIcon } from "lucide-react"
import { type AIContentRequest, type AIGeneratedModule, generateModuleContent } from "@/lib/ai-service"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RichTextEditor } from "@/components/admin/rich-text-editor"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AIPromptTemplates } from "@/components/admin/ai-prompt-templates"

const formSchema = z.object({
  topic: z.string().min(3, {
    message: "Topic must be at least 3 characters.",
  }),
  level: z.string(),
  contentType: z.string(),
  additionalInstructions: z.string().optional(),
})

interface AIModuleGeneratorProps {
  courseId: string
  onSaveModule?: (module: any) => void
}

export function AIModuleGenerator({ courseId, onSaveModule }: AIModuleGeneratorProps) {
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState<AIGeneratedModule | null>(null)
  const [activeLesson, setActiveLesson] = useState(0)
  const [savedToModule, setSavedToModule] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: "",
      level: "beginner",
      contentType: "module",
      additionalInstructions: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsGenerating(true)
    setSavedToModule(false)

    try {
      const request: AIContentRequest = {
        topic: values.topic,
        level: values.level,
        contentType: values.contentType,
        additionalInstructions: values.additionalInstructions,
      }

      const generatedModule = await generateModuleContent(request)
      setGeneratedContent(generatedModule)
    } catch (error) {
      console.error("Error generating content:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  function handleSaveModule() {
    if (!generatedContent) return

    // In a real app, you would format the data and call the onSaveModule callback
    // or directly save to your database
    console.log("Saving module:", generatedContent)

    // Simulate saving
    setTimeout(() => {
      setSavedToModule(true)
      if (onSaveModule) {
        onSaveModule(generatedContent)
      }
    }, 1000)
  }

  const handleSelectTemplate = (prompt: string) => {
    form.setValue("additionalInstructions", prompt)
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="generator">
        <TabsList>
          <TabsTrigger value="generator">AI Generator</TabsTrigger>
          <TabsTrigger value="templates">
            <LightbulbIcon className="mr-2 h-4 w-4" />
            Prompt Templates
          </TabsTrigger>
        </TabsList>

        <TabsContent value="generator">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-4">AI Module Generator</h3>
              <p className="text-muted-foreground mb-6">
                Generate course modules and lessons using AI. Provide a topic and additional instructions to create
                comprehensive learning content.
              </p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="topic"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Topic</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Blockchain Basics, DeFi Protocols, Smart Contracts" {...field} />
                        </FormControl>
                        <FormDescription>Enter the main topic for your module or lesson.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid gap-4 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="level"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Difficulty Level</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select level" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="beginner">Beginner</SelectItem>
                              <SelectItem value="intermediate">Intermediate</SelectItem>
                              <SelectItem value="advanced">Advanced</SelectItem>
                              <SelectItem value="expert">Expert</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>The target skill level for this content.</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="contentType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Content Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select content type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="module">Complete Module</SelectItem>
                              <SelectItem value="lesson">Single Lesson</SelectItem>
                              <SelectItem value="quiz">Quiz Questions</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>The type of content you want to generate.</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="additionalInstructions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Instructions (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="e.g. Include practical examples, focus on security aspects, etc."
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Provide any specific requirements or focus areas for the content.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" disabled={isGenerating}>
                    {isGenerating ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating Content...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Generate Content
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates">
          <AIPromptTemplates onSelectTemplate={handleSelectTemplate} />
        </TabsContent>
      </Tabs>

      {generatedContent && (
        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-medium">{generatedContent.title}</h3>
                <Button onClick={handleSaveModule} disabled={savedToModule}>
                  {savedToModule ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Saved to Module
                    </>
                  ) : (
                    "Save as Module"
                  )}
                </Button>
              </div>

              <p className="text-muted-foreground mb-4">{generatedContent.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {generatedContent.keyPoints.map((point, index) => (
                  <Badge key={index} variant="outline">
                    {point}
                  </Badge>
                ))}
              </div>

              <Tabs defaultValue="preview" className="mt-6">
                <TabsList className="mb-4">
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="edit">Edit</TabsTrigger>
                </TabsList>

                <TabsContent value="preview">
                  <Accordion type="single" collapsible className="w-full">
                    {generatedContent.lessons.map((lesson, index) => (
                      <AccordionItem key={index} value={`lesson-${index}`}>
                        <AccordionTrigger>
                          <div className="flex items-center justify-between w-full pr-4">
                            <span>{lesson.title}</span>
                            <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="prose prose-sm max-w-none dark:prose-invert">
                            <div dangerouslySetInnerHTML={{ __html: lesson.content.replace(/\n/g, "<br />") }} />
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>

                <TabsContent value="edit">
                  <div className="space-y-4">
                    <div className="flex space-x-2 mb-4">
                      {generatedContent.lessons.map((lesson, index) => (
                        <Button
                          key={index}
                          variant={activeLesson === index ? "default" : "outline"}
                          onClick={() => setActiveLesson(index)}
                          size="sm"
                        >
                          Lesson {index + 1}
                        </Button>
                      ))}
                    </div>

                    {generatedContent.lessons[activeLesson] && (
                      <div className="space-y-4">
                        <div>
                          <FormLabel>Lesson Title</FormLabel>
                          <Input
                            value={generatedContent.lessons[activeLesson].title}
                            onChange={(e) => {
                              const updatedLessons = [...generatedContent.lessons]
                              updatedLessons[activeLesson] = {
                                ...updatedLessons[activeLesson],
                                title: e.target.value,
                              }
                              setGeneratedContent({
                                ...generatedContent,
                                lessons: updatedLessons,
                              })
                            }}
                          />
                        </div>

                        <div>
                          <FormLabel>Duration</FormLabel>
                          <Input
                            value={generatedContent.lessons[activeLesson].duration}
                            onChange={(e) => {
                              const updatedLessons = [...generatedContent.lessons]
                              updatedLessons[activeLesson] = {
                                ...updatedLessons[activeLesson],
                                duration: e.target.value,
                              }
                              setGeneratedContent({
                                ...generatedContent,
                                lessons: updatedLessons,
                              })
                            }}
                          />
                        </div>

                        <div>
                          <FormLabel>Content</FormLabel>
                          <RichTextEditor
                            value={generatedContent.lessons[activeLesson].content}
                            onChange={(value) => {
                              const updatedLessons = [...generatedContent.lessons]
                              updatedLessons[activeLesson] = {
                                ...updatedLessons[activeLesson],
                                content: value,
                              }
                              setGeneratedContent({
                                ...generatedContent,
                                lessons: updatedLessons,
                              })
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
