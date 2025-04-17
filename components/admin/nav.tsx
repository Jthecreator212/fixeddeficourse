import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const adminNavItems = [
  {
    title: 'Dashboard',
    href: '/admin',
  },
  {
    title: 'Modules',
    href: '/admin/modules',
  },
  {
    title: 'Users',
    href: '/admin/users',
  },
  {
    title: 'Settings',
    href: '/admin/settings',
  },
]

export function AdminNav() {
  const pathname = usePathname()

  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto flex h-16 items-center px-4">
        <div className="flex space-x-8">
          {adminNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === item.href
                  ? 'text-primary'
                  : 'text-muted-foreground'
              )}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
} 