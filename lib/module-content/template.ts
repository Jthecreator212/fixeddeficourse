import { ModuleInterface, ModuleMetadata } from '@/lib/types/module'
import { z } from 'zod'

// Template validation schemas
const VideoSchema = z.object({
  url: z.string().url(),
  title: z.string().min(1),
  duration: z.number().min(1)
})

const QuizSchema = z.object({
  questions: z.array(z.object({
    id: z.string(),
    question: z.string().min(1),
    options: z.array(z.string().min(1)),
    correctIndex: z.number().min(0),
    explanation: z.string().min(1)
  })),
  passingScore: z.number().min(0).max(100)
})

const TheorySectionSchema = z.object({
  content: z.string().min(100),
  codeExamples: z.array(z.string()).min(1),
  images: z.array(z.string()).min(1)
})

const ModuleContentSchema = z.object({
  video: VideoSchema.optional(),
  theory: TheorySectionSchema,
  quiz: QuizSchema
})

const ModuleMetadataSchema = z.object({
  id: z.string(),
  title: z.string().min(1),
  description: z.string().min(50),
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
  estimatedTime: z.number().min(15),
  prerequisites: z.array(z.string()),
  tags: z.array(z.string()),
  order: z.number().min(1)
})

// Template generator
export function generateModuleTemplate(moduleId: string): { metadata: ModuleMetadata; content: ModuleInterface } {
  const metadata: ModuleMetadata = {
    id: moduleId,
    title: 'Module Title',
    description: 'Module description goes here',
    difficulty: 'beginner',
    estimatedTime: 30,
    prerequisites: [],
    tags: ['tag1', 'tag2'],
    order: 1
  }

  const content: ModuleInterface = {
    renderTheory: () => (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Theory Content</h2>
        <p>Add your theory content here.</p>
        
        {/* Code Example */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <pre className="text-sm">
            <code>
              // Add code example here
            </code>
          </pre>
        </div>
        
        {/* Image Example */}
        <div className="my-4">
          <img 
            src="/images/placeholder.jpg" 
            alt="Add descriptive alt text"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    ),

    renderQuiz: () => (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Quiz</h2>
        <p>Add your quiz questions here.</p>
        
        {/* Quiz Question Example */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Question 1</h3>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="radio" name="q1" className="form-radio" />
              <span>Option 1</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="q1" className="form-radio" />
              <span>Option 2</span>
            </label>
          </div>
        </div>
      </div>
    ),

    video: {
      url: 'https://example.com/video',
      title: 'Module Video Title',
      duration: 30
    }
  }

  return { metadata, content }
}

// Validation function
export function validateModule(metadata: ModuleMetadata, content: ModuleInterface): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  try {
    ModuleMetadataSchema.parse(metadata)
  } catch (error) {
    if (error instanceof z.ZodError) {
      errors.push(...error.errors.map(e => `Metadata: ${e.path.join('.')} - ${e.message}`))
    }
  }

  try {
    ModuleContentSchema.parse(content)
  } catch (error) {
    if (error instanceof z.ZodError) {
      errors.push(...error.errors.map(e => `Content: ${e.path.join('.')} - ${e.message}`))
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  }
} 