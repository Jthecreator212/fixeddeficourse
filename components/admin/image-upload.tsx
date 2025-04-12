"use client"

import { useState } from "react"
import { Upload, X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface ImageUploadProps {
  value: string
  onChange: (value: string) => void
}

export function ImageUpload({ value, onChange }: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false)

  // In a real app, this would upload to your storage service
  const handleUpload = () => {
    setIsUploading(true)

    // Simulate upload delay
    setTimeout(() => {
      // Use a placeholder image for demo purposes
      onChange("/placeholder.svg?height=720&width=1280")
      setIsUploading(false)
    }, 1500)
  }

  const handleRemove = () => {
    onChange("")
  }

  return (
    <div className="space-y-4">
      {value ? (
        <div className="relative aspect-video overflow-hidden rounded-lg border border-border">
          <Image src={value || "/placeholder.svg"} alt="Cover image" fill className="object-cover" />
          <Button
            type="button"
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2"
            onClick={handleRemove}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border p-12">
          <div className="flex flex-col items-center justify-center text-center">
            <Upload className="h-10 w-10 text-muted-foreground mb-2" />
            <p className="mb-1 text-sm font-semibold">Drag and drop an image or click to upload</p>
            <p className="text-xs text-muted-foreground">PNG, JPG or WEBP (max. 2MB)</p>
          </div>
          <Button type="button" variant="outline" className="mt-4" onClick={handleUpload} disabled={isUploading}>
            {isUploading ? "Uploading..." : "Upload Image"}
          </Button>
        </div>
      )}
    </div>
  )
}
