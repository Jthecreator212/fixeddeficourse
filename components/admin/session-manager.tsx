"use client"

import { useState, useEffect } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { formatDistanceToNow } from "date-fns"
import { useAdmin } from "@/context/admin-context"
import { AdminSession } from "@/types/admin"

export function AdminSessionManager() {
  const [sessions, setSessions] = useState<AdminSession[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { refreshStats } = useAdmin()

  useEffect(() => {
    // TODO: Implement session fetching
    const fetchSessions = async () => {
      try {
        // Mock data for now
        const mockSessions: AdminSession[] = [
          {
            id: "1",
            user_id: "admin1",
            email: "admin@example.com",
            ip_address: "192.168.1.1",
            user_agent: "Chrome/120.0.0.0",
            created_at: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
            last_active: new Date(),
            is_active: true,
          },
          {
            id: "2",
            user_id: "admin2",
            email: "admin2@example.com",
            ip_address: "192.168.1.2",
            user_agent: "Firefox/120.0.0.0",
            created_at: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
            last_active: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
            is_active: true,
          },
        ]
        setSessions(mockSessions)
      } catch (error) {
        console.error("Failed to fetch sessions:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchSessions()
  }, [])

  const handleTerminateSession = async (sessionId: string) => {
    try {
      // TODO: Implement session termination
      setSessions(sessions.filter(session => session.id !== sessionId))
      await refreshStats()
    } catch (error) {
      console.error("Failed to terminate session:", error)
    }
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
    )
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>IP Address</TableHead>
            <TableHead>Browser</TableHead>
            <TableHead>Started</TableHead>
            <TableHead>Last Active</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sessions.map((session) => (
            <TableRow key={session.id}>
              <TableCell className="font-medium">{session.email}</TableCell>
              <TableCell>{session.ip_address}</TableCell>
              <TableCell>{session.user_agent}</TableCell>
              <TableCell>
                {formatDistanceToNow(session.created_at, { addSuffix: true })}
              </TableCell>
              <TableCell>
                {formatDistanceToNow(session.last_active, { addSuffix: true })}
              </TableCell>
              <TableCell>
                <Badge variant={session.is_active ? "success" : "secondary"}>
                  {session.is_active ? "Active" : "Inactive"}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleTerminateSession(session.id)}
                >
                  Terminate
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
} 