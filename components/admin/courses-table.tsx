"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Edit, MoreHorizontal, Search, Trash2, BookOpen } from "lucide-react"
import Link from "next/link"

// Mock data - in a real app, this would come from your database
const initialCourses = [
  {
    id: "1",
    title: "DeFi Fundamentals",
    modules: 8,
    students: 1245,
    lastUpdated: "2023-10-15",
    status: "published",
  },
  {
    id: "2",
    title: "Advanced Smart Contracts",
    modules: 12,
    students: 867,
    lastUpdated: "2023-09-22",
    status: "published",
  },
  {
    id: "3",
    title: "Blockchain Security",
    modules: 10,
    students: 729,
    lastUpdated: "2023-11-05",
    status: "published",
  },
  {
    id: "4",
    title: "DeFi Yield Strategies",
    modules: 6,
    students: 0,
    lastUpdated: "2023-11-18",
    status: "draft",
  },
]

export function CoursesTable() {
  const [courses, setCourses] = useState(initialCourses)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCourses = courses.filter((course) => course.title.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div>
      <div className="p-4 flex items-center gap-2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search courses..."
          className="h-9"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Course Name</TableHead>
            <TableHead>Modules</TableHead>
            <TableHead>Students</TableHead>
            <TableHead>Last Updated</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-[80px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredCourses.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-8">
                No courses found. Try a different search term or{" "}
                <Link href="/admin/courses/new" className="text-primary underline">
                  create a new course
                </Link>
                .
              </TableCell>
            </TableRow>
          ) : (
            filteredCourses.map((course) => (
              <TableRow key={course.id}>
                <TableCell className="font-medium">
                  <Link href={`/admin/courses/${course.id}`} className="hover:underline">
                    {course.title}
                  </Link>
                </TableCell>
                <TableCell>{course.modules}</TableCell>
                <TableCell>{course.students.toLocaleString()}</TableCell>
                <TableCell>{new Date(course.lastUpdated).toLocaleDateString()}</TableCell>
                <TableCell>
                  <Badge variant={course.status === "published" ? "default" : "secondary"}>
                    {course.status === "published" ? "Published" : "Draft"}
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
                        <Link href={`/admin/courses/${course.id}`}>
                          <Edit className="mr-2 h-4 w-4" /> Edit
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href={`/admin/courses/${course.id}/modules`}>
                          <BookOpen className="mr-2 h-4 w-4" /> Manage Modules
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" /> Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}
