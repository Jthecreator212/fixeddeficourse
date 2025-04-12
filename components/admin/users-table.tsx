"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, ChevronDown } from "lucide-react"
import { Progress } from "@/components/ui/progress"

const users = [
  {
    id: "1",
    name: "Alex Johnson",
    email: "alex@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "active",
    subscription: "Annual",
    progress: 75,
    joined: "Jan 12, 2023",
  },
  {
    id: "2",
    name: "Sarah Williams",
    email: "sarah@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "active",
    subscription: "Monthly",
    progress: 42,
    joined: "Mar 4, 2023",
  },
  {
    id: "3",
    name: "Michael Brown",
    email: "michael@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "trial",
    subscription: "Trial",
    progress: 15,
    joined: "May 22, 2023",
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "active",
    subscription: "Monthly",
    progress: 90,
    joined: "Feb 8, 2023",
  },
  {
    id: "5",
    name: "David Wilson",
    email: "david@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "inactive",
    subscription: "Expired",
    progress: 60,
    joined: "Nov 15, 2022",
  },
  {
    id: "6",
    name: "Jessica Martinez",
    email: "jessica@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "active",
    subscription: "Annual",
    progress: 85,
    joined: "Apr 3, 2023",
  },
  {
    id: "7",
    name: "Robert Taylor",
    email: "robert@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "active",
    subscription: "Monthly",
    progress: 30,
    joined: "Jun 17, 2023",
  },
  {
    id: "8",
    name: "Jennifer Anderson",
    email: "jennifer@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "trial",
    subscription: "Trial",
    progress: 5,
    joined: "Jul 29, 2023",
  },
  {
    id: "9",
    name: "Christopher Thomas",
    email: "christopher@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "active",
    subscription: "Annual",
    progress: 95,
    joined: "Dec 5, 2022",
  },
  {
    id: "10",
    name: "Lisa Jackson",
    email: "lisa@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "inactive",
    subscription: "Expired",
    progress: 50,
    joined: "Oct 11, 2022",
  },
]

export function UsersTable() {
  const [sortColumn, setSortColumn] = useState("name")
  const [sortDirection, setSortDirection] = useState("asc")

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  const sortedUsers = [...users].sort((a, b) => {
    const aValue = a[sortColumn as keyof typeof a]
    const bValue = b[sortColumn as keyof typeof b]

    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortDirection === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
    }

    if (typeof aValue === "number" && typeof bValue === "number") {
      return sortDirection === "asc" ? aValue - bValue : bValue - aValue
    }

    return 0
  })

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px]">
              <Button
                variant="ghost"
                onClick={() => handleSort("name")}
                className="flex items-center gap-1 font-medium"
              >
                User
                {sortColumn === "name" && (
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${sortDirection === "desc" ? "rotate-180" : ""}`}
                  />
                )}
              </Button>
            </TableHead>
            <TableHead>
              <Button
                variant="ghost"
                onClick={() => handleSort("status")}
                className="flex items-center gap-1 font-medium"
              >
                Status
                {sortColumn === "status" && (
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${sortDirection === "desc" ? "rotate-180" : ""}`}
                  />
                )}
              </Button>
            </TableHead>
            <TableHead>
              <Button
                variant="ghost"
                onClick={() => handleSort("subscription")}
                className="flex items-center gap-1 font-medium"
              >
                Subscription
                {sortColumn === "subscription" && (
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${sortDirection === "desc" ? "rotate-180" : ""}`}
                  />
                )}
              </Button>
            </TableHead>
            <TableHead>
              <Button
                variant="ghost"
                onClick={() => handleSort("progress")}
                className="flex items-center gap-1 font-medium"
              >
                Course Progress
                {sortColumn === "progress" && (
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${sortDirection === "desc" ? "rotate-180" : ""}`}
                  />
                )}
              </Button>
            </TableHead>
            <TableHead>
              <Button
                variant="ghost"
                onClick={() => handleSort("joined")}
                className="flex items-center gap-1 font-medium"
              >
                Joined
                {sortColumn === "joined" && (
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${sortDirection === "desc" ? "rotate-180" : ""}`}
                  />
                )}
              </Button>
            </TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{user.name}</div>
                    <div className="text-sm text-muted-foreground">{user.email}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  variant={user.status === "active" ? "default" : user.status === "trial" ? "outline" : "secondary"}
                >
                  {user.status}
                </Badge>
              </TableCell>
              <TableCell>{user.subscription}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Progress value={user.progress} className="h-2 w-[100px]" />
                  <span className="text-sm">{user.progress}%</span>
                </div>
              </TableCell>
              <TableCell>{user.joined}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>View details</DropdownMenuItem>
                    <DropdownMenuItem>View progress</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Edit user</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Delete user</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
