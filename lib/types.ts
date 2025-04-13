export interface ModuleConfig {
  id: string;
  title: string;
  description: string;
  order: number;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ModuleContent {
  introduction: {
    title: string;
    description: string;
    learningObjectives: string[];
  };
  mainContent: {
    sections: {
      title: string;
      content: string;
      examples?: {
        title: string;
        description: string;
        code?: string;
      }[];
    }[];
  };
  lookingAhead: {
    title: string;
    content: string;
    nextSteps: string[];
  };
}

export interface Quiz {
  id: string;
  moduleId: string;
  questions: {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  }[];
  passingScore: number;
}

export interface UserProgress {
  userId: string;
  moduleId: string;
  completed: boolean;
  lastAccessed: string;
  quizScore?: number;
}

export interface AdminModuleFormData {
  title: string;
  description: string;
  order: number;
  isPublished: boolean;
  content: ModuleContent;
} 