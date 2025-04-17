import { ModuleInterface, ModuleContent, ModuleMetadata, QuizQuestion } from '../types/module';

interface ContentThresholds {
  theory: {
    minWords: number;
    minCodeExamples: number;
    minImages: number;
  };
  quiz: {
    minQuestions: number;
    maxQuestions: number;
  };
  video: {
    minDuration: number;
    maxDuration: number;
  };
}

const CONTENT_THRESHOLDS: ContentThresholds = {
  theory: {
    minWords: 500,
    minCodeExamples: 1,
    minImages: 1
  },
  quiz: {
    minQuestions: 3,
    maxQuestions: 10
  },
  video: {
    minDuration: 300, // 5 minutes
    maxDuration: 1800 // 30 minutes
  }
};

interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export function validateModuleContent(module: ModuleInterface): ValidationResult {
  const errors: string[] = [];
  
  // Check required sections
  if (!module.content.theory) {
    errors.push('Module must have a theory section');
  }
  
  if (!module.content.quiz) {
    errors.push('Module must have a quiz section');
  }
  
  // Validate content quality
  if (module.content.theory) {
    const wordCount = module.content.theory.content.split(/\s+/).length;
    
    if (wordCount < CONTENT_THRESHOLDS.theory.minWords) {
      errors.push(`Theory section must have at least ${CONTENT_THRESHOLDS.theory.minWords} words`);
    }
    
    // Check for code examples
    const codeExamples = module.content.theory.content.match(/```[\s\S]*?```/g) || [];
    if (codeExamples.length < CONTENT_THRESHOLDS.theory.minCodeExamples) {
      errors.push(`Theory section must have at least ${CONTENT_THRESHOLDS.theory.minCodeExamples} code examples`);
    }
    
    // Check for images
    const images = module.content.theory.content.match(/<img[^>]*>/g) || [];
    if (images.length < CONTENT_THRESHOLDS.theory.minImages) {
      errors.push(`Theory section must have at least ${CONTENT_THRESHOLDS.theory.minImages} images`);
    }
  }
  
  // Validate quiz questions
  if (module.content.quiz) {
    const questions = module.content.quiz.questions;
    
    if (questions.length < CONTENT_THRESHOLDS.quiz.minQuestions) {
      errors.push(`Quiz must have at least ${CONTENT_THRESHOLDS.quiz.minQuestions} questions`);
    }
    
    if (questions.length > CONTENT_THRESHOLDS.quiz.maxQuestions) {
      errors.push(`Quiz must have at most ${CONTENT_THRESHOLDS.quiz.maxQuestions} questions`);
    }
    
    // Validate each question
    questions.forEach((question, index) => {
      if (!question.id) {
        errors.push(`Question ${index + 1} must have an ID`);
      }
      if (!question.question) {
        errors.push(`Question ${index + 1} must have a question text`);
      }
      if (!Array.isArray(question.options) || question.options.length < 2) {
        errors.push(`Question ${index + 1} must have at least 2 options`);
      }
      if (typeof question.correctIndex !== 'number' || question.correctIndex < 0 || question.correctIndex >= question.options.length) {
        errors.push(`Question ${index + 1} must have a valid correctIndex`);
      }
      if (!question.explanation) {
        errors.push(`Question ${index + 1} must have an explanation`);
      }
      if (!['easy', 'medium', 'hard'].includes(question.difficulty)) {
        errors.push(`Question ${index + 1} must have a valid difficulty level`);
      }
    });
  }
  
  // Validate video if present
  if (module.content.video) {
    if (module.content.video.duration < CONTENT_THRESHOLDS.video.minDuration) {
      errors.push(`Video must be at least ${CONTENT_THRESHOLDS.video.minDuration} seconds long`);
    }
    
    if (module.content.video.duration > CONTENT_THRESHOLDS.video.maxDuration) {
      errors.push(`Video must be at most ${CONTENT_THRESHOLDS.video.maxDuration} seconds long`);
    }
    
    if (!module.content.video.url) {
      errors.push('Video must have a URL');
    }
    
    if (!module.content.video.title) {
      errors.push('Video must have a title');
    }
  }
  
  // Validate metadata
  if (!module.metadata.title) {
    errors.push('Module must have a title');
  }
  
  if (!module.metadata.description) {
    errors.push('Module must have a description');
  }
  
  if (!module.metadata.difficulty) {
    errors.push('Module must have a difficulty level');
  }
  
  if (!module.metadata.estimatedTime) {
    errors.push('Module must have an estimated time');
  }
  
  if (!Array.isArray(module.metadata.prerequisites)) {
    errors.push('Module must have a prerequisites array');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
} 