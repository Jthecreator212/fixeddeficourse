"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Edit, MoreHorizontal, Trash2, GripVertical, FileText } from "lucide-react"
import Link from "next/link"

interface ModulesTableProps {
  courseId: string
}

// Mock data - in a real app, this would come from your database
const initialModules = [
  {
    id: "1",
    title: "Introduction to DeFi",
    lessons: 5,
    duration: "45 min",
    order: 1,
    status: "published",
  },
  {
    id: "2",
    title: "Blockchain Fundamentals",
    lessons: 8,
    duration: "1h 20min",
    order: 2,
    status: "published",
  },
  {
    id: "3",
    title: "Smart Contracts Explained",
    lessons: 6,
    duration: "55 min",
    order: 3,
    status: "published",
  },
  {
    id: "4",
    title: "DeFi Protocols Overview",
    lessons: 7,
    duration: "1h 10min",
    order: 4,
    status: "draft",
  },
]

export function ModulesTable({ courseId }: ModulesTableProps) {
  const [modules, setModules] = useState(initialModules)

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]"></TableHead>
          <TableHead>Module Name</TableHead>
          <TableHead>Lessons</TableHead>
          <TableHead>Duration</TableHead>
          <TableHead>Order</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="w-[80px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {modules.map((module) => (
          <TableRow key={module.id}>
            <TableCell>
              <GripVertical className="h-4 w-4 text-muted-foreground cursor-move" />
            </TableCell>
            <TableCell className="font-medium">
              <Link href={`/admin/courses/${courseId}/modules/${module.id}`} className="hover:underline">
                {module.title}
              </Link>
            </TableCell>
            <TableCell>{module.lessons}</TableCell>
            <TableCell>{module.duration}</TableCell>
            <TableCell>{module.order}</TableCell>
            <TableCell>
              <Badge variant={module.status === "published" ? "default" : "secondary"}>
                {module.status === "published" ? "Published" : "Draft"}
              </Badge>
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href={`/admin/courses/${courseId}/modules/${module.id}`}>
                      <Edit className="mr-2 h-4 w-4" /> Edit
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href={`/admin/courses/${courseId}/modules/${module.id}/lessons`}>
                      <FileText className="mr-2 h-4 w-4" /> Manage Lessons
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">
                    <Trash2 className="mr-2 h-4 w-4" /> Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
