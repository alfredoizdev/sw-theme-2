'use client'

import { useState } from 'react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin, Users } from 'lucide-react'
import { ProfileCard, HotDate } from '@/lib/fake-data'

interface ProfileAsideProps {
  profiles: ProfileCard[]
  hotDates: HotDate[]
  onProfileClick?: (profileId: string) => void
}

export function ProfileAside({ profiles, hotDates, onProfileClick }: ProfileAsideProps) {
  const [activeEventTab, setActiveEventTab] = useState<'events' | 'hotDates'>('events')
  
  const whosOnProfiles = profiles.filter(p => p.online).slice(0, 4)
  const viewedMeProfiles = profiles.slice(9, 13) // Taking different profiles for variety
  const newestMatchesProfiles = profiles.slice(5, 9)

  const renderProfileGrid = (profileList: ProfileCard[], title: string) => (
    <Card className="p-2 mb-3">
      <h3 className="text-xs font-semibold mb-2 text-muted-foreground px-1">{title}</h3>
      <div className="grid grid-cols-2 gap-1">
        {profileList.map((profile) => (
          <div 
            key={profile.id} 
            className="flex flex-col items-center space-y-1 p-1 hover:bg-muted/50 rounded-lg transition-colors cursor-pointer"
            onClick={() => onProfileClick?.(profile.id)}
          >
            <div className="relative">
              <Avatar className="h-10 w-10 rounded-md">
                <AvatarImage
                  src={profile.image}
                  alt={profile.name}
                  className="object-cover rounded-md"
                />
                <AvatarFallback className="rounded-md">
                  {profile.name.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              {profile.online && (
                <div className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 bg-green-500 border border-background rounded-full"></div>
              )}
            </div>
            <div className="text-center">
              <p className="text-xs font-medium truncate w-full">{profile.name}</p>
              <p className="text-xs text-muted-foreground">{profile.distance}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )

  const renderEventsSection = () => (
    <Card className="p-4">
      {/* Event Tabs */}
      <div className="flex space-x-1 mb-4 bg-muted rounded-lg p-1">
        <Button
          variant={activeEventTab === 'events' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setActiveEventTab('events')}
          className="flex-1 text-xs h-8"
        >
          <Calendar className="h-3 w-3 mr-1" />
          Events
        </Button>
        <Button
          variant={activeEventTab === 'hotDates' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setActiveEventTab('hotDates')}
          className="flex-1 text-xs h-8"
        >
          <Users className="h-3 w-3 mr-1" />
          Hot Dates
        </Button>
      </div>

      {/* Event Content */}
      <div className="space-y-3">
        {activeEventTab === 'events' ? (
          // Mock Events
          <>
            <div className="p-3 hover:bg-muted/50 rounded-lg cursor-pointer transition-colors">
              <div className="flex items-start space-x-2">
                <Calendar className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">Weekend Pool Party</p>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground mt-1">
                    <MapPin className="h-3 w-3" />
                    <span>Houston, TX</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Aug 15, 2025</p>
                </div>
              </div>
            </div>

            <div className="p-3 hover:bg-muted/50 rounded-lg cursor-pointer transition-colors">
              <div className="flex items-start space-x-2">
                <Calendar className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">Beach Volleyball</p>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground mt-1">
                    <MapPin className="h-3 w-3" />
                    <span>Galveston, TX</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Aug 18, 2025</p>
                </div>
              </div>
            </div>

            <div className="p-3 hover:bg-muted/50 rounded-lg cursor-pointer transition-colors">
              <div className="flex items-start space-x-2">
                <Calendar className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">Club Night Out</p>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground mt-1">
                    <MapPin className="h-3 w-3" />
                    <span>Downtown Houston</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Aug 20, 2025</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          // Hot Dates
          hotDates.slice(0, 3).map((hotDate) => (
            <div key={hotDate.id} className="p-3 hover:bg-muted/50 rounded-lg cursor-pointer transition-colors">
              <div className="flex items-start space-x-2">
                <Users className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{hotDate.title}</p>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground mt-1">
                    <MapPin className="h-3 w-3" />
                    <span>{hotDate.location}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{hotDate.date}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </Card>
  )

  return (
    <div className="space-y-2">
      {renderProfileGrid(whosOnProfiles, "Who's On")}
      {renderProfileGrid(viewedMeProfiles, "Who Viewed Me")}
      {renderProfileGrid(newestMatchesProfiles, "Newest Matches")}
      {renderEventsSection()}
    </div>
  )
}