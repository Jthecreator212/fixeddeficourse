import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://whdudkmlkxpzbbocqqpy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndoZHVka21sa3hwemJib2NxcXB5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDE5ODI1NywiZXhwIjoyMDU5Nzc0MjU3fQ.ZfTbHJb7vnKcZ1Gm-CQIiIO5x3-qn5zmMDoIm0umB9E'

async function createAdminUser() {
  const supabase = createClient(supabaseUrl, supabaseKey)

  // First, create the auth user
  const { data: authData, error: authError } = await supabase.auth.admin.createUser({
    email: 'admin@example.com',
    password: 'admin123',
    email_confirm: true
  })

  if (authError) {
    console.error('Error creating auth user:', authError)
    return
  }

  if (!authData.user) {
    console.error('No user returned from createUser')
    return
  }

  // Then create the public.users record
  const { error: dbError } = await supabase
    .from('users')
    .insert({
      id: authData.user.id,
      email: authData.user.email,
      is_admin: true
    })

  if (dbError) {
    console.error('Error creating public.users record:', dbError)
    return
  }

  console.log('Admin user created successfully:', authData.user.email)
}

createAdminUser()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Script failed:', error)
    process.exit(1)
  }) 