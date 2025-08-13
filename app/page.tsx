'use client'

import { ProfilesTabs } from '@/components/sections/profiles-tabs'
import { HotDateSection } from '@/components/sections/hot-date-section'
import { StatsSection } from '@/components/sections/stats-section'
import { WallSection } from '@/components/sections/wall-section'
import { AppLayout } from '@/components/app-layout'
import { mockProfiles, mockHotDates, mockStats, mockWallPosts } from '@/lib/fake-data'
import { useRouter } from 'next/navigation'
import { useApp } from '@/contexts/app-context'

export default function Home() {
  const router = useRouter()
  const { activeView } = useApp()
  
  const handleProfileClick = (profileId: string) => {
    router.push(`/profile/${profileId}`)
  }
  return (
    <AppLayout showAside={true}>
      {activeView === 'view3' ? (
        /* View 3 Layout */
        <>
          {/* Stats Section */}
          <StatsSection stats={mockStats} />
          
          {/* Wall Section */}
          <WallSection posts={mockWallPosts} onProfileClick={handleProfileClick} />
        </>
      ) : (
        /* View 1 & 2 Layout */
        <>
          {/* Stats Section */}
          <StatsSection stats={mockStats} />
          
          {/* Profiles Tabs */}
          <ProfilesTabs 
            profiles={mockProfiles} 
            activeView={activeView} 
            onProfileClick={handleProfileClick}
          />

          {/* Hot Date / Event Section */}
          <HotDateSection hotDates={mockHotDates} />
        </>
      )}
    </AppLayout>
  )
}
