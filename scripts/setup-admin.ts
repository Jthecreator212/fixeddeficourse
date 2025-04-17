import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://whdudkmlkxpzbbocqqpy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndoZHVka21sa3hwemJib2NxcXB5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDE5ODI1NywiZXhwIjoyMDU5Nzc0MjU3fQ.ZfTbHJb7vnKcZ1Gm-CQIiIO5x3-qn5zmMDoIm0umB9E'

async function setupAdmin() {
  console.log('🔧 Setting up admin user...\n')
  
  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  })

  try {
    // 1. Create auth user
    console.log('1. Creating auth user...')
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email: 'admin@example.com',
      password: 'admin123',
      email_confirm: true
    })

    if (authError) throw authError
    console.log('✅ Auth user created successfully')

    // 2. Create public user record
    console.log('\n2. Creating public user record...')
    const { error: userError } = await supabase
      .from('users')
      .upsert({
        id: authData.user.id,
        email: 'admin@example.com',
        full_name: 'Admin User',
        is_admin: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      })

    if (userError) throw userError
    console.log('✅ Public user record created successfully')

    // 3. Verify admin status
    console.log('\n3. Verifying admin status...')
    const { data: adminUser, error: verifyError } = await supabase
      .from('users')
      .select('*')
      .eq('email', 'admin@example.com')
      .single()

    if (verifyError) throw verifyError
    console.log('✅ Admin user verified:', adminUser)

    console.log('\n✨ Admin setup complete!')
    console.log('You can now sign in with:')
    console.log('Email: admin@example.com')
    console.log('Password: admin123')
  } catch (error) {
    console.error('❌ Admin setup failed:', error)
    process.exit(1)
  }
}

setupAdmin() 