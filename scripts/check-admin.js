require('dotenv').config()
const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing required environment variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function checkAdminSetup() {
  try {
    // Check if the is_admin column exists
    const { data: columnCheck, error: columnError } = await supabase
      .from('users')
      .select('is_admin')
      .eq('email', 'jordelwaite18@gmail.com')
      .single()

    if (columnError) {
      console.error('Error checking admin status:', columnError)
      return
    }

    if (!columnCheck) {
      console.log('User not found in database')
      return
    }

    console.log('Admin status:', columnCheck.is_admin)

    // Check if policies exist
    const { data: policies, error: policyError } = await supabase
      .rpc('get_policies')

    if (policyError) {
      console.error('Error checking policies:', policyError)
      return
    }

    console.log('Policies:', policies)
  } catch (error) {
    console.error('Error:', error)
  }
}

checkAdminSetup() 