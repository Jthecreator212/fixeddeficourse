import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const recentUsers = [
  {
    id: "1",
    name: "Alex Johnson",
    email: "alex@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    time: "2 hours ago",
  },
  {
    id: "2",
    name: "Sarah Williams",
    email: "sarah@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    time: "5 hours ago",
  },
  {
    id: "3",
    name: "Michael Brown",
    email: "michael@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    time: "1 day ago",
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    time: "1 day ago",
  },
  {
    id: "5",
    name: "David Wilson",
    email: "david@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    time: "2 days ago",
  },
]

export function RecentSignups() {
  return (
    <div className="space-y-4">
      <div className="space-y-4">
        {recentUsers.map((user) => (
          <div key={user.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium leading-none">{user.name}</p>
                <p className="text-xs text-muted-foreground">{user.email}</p>
              </div>
            </div>
            <div className="text-xs text-muted-foreground">{user.time}</div>
          </div>
        ))}
      </div>
      <Button variant="outline" className="w-full">
        View all users
      </Button>
    </div>
  )
}
