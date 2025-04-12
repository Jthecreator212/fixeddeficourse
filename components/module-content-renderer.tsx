import React from "react"
import { BenefitsRisksSection, UseCaseItem } from "./module-template"

// This component renders content objects created by the module-template-generator
export function renderModuleContent(content: any) {
  // If content is a React element or primitive, return it directly
  if (React.isValidElement(content) || typeof content !== "object" || content === null) {
    return content
  }

  // If content is a content object with type and props
  if (content.type === "BenefitsRisksSection") {
    return <BenefitsRisksSection benefits={content.props.benefits} risks={content.props.risks} />
  }

  if (content.type === "UseCaseList") {
    return (
      <>
        {content.props.useCases.map((useCase: any, index: number) => (
          <UseCaseItem key={index} title={useCase.title} description={useCase.description} />
        ))}
      </>
    )
  }

  // Default case: return the content as is
  return content
}
