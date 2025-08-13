'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { X, ArrowRight } from 'lucide-react'
import { Message } from '@/lib/fake-data'
import { cn } from '@/lib/utils'

interface MessagesSidebarProps {
  isOpen: boolean
  onClose: () => void
  messages: Message[]
}

export function MessagesSidebar({ isOpen, onClose, messages }: MessagesSidebarProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  const unreadCount = messages.filter(msg => !msg.isRead).length

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in-0 duration-300"
        onClick={onClose}
      />
      
      {/* Messages Sidebar */}
      <div className="fixed right-0 top-0 h-full w-96 bg-background border-l shadow-xl animate-in slide-in-from-right-full duration-300 ease-out">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-2">
            <h2 className="text-lg font-semibold">Messages</h2>
            {unreadCount > 0 && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {unreadCount}
              </span>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="p-2"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Messages List */}
        <div className="flex flex-col h-[calc(100vh-140px)] overflow-y-auto">
          {messages.length > 0 ? (
            <div className="divide-y">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "p-4 hover:bg-muted/50 cursor-pointer transition-colors duration-200",
                    !message.isRead && "bg-muted/30"
                  )}
                >
                  <div className="flex items-start space-x-3">
                    <Avatar className="h-12 w-12 flex-shrink-0">
                      <AvatarImage
                        src={message.senderAvatar}
                        alt={message.senderName}
                        className="object-cover"
                      />
                      <AvatarFallback>
                        {message.senderName.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className={cn(
                          "text-sm truncate",
                          !message.isRead ? "font-semibold" : "font-medium"
                        )}>
                          {message.senderName}
                        </p>
                        <span className="text-xs text-muted-foreground flex-shrink-0">
                          {message.timestamp}
                        </span>
                      </div>
                      
                      <p className={cn(
                        "text-sm text-muted-foreground line-clamp-2 leading-relaxed",
                        !message.isRead && "text-foreground"
                      )}>
                        {message.preview}
                      </p>
                      
                      {!message.isRead && (
                        <div className="flex items-center mt-2">
                          <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                          <span className="text-xs text-blue-600 dark:text-blue-400 ml-2">
                            New message
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center text-center p-8">
              <div className="space-y-3">
                <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                  <X className="h-8 w-8 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground">No messages yet</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t bg-muted/20">
          <Button 
            className="w-full"
            onClick={onClose}
          >
            See All Messages
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}