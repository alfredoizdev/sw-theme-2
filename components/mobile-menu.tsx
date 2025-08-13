'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import {
  Home as HomeIcon,
  Users,
  Search,
  Eye,
  MessageCircle,
  MessageSquare,
  User,
  Smartphone,
  Calendar,
  Globe,
  Navigation,
  Settings,
  HelpCircle,
  Facebook,
  Twitter,
  LogOut,
} from 'lucide-react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
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

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in-0 duration-300"
        onClick={onClose}
      />
      
      {/* Mobile Menu */}
      <div className="fixed right-0 top-0 h-full w-80 bg-background border-l shadow-xl animate-in slide-in-from-right-full duration-300 ease-out">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="p-2"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-80px)]">
          <Button
            variant='ghost'
            className='w-full justify-start text-foreground hover:bg-muted text-base'
            onClick={onClose}
          >
            <HomeIcon className='h-5 w-5 mr-3' />
            Home
          </Button>
          <Button 
            variant='secondary' 
            className='w-full justify-start text-base'
            onClick={onClose}
          >
            <Users className='h-5 w-5 mr-3' />
            Who&apos;s On
          </Button>
          <Button
            variant='ghost'
            className='w-full justify-start text-foreground hover:bg-muted text-base'
            onClick={onClose}
          >
            <Search className='h-5 w-5 mr-3' />
            Search
          </Button>
          <Button
            variant='ghost'
            className='w-full justify-start text-foreground hover:bg-muted text-base'
            onClick={onClose}
          >
            <Users className='h-5 w-5 mr-3' />
            Friends
          </Button>
          <Button
            variant='ghost'
            className='w-full justify-start text-foreground hover:bg-muted text-base'
            onClick={onClose}
          >
            <Eye className='h-5 w-5 mr-3' />
            Viewed Me
          </Button>
          <Button
            variant='ghost'
            className='w-full justify-start text-foreground hover:bg-muted text-base'
            onClick={onClose}
          >
            <MessageCircle className='h-5 w-5 mr-3' />
            Messages
          </Button>
          <Button
            variant='ghost'
            className='w-full justify-start text-foreground hover:bg-muted text-base'
            onClick={onClose}
          >
            <MessageSquare className='h-5 w-5 mr-3' />
            Chat
          </Button>
          <Button
            variant='ghost'
            className='w-full justify-start text-foreground hover:bg-muted text-base'
            onClick={onClose}
          >
            <User className='h-5 w-5 mr-3' />
            My Account
          </Button>
          <Button
            variant='ghost'
            className='w-full justify-start text-foreground hover:bg-muted text-base'
            onClick={onClose}
          >
            <Smartphone className='h-5 w-5 mr-3' />
            Mobile App
          </Button>
          <Button
            variant='ghost'
            className='w-full justify-start text-foreground hover:bg-muted text-base'
            onClick={onClose}
          >
            <Calendar className='h-5 w-5 mr-3' />
            Hot Date
          </Button>
          <Button
            variant='ghost'
            className='w-full justify-start text-foreground hover:bg-muted text-base'
            onClick={onClose}
          >
            <Calendar className='h-5 w-5 mr-3' />
            Events
          </Button>
          <Button
            variant='ghost'
            className='w-full justify-start text-foreground hover:bg-muted text-base'
            onClick={onClose}
          >
            <Globe className='h-5 w-5 mr-3' />
            Clubs
          </Button>
          <Button
            variant='ghost'
            className='w-full justify-start text-foreground hover:bg-muted text-base'
            onClick={onClose}
          >
            <Navigation className='h-5 w-5 mr-3' />
            Travel
          </Button>
          <Button
            variant='ghost'
            className='w-full justify-start text-foreground hover:bg-muted text-base'
            onClick={onClose}
          >
            <Settings className='h-5 w-5 mr-3' />
            Tools
          </Button>
          <Button
            variant='ghost'
            className='w-full justify-start text-foreground hover:bg-muted text-base'
            onClick={onClose}
          >
            <HelpCircle className='h-5 w-5 mr-3' />
            Help
          </Button>
          <Button
            variant='ghost'
            className='w-full justify-start text-foreground hover:bg-muted text-base'
            onClick={onClose}
          >
            <Facebook className='h-5 w-5 mr-3' />
            Facebook
          </Button>
          <Button
            variant='ghost'
            className='w-full justify-start text-foreground hover:bg-muted text-base'
            onClick={onClose}
          >
            <Twitter className='h-5 w-5 mr-3' />
            Twitter
          </Button>
          <Button
            variant='ghost'
            className='w-full justify-start text-foreground hover:bg-muted text-base'
            onClick={onClose}
          >
            <LogOut className='h-5 w-5 mr-3' />
            Logout
          </Button>
        </nav>
      </div>
    </div>
  )
}