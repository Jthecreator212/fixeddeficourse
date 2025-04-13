import { ModuleContent } from './types';

// This function generates a standard template for a module with all required sections
export function generateModuleTemplate(): ModuleContent {
  return {
    introduction: {
      title: '',
      description: '',
      learningObjectives: [],
    },
    mainContent: {
      sections: [],
    },
    lookingAhead: {
      title: '',
      content: '',
      nextSteps: [],
    },
  };
}

export function validateModuleContent(content: ModuleContent): boolean {
  if (!content.introduction.title || !content.introduction.description) {
    return false;
  }
  
  if (content.mainContent.sections.length === 0) {
    return false;
  }
  
  for (const section of content.mainContent.sections) {
    if (!section.title || !section.content) {
      return false;
    }
  }
  
  return true;
}
