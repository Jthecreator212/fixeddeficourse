"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { supabase } from '@/lib/supabase'
import { AdminUser, AdminStats, AdminActivity, AdminPermission } from '@/types/admin'

interface AdminContextType {
  isAdmin: boolean
  adminData: AdminUser | null
  permissions: AdminPermission[]
  stats: AdminStats | null
  activities: AdminActivity[]
  isLoading: boolean
  error: string | null
  refreshStats: () => Promise<void>
  refreshActivities: () => Promise<void>
  setIsAdmin: (isAdmin: boolean) => void
}

const AdminContext = createContext<AdminContextType | undefined>(undefined)

export function AdminProvider({ children }: { children: ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false)
  const [adminData, setAdminData] = useState<AdminUser | null>(null)
  const [permissions, setPermissions] = useState<AdminPermission[]>([])
  const [stats, setStats] = useState<AdminStats | null>(null)
  const [activities, setActivities] = useState<AdminActivity[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    checkAdminStatus()
  }, [])

  const checkAdminStatus = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        setIsAdmin(false)
        setAdminData(null)
        setPermissions([])
        setIsLoading(false)
        return
      }

      const { data: user, error: userError } = await supabase
        .from('users')
        .select('is_admin')
        .eq('id', session.user.id)
        .single()

      if (userError) {
        console.error('Error checking admin status:', userError)
        setError('Failed to verify admin status')
        setIsAdmin(false)
      } else {
        setIsAdmin(user?.is_admin || false)
      }

      // Only fetch admin data if user is admin
      if (user?.is_admin) {
        // Initial data fetch
        await Promise.all([
          refreshStats(),
          refreshActivities()
        ])
      }

      setIsLoading(false)
    } catch (err) {
      console.error('Error in admin check:', err)
      setError('Failed to check admin status')
      setIsLoading(false)
    }
  }

  const refreshStats = async () => {
    try {
      const { data, error } = await supabase
        .from('admin_stats')
        .select('*')
        .single()

      if (error) {
        if (error.code === 'PGRST116') {
          // Table doesn't exist yet
          setStats(null)
          return
        }
        throw error
      }
      setStats(data)
      setError(null)
    } catch (err) {
      console.error('Error refreshing stats:', err)
      setError('Failed to refresh stats')
    }
  }

  const refreshActivities = async () => {
    try {
      const { data, error } = await supabase
        .from('admin_activities')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10)

      if (error) {
        if (error.code === 'PGRST116') {
          // Table doesn't exist yet
          setActivities([])
          return
        }
        throw error
      }
      setActivities(data || [])
      setError(null)
    } catch (err) {
      console.error('Error refreshing activities:', err)
      setError('Failed to refresh activities')
    }
  }

  return (
    <AdminContext.Provider value={{
      isAdmin,
      adminData,
      permissions,
      stats,
      activities,
      isLoading,
      error,
      refreshStats,
      refreshActivities,
      setIsAdmin
    }}>
      {children}
    </AdminContext.Provider>
  )
}

export function useAdmin() {
  const context = useContext(AdminContext)
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider')
  }
  return context
} 