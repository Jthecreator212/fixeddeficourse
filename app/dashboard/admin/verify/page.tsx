import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { verifyAdminUser } from '@/app/actions/admin'

export default async function AdminVerifyPage() {
  const supabase = createServerComponentClient({ cookies })
  
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect('/auth/sign-in?redirect=%2Fdashboard%2Fadmin')
  }

  const result = await verifyAdminUser(session.user.id, session.user.email!)

  if (!result.success) {
    console.error('Admin verification failed:', result.error)
    redirect('/?error=admin_verification_failed')
  }

  redirect('/dashboard/admin')
} 