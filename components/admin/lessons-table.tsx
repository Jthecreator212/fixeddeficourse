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
import { Edit, MoreHorizontal, Trash2, GripVertical, Video, FileText } from "lucide-react"
import Link from "next/link"

interface LessonsTableProps {
  courseId: string
  moduleId: string
}

// Mock data - in a real app, this would come from your database
const initialLessons = [
  {
    id: "1",
    title: "What is DeFi?",
    type: "video",
    duration: "12 min",
    order: 1,
    status: "published",
  },
  {
    id: "2",
    title: "Traditional Finance vs DeFi",
    type: "article",
    duration: "8 min",
    order: 2,
    status: "published",
  },
  {
    id: "3",
    title: "Key DeFi Concepts",
    type: "video",
    duration: "15 min",
    order: 3,
    status: "published",
  },
  {
    id: "4",
    title: "DeFi Use Cases",
    type: "article",
    duration: "10 min",
    order: 4,
    status: "draft",
  },
]

export function LessonsTable({ courseId, moduleId }: LessonsTableProps) {
  const [lessons, setLessons] = useState(initialLessons)

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]"></TableHead>
          <TableHead>Lesson Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Duration</TableHead>
          <TableHead>Order</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="w-[80px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {lessons.map((lesson) => (
          <TableRow key={lesson.id}>
            <TableCell>
              <GripVertical className="h-4 w-4 text-muted-foreground cursor-move" />
            </TableCell>
            <TableCell className="font-medium">
              <Link
                href={`/admin/courses/${courseId}/modules/${moduleId}/lessons/${lesson.id}`}
                className="hover:underline"
              >
                {lesson.title}
              </Link>
            </TableCell>
            <TableCell>
              <div className="flex items-center">
                {lesson.type === "video" ? (
                  <Video className="mr-2 h-4 w-4 text-muted-foreground" />
                ) : (
                  <FileText className="mr-2 h-4 w-4 text-muted-foreground" />
                )}
                {lesson.type === "video" ? "Video" : "Article"}
              </div>
            </TableCell>
            <TableCell>{lesson.duration}</TableCell>
            <TableCell>{lesson.order}</TableCell>
            <TableCell>
              <Badge variant={lesson.status === "published" ? "default" : "secondary"}>
                {lesson.status === "published" ? "Published" : "Draft"}
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
                    <Link href={`/admin/courses/${courseId}/modules/${moduleId}/lessons/${lesson.id}`}>
                      <Edit className="mr-2 h-4 w-4" /> Edit
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
