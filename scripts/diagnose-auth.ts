import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://whdudkmlkxpzbbocqqpy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndoZHVka21sa3hwemJib2NxcXB5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDE5ODI1NywiZXhwIjoyMDU5Nzc0MjU3fQ.ZfTbHJb7vnKcZ1Gm-CQIiIO5x3-qn5zmMDoIm0umB9E'

async function diagnoseAuth() {
  const supabase = createClient(supabaseUrl, supabaseKey)

  console.log('🔍 Starting Supabase Auth Diagnosis...\n')

  // 1. Check if auth.users table exists and has the admin user
  console.log('1. Checking auth.users table...')
  const { data: authUsers, error: authError } = await supabase
    .from('auth.users')
    .select('*')
    .eq('email', 'admin@example.com')

  if (authError) {
    console.error('❌ Error checking auth.users:', authError)
  } else if (authUsers && authUsers.length > 0) {
    console.log('✅ Admin user exists in auth.users')
    console.log('Admin user details:', authUsers[0])
  } else {
    console.log('❌ Admin user not found in auth.users')
  }

  // 2. Check if public.users table exists and has the admin user
  console.log('\n2. Checking public.users table...')
  const { data: publicUsers, error: publicError } = await supabase
    .from('users')
    .select('*')
    .eq('email', 'admin@example.com')

  if (publicError) {
    console.error('❌ Error checking public.users:', publicError)
  } else if (publicUsers && publicUsers.length > 0) {
    console.log('✅ Admin user exists in public.users')
    console.log('Admin user details:', publicUsers[0])
  } else {
    console.log('❌ Admin user not found in public.users')
  }

  // 3. Check RLS policies
  console.log('\n3. Checking RLS policies...')
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

  // 4. Check table structure
  console.log('\n4. Checking table structure...')
  const { data: tableInfo, error: tableError } = await supabase
    .from('information_schema.columns')
    .select('*')
    .eq('table_schema', 'public')
    .eq('table_name', 'users')

  if (tableError) {
    console.error('❌ Error checking table structure:', tableError)
  } else {
    console.log('✅ Table columns:', tableInfo)
  }

  // 5. Check triggers
  console.log('\n5. Checking triggers...')
  const { data: triggers, error: triggersError } = await supabase
    .from('information_schema.triggers')
    .select('*')
    .eq('event_object_schema', 'public')
    .eq('event_object_table', 'users')

  if (triggersError) {
    console.error('❌ Error checking triggers:', triggersError)
  } else {
    console.log('✅ Found triggers:', triggers)
  }

  console.log('\n🔍 Diagnosis complete!')
}

diagnoseAuth()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Script failed:', error)
    process.exit(1)
  }) 