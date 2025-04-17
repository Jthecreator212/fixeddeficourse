import { describe, it, expect } from 'vitest'
import { validateModuleContent, validateModuleMetadata, validateAllModules } from '../validator'
import { ModuleContentInterface, ModuleMetadata } from '@/lib/types/module'

describe('Module Validator', () => {
  describe('validateModuleContent', () => {
    it('should validate a complete module content', () => {
      const validContent: ModuleContentInterface = {
        renderTheory: () => <div>Theory content</div>,
        renderQuiz: () => <div>Quiz content</div>,
        video: {
          url: 'https://example.com/video',
          title: 'Module Video'
        }
      }

      const result = validateModuleContent('test-module', validContent)
      expect(result.isValid).toBe(true)
      expect(result.errors).toHaveLength(0)
    })

    it('should detect missing required sections', () => {
      const invalidContent: Partial<ModuleContentInterface> = {
        renderTheory: () => <div>Theory content</div>
        // Missing renderQuiz
      }

      const result = validateModuleContent('test-module', invalidContent as ModuleContentInterface)
      expect(result.isValid).toBe(false)
      expect(result.errors).toContainEqual({
        moduleId: 'test-module',
        message: 'Missing required quiz section',
        severity: 'error'
      })
    })

    it('should validate video section when present', () => {
      const contentWithInvalidVideo: ModuleContentInterface = {
        renderTheory: () => <div>Theory content</div>,
        renderQuiz: () => <div>Quiz content</div>,
        video: {
          // Missing url
          title: 'Module Video'
        }
      }

      const result = validateModuleContent('test-module', contentWithInvalidVideo)
      expect(result.isValid).toBe(false)
      expect(result.errors).toContainEqual({
        moduleId: 'test-module',
        message: 'Video section must include a URL',
        severity: 'error'
      })
    })
  })

  describe('validateModuleMetadata', () => {
    it('should validate complete metadata', () => {
      const validMetadata: ModuleMetadata = {
        id: 'test-module',
        title: 'Test Module',
        description: 'A test module',
        difficulty: 'beginner',
        estimatedTime: 30,
        prerequisites: []
      }

      const result = validateModuleMetadata('test-module', validMetadata)
      expect(result.isValid).toBe(true)
      expect(result.errors).toHaveLength(0)
    })

    it('should detect missing required fields', () => {
      const invalidMetadata: Partial<ModuleMetadata> = {
        id: 'test-module',
        title: 'Test Module'
        // Missing description, difficulty, estimatedTime
      }

      const result = validateModuleMetadata('test-module', invalidMetadata as ModuleMetadata)
      expect(result.isValid).toBe(false)
      expect(result.errors).toHaveLength(3)
    })

    it('should validate difficulty level', () => {
      const metadataWithInvalidDifficulty: ModuleMetadata = {
        id: 'test-module',
        title: 'Test Module',
        description: 'A test module',
        difficulty: 'invalid' as any,
        estimatedTime: 30,
        prerequisites: []
      }

      const result = validateModuleMetadata('test-module', metadataWithInvalidDifficulty)
      expect(result.isValid).toBe(false)
      expect(result.errors).toContainEqual({
        moduleId: 'test-module',
        message: 'Invalid difficulty level. Must be one of: beginner, intermediate, advanced',
        severity: 'error'
      })
    })
  })

  describe('validateAllModules', () => {
    it('should validate all modules in the registry', () => {
      const result = validateAllModules()
      expect(result).toHaveProperty('isValid')
      expect(result).toHaveProperty('errors')
      
      // Log validation results for debugging
      if (!result.isValid) {
        console.log('Module validation errors:', result.errors)
      }
    })
  })
}) 