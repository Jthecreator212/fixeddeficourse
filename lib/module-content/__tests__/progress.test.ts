import { describe, it, expect, beforeEach, vi } from 'vitest'
import {
  getModuleProgress,
  updateModuleProgress,
  markModuleCompleted,
  addTimeSpent,
  toggleBookmark,
  getBookmarkedModules,
  getPrerequisitesCompletion,
  getCourseProgress,
  resetModuleProgress,
  resetAllProgress
} from '../progress'

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn()
}

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
})

describe('Progress Tracking', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    localStorageMock.getItem.mockReturnValue(null)
  })

  it('should initialize progress for a new module', () => {
    const progress = getModuleProgress('test-module')
    expect(progress).toEqual({
      moduleId: 'test-module',
      completed: false,
      lastAccessed: expect.any(Date),
      timeSpent: 0,
      bookmarked: false
    })
  })

  it('should update module progress', () => {
    updateModuleProgress('test-module', { completed: true })
    expect(localStorageMock.setItem).toHaveBeenCalled()
  })

  it('should mark a module as completed', () => {
    markModuleCompleted('test-module', 90)
    expect(localStorageMock.setItem).toHaveBeenCalled()
  })

  it('should add time spent on a module', () => {
    addTimeSpent('test-module', 30)
    expect(localStorageMock.setItem).toHaveBeenCalled()
  })

  it('should toggle bookmark status', () => {
    toggleBookmark('test-module')
    expect(localStorageMock.setItem).toHaveBeenCalled()
  })

  it('should get bookmarked modules', () => {
    localStorageMock.getItem.mockReturnValue(
      JSON.stringify({
        'test-module': {
          moduleId: 'test-module',
          completed: false,
          lastAccessed: new Date().toISOString(),
          timeSpent: 0,
          bookmarked: true
        }
      })
    )
    const bookmarked = getBookmarkedModules()
    expect(bookmarked).toEqual(['test-module'])
  })

  it('should get prerequisites completion status', () => {
    localStorageMock.getItem.mockReturnValue(
      JSON.stringify({
        'prereq-1': {
          moduleId: 'prereq-1',
          completed: true,
          lastAccessed: new Date().toISOString(),
          timeSpent: 0,
          bookmarked: false
        },
        'prereq-2': {
          moduleId: 'prereq-2',
          completed: false,
          lastAccessed: new Date().toISOString(),
          timeSpent: 0,
          bookmarked: false
        }
      })
    )
    const completion = getPrerequisitesCompletion('test-module', ['prereq-1', 'prereq-2'])
    expect(completion).toEqual({
      completed: ['prereq-1'],
      pending: ['prereq-2']
    })
  })

  it('should get course progress', () => {
    localStorageMock.getItem.mockReturnValue(
      JSON.stringify({
        'module-1': {
          moduleId: 'module-1',
          completed: true,
          lastAccessed: new Date().toISOString(),
          timeSpent: 30,
          bookmarked: false
        },
        'module-2': {
          moduleId: 'module-2',
          completed: false,
          lastAccessed: new Date().toISOString(),
          timeSpent: 15,
          bookmarked: false
        }
      })
    )
    const progress = getCourseProgress()
    expect(progress).toEqual({
      totalModules: 2,
      completedModules: 1,
      totalTimeSpent: 45,
      completionPercentage: 50
    })
  })

  it('should reset module progress', () => {
    resetModuleProgress('test-module')
    expect(localStorageMock.setItem).toHaveBeenCalled()
  })

  it('should reset all progress', () => {
    resetAllProgress()
    expect(localStorageMock.removeItem).toHaveBeenCalled()
  })
}) 