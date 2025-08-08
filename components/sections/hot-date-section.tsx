import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  ArrowRight,
  MoreHorizontal,
  MessageCircle,
  Heart,
  Share2,
  Calendar,
  MapPin,
} from 'lucide-react'
import { HotDate } from '@/lib/fake-data'

interface HotDateSectionProps {
  hotDates: HotDate[]
}

export function HotDateSection({ hotDates }: HotDateSectionProps) {
  return (
    <section>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-xl sm:text-2xl font-bold'>Hot Date / Event</h2>
        <div className='flex space-x-2'>
          <Button variant='default' size='sm'>
            Hot Date
          </Button>
          <Button variant='outline' size='sm'>
            Event
          </Button>
        </div>
      </div>
      {hotDates.slice(0, 1).map((hotDate) => (
        <Card key={hotDate.id} className='overflow-hidden'>
          <div className='flex flex-col lg:flex-row'>
            <div className='relative lg:w-1/3 p-4'>
              <Image
                src={hotDate.image}
                alt={hotDate.title}
                width={300}
                height={200}
                className='w-full h-48 lg:h-full object-cover rounded-lg'
              />
              <div className='absolute top-6 right-6'>
                <Badge variant='secondary'>
                  <Calendar className='h-3 w-3 mr-1' />
                  {hotDate.date}
                </Badge>
              </div>
            </div>
            <div className='lg:w-2/3 p-6'>
              <div className='flex items-start justify-between mb-4'>
                <div>
                  <h3 className='text-xl font-bold mb-2'>{hotDate.title}</h3>
                  <div className='flex items-center space-x-4 text-sm text-muted-foreground mb-3'>
                    <span className='flex items-center'>
                      <MapPin className='h-4 w-4 mr-1' />
                      {hotDate.location}
                    </span>
                    <span className='flex items-center'>
                      <MapPin className='h-4 w-4 mr-1' />
                      {hotDate.distance}
                    </span>
                  </div>
                </div>
                <Button variant='outline' size='sm'>
                  <MoreHorizontal className='h-4 w-4' />
                </Button>
              </div>
              <p className='text-muted-foreground mb-4'>
                {hotDate.description}
              </p>
              <div className='space-y-2 mb-4'>
                <div className='flex items-center space-x-2'>
                  <span className='text-sm font-medium'>Interested In:</span>
                  <div className='flex flex-wrap gap-1'>
                    {hotDate.interestedIn.map((interest, index) => (
                      <Badge key={index} variant='outline' className='text-xs'>
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className='flex items-center space-x-2'>
                  <span className='text-sm font-medium'>Age Range:</span>
                  <Badge variant='outline' className='text-xs'>
                    {hotDate.ageRange}
                  </Badge>
                </div>
              </div>
              <div className='flex space-x-2'>
                <Button>
                  <MessageCircle className='h-4 w-4 mr-2' />
                  Contact
                </Button>
                <Button variant='outline'>
                  <Heart className='h-4 w-4 mr-2' />
                  Interested
                </Button>
                <Button variant='outline'>
                  <Share2 className='h-4 w-4 mr-2' />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </section>
  )
}
