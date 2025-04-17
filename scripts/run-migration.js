require('dotenv').config()
const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing required environment variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function runMigration() {
  try {
    // Read the migration file
    const migrationPath = path.join(__dirname, '../migrations/combined-admin-setup.sql')
    const migrationSql = fs.readFileSync(migrationPath, 'utf8')

    // Execute the SQL directly
    const { error } = await supabase.rpc('exec_sql', {
      sql: migrationSql
    })

    if (error) {
      console.error('Error executing migration:', error)
      return
    }

    console.log('Migration completed successfully')
  } catch (error) {
    console.error('Error running migration:', error)
  }
}

runMigration() 