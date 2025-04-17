import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://whdudkmlkxpzbbocqqpy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndoZHVka21sa3hwemJib2NxcXB5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDE5ODI1NywiZXhwIjoyMDU5Nzc0MjU3fQ.ZfTbHJb7vnKcZ1Gm-CQIiIO5x3-qn5zmMDoIm0umB9E'

async function createAdminUser() {
  console.log('🔧 Creating admin user...')
  
  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  })

  try {
    // 1. Create the auth user
    console.log('1. Creating auth user...')
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email: 'admin@example.com',
      password: 'admin123',
      email_confirm: true,
      user_metadata: {
        is_admin: true
      }
    })

    if (authError) {
      console.error('❌ Error creating auth user:', authError)
      return
    }

    if (!authData.user) {
      console.error('❌ No user returned from createUser')
      return
    }

    console.log('✅ Auth user created:', authData.user.id)

    // 2. Create the public.users record
    console.log('2. Creating public.users record...')
    const { error: dbError } = await supabase
      .from('users')
      .insert({
        id: authData.user.id,
        email: authData.user.email,
        is_admin: true
      })

    if (dbError) {
      console.error('❌ Error creating public.users record:', dbError)
      return
    }

    console.log('✅ Public users record created')

    // 3. Verify the user was created correctly
    console.log('3. Verifying user creation...')
    const { data: verifyData, error: verifyError } = await supabase
      .from('users')
      .select('*')
      .eq('email', 'admin@example.com')
      .single()

    if (verifyError) {
      console.error('❌ Error verifying user:', verifyError)
      return
    }

    console.log('✅ User verified:', verifyData)
    console.log('\n📧 Email: admin@example.com')
    console.log('🔑 Password: admin123')
    console.log('🆔 User ID:', authData.user.id)

  } catch (error) {
    console.error('❌ Unexpected error:', error)
  }
}

createAdminUser()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('❌ Script failed:', error)
    process.exit(1)
  }) 