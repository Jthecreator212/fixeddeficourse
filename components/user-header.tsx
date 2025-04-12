import type React from "react"

interface UserHeaderProps {
  username: string
}

const AvatarImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  return <img src={src || "/placeholder.svg"} alt={alt} className="rounded-full h-8 w-8" />
}

const UserHeader: React.FC<UserHeaderProps> = ({ username }) => {
  return (
    <div className="flex items-center space-x-2">
      <AvatarImage src="/default-profile.jpg" alt="User" />
      <div>
        <p className="text-sm font-medium leading-none">{username}</p>
        <p className="text-sm text-muted-foreground">@{username}</p>
      </div>
    </div>
  )
}

export default UserHeader
