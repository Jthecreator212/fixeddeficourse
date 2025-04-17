'use server'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export async function verifyAdminUser(userId: string, email: string) {
  try {
    // Create a server-side Supabase client with service role
    const cookieStore = await cookies()
    const supabase = createServerComponentClient({ 
      cookies: () => cookieStore
    })

    // Check if the user exists and is an admin
    const { data: user, error } = await supabase
      .from('users')
      .select('is_admin')
      .eq('id', userId)
      .single()

    if (error) {
      console.error('Error checking admin status:', error)
      return { success: false, error: 'Failed to verify admin status' }
    }

    return { 
      success: true, 
      isAdmin: user?.is_admin || false 
    }
  } catch (error) {
    console.error('Unexpected error in verifyAdminUser:', error)
    return { success: false, error: 'An unexpected error occurred' }
  }
} 