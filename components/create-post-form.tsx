'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Image as ImageIcon, Video, Send, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CreatePostFormProps {
  onCreatePost: (content: string, mediaType: 'image' | 'video' | null, mediaUrl?: string) => void
}

export function CreatePostForm({ onCreatePost }: CreatePostFormProps) {
  const [content, setContent] = useState('')
  const [mediaType, setMediaType] = useState<'image' | 'video' | null>(null)
  const [mediaUrl, setMediaUrl] = useState('')
  const [showMediaInput, setShowMediaInput] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (content.trim()) {
      onCreatePost(content, mediaType, mediaUrl || undefined)
      setContent('')
      setMediaType(null)
      setMediaUrl('')
      setShowMediaInput(false)
    }
  }

  const handleMediaTypeChange = (type: 'image' | 'video') => {
    setMediaType(type)
    setShowMediaInput(true)
    setMediaUrl('')
  }

  const clearMedia = () => {
    setMediaType(null)
    setMediaUrl('')
    setShowMediaInput(false)
  }

  return (
    <Card className="p-6 mb-6">
      <form onSubmit={handleSubmit}>
        {/* Header */}
        <div className="flex items-center space-x-3 mb-4">
          <Avatar className="h-12 w-12 rounded-md">
            <AvatarImage
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face&f=face"
              alt="sls_alfredo"
              className="object-cover rounded-md"
            />
            <AvatarFallback className="rounded-md">SA</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="font-semibold text-sm">sls_alfredo</p>
            <p className="text-xs text-muted-foreground">Share your experience</p>
          </div>
        </div>

        {/* Content Input */}
        <div className="space-y-4">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's happening? Share your party experiences, adventures, or memorable moments..."
            className={cn(
              "w-full min-h-[100px] p-3 text-sm resize-none",
              "border border-input bg-background rounded-md",
              "placeholder:text-muted-foreground",
              "focus:outline-none focus:ring-2 focus:ring-ring",
              "transition-colors duration-200"
            )}
          />

          {/* Media Input */}
          {showMediaInput && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">
                  Add {mediaType === 'image' ? 'Image' : 'Video'} URL
                </span>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={clearMedia}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <input
                type="url"
                value={mediaUrl}
                onChange={(e) => setMediaUrl(e.target.value)}
                placeholder={`Enter ${mediaType} URL (e.g., https://images.unsplash.com/...)`}
                className={cn(
                  "w-full p-3 text-sm",
                  "border border-input bg-background rounded-md",
                  "placeholder:text-muted-foreground",
                  "focus:outline-none focus:ring-2 focus:ring-ring",
                  "transition-colors duration-200"
                )}
              />
              {mediaUrl && (
                <div className="text-xs text-muted-foreground">
                  Preview will be available after posting
                </div>
              )}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t mt-4">
          <div className="flex items-center space-x-2">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => handleMediaTypeChange('image')}
              className={cn(
                "flex items-center space-x-2",
                mediaType === 'image' && "bg-muted"
              )}
            >
              <ImageIcon className="h-4 w-4" />
              <span className="text-sm">Photo</span>
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => handleMediaTypeChange('video')}
              className={cn(
                "flex items-center space-x-2",
                mediaType === 'video' && "bg-muted"
              )}
            >
              <Video className="h-4 w-4" />
              <span className="text-sm">Video</span>
            </Button>
          </div>

          <Button
            type="submit"
            disabled={!content.trim()}
            className="flex items-center space-x-2"
          >
            <Send className="h-4 w-4" />
            <span>Post</span>
          </Button>
        </div>
      </form>
    </Card>
  )
}