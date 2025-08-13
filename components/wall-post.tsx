'use client'

import { useState } from 'react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, Play } from 'lucide-react'
import { WallPost as WallPostType } from '@/lib/fake-data'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface WallPostProps {
  post: WallPostType
  onLoveToggle: (postId: string) => void
  onProfileClick?: (profileId: string) => void
}

export function WallPost({ post, onLoveToggle, onProfileClick }: WallPostProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const handleLoveClick = () => {
    onLoveToggle(post.id)
  }

  const handleProfileClick = () => {
    onProfileClick?.(post.userId)
  }

  return (
    <Card className="p-6 mb-6">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-4">
        <Avatar 
          className="h-12 w-12 rounded-md cursor-pointer hover:opacity-80 transition-opacity"
          onClick={handleProfileClick}
        >
          <AvatarImage
            src={post.userAvatar}
            alt={post.userName}
            className="object-cover rounded-md"
          />
          <AvatarFallback className="rounded-md">
            {post.userName.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <p 
            className="font-semibold text-sm cursor-pointer hover:underline"
            onClick={handleProfileClick}
          >
            {post.userName}
          </p>
          <p className="text-xs text-muted-foreground">{post.timestamp}</p>
        </div>
      </div>

      {/* Content */}
      <div className="mb-4">
        <p className="text-sm leading-relaxed mb-3">{post.content}</p>
        
        {/* Media */}
        {post.mediaType === 'image' && post.mediaUrl && (
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src={post.mediaUrl}
              alt="Post media"
              width={800}
              height={600}
              className="w-full h-64 object-cover"
            />
          </div>
        )}
        
        {post.mediaType === 'video' && post.mediaUrl && (
          <div className="relative rounded-lg overflow-hidden bg-black">
            {!isVideoPlaying ? (
              <div
                className="relative h-64 cursor-pointer group"
                onClick={() => setIsVideoPlaying(true)}
              >
                {/* Video Thumbnail */}
                {post.thumbnail && (
                  <Image
                    src={post.thumbnail}
                    alt="Video thumbnail"
                    width={800}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:bg-white/30 transition-all duration-200 group-hover:scale-110">
                    <Play className="h-8 w-8 text-white fill-white" />
                  </div>
                </div>
                
                {/* Video Label */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white text-sm font-medium">Click to play video</p>
                </div>
              </div>
            ) : (
              <video
                src={post.mediaUrl}
                controls
                autoPlay
                className="w-full h-64 object-cover"
                onEnded={() => setIsVideoPlaying(false)}
                onError={() => {
                  console.error('Video failed to load:', post.mediaUrl)
                  setIsVideoPlaying(false)
                }}
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        )}
      </div>

      {/* Love Section */}
      <div className="flex items-center justify-between pt-3 border-t">
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLoveClick}
            className={cn(
              "flex items-center space-x-2 hover:bg-red-50 dark:hover:bg-red-950/20",
              post.isLoved && "text-red-500 hover:text-red-600"
            )}
          >
            <Heart
              className={cn(
                "h-4 w-4 transition-colors",
                post.isLoved && "fill-red-500 text-red-500"
              )}
            />
            <span className="text-sm">Love it</span>
          </Button>
        </div>
        
        <div className="flex items-center space-x-1">
          <span className="text-sm text-muted-foreground">{post.lovesCount}</span>
          <Heart className="h-3 w-3 text-muted-foreground" />
        </div>
      </div>
    </Card>
  )
}