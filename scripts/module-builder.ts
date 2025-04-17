import { program } from 'commander'
import { ModuleInterface, ModuleContent, ModuleMetadata } from '../lib/types/module'
import { validateModuleContent } from '../lib/module-content/validator'
import { glob } from 'glob'
import path from 'path'
import fs from 'fs/promises'

program
  .name('module-builder')
  .description('CLI tool for creating and validating DeFi course modules')
  .version('0.1.0')

interface CreateOptions {
  name: string
  description: string
  level: string
}

program
  .command('create')
  .description('Create a new module')
  .requiredOption('-n, --name <name>', 'Module name')
  .requiredOption('-d, --description <description>', 'Module description')
  .requiredOption('-l, --level <level>', 'Module difficulty level (beginner|intermediate|advanced)')
  .action(async (options: CreateOptions) => {
    const moduleName = options.name.toLowerCase().replace(/\s+/g, '-')
    const moduleDir = path.join(process.cwd(), 'lib', 'module-content', moduleName)
    
    try {
      await fs.mkdir(moduleDir, { recursive: true })
      
      const moduleContent: ModuleContent = {
        renderTheory: () => <div>Module theory content</div>,
        renderQuiz: () => <div>Module quiz content</div>
      }
      
      const moduleMetadata: ModuleMetadata = {
        title: options.name,
        description: options.description,
        difficulty: options.level as 'beginner' | 'intermediate' | 'advanced',
        estimatedTime: 30,
        prerequisites: []
      }
      
      const module: ModuleInterface = {
        id: moduleName,
        metadata: moduleMetadata,
        content: moduleContent
      }
      
      await fs.writeFile(
        path.join(moduleDir, 'index.tsx'),
        `import { ModuleInterface } from '../../types/module';\n\nexport const module: ModuleInterface = ${JSON.stringify(module, null, 2)};`
      )
      
      console.log(`Module ${moduleName} created successfully!`)
    } catch (error) {
      console.error('Error creating module:', error)
      process.exit(1)
    }
  })

program
  .command('validate')
  .description('Validate all modules')
  .action(async () => {
    try {
      const moduleFiles = await glob('lib/module-content/**/index.tsx')
      let hasErrors = false
      
      for (const file of moduleFiles) {
        const modulePath = path.join(process.cwd(), file)
        const moduleContent = await import(modulePath)
        
        if (!moduleContent.module) {
          console.error(`Error: No module export found in ${file}`)
          hasErrors = true
          continue
        }
        
        const validationResult = validateModuleContent(moduleContent.module)
        if (!validationResult.isValid) {
          console.error(`Validation errors in ${file}:`)
          validationResult.errors.forEach(error => console.error(`- ${error}`))
          hasErrors = true
        }
      }
      
      if (hasErrors) {
        process.exit(1)
      }
      
      console.log('All modules validated successfully!')
    } catch (error) {
      console.error('Error validating modules:', error)
      process.exit(1)
    }
  })

program.parse(process.argv) 