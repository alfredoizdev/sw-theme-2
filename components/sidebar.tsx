import { Button } from '@/components/ui/button'
import {
  X,
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

interface SidebarProps {
  activeView: 'view1' | 'view2'
  setActiveView: (view: 'view1' | 'view2') => void
}

export function Sidebar({ activeView, setActiveView }: SidebarProps) {
  return (
    <aside className='fixed left-0 top-[92px] h-[calc(100vh-8rem)] w-64 text-foreground overflow-y-auto z-40 hidden lg:block'>
      <nav className='p-4 space-y-3'>
        <Button
          variant='ghost'
          className='w-full justify-start text-foreground hover:bg-muted text-base'
        >
          <X className='h-5 w-5 mr-3' />
          Close
        </Button>
        <Button
          variant='ghost'
          className='w-full justify-start text-foreground hover:bg-muted text-base'
        >
          <HomeIcon className='h-5 w-5 mr-3' />
          Home
        </Button>
        <Button variant='secondary' className='w-full justify-start text-base'>
          <Users className='h-5 w-5 mr-3' />
          Who&apos;s On
        </Button>
        <Button
          variant='ghost'
          className='w-full justify-start text-foreground hover:bg-muted text-base'
        >
          <Search className='h-5 w-5 mr-3' />
          Search
        </Button>
        <Button
          variant='ghost'
          className='w-full justify-start text-foreground hover:bg-muted text-base'
        >
          <Users className='h-5 w-5 mr-3' />
          Friends
        </Button>
        <Button
          variant='ghost'
          className='w-full justify-start text-foreground hover:bg-muted text-base'
        >
          <Eye className='h-5 w-5 mr-3' />
          Viewed Me
        </Button>
        <Button
          variant='ghost'
          className='w-full justify-start text-foreground hover:bg-muted text-base'
        >
          <MessageCircle className='h-5 w-5 mr-3' />
          Messages
        </Button>
        <Button
          variant='ghost'
          className='w-full justify-start text-foreground hover:bg-muted text-base'
        >
          <MessageSquare className='h-5 w-5 mr-3' />
          Chat
        </Button>
        <Button
          variant='ghost'
          className='w-full justify-start text-foreground hover:bg-muted text-base'
        >
          <User className='h-5 w-5 mr-3' />
          My Account
        </Button>
        <Button
          variant='ghost'
          className='w-full justify-start text-foreground hover:bg-muted text-base'
        >
          <Smartphone className='h-5 w-5 mr-3' />
          Mobile App
        </Button>
        <Button
          variant='ghost'
          className='w-full justify-start text-foreground hover:bg-muted text-base'
        >
          <Calendar className='h-5 w-5 mr-3' />
          Hot Date
        </Button>
        <Button
          variant='ghost'
          className='w-full justify-start text-foreground hover:bg-muted text-base'
        >
          <Calendar className='h-5 w-5 mr-3' />
          Events
        </Button>
        <Button
          variant='ghost'
          className='w-full justify-start text-foreground hover:bg-muted text-base'
        >
          <Globe className='h-5 w-5 mr-3' />
          Clubs
        </Button>
        <Button
          variant='ghost'
          className='w-full justify-start text-foreground hover:bg-muted text-base'
        >
          <Navigation className='h-5 w-5 mr-3' />
          Travel
        </Button>
        <Button
          variant='ghost'
          className='w-full justify-start text-foreground hover:bg-muted text-base'
        >
          <Settings className='h-5 w-5 mr-3' />
          Tools
        </Button>
        <Button
          variant={activeView === 'view1' ? 'secondary' : 'ghost'}
          className='w-full justify-start text-foreground hover:bg-muted text-base'
          onClick={() => setActiveView('view1')}
        >
          <Eye className='h-5 w-5 mr-3' />
          View1
        </Button>
        <Button
          variant={activeView === 'view2' ? 'secondary' : 'ghost'}
          className='w-full justify-start text-foreground hover:bg-muted text-base'
          onClick={() => setActiveView('view2')}
        >
          <Eye className='h-5 w-5 mr-3' />
          View2
        </Button>
        <Button
          variant='ghost'
          className='w-full justify-start text-foreground hover:bg-muted text-base'
        >
          <HelpCircle className='h-5 w-5 mr-3' />
          Help
        </Button>
        <Button
          variant='ghost'
          className='w-full justify-start text-foreground hover:bg-muted text-base'
        >
          <Facebook className='h-5 w-5 mr-3' />
          Facebook
        </Button>
        <Button
          variant='ghost'
          className='w-full justify-start text-foreground hover:bg-muted text-base'
        >
          <Twitter className='h-5 w-5 mr-3' />
          Twitter
        </Button>
        <Button
          variant='ghost'
          className='w-full justify-start text-foreground hover:bg-muted text-base'
        >
          <LogOut className='h-5 w-5 mr-3' />
          Logout
        </Button>
      </nav>
    </aside>
  )
}
