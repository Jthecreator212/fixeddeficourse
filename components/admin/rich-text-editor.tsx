"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Bold, Italic, List, ListOrdered, Heading2, LinkIcon } from "lucide-react"

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
}

export function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const [isFocused, setIsFocused] = useState(false)

  const handleFormat = (format: string) => {
    // In a real app, this would apply formatting to the selected text
    // For this demo, we'll just append some markdown-like formatting
    switch (format) {
      case "bold":
        onChange(value + " **bold text** ")
        break
      case "italic":
        onChange(value + " *italic text* ")
        break
      case "heading":
        onChange(value + "\n## Heading\n")
        break
      case "list":
        onChange(value + "\n- List item 1\n- List item 2\n")
        break
      case "ordered-list":
        onChange(value + "\n1. List item 1\n2. List item 2\n")
        break
      case "link":
        onChange(value + " [link text](https://example.com) ")
        break
      default:
        break
    }
  }

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2 p-1 border border-border rounded-md bg-muted/50">
        <Button type="button" variant="ghost" size="sm" onClick={() => handleFormat("bold")}>
          <Bold className="h-4 w-4" />
        </Button>
        <Button type="button" variant="ghost" size="sm" onClick={() => handleFormat("italic")}>
          <Italic className="h-4 w-4" />
        </Button>
        <Button type="button" variant="ghost" size="sm" onClick={() => handleFormat("heading")}>
          <Heading2 className="h-4 w-4" />
        </Button>
        <Button type="button" variant="ghost" size="sm" onClick={() => handleFormat("list")}>
          <List className="h-4 w-4" />
        </Button>
        <Button type="button" variant="ghost" size="sm" onClick={() => handleFormat("ordered-list")}>
          <ListOrdered className="h-4 w-4" />
        </Button>
        <Button type="button" variant="ghost" size="sm" onClick={() => handleFormat("link")}>
          <LinkIcon className="h-4 w-4" />
        </Button>
      </div>
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`min-h-[300px] font-mono text-sm ${isFocused ? "border-primary" : ""}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Write your course content here... You can use Markdown formatting."
      />
    </div>
  )
}
