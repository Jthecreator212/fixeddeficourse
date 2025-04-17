"use client"

import { useState, useEffect } from "react"
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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Badge } from "@/components/ui/badge"
import { Edit, MoreHorizontal, Trash2, GripVertical, FileText, Loader2 } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

interface ModulesTableProps {
  courseId: string
}

interface Module {
  id: string
  title: string
  description: string
  order: number
  is_published: boolean
  lessons_count?: number
  duration?: string
  created_at: string
  updated_at: string
}

export function ModulesTable({ courseId }: ModulesTableProps) {
  const router = useRouter()
  const [modules, setModules] = useState<Module[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [moduleToDelete, setModuleToDelete] = useState<string | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const fetchModules = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`/api/courses/${courseId}/modules`)
        
        if (!response.ok) {
          throw new Error("Failed to fetch modules")
        }
        
        const data = await response.json()
        setModules(data || [])
      } catch (err) {
        console.error("Error fetching modules:", err)
        setError(err instanceof Error ? err.message : "Failed to fetch modules")
        toast.error("Failed to load modules")
      } finally {
        setIsLoading(false)
      }
    }

    fetchModules()
  }, [courseId])

  const handleDeleteClick = (moduleId: string) => {
    setModuleToDelete(moduleId)
    setDeleteDialogOpen(true)
  }

  const confirmDelete = async () => {
    if (!moduleToDelete) return
    
    setIsDeleting(true)
    try {
      const response = await fetch(`/api/courses/${courseId}/modules/${moduleToDelete}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Failed to delete module")
      }

      // Remove module from state
      setModules(modules.filter(m => m.id !== moduleToDelete))
      toast.success("Module deleted successfully")
      
      // Refresh the page data
      router.refresh()
    } catch (err) {
      console.error("Error deleting module:", err)
      toast.error(err instanceof Error ? err.message : "Failed to delete module")
    } finally {
      setIsDeleting(false)
      setDeleteDialogOpen(false)
      setModuleToDelete(null)
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-40">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
        <span className="ml-2">Loading modules...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-6 bg-red-50 rounded-lg">
        <h3 className="text-xl font-bold text-red-800 mb-2">Error Loading Modules</h3>
        <p className="text-red-600">{error}</p>
        <Button
          onClick={() => router.refresh()}
          className="mt-4"
          variant="outline"
        >
          Retry
        </Button>
      </div>
    )
  }

  if (modules.length === 0) {
    return (
      <div className="text-center py-10 border rounded-lg">
        <h3 className="text-lg font-medium mb-2">No modules found</h3>
        <p className="text-muted-foreground mb-4">Start by creating your first module</p>
        <Button asChild>
          <Link href={`/admin/courses/${courseId}/modules/new`}>Create Module</Link>
        </Button>
      </div>
    )
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]"></TableHead>
            <TableHead>Module Name</TableHead>
            <TableHead>Description</TableHead>
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
              <TableCell className="max-w-xs truncate">{module.description}</TableCell>
              <TableCell>{module.order}</TableCell>
              <TableCell>
                <Badge variant={module.is_published ? "default" : "secondary"}>
                  {module.is_published ? "Published" : "Draft"}
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
                    <DropdownMenuItem 
                      className="text-destructive"
                      onClick={() => handleDeleteClick(module.id)}
                    >
                      <Trash2 className="mr-2 h-4 w-4" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the module and all its content.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={confirmDelete} 
              disabled={isDeleting}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {isDeleting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Deleting...
                </>
              ) : (
                'Delete'
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}