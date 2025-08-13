'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  MessageCircle, 
  UserPlus, 
  Shield, 
  Flag, 
  Lock, 
  X, 
  ChevronLeft,
  MapPin,
  Calendar,
  Clock,
  Crown
} from 'lucide-react'
import { DetailedProfile } from '@/lib/fake-data'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ProfilePageProps {
  profile: DetailedProfile
  onClose: () => void
}

export function ProfilePage({ profile, onClose }: ProfilePageProps) {
  const [activeTab, setActiveTab] = useState<'profile' | 'gallery' | 'interests' | 'hotdates'>('profile')
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const getInterestBarWidth = (value: number) => {
    return `${Math.min(value * 10, 100)}%`
  }

  const getInterestColor = (value: number) => {
    if (value >= 8) return 'bg-blue-600'
    if (value >= 5) return 'bg-blue-500'
    if (value >= 3) return 'bg-blue-400'
    return 'bg-blue-300'
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen flex items-start justify-center p-4">
        <div className="w-full max-w-4xl bg-background rounded-lg shadow-xl my-8">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="p-2"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-xl font-bold flex items-center space-x-2">
                  <span>{profile.name}</span>
                  {profile.isPaidMember && <Crown className="h-5 w-5 text-yellow-500" />}
                </h1>
                <p className="text-sm text-muted-foreground">
                  {profile.location} • {profile.distance}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Badge variant={profile.online ? "default" : "secondary"}>
                {profile.online ? "Online Now" : "Offline"}
              </Badge>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b">
            <div className="flex space-x-6 px-4">
              {['profile', 'gallery', 'interests', 'hotdates'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={cn(
                    "py-3 px-1 border-b-2 text-sm font-medium capitalize transition-colors",
                    activeTab === tab
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  )}
                >
                  {tab === 'hotdates' ? 'Hot Dates' : tab}
                  {tab === 'gallery' && (
                    <Badge variant="secondary" className="ml-2">
                      {profile.gallery.length}
                    </Badge>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {activeTab === 'profile' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Image & Actions */}
                <div className="lg:col-span-1">
                  <div className="space-y-4">
                    <div className="relative">
                      <Image
                        src={profile.mainImage}
                        alt={profile.name}
                        width={400}
                        height={500}
                        className="w-full h-80 object-cover rounded-lg"
                      />
                      {profile.isPaidMember && (
                        <Badge className="absolute top-2 left-2 bg-yellow-500">
                          Paid Member
                        </Badge>
                      )}
                    </div>

                    {/* Gallery Preview */}
                    <div className="grid grid-cols-3 gap-2">
                      {profile.gallery.slice(0, 3).map((image, index) => (
                        <div key={index} className="relative">
                          <Image
                            src={image}
                            alt={`Gallery ${index + 1}`}
                            width={100}
                            height={100}
                            className="w-full h-20 object-cover rounded-md cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => setActiveTab('gallery')}
                          />
                          {index === 2 && profile.gallery.length > 3 && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-md">
                              <span className="text-white text-sm font-medium">
                                +{profile.gallery.length - 3}
                              </span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-3 gap-2">
                      <Button variant="default" size="sm" className="flex-1">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Message
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <UserPlus className="h-4 w-4 mr-1" />
                        Friend
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Shield className="h-4 w-4 mr-1" />
                        Certify
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Lock className="h-4 w-4 mr-1" />
                        Private
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Flag className="h-4 w-4 mr-1" />
                        Report
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Basic Info */}
                  <Card className="p-4">
                    <h3 className="font-semibold mb-4 flex items-center space-x-2">
                      <span>Profile Information</span>
                      {profile.isPaidMember && <Crown className="h-4 w-4 text-yellow-500" />}
                    </h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Member Since:</span>
                        <p className="font-medium">{profile.memberSince}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Last Online:</span>
                        <p className="font-medium">{profile.lastOnline}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Location:</span>
                        <p className="font-medium flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {profile.location}
                        </p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Distance:</span>
                        <p className="font-medium">{profile.distance}</p>
                      </div>
                    </div>
                  </Card>

                  {/* Couple Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3 text-pink-600">Her:</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Orientation:</span>
                          <span className="font-medium">{profile.her.orientation}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Age:</span>
                          <span className="font-medium">{profile.her.age}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Height:</span>
                          <span className="font-medium">{profile.her.height}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Weight:</span>
                          <span className="font-medium">{profile.her.weight}</span>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-4">
                      <h4 className="font-semibold mb-3 text-blue-600">Him:</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Orientation:</span>
                          <span className="font-medium">{profile.him.orientation}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Age:</span>
                          <span className="font-medium">{profile.him.age}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Height:</span>
                          <span className="font-medium">{profile.him.height}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Weight:</span>
                          <span className="font-medium">{profile.him.weight}</span>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Tagline */}
                  {profile.tagline && (
                    <Card className="p-4">
                      <h4 className="font-semibold mb-2">Tagline</h4>
                      <p className="text-sm italic">{profile.tagline}</p>
                    </Card>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'gallery' && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Gallery ({profile.gallery.length} photos)</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {profile.gallery.map((image, index) => (
                    <div key={index} className="relative group">
                      <Image
                        src={image}
                        alt={`Gallery ${index + 1}`}
                        width={300}
                        height={300}
                        className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'interests' && (
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Interests</h3>
                  <div className="space-y-4">
                    {[
                      { label: 'Watch', value: profile.interests.watch },
                      { label: 'Soft', value: profile.interests.soft },
                      { label: 'Full', value: profile.interests.full },
                      { label: 'Couples', value: profile.interests.couples },
                      { label: 'Females', value: profile.interests.females },
                      { label: 'Males', value: profile.interests.males }
                    ].map(({ label, value }) => (
                      <div key={label} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{label}:</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className={cn("h-2 rounded-full transition-all", getInterestColor(value))}
                            style={{ width: getInterestBarWidth(value) }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Preferences</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Smoke:</span>
                      <p className="font-medium">{profile.preferences.smoke}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Drink:</span>
                      <p className="font-medium">{profile.preferences.drink}</p>
                    </div>
                    <div className="col-span-2">
                      <span className="text-muted-foreground">Age Range:</span>
                      <p className="font-medium">{profile.preferences.ageRange}</p>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {activeTab === 'hotdates' && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Hot Dates</h3>
                <div className="text-center py-12 text-muted-foreground">
                  <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No upcoming Hot Dates</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}