'use client'

import { useState, useEffect, useRef } from 'react'
import { Search } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import { ProfileCard } from '@/lib/fake-data'
import { cn } from '@/lib/utils'

interface UserSearchProps {
  users: ProfileCard[]
}

export function UserSearch({ users }: UserSearchProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredUsers, setFilteredUsers] = useState<ProfileCard[]>([])
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredUsers(users.slice(0, 8)) // Show first 8 users when no search
    } else {
      const filtered = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredUsers(filtered.slice(0, 8)) // Limit to 8 results
    }
  }, [searchTerm, users])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleInputClick = () => {
    setIsOpen(true)
  }

  const handleUserSelect = (user: ProfileCard) => {
    setSearchTerm(user.name)
    setIsOpen(false)
  }

  return (
    <div ref={searchRef} className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onClick={handleInputClick}
          className={cn(
            "w-full pl-10 pr-4 py-2 text-sm",
            "border border-input bg-background",
            "rounded-md focus:outline-none focus:ring-2 focus:ring-ring",
            "placeholder:text-muted-foreground",
            "transition-colors duration-200"
          )}
        />
      </div>

      {isOpen && (
        <Card className="absolute top-full left-0 right-0 mt-1 z-50 max-h-64 overflow-y-auto">
          <div className="p-2">
            {filteredUsers.length > 0 ? (
              <div className="space-y-1">
                {filteredUsers.map((user) => (
                  <button
                    key={user.id}
                    onClick={() => handleUserSelect(user)}
                    className={cn(
                      "w-full flex items-center space-x-3 p-2 rounded-md",
                      "hover:bg-muted transition-colors duration-200",
                      "text-left focus:outline-none focus:ring-2 focus:ring-ring"
                    )}
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.image} alt={user.name} />
                      <AvatarFallback>
                        {user.name.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{user.name}</p>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <span>{user.age}</span>
                        <span>•</span>
                        <span>{user.distance}</span>
                        {user.online && (
                          <>
                            <span>•</span>
                            <span className="text-green-600 dark:text-green-400">Online</span>
                          </>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="p-4 text-center text-sm text-muted-foreground">
                No users found
              </div>
            )}
          </div>
        </Card>
      )}
    </div>
  )
}