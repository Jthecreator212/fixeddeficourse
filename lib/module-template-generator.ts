import type { ModuleContent, TheorySection, ModuleVideo } from "./module-types"
import { defaultSections } from "./module-types"

// This function generates a standard template for a module with all required sections
export function generateModuleTemplate(
  metadata: ModuleContent["metadata"],
  videos: {
    main: ModuleVideo
    supplementary1: ModuleVideo
    supplementary2: ModuleVideo
  },
  quizQuestions: ModuleContent["quizQuestions"],
  contentSections: {
    introduction: any
    mainContent: any
    examples?: any
    benefitsRisks?: {
      benefits: { title: string; items: { label: string; description: string }[] }
      risks: { title: string; items: { label: string; description: string }[] }
    }
    useCases?: { title: string; description: string }[]
    lookingAhead: any
  },
): ModuleContent {
  const theorySections: TheorySection[] = [
    // Introduction section
    {
      ...defaultSections.introduction,
      content: contentSections.introduction,
    },

    // Main content section
    {
      ...defaultSections.content,
      title: metadata.title,
      content: contentSections.mainContent,
    },
  ]

  // Add examples section if provided
  if (contentSections.examples) {
    theorySections.push({
      ...defaultSections.examples,
      content: contentSections.examples,
    })
  }

  // Add benefits and risks section if provided
  if (contentSections.benefitsRisks) {
    // Instead of using JSX directly, we'll create a function that returns the JSX
    // This avoids the need for JSX syntax in this file
    theorySections.push({
      ...defaultSections["benefits-risks"],
      content: {
        type: "BenefitsRisksSection",
        props: {
          benefits: contentSections.benefitsRisks.benefits,
          risks: contentSections.benefitsRisks.risks,
        },
      },
    })
  }

  // Add use cases section if provided
  if (contentSections.useCases && contentSections.useCases.length > 0) {
    theorySections.push({
      ...defaultSections["practical-use-cases"],
      content: {
        type: "UseCaseList",
        props: {
          useCases: contentSections.useCases,
        },
      },
    })
  }

  // Add looking ahead section
  theorySections.push({
    ...defaultSections["looking-ahead"],
    content: contentSections.lookingAhead,
  })

  return {
    metadata,
    videos,
    theorySections,
    quizQuestions,
  }
}
