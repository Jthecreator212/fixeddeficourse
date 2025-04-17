import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://whdudkmlkxpzbbocqqpy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndoZHVka21sa3hwemJib2NxcXB5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDE5ODI1NywiZXhwIjoyMDU5Nzc0MjU3fQ.ZfTbHJb7vnKcZ1Gm-CQIiIO5x3-qn5zmMDoIm0umB9E'

async function testSupabase() {
  console.log('🔍 Starting Supabase Diagnostic Tests...\n')
  
  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  })

  // 1. Test basic connection
  console.log('1. Testing basic connection...')
  const { data: version, error: versionError } = await supabase.rpc('version')
  if (versionError) {
    console.error('❌ Connection test failed:', versionError)
  } else {
    console.log('✅ Connection successful:', version)
  }

  // 2. Check if users table exists
  console.log('\n2. Checking users table...')
  const { data: tableInfo, error: tableError } = await supabase
    .from('information_schema.tables')
    .select('*')
    .eq('table_schema', 'public')
    .eq('table_name', 'users')
    .single()

  if (tableError) {
    console.error('❌ Error checking users table:', tableError)
  } else if (!tableInfo) {
    console.log('❌ Users table not found')
  } else {
    console.log('✅ Users table exists')
  }

  // 3. Check table constraints
  console.log('\n3. Checking table constraints...')
  const { data: constraints, error: constraintsError } = await supabase
    .from('information_schema.table_constraints')
    .select('*')
    .eq('table_schema', 'public')
    .eq('table_name', 'users')

  if (constraintsError) {
    console.error('❌ Error checking constraints:', constraintsError)
  } else {
    console.log('✅ Found constraints:', constraints)
  }

  // 4. Check indexes
  console.log('\n4. Checking indexes...')
  const { data: indexes, error: indexesError } = await supabase
    .from('pg_indexes')
    .select('*')
    .eq('schemaname', 'public')
    .eq('tablename', 'users')

  if (indexesError) {
    console.error('❌ Error checking indexes:', indexesError)
  } else {
    console.log('✅ Found indexes:', indexes)
  }

  // 5. Check RLS policies
  console.log('\n5. Checking RLS policies...')
  const { data: policies, error: policiesError } = await supabase
    .from('pg_policies')
    .select('*')
    .eq('schemaname', 'public')
    .eq('tablename', 'users')

  if (policiesError) {
    console.error('❌ Error checking policies:', policiesError)
  } else {
    console.log('✅ Found policies:', policies)
  }

  // 6. Try to insert a test user
  console.log('\n6. Testing user insertion...')
  const testEmail = `test-${Date.now()}@example.com`
  const { data: insertData, error: insertError } = await supabase
    .from('users')
    .insert({
      email: testEmail,
      is_admin: false
    })
    .select()

  if (insertError) {
    console.error('❌ Error inserting test user:', insertError)
  } else {
    console.log('✅ Test user inserted successfully:', insertData)
    
    // Clean up test user
    const { error: deleteError } = await supabase
      .from('users')
      .delete()
      .eq('email', testEmail)
    
    if (deleteError) {
      console.error('❌ Error cleaning up test user:', deleteError)
    } else {
      console.log('✅ Test user cleaned up successfully')
    }
  }

  console.log('\n🔍 Diagnostic tests complete!')
}

testSupabase()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('❌ Script failed:', error)
    process.exit(1)
  }) 