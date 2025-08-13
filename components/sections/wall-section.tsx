'use client'

import { useState } from 'react'
import { WallPost } from '@/components/wall-post'
import { CreatePostForm } from '@/components/create-post-form'
import { WallPost as WallPostType } from '@/lib/fake-data'

interface WallSectionProps {
  posts: WallPostType[]
  onProfileClick?: (profileId: string) => void
}

export function WallSection({ posts: initialPosts, onProfileClick }: WallSectionProps) {
  const [posts, setPosts] = useState(initialPosts)

  const handleLoveToggle = (postId: string) => {
    setPosts(prevPosts =>
      prevPosts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            isLoved: !post.isLoved,
            lovesCount: post.isLoved ? post.lovesCount - 1 : post.lovesCount + 1
          }
        }
        return post
      })
    )
  }

  const handleCreatePost = (content: string, mediaType: 'image' | 'video' | null, mediaUrl?: string) => {
    const newPost: WallPostType = {
      id: `new-${Date.now()}`,
      userId: '1',
      userName: 'sls_alfredo',
      userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face&f=face',
      content,
      mediaType,
      mediaUrl,
      thumbnail: mediaType === 'video' ? 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=400&fit=crop' : undefined,
      timestamp: 'Just now',
      lovesCount: 0,
      isLoved: false
    }
    
    setPosts(prevPosts => [newPost, ...prevPosts])
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">The Wall</h2>
        <p className="text-muted-foreground">
          Share your experiences, parties, and adventures with the community
        </p>
      </div>

      {/* Create Post Form */}
      <CreatePostForm onCreatePost={handleCreatePost} />

      {/* Posts */}
      <div className="space-y-4">
        {posts.map((post) => (
          <WallPost
            key={post.id}
            post={post}
            onLoveToggle={handleLoveToggle}
            onProfileClick={onProfileClick}
          />
        ))}
      </div>
    </div>
  )
}