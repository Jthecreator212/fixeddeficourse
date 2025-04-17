import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

const MODULE_TEMPLATE = `import { ModuleInterface } from '@/lib/types/module'

export const moduleContent: ModuleInterface = {
  renderTheory: () => {
    return (
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
    )
  },

  renderQuiz: () => {
    return (
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
    )
  },

  video: {
    url: 'https://example.com/video',
    title: 'Module Video Title',
    duration: 30 // in minutes
  }
}
`

const METADATA_TEMPLATE = `{
  "id": "MODULE_ID",
  "title": "Module Title",
  "description": "Module description goes here",
  "difficulty": "beginner",
  "estimatedTime": 30,
  "prerequisites": [],
  "tags": ["tag1", "tag2"],
  "order": 1
}
`

function generateModule(moduleId: string) {
  const moduleDir = path.join(process.cwd(), 'lib/module-content')
  const moduleFile = path.join(moduleDir, `${moduleId}.tsx`)
  const metadataFile = path.join(moduleDir, 'registry.ts')

  // Check if module already exists
  if (fs.existsSync(moduleFile)) {
    console.error(`Module ${moduleId} already exists!`)
    process.exit(1)
  }

  // Create module file
  fs.writeFileSync(moduleFile, MODULE_TEMPLATE)
  console.log(`Created module file: ${moduleFile}`)

  // Add metadata to registry
  const metadataContent = fs.readFileSync(metadataFile, 'utf-8')
  const metadata = JSON.parse(METADATA_TEMPLATE.replace('MODULE_ID', moduleId))
  
  // Find the last order number
  const lastOrderMatch = metadataContent.match(/order": (\d+)/g)
  const lastOrder = lastOrderMatch ? Math.max(...lastOrderMatch.map(m => parseInt(m.match(/\d+/)![0]))) : 0
  metadata.order = lastOrder + 1

  // Insert metadata into registry
  const insertPoint = metadataContent.lastIndexOf('}')
  const newMetadataContent = metadataContent.slice(0, insertPoint) + 
    `,\n  "${moduleId}": ${JSON.stringify(metadata, null, 2)}\n}`
  
  fs.writeFileSync(metadataFile, newMetadataContent)
  console.log(`Added metadata to registry: ${metadataFile}`)

  // Format files
  execSync(`pnpm format ${moduleFile} ${metadataFile}`)
  console.log('Formatted files')

  console.log('\n🎉 Module generated successfully!')
  console.log('Next steps:')
  console.log('1. Update the module content in:', moduleFile)
  console.log('2. Update the metadata in:', metadataFile)
  console.log('3. Add any required images to the public/images directory')
  console.log('4. Run pnpm validate-modules to check for issues')
}

// Get module ID from command line
const moduleId = process.argv[2]
if (!moduleId) {
  console.error('Please provide a module ID')
  console.error('Usage: pnpm generate-module <module-id>')
  process.exit(1)
}

generateModule(moduleId) 