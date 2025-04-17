import { config } from 'dotenv'
import path from 'path'

// Load environment variables from .env and .env.local
config({ path: path.resolve(process.cwd(), '.env') })
config({ path: path.resolve(process.cwd(), '.env.local') })

// Import and run diagnostics
import('./auth-diagnostic') 