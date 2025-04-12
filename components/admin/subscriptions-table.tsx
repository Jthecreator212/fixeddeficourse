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
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, ChevronDown } from "lucide-react"

const subscriptions = [
  {
    id: "1",
    user: "Alex Johnson",
    email: "alex@example.com",
    plan: "Annual Pro",
    status: "active",
    amount: "$199.00",
    nextBilling: "Jan 12, 2024",
    startDate: "Jan 12, 2023",
  },
  {
    id: "2",
    user: "Sarah Williams",
    email: "sarah@example.com",
    plan: "Monthly Pro",
    status: "active",
    amount: "$19.99",
    nextBilling: "Jun 4, 2023",
    startDate: "Mar 4, 2023",
  },
  {
    id: "3",
    user: "Michael Brown",
    email: "michael@example.com",
    plan: "Trial",
    status: "trial",
    amount: "$0.00",
    nextBilling: "Jun 5, 2023",
    startDate: "May 22, 2023",
  },
  {
    id: "4",
    user: "Emily Davis",
    email: "emily@example.com",
    plan: "Monthly Basic",
    status: "active",
    amount: "$9.99",
    nextBilling: "Jun 8, 2023",
    startDate: "Feb 8, 2023",
  },
  {
    id: "5",
    user: "David Wilson",
    email: "david@example.com",
    plan: "Annual Basic",
    status: "cancelled",
    amount: "$99.00",
    nextBilling: "N/A",
    startDate: "Nov 15, 2022",
  },
  {
    id: "6",
    user: "Jessica Martinez",
    email: "jessica@example.com",
    plan: "Annual Pro",
    status: "active",
    amount: "$199.00",
    nextBilling: "Apr 3, 2024",
    startDate: "Apr 3, 2023",
  },
  {
    id: "7",
    user: "Robert Taylor",
    email: "robert@example.com",
    plan: "Monthly Pro",
    status: "active",
    amount: "$19.99",
    nextBilling: "Jun 17, 2023",
    startDate: "Jun 17, 2023",
  },
  {
    id: "8",
    user: "Jennifer Anderson",
    email: "jennifer@example.com",
    plan: "Trial",
    status: "trial",
    amount: "$0.00",
    nextBilling: "Aug 12, 2023",
    startDate: "Jul 29, 2023",
  },
  {
    id: "9",
    user: "Christopher Thomas",
    email: "christopher@example.com",
    plan: "Annual Pro",
    status: "active",
    amount: "$199.00",
    nextBilling: "Dec 5, 2023",
    startDate: "Dec 5, 2022",
  },
  {
    id: "10",
    user: "Lisa Jackson",
    email: "lisa@example.com",
    plan: "Monthly Basic",
    status: "expired",
    amount: "$9.99",
    nextBilling: "N/A",
    startDate: "Oct 11, 2022",
  },
]

export function SubscriptionsTable() {
  const [sortColumn, setSortColumn] = useState("user")
  const [sortDirection, setSortDirection] = useState("asc")

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  const sortedSubscriptions = [...subscriptions].sort((a, b) => {
    const aValue = a[sortColumn as keyof typeof a]
    const bValue = b[sortColumn as keyof typeof b]

    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortDirection === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
    }

    return 0
  })

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">
              <Button
                variant="ghost"
                onClick={() => handleSort("user")}
                className="flex items-center gap-1 font-medium"
              >
                User
                {sortColumn === "user" && (
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${sortDirection === "desc" ? "rotate-180" : ""}`}
                  />
                )}
              </Button>
            </TableHead>
            <TableHead>
              <Button
                variant="ghost"
                onClick={() => handleSort("plan")}
                className="flex items-center gap-1 font-medium"
              >
                Plan
                {sortColumn === "plan" && (
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
                onClick={() => handleSort("amount")}
                className="flex items-center gap-1 font-medium"
              >
                Amount
                {sortColumn === "amount" && (
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${sortDirection === "desc" ? "rotate-180" : ""}`}
                  />
                )}
              </Button>
            </TableHead>
            <TableHead>
              <Button
                variant="ghost"
                onClick={() => handleSort("nextBilling")}
                className="flex items-center gap-1 font-medium"
              >
                Next Billing
                {sortColumn === "nextBilling" && (
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
          {sortedSubscriptions.map((subscription) => (
            <TableRow key={subscription.id}>
              <TableCell>
                <div>
                  <div className="font-medium">{subscription.user}</div>
                  <div className="text-sm text-muted-foreground">{subscription.email}</div>
                </div>
              </TableCell>
              <TableCell>{subscription.plan}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    subscription.status === "active"
                      ? "default"
                      : subscription.status === "trial"
                        ? "outline"
                        : subscription.status === "cancelled"
                          ? "secondary"
                          : "destructive"
                  }
                >
                  {subscription.status}
                </Badge>
              </TableCell>
              <TableCell>{subscription.amount}</TableCell>
              <TableCell>{subscription.nextBilling}</TableCell>
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
                    <DropdownMenuItem>Edit subscription</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Upgrade plan</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Cancel subscription</DropdownMenuItem>
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
