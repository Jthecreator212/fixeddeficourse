import { ModuleMetadata, ModuleInterface } from '@/lib/types/module'
import { moduleCache } from './cache'
import { glob } from 'glob'
import path from 'path'
import fs from 'fs/promises'

export interface ModuleCategory {
  id: string
  name: string
  description: string
  order: number
  modules: string[] // module IDs
}

export const moduleCategories: ModuleCategory[] = [
  {
    id: 'blockchain',
    name: 'Blockchain Fundamentals',
    description: 'Learn the basics of blockchain technology',
    order: 1,
    modules: [
      'blockchain-basics-getting-started',
      'blockchain-fundamentals'
    ]
  },
  {
    id: 'defi',
    name: 'DeFi Essentials',
    description: 'Core concepts of Decentralized Finance',
    order: 2,
    modules: [
      'introduction-to-defi',
      'defi-lending-protocols',
      'defi-liquidity-pools',
      'defi-entering-first-liquidity-pool',
      'defi-7-rules-liquidity-pool'
    ]
  },
  {
    id: 'advanced',
    name: 'Advanced DeFi',
    description: 'Advanced DeFi concepts and strategies',
    order: 3,
    modules: [
      'defi-as-a-business'
    ]
  }
]

// Import all module metadata
const moduleMetadata: Record<string, ModuleMetadata> = {
  'blockchain-basics-getting-started': {
    id: 'blockchain-basics-getting-started',
    title: 'Blockchain Basics: Getting Started',
    description: 'Introduction to blockchain technology and its fundamental concepts',
    difficulty: 'beginner',
    estimatedTime: 30,
    prerequisites: [],
    tags: ['blockchain', 'basics', 'fundamentals'],
    order: 1
  },
  'blockchain-fundamentals': {
    id: 'blockchain-fundamentals',
    title: 'Blockchain Fundamentals',
    description: 'Deep dive into blockchain technology and its components',
    difficulty: 'beginner',
    estimatedTime: 45,
    prerequisites: ['blockchain-basics-getting-started'],
    tags: ['blockchain', 'fundamentals', 'technology'],
    order: 2
  },
  'introduction-to-defi': {
    id: 'introduction-to-defi',
    title: 'Introduction to DeFi',
    description: 'Learn the basics of Decentralized Finance',
    difficulty: 'beginner',
    estimatedTime: 40,
    prerequisites: ['blockchain-fundamentals'],
    tags: ['defi', 'basics', 'introduction'],
    order: 3
  },
  'defi-lending-protocols': {
    id: 'defi-lending-protocols',
    title: 'DeFi Lending Protocols',
    description: 'Understanding lending and borrowing in DeFi',
    difficulty: 'intermediate',
    estimatedTime: 50,
    prerequisites: ['introduction-to-defi'],
    tags: ['defi', 'lending', 'protocols'],
    order: 4
  },
  'defi-liquidity-pools': {
    id: 'defi-liquidity-pools',
    title: 'DeFi: Liquidity Pools',
    description: 'Learn about liquidity pools and their role in DeFi',
    difficulty: 'intermediate',
    estimatedTime: 45,
    prerequisites: ['introduction-to-defi'],
    tags: ['defi', 'liquidity', 'pools'],
    order: 5
  },
  'defi-entering-first-liquidity-pool': {
    id: 'defi-entering-first-liquidity-pool',
    title: 'DeFi: Entering Your First Liquidity Pool',
    description: 'Practical guide to participating in liquidity pools',
    difficulty: 'intermediate',
    estimatedTime: 60,
    prerequisites: ['defi-liquidity-pools'],
    tags: ['defi', 'liquidity', 'pools', 'practical'],
    order: 6
  },
  'defi-7-rules-liquidity-pool': {
    id: 'defi-7-rules-liquidity-pool',
    title: 'DeFi: 7 Rules for Liquidity Pools',
    description: 'Essential rules for successful liquidity pool participation',
    difficulty: 'intermediate',
    estimatedTime: 40,
    prerequisites: ['defi-entering-first-liquidity-pool'],
    tags: ['defi', 'liquidity', 'pools', 'rules'],
    order: 7
  },
  'defi-as-a-business': {
    id: 'defi-as-a-business',
    title: 'DeFi as a Business',
    description: 'Advanced strategies for building and managing DeFi businesses',
    difficulty: 'advanced',
    estimatedTime: 90,
    prerequisites: ['defi-lending-protocols', 'defi-7-rules-liquidity-pool'],
    tags: ['defi', 'business', 'advanced', 'strategy'],
    order: 8
  }
}

