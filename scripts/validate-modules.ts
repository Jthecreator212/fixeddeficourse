import { validateAllModules } from '../lib/module-content/validator'

function formatError(error: { moduleId: string; message: string; severity: string }) {
  return `[${error.severity.toUpperCase()}] ${error.moduleId}: ${error.message}`
}

async function main() {
  console.log('🔍 Validating all modules...')
  
  const result = validateAllModules()
  
  if (result.isValid) {
    console.log('✅ All modules are valid!')
    process.exit(0)
  }
  
  console.log('\n❌ Validation errors found:')
  result.errors.forEach(error => {
    console.log(formatError(error))
  })
  
  process.exit(1)
}

main().catch(error => {
  console.error('Error during validation:', error)
  process.exit(1)
}) 