'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ThemeToggle } from '@/components/theme-toggle'
import { Sidebar } from '@/components/sidebar'
import { Footer } from '@/components/footer'
import { ProfilesTabs } from '@/components/sections/profiles-tabs'
import { HotDateSection } from '@/components/sections/hot-date-section'
import { MessageCircle, ChevronDown, Menu, User } from 'lucide-react'
import { mockProfiles, mockHotDates } from '@/lib/fake-data'
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
            </div>

            {/* Header Actions */}
            <div className='flex items-center space-x-2 sm:space-x-4'>
              <ThemeToggle />
              <Button
                variant='outline'
                size='sm'
                className='relative hidden sm:flex'
              >
                <MessageCircle className='h-4 w-4 mr-2' />
                Messages
                <Badge className='absolute -top-1 -right-1 h-5 w-5 p-0 text-xs'>
                  2
                </Badge>
              </Button>
              <Button variant='outline' size='sm' className='hidden sm:flex'>
                <User className='h-4 w-4 mr-2' />
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
        <Sidebar activeView={activeView} setActiveView={setActiveView} />

        {/* Main Content */}
        <main className='flex-1 lg:ml-64 p-4 lg:p-6'>
          <div className='w-full mx-auto space-y-6 pt-10 pb-16'>
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
