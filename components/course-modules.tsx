"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getModules } from "@/lib/modules"

// Add this after the imports
const scrollbarHideStyles = `
  /* Hide scrollbar for Chrome, Safari and Opera */
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`

export function CourseModules() {
  const allModules = getModules()
  const modules = [...allModules].sort((a, b) => {
    // Make "Blockchain Basics: Getting Started" the first module
    if (a.slug === "blockchain-basics-getting-started") return -1
    if (b.slug === "blockchain-basics-getting-started") return 1

    // Make "Introduction to DeFi" the second module
    if (a.slug === "introduction-to-defi") return -1
    if (b.slug === "introduction-to-defi") return 1

    // Keep original order for other modules
    return 0
  })

  // Add this inside the CourseModules function, before the return statement
  return (
    <section className="py-12">
      <style jsx global>
        {scrollbarHideStyles}
      </style>
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Course Modules</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Structured learning path from DeFi fundamentals to advanced concepts
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Navigation Arrows */}
          <button
            onClick={() => {
              const container = document.getElementById("modules-carousel")
              if (container) container.scrollBy({ left: -300, behavior: "smooth" })
            }}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-background/80 p-2 rounded-full shadow-md hover:bg-background transition-all duration-200"
            aria-label="Previous module"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-left"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div
            id="modules-carousel"
            className="flex overflow-x-auto snap-x snap-mandatory py-4 px-2 scrollbar-hide gap-4 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {modules.map((module, index) => (
              <div
                key={module.slug}
                className="snap-start flex-shrink-0 w-[280px] transition-transform duration-300 hover:scale-105"
              >
                <Card className="h-full bg-secondary/30 border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
                  <CardHeader className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground font-medium text-sm">
                          {index + 1}
                        </div>
                        <Badge
                          variant={
                            module.level === "Beginner"
                              ? "default"
                              : module.level === "Intermediate"
                                ? "secondary"
                                : "destructive"
                          }
                          className={
                            module.level === "Beginner"
                              ? "bg-primary hover:bg-primary/90"
                              : module.level === "Intermediate"
                                ? "bg-blue-500 hover:bg-blue-600"
                                : "bg-pink-500 hover:bg-pink-600"
                          }
                        >
                          {module.level}
                        </Badge>
                      </div>
                      <span className="text-xs text-muted-foreground">{module.duration}</span>
                    </div>
                    <CardTitle className="mt-2 text-lg">
                      {module.slug === "blockchain-basics-getting-started"
                        ? "Create a Wallet : Getting Started"
                        : module.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 flex flex-col flex-grow">
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-auto">{module.description}</p>
                    <Link href={`/modules/${module.slug}`} className="w-full mt-4">
                      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                        Start
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              const container = document.getElementById("modules-carousel")
              if (container) container.scrollBy({ left: 300, behavior: "smooth" })
            }}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-background/80 p-2 rounded-full shadow-md hover:bg-background transition-all duration-200"
            aria-label="Next module"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center mt-4 gap-1">
          {modules.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const container = document.getElementById("modules-carousel")
                if (container) {
                  const cardWidth = 280 + 16 // card width + gap
                  container.scrollTo({ left: cardWidth * index, behavior: "smooth" })
                }
              }}
              className="w-2 h-2 rounded-full bg-muted hover:bg-muted-foreground transition-colors"
              aria-label={`Go to module ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
