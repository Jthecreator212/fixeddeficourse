export interface AdminUser {
  id: string
  user_id: string
  email: string
  name: string
  role: RoleType
  permissions: Permission[]
  scope: 'global' | 'limited'
  customClaims?: Record<string, any>
  created_at: string
  updated_at: string
  last_active?: string
  two_factor_enabled?: boolean
}

export type RoleType = 'super_admin' | 'admin' | 'moderator' | 'content_manager' | 'support_admin'

export interface Permission {
  id: string
  action: 'create' | 'read' | 'update' | 'delete' | 'manage'
  resource: 'courses' | 'users' | 'modules' | 'lessons' | 'settings' | 'analytics' | 'audit'
  conditions?: {
    timeRestriction?: boolean
    ipRestriction?: string[]
    maxOperations?: number
  }
}

export interface AdminStats {
  total_users: number
  active_users: number
  total_courses: number
  published_courses: number
  total_revenue: number
  monthly_revenue: number
  active_admins: number
  recent_activities: number
  security_events: number
}

export interface AdminActivity {
  id: string
  type: 'login' | 'course_update' | 'user_management' | 'content_update' | 'settings_change'
  user_id: string
  user_email: string
  ip_address: string
  details: Record<string, any>
  created_at: string
  updated_at: string
}

export interface AdminFilter {
  timeRange: 'today' | 'week' | 'month' | 'year' | 'all'
  status: 'all' | 'active' | 'inactive'
  role: 'all' | RoleType
  action?: Permission['action']
  resource?: Permission['resource']
}

export interface AdminPermission {
  id: string
  name: string
  description: string
  category: 'users' | 'courses' | 'analytics' | 'settings' | 'security'
  required_role: RoleType
}

export interface AdminSession {
  id: string
  user_id: string
  start_time: string
  last_activity: string
  ip_address: string
  user_agent: string
  is_active: boolean
  location?: string
  device?: string
}

export interface AuditLog {
  id: string
  user_id: string
  action: string
  resource: string
  details: Record<string, any>
  ip_address: string
  user_agent: string
  timestamp: string
  status: 'success' | 'failure'
  metadata?: Record<string, any>