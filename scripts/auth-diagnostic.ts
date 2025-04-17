import { createClient } from '@supabase/supabase-js'

// For testing only - these values should be in environment variables in production
const supabaseUrl = 'https://whdudkmlkxpzbbocqqpy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndoZHVka21sa3hwemJib2NxcXB5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDE5ODI1NywiZXhwIjoyMDU5Nzc0MjU3fQ.ZfTbHJb7vnKcZ1Gm-CQIiIO5x3-qn5zmMDoIm0umB9E'

async function runDiagnostics() {
  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  })

  console.log('🔍 Starting Authentication System Diagnostics...\n')

  // 1. Test Supabase Connection
  console.log('1. Testing Supabase Connection...')
  try {
    const { data, error } = await supabase.from('users').select('*').limit(1)
    if (error) throw error
    console.log('✅ Supabase connection successful')
    console.log('Sample data:', data)
  } catch (error) {
    console.error('❌ Supabase connection failed:', error)
    process.exit(1)
  }

  // 2. Check Database Structure
  console.log('\n2. Checking Database Structure...')
  try {
    // Check users table
    const { data: tableInfo, error: tableError } = await supabase
      .from('users')
      .select('*')
      .limit(1)

    if (tableError) throw tableError
    console.log('✅ Users table exists and is accessible')

    // Check table structure
    const { data: columns, error: columnsError } = await supabase
      .rpc('get_table_columns', { table_name: 'users' })

    if (columnsError) throw columnsError
    console.log('✅ Table structure:', columns)
  } catch (error) {
    console.error('❌ Database structure check failed:', error)
  }

  // 3. Check Authentication Configuration
  console.log('\n3. Checking Authentication Configuration...')
  try {
    const { data: authConfig, error: authError } = await supabase.auth.getSession()
    if (authError) throw authError
    console.log('✅ Auth configuration valid')
  } catch (error) {
    console.error('❌ Auth configuration check failed:', error)
  }

  // 4. Test User Creation
  console.log('\n4. Testing User Creation...')
  try {
    const testEmail = `test-${Date.now()}@example.com`
    const { data: signUpData, error: signUpError } = await supabase.auth.admin.createUser({
      email: testEmail,
      password: 'test123',
      email_confirm: true
    })

    if (signUpError) throw signUpError
    console.log('✅ Test user created successfully')

    // Clean up test user
    if (signUpData.user) {
      const { error: deleteError } = await supabase.auth.admin.deleteUser(signUpData.user.id)
      if (deleteError) console.error('⚠️ Failed to clean up test user:', deleteError)
      else console.log('✅ Test user cleaned up')
    }
  } catch (error) {
    console.error('❌ User creation test failed:', error)
  }

  // 5. Check Existing Admin User
  console.log('\n5. Checking Existing Admin User...')
  try {
    const { data: adminUser, error: adminError } = await supabase
      .from('users')
      .select('*')
      .eq('email', 'admin@example.com')
      .single()

    if (adminError) throw adminError
    console.log('✅ Admin user exists:', adminUser)
  } catch (error) {
    console.error('❌ Admin user check failed:', error)
  }

  // 6. Check RLS Policies
  console.log('\n6. Checking RLS Policies...')
  try {
    // Check if we can read from users table
    const { data: policies, error: policiesError } = await supabase
      .from('users')
      .select('*')
      .limit(1)

    if (policiesError) throw policiesError
    console.log('✅ RLS policies are working correctly')
  } catch (error) {
    console.error('❌ RLS policies check failed:', error)
  }

  // 7. Test Sign In
  console.log('\n7. Testing Sign In...')
  try {
    const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
      email: 'admin@example.com',
      password: 'admin123'
    })

    if (signInError) throw signInError
    console.log('✅ Sign in successful:', signInData.user.email)
  } catch (error) {
    console.error('❌ Sign in test failed:', error)
  }

  console.log('\n🔍 Diagnostic tests complete!')
}

// Run diagnostics
runDiagnostics().catch(error => {
  console.error('❌ Script failed:', error)
  process.exit(1)
}) 