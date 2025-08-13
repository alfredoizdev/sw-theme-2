'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { ThemeToggle } from '@/components/theme-toggle'
import { Sidebar } from '@/components/sidebar'
import { Footer } from '@/components/footer'
import { ProfileAside } from '@/components/profile-aside'
import { UserSearch } from '@/components/user-search'
import { MobileMenu } from '@/components/mobile-menu'
import { MessagesSidebar } from '@/components/messages-sidebar'
import { ScrollToTop } from '@/components/scroll-to-top'
import { MessageCircle, ChevronDown, Menu, Eye } from 'lucide-react'
import { mockProfiles, mockHotDates, mockMessages } from '@/lib/fake-data'
import { useRouter } from 'next/navigation'
import { useApp } from '@/contexts/app-context'
import { ReactNode } from 'react'

interface AppLayoutProps {
  children: ReactNode
  showAside?: boolean
}

export function AppLayout({ children, showAside = false }: AppLayoutProps) {
  const router = useRouter()
  const { 
    activeView, 
    setActiveView, 
    isMobileMenuOpen, 
    setIsMobileMenuOpen,
    isMessagesSidebarOpen,
    setIsMessagesSidebarOpen
  } = useApp()
  
  const handleProfileClick = (profileId: string) => {
    router.push(`/profile/${profileId}`)
  }

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
                  className='dark:hidden cursor-pointer'
                  onClick={() => router.push('/')}
                />
                <Image
                  src='/images/Swing.webp'
                  alt='Swing Logo'
                  width={100}
                  height={100}
                  className='hidden dark:block cursor-pointer'
                  onClick={() => router.push('/')}
                />
              </div>
              {/* View Buttons */}
              <div className='items-center space-x-2 ml-4 hidden sm:flex'>
                <Button
                  variant={activeView === 'view1' ? 'secondary' : 'ghost'}
                  size='sm'
                  onClick={() => {
                    setActiveView('view1')
                    router.push('/')
                  }}
                >
                  <Eye className='h-4 w-4 mr-1' />
                  View1
                </Button>
                <Button
                  variant={activeView === 'view2' ? 'secondary' : 'ghost'}
                  size='sm'
                  onClick={() => {
                    setActiveView('view2')
                    router.push('/')
                  }}
                >
                  <Eye className='h-4 w-4 mr-1' />
                  View2
                </Button>
                <Button
                  variant={activeView === 'view3' ? 'secondary' : 'ghost'}
                  size='sm'
                  onClick={() => {
                    setActiveView('view3')
                    router.push('/')
                  }}
                >
                  <Eye className='h-4 w-4 mr-1' />
                  View3
                </Button>
              </div>
            </div>

            {/* Search Bar - Desktop */}
            <div className='flex-1 max-w-xs sm:max-w-sm mx-4 hidden md:block'>
              <UserSearch users={mockProfiles} />
            </div>

            {/* Header Actions */}
            <div className='flex items-center space-x-2 sm:space-x-4 flex-shrink-0'>
              {/* Search Button - Mobile */}
              <div className='block md:hidden flex-shrink-0'>
                <UserSearch users={mockProfiles} isMobile={true} />
              </div>
              <div className='flex-shrink-0'>
                <ThemeToggle />
              </div>
              <div className='relative flex-shrink-0'>
                <Button
                  variant='ghost'
                  size='sm'
                  className='p-2'
                  onClick={() => setIsMessagesSidebarOpen(true)}
                >
                  <MessageCircle className='h-5 w-5' />
                </Button>
                <Badge className='absolute -top-1 -right-1 h-5 w-5 p-0 text-xs animate-pulse'>
                  2
                </Badge>
              </div>
              <Button variant='outline' size='sm' className='hidden sm:flex flex-shrink-0'>
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
              <Button 
                variant='outline' 
                size='sm' 
                className='sm:hidden flex-shrink-0'
                onClick={() => setIsMobileMenuOpen(true)}
              >
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
          {showAside && activeView === 'view3' ? (
            /* View 3 Layout with Aside */
            <div className="flex gap-6 pt-10 pb-16">
              <div className="flex-1 space-y-6">
                {children}
              </div>
              <div className="hidden lg:block w-80 flex-shrink-0">
                <div className="space-y-2">
                  <ProfileAside 
                    profiles={mockProfiles} 
                    hotDates={mockHotDates}
                    onProfileClick={handleProfileClick}
                  />
                </div>
              </div>
            </div>
          ) : (
            /* Regular Layout */
            <div className="w-full mx-auto space-y-6 pt-10 pb-16">
              {children}
            </div>
          )}
        </main>
      </div>

      {/* Footer */}
      <Footer />

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />

      {/* Messages Sidebar */}
      <MessagesSidebar
        isOpen={isMessagesSidebarOpen}
        onClose={() => setIsMessagesSidebarOpen(false)}
        messages={mockMessages}
      />

      {/* Scroll to Top Button - Only in View 3 */}
      {activeView === 'view3' && <ScrollToTop />}
    </div>
  )
}