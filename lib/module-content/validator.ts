import { ModuleInterface, ModuleMetadata } from '@/lib/types/module'
import { moduleMetadata } from './registry'

interface ValidationError {
  moduleId: string
  message: string
  severity: 'error' | 'warning'
}

interface ValidationResult {
  isValid: boolean
  errors: ValidationError[]
}

// Content quality thresholds
const CONTENT_THRESHOLDS = {
  minTheoryWords: 500,
  minQuizQuestions: 5,
  maxQuizQuestions: 15,
  minVideoDuration: 5, // minutes
  maxVideoDuration: 60, // minutes
  minCodeExamples: 1,
  minImages: 1
}

export function validateModuleContent(moduleId: string, content: ModuleInterface): ValidationResult {
  const errors: ValidationError[] = []
  
  // Check required sections
  if (!content.renderTheory) {
    errors.push({
      moduleId,
      message: 'Missing required theory section',
      severity: 'error'
    })
  }

  if (!content.renderQuiz) {
    errors.push({
      moduleId,
      message: 'Missing required quiz section',
      severity: 'error'
    })
  }

  // Check theory section structure and content
  if (content.renderTheory) {
    const theoryContent = content.renderTheory()
    if (!theoryContent) {
      errors.push({
        moduleId,
        message: 'Theory section must return content',
        severity: 'error'
      })
    } else {
      // Check theory content quality
      const textContent = theoryContent.toString()
      const wordCount = textContent.split(/\s+/).length
      
      if (wordCount < CONTENT_THRESHOLDS.minTheoryWords) {
        errors.push({
          moduleId,
          message: `Theory section should have at least ${CONTENT_THRESHOLDS.minTheoryWords} words`,
          severity: 'warning'
        })
      }

      // Check for code examples
      const codeExamples = (textContent.match(/```/g) || []).length / 2
      if (codeExamples < CONTENT_THRESHOLDS.minCodeExamples) {
        errors.push({
          moduleId,
          message: `Theory section should include at least ${CONTENT_THRESHOLDS.minCodeExamples} code example`,
          severity: 'warning'
        })
      }

      // Check for images
      const images = (textContent.match(/!\[.*?\]\(.*?\)/g) || []).length
      if (images < CONTENT_THRESHOLDS.minImages) {
        errors.push({
          moduleId,
          message: `Theory section should include at least ${CONTENT_THRESHOLDS.minImages} image`,
          severity: 'warning'
        })
      }
    }
  }

  // Check quiz section structure
  if (content.renderQuiz) {
    const quizContent = content.renderQuiz()
    if (!quizContent) {
      errors.push({
        moduleId,
        message: 'Quiz section must return content',
        severity: 'error'
      })
    } else {
      // Check quiz questions count
      const questionCount = (quizContent.toString().match(/question:/gi) || []).length
      if (questionCount < CONTENT_THRESHOLDS.minQuizQuestions) {
        errors.push({
          moduleId,
          message: `Quiz should have at least ${CONTENT_THRESHOLDS.minQuizQuestions} questions`,
          severity: 'error'
        })
      }
      if (questionCount > CONTENT_THRESHOLDS.maxQuizQuestions) {
        errors.push({
          moduleId,
          message: `Quiz should have at most ${CONTENT_THRESHOLDS.maxQuizQuestions} questions`,
          severity: 'warning'
        })
      }
    }
  }

  // Check video section if present
  if (content.video) {
    if (!content.video.url) {
      errors.push({
        moduleId,
        message: 'Video section must include a URL',
        severity: 'error'
      })
    }
    if (!content.video.title) {
      errors.push({
        moduleId,
        message: 'Video section must include a title',
        severity: 'warning'
      })
    }
    if (content.video.duration) {
      if (content.video.duration < CONTENT_THRESHOLDS.minVideoDuration) {
        errors.push({
          moduleId,
          message: `Video duration should be at least ${CONTENT_THRESHOLDS.minVideoDuration} minutes`,
          severity: 'warning'
        })
      }
      if (content.video.duration > CONTENT_THRESHOLDS.maxVideoDuration) {
        errors.push({
          moduleId,
          message: `Video duration should be at most ${CONTENT_THRESHOLDS.maxVideoDuration} minutes`,
          severity: 'warning'
        })
      }
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

export function validateModuleMetadata(moduleId: string, metadata: ModuleMetadata): ValidationResult {
  const errors: ValidationError[] = []
  
  // Check required metadata fields
  if (!metadata.title) {
    errors.push({
      moduleId,
      message: 'Missing required title',
      severity: 'error'
    })
  }

  if (!metadata.description) {
    errors.push({
      moduleId,
      message: 'Missing required description',
      severity: 'error'
    })
  }

  if (!metadata.difficulty) {
    errors.push({
      moduleId,
      message: 'Missing required difficulty level',
      severity: 'error'
    })
  }

  if (!metadata.estimatedTime) {
    errors.push({
      moduleId,
      message: 'Missing required estimated time',
      severity: 'error'
    })
  }

  // Validate difficulty level
  const validDifficulties = ['beginner', 'intermediate', 'advanced']
  if (!validDifficulties.includes(metadata.difficulty)) {
    errors.push({
      moduleId,
      message: `Invalid difficulty level. Must be one of: ${validDifficulties.join(', ')}`,
      severity: 'error'
    })
  }

  // Validate prerequisites
  if (metadata.prerequisites) {
    metadata.prerequisites.forEach(prereq => {
      if (!moduleMetadata[prereq]) {
        errors.push({
          moduleId,
          message: `Invalid prerequisite: ${prereq} does not exist`,
          severity: 'error'
        })
      }
    })
  }

  // Validate tags
  if (!metadata.tags || metadata.tags.length === 0) {
    errors.push({
      moduleId,
      message: 'Module should have at least one tag',
      severity: 'warning'
    })
  }

  // Validate estimated time
  if (metadata.estimatedTime < 15) {
    errors.push({
      moduleId,
      message: 'Estimated time should be at least 15 minutes',
      severity: 'warning'
    })
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

export function validateAllModules(): ValidationResult {
  const errors: ValidationError[] = []
  let isValid = true

  // Import all module content files dynamically
  const moduleFiles = import.meta.glob('./*.tsx', { eager: true })
  
  Object.entries(moduleFiles).forEach(([path, module]) => {
    const moduleId = path.replace('./', '').replace('.tsx', '')
    
    // Skip non-module files
    if (!moduleMetadata[moduleId]) return

    // Validate metadata
    const metadataResult = validateModuleMetadata(moduleId, moduleMetadata[moduleId])
    if (!metadataResult.isValid) {
      isValid = false
      errors.push(...metadataResult.errors)
    }

    // Validate content
    if ('moduleContent' in module) {
      const contentResult = validateModuleContent(moduleId, module.moduleContent)
      if (!contentResult.isValid) {
        isValid = false
        errors.push(...contentResult.errors)
      }
    } else {
      errors.push({
        moduleId,
        message: 'Missing moduleContent export',
        severity: 'error'
      })
      isValid = false
    }
  })

  return {
    isValid,
    errors
  }
} 