import { ModulePreview } from '@/components/module-preview'
import { ModuleEditor } from '@/components/module-editor'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Plus } from 'lucide-react'
import { getAllModules } from '@/lib/module-content/registry'

export default async function ModulesDashboard() {
  const modules = await getAllModules()

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Course Modules</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create New Module
        </Button>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="editor">Editor</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map((module) => (
              <ModulePreview key={module.metadata.id} module={module} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="editor">
          <div className="bg-white rounded-lg shadow">
            <ModuleEditor 
              module={modules[0]} 
              onSave={(updatedModule) => {
                // Handle save
              }} 
            />
          </div>
        </TabsContent>

        <TabsContent value="analytics">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Module Analytics</h2>
            {/* Add analytics content here */}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 