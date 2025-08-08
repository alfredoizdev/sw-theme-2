'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { WhosOnSection } from './whos-on-section'
import { WhoViewedMeSection } from './who-viewed-me-section'
import { NewestMatchesSection } from './newest-matches-section'
import { ProfileCard } from '@/lib/fake-data'

interface ProfilesTabsProps {
  profiles: ProfileCard[]
  activeView: 'view1' | 'view2'
}

export function ProfilesTabs({ profiles, activeView }: ProfilesTabsProps) {
  const [activeTab, setActiveTab] = useState<
    'whos-on' | 'who-viewed-me' | 'newest-matches'
  >('whos-on')

  return (
    <div className='space-y-6'>
      {/* Content based on active view */}
      {activeView === 'view1' ? (
        <div className='space-y-6'>
          <WhosOnSection profiles={profiles} />
          <WhoViewedMeSection profiles={profiles} />
          <NewestMatchesSection profiles={profiles} />
        </div>
      ) : (
        <div className='space-y-6'>
          {/* View2 - Section Tabs */}
          <div className='flex space-x-2 border-b'>
            <Button
              variant={activeTab === 'whos-on' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('whos-on')}
              className='rounded-none border-b-2 border-transparent data-[state=active]:border-primary'
            >
              Who&apos;s On
            </Button>
            <Button
              variant={activeTab === 'who-viewed-me' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('who-viewed-me')}
              className='rounded-none border-b-2 border-transparent data-[state=active]:border-primary'
            >
              Who Viewed Me
            </Button>
            <Button
              variant={activeTab === 'newest-matches' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('newest-matches')}
              className='rounded-none border-b-2 border-transparent data-[state=active]:border-primary'
            >
              Newest Matches
            </Button>
          </div>

          {/* Section Content */}
          {activeTab === 'whos-on' && <WhosOnSection profiles={profiles} />}
          {activeTab === 'who-viewed-me' && (
            <WhoViewedMeSection profiles={profiles} />
          )}
          {activeTab === 'newest-matches' && (
            <NewestMatchesSection profiles={profiles} />
          )}
        </div>
      )}
    </div>
  )
}