// Module registry functions
export async function getModuleMetadata(moduleId: string): Promise<ModuleMetadata | null> {
  // Check cache first
  const cached = moduleCache.getModuleMetadata(moduleId)
  if (cached) return cached

  // If not in cache, get from registry
  const metadata = moduleMetadata[moduleId]
  if (metadata) {
    // Cache the result
    moduleCache.setModuleMetadata(moduleId, metadata)
    return metadata
  }

  return null
}

export async function getAllModuleMetadata(): Promise<Record<string, ModuleMetadata>> {
  // Check cache first
  const cached = moduleCache.getAllModules()
  if (cached) return cached

  // If not in cache, return all metadata
  moduleCache.setAllModules(moduleMetadata)
  return moduleMetadata
}

export function getModuleCategory(moduleId: string): ModuleCategory | undefined {
  return moduleCategories.find(category => category.modules.includes(moduleId))
}

export function getModulesByCategory(categoryId: string): ModuleMetadata[] {
  const category = moduleCategories.find(c => c.id === categoryId)
  if (!category) return []
  
  return category.modules
    .map(moduleId => moduleMetadata[moduleId])
    .filter(Boolean)
    .sort((a, b) => a.order - b.order)
}

export function getPrerequisites(moduleId: string): ModuleMetadata[] {
  const module = moduleMetadata[moduleId]
  if (!module) return []
  
  return module.prerequisites
    .map(prereqId => moduleMetadata[prereqId])
    .filter(Boolean)
}

export async function getNextModule(moduleId: string): Promise<ModuleMetadata | null> {
  const allModules = await getAllModuleMetadata()
  const moduleArray = Object.values(allModules).sort((a, b) => a.order - b.order)
  const currentIndex = moduleArray.findIndex((m: ModuleMetadata) => m.id === moduleId)
  
  if (currentIndex === -1 || currentIndex === moduleArray.length - 1) {
    return null
  }
  
  return moduleArray[currentIndex + 1]
}

// Clear cache on development
if (process.env.NODE_ENV === 'development') {
  moduleCache.clear()
}

const MODULES_DIR = path.join(process.cwd(), 'lib', 'module-content')

export async function getAllModules(): Promise<ModuleInterface[]> {
  const moduleFiles = await glob('**/index.tsx', { cwd: MODULES_DIR })
  const modules: ModuleInterface[] = []

  for (const file of moduleFiles) {
    const modulePath = path.join(MODULES_DIR, file)
    const moduleContent = await import(modulePath)
    
    if (moduleContent.module) {
      modules.push(moduleContent.module)
    }
  }

  return modules.sort((a, b) => a.metadata.order - b.metadata.order)
}

export async function getModuleById(id: string): Promise<ModuleInterface | null> {
  const modules = await getAllModules()
  return modules.find(module => module.metadata.id === id) || null
}

export async function getNextModule(currentModuleId: string): Promise<ModuleInterface | null> {
  const modules = await getAllModules()
  const currentIndex = modules.findIndex(module => module.metadata.id === currentModuleId)
  
  if (currentIndex === -1 || currentIndex === modules.length - 1) {
    return null
  }
  
  return modules[currentIndex + 1]
}

export async function getPreviousModule(currentModuleId: string): Promise<ModuleInterface | null> {
  const modules = await getAllModules()
  const currentIndex = modules.findIndex(module => module.metadata.id === currentModuleId)
  
  if (currentIndex <= 0) {
    return null
  }
  
  return modules[currentIndex - 1]
}

export async function saveModule(module: ModuleInterface): Promise<void> {
  const moduleDir = path.join(MODULES_DIR, module.metadata.id)
  await fs.mkdir(moduleDir, { recursive: true })
  
  const modulePath = path.join(moduleDir, 'index.tsx')
  const content = `import { ModuleInterface } from '@/lib/types/module'\n\nexport const module: ModuleInterface = ${JSON.stringify(module, null, 2)}`
  
  await fs.writeFile(modulePath, content)
}

export async function deleteModule(moduleId: string): Promise<void> {
  const moduleDir = path.join(MODULES_DIR, moduleId)
  await fs.rm(moduleDir, { recursive: true, force: true })
} 