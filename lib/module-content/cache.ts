import { ModuleInterface, ModuleMetadata } from '@/lib/types/module'

interface CacheEntry<T> {
  data: T
  timestamp: number
  ttl: number
}

class ModuleCache {
  private static instance: ModuleCache
  private cache: Map<string, CacheEntry<any>>
  private defaultTTL: number = 5 * 60 * 1000 // 5 minutes

  private constructor() {
    this.cache = new Map()
  }

  static getInstance(): ModuleCache {
    if (!ModuleCache.instance) {
      ModuleCache.instance = new ModuleCache()
    }
    return ModuleCache.instance
  }

  set<T>(key: string, data: T, ttl?: number): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl: ttl || this.defaultTTL
    })
  }

  get<T>(key: string): T | null {
    const entry = this.cache.get(key)
    if (!entry) return null

    if (Date.now() - entry.timestamp > entry.ttl) {
      this.cache.delete(key)
      return null
    }

    return entry.data as T
  }

  clear(): void {
    this.cache.clear()
  }

  // Module-specific methods
  setModuleMetadata(moduleId: string, metadata: ModuleMetadata): void {
    this.set(`metadata:${moduleId}`, metadata)
  }

  getModuleMetadata(moduleId: string): ModuleMetadata | null {
    return this.get(`metadata:${moduleId}`)
  }

  setModuleContent(moduleId: string, content: ModuleInterface): void {
    this.set(`content:${moduleId}`, content)
  }

  getModuleContent(moduleId: string): ModuleInterface | null {
    return this.get(`content:${moduleId}`)
  }

  setAllModules(modules: Record<string, ModuleMetadata>): void {
    this.set('all:modules', modules, 60 * 60 * 1000) // 1 hour TTL
  }

  getAllModules(): Record<string, ModuleMetadata> | null {
    return this.get('all:modules')
  }
}

export const moduleCache = ModuleCache.getInstance() 