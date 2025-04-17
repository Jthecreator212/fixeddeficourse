import { useState } from 'react'
import { ModuleInterface, ModuleMetadata } from '@/lib/types/module'
import { validateModule } from '@/lib/module-content/template'

interface ModuleEditorProps {
  module: ModuleInterface
  onSave: (module: ModuleInterface) => void
}

export function ModuleEditor({ module, onSave }: ModuleEditorProps) {
  const [editedModule, setEditedModule] = useState<ModuleInterface>(module)
  const [errors, setErrors] = useState<string[]>([])

  const handleMetadataChange = (field: keyof ModuleMetadata, value: any) => {
    setEditedModule(prev => ({
      ...prev,
      metadata: {
        ...prev.metadata,
        [field]: value
      }
    }))
  }

  const handleContentChange = (field: string, value: any) => {
    setEditedModule(prev => ({
      ...prev,
      content: {
        ...prev.content,
        [field]: value
      }
    }))
  }

  const handleSave = () => {
    const validation = validateModule(editedModule.metadata, editedModule.content)
    if (validation.isValid) {
      onSave(editedModule)
      setErrors([])
    } else {
      setErrors(validation.errors)
    }
  }

  return (
    <div className="space-y-6 p-6">
      <h2 className="text-2xl font-bold">Module Editor</h2>
      
      {/* Metadata Editor */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Metadata</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Title</label>
            <input
              type="text"
              value={editedModule.metadata.title}
              onChange={e => handleMetadataChange('title', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea
              value={editedModule.metadata.description}
              onChange={e => handleMetadataChange('description', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Difficulty</label>
            <select
              value={editedModule.metadata.difficulty}
              onChange={e => handleMetadataChange('difficulty', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Estimated Time (minutes)</label>
            <input
              type="number"
              value={editedModule.metadata.estimatedTime}
              onChange={e => handleMetadataChange('estimatedTime', parseInt(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Content Editor */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Content</h3>
        <div>
          <label className="block text-sm font-medium">Theory Content</label>
          <textarea
            value={editedModule.content.theory?.content || ''}
            onChange={e => handleContentChange('theory', { ...editedModule.content.theory, content: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            rows={10}
          />
        </div>
      </div>

      {/* Error Display */}
      {errors.length > 0 && (
        <div className="rounded-md bg-red-50 p-4">
          <h4 className="text-sm font-medium text-red-800">Validation Errors</h4>
          <ul className="mt-2 list-disc list-inside text-sm text-red-700">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Save Changes
        </button>
      </div>
    </div>
  )
} 