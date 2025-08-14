import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  ArrowRight,
  MoreHorizontal,
  MessageCircle,
  MapPin,
  Images,
  Settings,
} from 'lucide-react'
import { ProfileCard } from '@/lib/fake-data'

interface WhoViewedMeSectionProps {
  profiles: ProfileCard[]
  onProfileClick?: (profileId: string) => void
}

export function WhoViewedMeSection({
  profiles,
  onProfileClick,
}: WhoViewedMeSectionProps) {
  return (
    <section className='mt-10'>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-xl sm:text-2xl font-bold'>Who Viewed Me</h2>
        <div className='flex items-center space-x-2'>
          <Button variant='outline' size='sm'>
            <Settings className='h-4 w-4' />
          </Button>
          <Button variant='outline' size='sm'>
            More
            <ArrowRight className='h-4 w-4 ml-2' />
          </Button>
        </div>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4'>
        {profiles.slice(5, 10).map((profile, index) => (
          <div
            key={profile.id}
            className={index === 4 ? 'hidden lg:block' : ''}
          >
            <Card
              className='overflow-hidden hover:shadow-xl transition-shadow relative h-96 border-0 shadow-md cursor-pointer'
              onClick={() => onProfileClick?.(profile.id)}
            >
              <Image
                src={profile.image}
                alt={profile.name}
                width={200}
                height={400}
                className='absolute inset-0 w-full h-full object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent'></div>
              {profile.online && (
                <div className='absolute top-2 right-2 z-10'>
                  <Badge className='bg-green-500 text-white'>
                    <div className='w-2 h-2 bg-white rounded-full mr-1'></div>
                    Online
                  </Badge>
                </div>
              )}
              <div className='absolute inset-0 p-4 flex flex-col justify-end text-white'>
                <div className='flex items-center justify-between mb-2'>
                  <h3 className='font-semibold truncate text-white'>
                    {profile.name}
                  </h3>
                  <Button
                    variant='ghost'
                    size='sm'
                    className='text-white hover:bg-white/20'
                  >
                    <MoreHorizontal className='h-4 w-4' />
                  </Button>
                </div>
                <div className='space-y-1 text-sm text-white/90'>
                  <div className='flex items-center justify-between'>
                    <span>{profile.orientation}</span>
                    <span className='flex items-center'>
                      <MapPin className='h-3 w-3 mr-1' />
                      {profile.distance}
                    </span>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span className='flex items-center'>
                      <Images className='h-4 w-4 mr-1' />
                      {Math.floor(profile.id.charCodeAt(0) % 20) + 5}
                    </span>
                  </div>
                </div>
                <div className='flex space-x-2 mt-3'>
                  <Button
                    size='sm'
                    className='flex-1 bg-white/20 hover:bg-white/30 text-white border-white/30'
                  >
                    <MessageCircle className='h-3 w-3 mr-1' />
                    Message
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  )
}
