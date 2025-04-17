import { ModuleContent } from '@/lib/types/module'

interface TheoryProps {
  content: ModuleContent['theory']
}

export function Theory({ content }: TheoryProps) {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-background p-6 rounded-xl border border-primary/30 shadow-lg relative overflow-hidden mb-8">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-10 -mt-10 blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full -ml-8 -mb-8 blur-xl"></div>

        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
            {content.sections[0]?.title || 'Introduction'}
          </h2>
          <p className="text-lg">
            {content.content}
          </p>
        </div>
      </div>

      {content.sections.map((section, index) => (
        <div key={index} className="space-y-4 mb-8">
          <h2 className="text-2xl font-bold">{section.title}</h2>
          <div className="space-y-4">
            {section.content.split('\n\n').map((paragraph, pIndex) => (
              <p key={pIndex}>{paragraph}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
} 