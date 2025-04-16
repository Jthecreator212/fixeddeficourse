import { notFound } from "next/navigation"
import { ModuleContent } from "@/components/module-content"
import { ModuleNavigation } from "@/components/module-navigation"
import { getModuleBySlug, getModules } from "@/lib/modules"

export async function generateStaticParams() {
  console.log("🔄 [Module Page] Generating static params");
  const modules = getModules()
  console.log(`📋 [Module Page] Found ${modules.length} modules for static generation`);
  return modules.map((module) => ({
    slug: module.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = await params
  console.log("🔍 [Module Page] Generating metadata for slug:", slug);
  const module = getModuleBySlug(slug)

  if (!module) {
    console.log("❌ [Module Page] No module found for metadata generation:", slug);
    return {
      title: "Module Not Found",
    }
  }

  console.log("✅ [Module Page] Generated metadata for:", module.title);
  return {
    title: `${module.title} | DeFi Course`,
    description: module.description,
  }
}

export default async function ModulePage({ params }: { params: { slug: string } }) {
  const { slug } = await params
  console.log("🚀 [Module Page] Rendering page for slug:", slug);
  const module = getModuleBySlug(slug)

  if (!module) {
    console.log("❌ [Module Page] Module not found, showing 404:", slug);
    notFound()
  }

  console.log("✅ [Module Page] Successfully loaded module:", module.title);
  return (
    <div className="content-container py-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="md:col-span-3">
          <h1 className="mb-6 text-3xl font-bold">{module.title}</h1>
          <ModuleContent moduleSlug={slug} />
        </div>
        <div className="md:col-span-1">
          <ModuleNavigation currentSlug={slug} />
        </div>
      </div>
    </div>
  )
}
