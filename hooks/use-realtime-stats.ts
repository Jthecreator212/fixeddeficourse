import { useState, useEffect } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

interface DashboardStats {
  users: {
    total: number
    active: number
    new: number
    growthRate: number
  }
  courses: {
    total: number
    published: number
    draft: number
  }
  modules: {
    total: number
  }
  revenue: {
    total: number
    monthly: number
    growthRate: number
  }
}

export function useRealtimeStats() {
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [error, setError] = useState<string | null>(null)
  const supabase = createClientComponentClient()

  useEffect(() => {
    const channel = supabase
      .channel('dashboard-stats')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'dashboard_stats'
        },
        (payload) => {
          setStats(payload.new as DashboardStats)
        }
      )
      .subscribe()

    // Initial fetch
    const fetchStats = async () => {
      try {
        const { data, error } = await supabase
          .from('dashboard_stats')
          .select('*')
          .single()

        if (error) throw error
        setStats(data as DashboardStats)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch stats')
      }
    }

    fetchStats()

    return () => {
      channel.unsubscribe()
    }
  }, [supabase])

  return { stats, error }
} 