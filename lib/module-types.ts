import type { ReactNode } from "react"

// Base module metadata
export interface ModuleMetadata {
  slug: string
  title: string
  description: string
  level: "Beginner" | "Intermediate" | "Advanced"
  duration: string
  topics: string[]
}

// Video information
export interface ModuleVideo {
  url: string
  title: string
  description: string
}

// Quiz question structure
export interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

// Section types for theory content
export type SectionType =
  | "introduction"
  | "content"
  | "examples"
  | "benefits-risks"
  | "practical-use-cases"
  | "looking-ahead"
  | "custom"

// Structure for a theory section
export interface TheorySection {
  type: SectionType
  title: string
  content: ReactNode | string
  className?: string
}

// Complete module content structure
export interface ModuleContent {
  metadata: ModuleMetadata
  videos: {
    main: ModuleVideo
    supplementary1: ModuleVideo
    supplementary2: ModuleVideo
  }
  theorySections: TheorySection[]
  quizQuestions: QuizQuestion[]
}

// Default section templates
export const defaultSections: Record<Exclude<SectionType, "custom">, Omit<TheorySection, "content">> = {
  introduction: {
    type: "introduction",
    title: "Introduction",
    className:
      "bg-gradient-to-br from-primary/20 via-primary/10 to-background p-6 rounded-xl border border-primary/30 shadow-lg relative overflow-hidden",
  },
  content: {
    type: "content",
    title: "Core Concepts",
  },
  examples: {
    type: "examples",
    title: "Real-World Examples",
  },
  "benefits-risks": {
    type: "benefits-risks",
    title: "Benefits and Risks",
  },
  "practical-use-cases": {
    type: "practical-use-cases",
    title: "Practical Use Cases",
  },
  "looking-ahead": {
    type: "looking-ahead",
    title: "Looking Ahead",
    className: "bg-gradient-to-br from-primary/20 to-primary/5 p-6 rounded-xl",
  },
}
