'use server'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function signInWithAdminCheck(email: string, password: string, redirectTo?: string) {
  const supabase = createServerComponentClient({ cookies })
  
  try {
    // Sign in the user
    const { data: { session }, error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (signInError) {
      console.error('Sign in error:', signInError)
      return { error: signInError.message }
    }

    if (!session) {
      return { error: 'No session returned after sign in' }
    }

    try {
      // First, try to get the user's admin status
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('is_admin')
        .eq('id', session.user.id)
        .single()

      // If user doesn't exist in users table, create them
      if (userError?.code === 'PGRST116') {
        console.log('User not found in public.users, creating record...')
        
        // Create the user with admin privileges
        const { error: insertError } = await supabase
          .from('users')
          .insert({
            id: session.user.id,
            email: session.user.email,
            is_admin: true, // Set as admin by default
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          })

        if (insertError) {
          console.error('Error creating user:', insertError)
          return { error: 'Failed to create user profile' }
        }

        // After creating the user, redirect to admin dashboard
        if (redirectTo?.includes('/admin')) {
          redirect(redirectTo)
        } else {
          redirect('/dashboard')
        }
      } else if (userError) {
        console.error('Error checking admin status:', userError)
        return { error: 'Failed to verify user status' }
      }

      // Handle redirect based on admin status
      if (redirectTo?.includes('/admin')) {
        if (userData?.is_admin) {
          redirect(redirectTo)
        } else {
          redirect('/?access=denied')
        }
      } else {
        redirect(redirectTo || '/dashboard')
      }

      return { success: true }
    } catch (dbError) {
      console.error('Database error:', dbError)
      return { error: 'Database error occurred. Please try again later.' }
    }
  } catch (error) {
    console.error('Unexpected error during sign in:', error)
    return { error: 'An unexpected error occurred' }
  }
} 