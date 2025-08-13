'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { ThemeToggle } from '@/components/theme-toggle'
import { Sidebar } from '@/components/sidebar'
import { Footer } from '@/components/footer'
import { ProfilesTabs } from '@/components/sections/profiles-tabs'
import { HotDateSection } from '@/components/sections/hot-date-section'
import { StatsSection } from '@/components/sections/stats-section'
import { UserSearch } from '@/components/user-search'
import { MessageCircle, ChevronDown, Menu, User, Eye } from 'lucide-react'
import { mockProfiles, mockHotDates, mockStats } from '@/lib/fake-data'
import { useState } from 'react'

export default function Home() {
  const [activeView, setActiveView] = useState<'view1' | 'view2'>('view1')
  return (
    <div className='min-h-screen bg-gradient-to-br from-background via-background to-muted/20'>
      {/* Header */}
      <header className='fixed top-0 w-full z-50 border-b bg-background/80 backdrop-blur-sm py-3'>
        <div className='mx-auto px-4 sm:px-6 lg:px-8 w-full'>
          <div className='flex items-center justify-between h-16'>
            {/* Logo */}
            <div className='flex items-center space-x-4'>
              <div className='flex items-center space-x-2'>
                <Image
                  src='/images/logo-color.png'
                  alt='Swing Logo'
                  width={100}
                  height={100}
                  className='dark:hidden'
                />
                <Image
                  src='/images/Swing.webp'
                  alt='Swing Logo'
                  width={100}
                  height={100}
                  className='hidden dark:block'
                />
              </div>
              {/* View Buttons */}
              <div className='items-center space-x-2 ml-4 hidden sm:flex'>
                <Button
                  variant={activeView === 'view1' ? 'secondary' : 'ghost'}
                  size='sm'
                  onClick={() => setActiveView('view1')}
                >
                  <Eye className='h-4 w-4 mr-1' />
                  View1
                </Button>
                <Button
                  variant={activeView === 'view2' ? 'secondary' : 'ghost'}
                  size='sm'
                  onClick={() => setActiveView('view2')}
                >
                  <Eye className='h-4 w-4 mr-1' />
                  View2
                </Button>
              </div>
            </div>

            {/* Search Bar */}
            <div className='flex-1 max-w-sm mx-4 hidden md:block'>
              <UserSearch users={mockProfiles} />
            </div>

            {/* Header Actions */}
            <div className='flex items-center space-x-2 sm:space-x-4'>
              <ThemeToggle />
              <Button
                variant='outline'
                size='sm'
                className='relative hidden sm:flex pr-10'
              >
                <MessageCircle className='h-4 w-4 mr-2' />
                Messages
                <Badge className='absolute -top-1 -right-3 h-5 w-5 p-0 text-xs'>
                  2
                </Badge>
              </Button>
              <Button variant='outline' size='sm' className='hidden sm:flex'>
                <Avatar className='h-6 w-6 mr-2'>
                  <AvatarImage
                    src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face&f=face'
                    alt='sls_alfredo'
                    width={400}
                    height={600}
                    className='object-cover'
                  />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                sls_alfredo
                <ChevronDown className='h-4 w-4 ml-2' />
              </Button>
              <Button variant='outline' size='sm' className='sm:hidden'>
                <Menu className='h-4 w-4' />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className='flex pt-16'>
        {/* Sidebar - Desktop */}
        <Sidebar />

        {/* Main Content */}
        <main className='flex-1 lg:ml-64 p-4 lg:p-6'>
          <div className='w-full mx-auto space-y-6 pt-10 pb-16'>
            {/* Stats Section */}
            <StatsSection stats={mockStats} />

            {/* Profiles Tabs */}
            <ProfilesTabs profiles={mockProfiles} activeView={activeView} />

            {/* Hot Date / Event Section */}
            <HotDateSection hotDates={mockHotDates} />
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
