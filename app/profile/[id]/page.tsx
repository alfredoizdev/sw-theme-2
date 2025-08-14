'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  MessageCircle,
  UserPlus,
  Shield,
  Flag,
  Calendar,
  Crown,
  ArrowLeft,
  Globe,
  MoreHorizontal,
  Heart,
  Users,
  Camera,
  Eye,
} from 'lucide-react'
import { mockDetailedProfile } from '@/lib/fake-data'
import { AppLayout } from '@/components/app-layout'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function ProfilePage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<
    'profile' | 'gallery' | 'interests' | 'hotdates'
  >('profile')

  // In a real app, you'd fetch the profile by ID
  // For now, we'll use the mock data
  const profile = mockDetailedProfile

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
    <AppLayout>
      {/* Modern Banner with Gradient - Fixed colors for both themes */}
      <div className='relative mb-8'>
        <div className='absolute inset-0 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 rounded-2xl overflow-hidden'>
          {/* Decorative circles */}
          <div className='absolute top-4 left-10 w-32 h-32 bg-purple-400/40 rounded-full blur-xl'></div>
          <div className='absolute bottom-4 right-10 w-24 h-24 bg-pink-400/40 rounded-full blur-xl'></div>
          <div className='absolute top-1/2 left-1/3 w-20 h-20 bg-blue-400/40 rounded-full blur-xl'></div>
        </div>

        {/* Profile Header Content */}
        <div className='relative z-10 p-8'>
          <div className='flex items-center justify-between mb-6'>
            <Button
              variant='ghost'
              size='sm'
              onClick={() => router.back()}
              className='p-2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 hover:text-gray-900'
            >
              <ArrowLeft className='h-5 w-5' />
            </Button>

            <div className='flex items-center space-x-2'>
              <Button
                variant='ghost'
                size='sm'
                className='p-2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 hover:text-gray-900'
              >
                <MoreHorizontal className='h-5 w-5' />
              </Button>
              <Button
                variant='ghost'
                size='sm'
                className='p-2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 hover:text-gray-900'
              >
                <Heart className='h-5 w-5' />
              </Button>
            </div>
          </div>

          <div className='flex items-end space-x-6'>
            {/* Profile Picture */}
            <div className='relative'>
              <Image
                src={profile.mainImage}
                alt={profile.name}
                width={120}
                height={120}
                className='w-30 h-30 rounded-full object-cover border-4 border-white shadow-lg'
              />
              {profile.isPaidMember && (
                <Badge className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white border-2 border-white'>
                  <Crown className='h-3 w-3 mr-1' />
                  VIP
                </Badge>
              )}
            </div>

            {/* Profile Info */}
            <div className='flex-1'>
              <h1 className='text-3xl font-bold text-gray-800 mb-2'>
                {profile.name}
              </h1>
              <p className='text-lg text-gray-700 mb-3'>
                Looking for fun and adventure in {profile.location}
              </p>
              <div className='flex items-center space-x-4'>
                <Badge
                  variant={profile.online ? 'default' : 'secondary'}
                  className='px-3 py-1'
                >
                  {profile.online ? '🟢 Online Now' : '⚫ Offline'}
                </Badge>
                <span className='text-sm text-gray-600'>
                  • {profile.distance}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
        {/* Main Content Area */}
        <div className='lg:col-span-3'>
          {/* Tabs */}
          <div className='border-b border-gray-200 mb-8'>
            <div className='flex space-x-8'>
              {['profile', 'gallery', 'interests', 'hotdates'].map((tab) => (
                <button
                  key={tab}
                  onClick={() =>
                    setActiveTab(
                      tab as 'profile' | 'gallery' | 'interests' | 'hotdates'
                    )
                  }
                  className={cn(
                    'py-4 px-1 border-b-2 text-sm font-medium capitalize transition-colors',
                    activeTab === tab
                      ? 'border-[#d5b34f] text-[#d5b34f]'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  )}
                >
                  {tab === 'hotdates' ? 'Hot Dates' : tab}
                  {tab === 'gallery' && (
                    <Badge variant='secondary' className='ml-2'>
                      {profile.gallery.length}
                    </Badge>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === 'profile' && (
              <div className='space-y-6'>
                {/* Looking For Section */}
                <Card className='p-6'>
                  <h3 className='text-xl font-semibold mb-4 text-gray-900 dark:text-white'>
                    Looking For
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                    Meet people who have similar interest, like to party, have a
                    good time, enjoy their/our company always keeping in mind
                    that we can take things to a level where everyone feels
                    comfortable while breaking some taboos and limits in a safe
                    but amazing way.
                  </p>
                </Card>

                {/* Description Section */}
                <Card className='p-6'>
                  <h3 className='text-xl font-semibold mb-4 text-gray-900 dark:text-white'>
                    Description
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                    We like to dance, have a few drinks and if the chemistry
                    exists see what limits can be broken. Totally newbies to
                    this, just want to test the waters :)
                  </p>
                </Card>

                {/* Couple Details */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <Card className='p-6'>
                    <h4 className='text-lg font-semibold mb-4 text-pink-600 dark:text-pink-400 flex items-center'>
                      <Users className='h-5 w-5 mr-2' />
                      Her
                    </h4>
                    <div className='space-y-3 text-sm'>
                      <div className='flex justify-between'>
                        <span className='text-gray-500 dark:text-gray-400'>
                          Orientation:
                        </span>
                        <span className='font-medium text-gray-900 dark:text-white'>
                          {profile.her.orientation}
                        </span>
                      </div>
                      <div className='flex justify-between'>
                        <span className='text-gray-500 dark:text-gray-400'>
                          Age:
                        </span>
                        <span className='font-medium text-gray-900 dark:text-white'>
                          {profile.her.age}
                        </span>
                      </div>
                      <div className='flex justify-between'>
                        <span className='text-gray-500 dark:text-gray-400'>
                          Height:
                        </span>
                        <span className='font-medium text-gray-900 dark:text-white'>
                          {profile.her.height}
                        </span>
                      </div>
                      <div className='flex justify-between'>
                        <span className='text-gray-500 dark:text-gray-400'>
                          Weight:
                        </span>
                        <span className='font-medium text-gray-900 dark:text-white'>
                          {profile.her.weight}
                        </span>
                      </div>
                    </div>
                  </Card>

                  <Card className='p-6'>
                    <h4 className='text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400 flex items-center'>
                      <Users className='h-5 w-5 mr-2' />
                      Him
                    </h4>
                    <div className='space-y-3 text-sm'>
                      <div className='flex justify-between'>
                        <span className='text-gray-500 dark:text-gray-400'>
                          Orientation:
                        </span>
                        <span className='font-medium text-gray-900 dark:text-white'>
                          {profile.him.orientation}
                        </span>
                      </div>
                      <div className='flex justify-between'>
                        <span className='text-gray-500 dark:text-gray-400'>
                          Age:
                        </span>
                        <span className='font-medium text-gray-900 dark:text-white'>
                          {profile.him.age}
                        </span>
                      </div>
                      <div className='flex justify-between'>
                        <span className='text-gray-500 dark:text-gray-400'>
                          Height:
                        </span>
                        <span className='font-medium text-gray-900 dark:text-white'>
                          {profile.him.height}
                        </span>
                      </div>
                      <div className='flex justify-between'>
                        <span className='text-gray-500 dark:text-gray-400'>
                          Weight:
                        </span>
                        <span className='font-medium text-gray-900 dark:text-white'>
                          {profile.him.weight}
                        </span>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Action Buttons */}
                <Card className='p-6'>
                  <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                    <Button variant='default' className='flex-1'>
                      <MessageCircle className='h-4 w-4 mr-2' />
                      Message
                    </Button>
                    <Button variant='outline' className='flex-1'>
                      <UserPlus className='h-4 w-4 mr-2' />
                      Connect
                    </Button>
                    <Button variant='outline' className='flex-1'>
                      <Shield className='h-4 w-4 mr-2' />
                      Verify
                    </Button>
                    <Button variant='outline' className='flex-1'>
                      <Flag className='h-4 w-4 mr-2' />
                      Report
                    </Button>
                  </div>
                </Card>
              </div>
            )}

            {activeTab === 'gallery' && (
              <div className='space-y-6'>
                <div className='flex items-center justify-between'>
                  <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                    Gallery ({profile.gallery.length} photos)
                  </h3>
                  <Button variant='outline' size='sm'>
                    <Camera className='h-4 w-4 mr-2' />
                    View All
                  </Button>
                </div>

                {/* Masonry-style Gallery Layout */}
                <div className='columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4'>
                  {profile.gallery.map((image, index) => (
                    <div
                      key={index}
                      className={cn(
                        'relative group cursor-pointer break-inside-avoid mb-4 overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300',
                        // Different sizes for visual interest - increased heights to prevent cropping
                        index === 0
                          ? 'h-96'
                          : index === 1
                          ? 'h-80'
                          : index === 2
                          ? 'h-88'
                          : index === 3
                          ? 'h-72'
                          : 'h-80'
                      )}
                    >
                      <Image
                        src={image}
                        alt={`Gallery ${index + 1}`}
                        width={400}
                        height={400}
                        className='w-full h-full object-cover hover:scale-110 transition-transform duration-500'
                      />

                      {/* Hover Overlay */}
                      <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300'>
                        <div className='absolute bottom-0 left-0 right-0 p-4 text-white'>
                          <div className='flex items-center justify-between'>
                            <span className='text-sm font-medium'>
                              Photo {index + 1}
                            </span>
                            <Eye className='h-5 w-5' />
                          </div>
                        </div>
                      </div>

                      {/* Image Number Badge */}
                      <div className='absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded-full'>
                        #{index + 1}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Gallery Stats */}
                <div className='bg-gray-50 dark:bg-gray-800 rounded-xl p-4'>
                  <div className='flex items-center justify-between text-sm text-gray-600 dark:text-gray-300'>
                    <span>Total Photos: {profile.gallery.length}</span>
                    <span>Last Updated: Today</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'interests' && (
              <div className='space-y-6'>
                <Card className='p-6'>
                  <h3 className='text-xl font-semibold mb-6 text-gray-900 dark:text-white'>
                    Interests & Compatibility
                  </h3>
                  <div className='space-y-6'>
                    {[
                      {
                        label: 'Watch',
                        value: profile.interests.watch,
                        icon: '👀',
                      },
                      {
                        label: 'Soft',
                        value: profile.interests.soft,
                        icon: '🥰',
                      },
                      {
                        label: 'Full',
                        value: profile.interests.full,
                        icon: '🔥',
                      },
                      {
                        label: 'Couples',
                        value: profile.interests.couples,
                        icon: '👫',
                      },
                      {
                        label: 'Females',
                        value: profile.interests.females,
                        icon: '👩',
                      },
                      {
                        label: 'Males',
                        value: profile.interests.males,
                        icon: '👨',
                      },
                    ].map(({ label, value, icon }) => (
                      <div key={label} className='space-y-2'>
                        <div className='flex justify-between items-center'>
                          <span className='font-medium text-gray-900 flex items-center'>
                            {icon} {label}
                          </span>
                          <span className='text-sm text-gray-500'>
                            {value}/10
                          </span>
                        </div>
                        <div className='w-full bg-gray-200 rounded-full h-3'>
                          <div
                            className={cn(
                              'h-3 rounded-full transition-all',
                              getInterestColor(value)
                            )}
                            style={{ width: getInterestBarWidth(value) }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className='p-6'>
                  <h3 className='text-xl font-semibold mb-4 text-gray-900 dark:text-white'>
                    Preferences
                  </h3>
                  <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-sm'>
                    <div className='text-center p-4 bg-gray-50 rounded-lg'>
                      <span className='text-gray-500 block mb-1'>Smoke</span>
                      <span className='font-medium text-gray-900'>
                        {profile.preferences.smoke}
                      </span>
                    </div>
                    <div className='text-center p-4 bg-gray-50 rounded-lg'>
                      <span className='text-gray-500 block mb-1'>Drink</span>
                      <span className='font-medium text-gray-900'>
                        {profile.preferences.drink}
                      </span>
                    </div>
                    <div className='text-center p-4 bg-gray-50 rounded-lg'>
                      <span className='text-gray-500 block mb-1'>
                        Age Range
                      </span>
                      <span className='font-medium text-gray-900'>
                        {profile.preferences.ageRange}
                      </span>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {activeTab === 'hotdates' && (
              <div className='space-y-6'>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                  Hot Dates
                </h3>
                <Card className='p-12 text-center'>
                  <Calendar className='h-16 w-16 mx-auto mb-4 text-gray-400' />
                  <h4 className='text-lg font-medium text-gray-900 mb-2'>
                    No upcoming Hot Dates
                  </h4>
                  <p className='text-gray-500 mb-6'>
                    Check back later for exciting events and meetups!
                  </p>
                  <Button variant='outline'>
                    <Calendar className='h-4 w-4 mr-2' />
                    Create Hot Date
                  </Button>
                </Card>
              </div>
            )}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className='lg:col-span-1'>
          <div className='space-y-6'>
            {/* Location Card */}
            <Card className='p-6'>
              <h4 className='font-semibold mb-3 text-gray-900 dark:text-white flex items-center'>
                <Globe className='h-5 w-5 mr-2 text-blue-500' />
                Location
              </h4>
              <p className='text-gray-600 dark:text-gray-300'>
                {profile.location}
              </p>
            </Card>

            {/* Certs Card */}
            <Card className='p-6'>
              <h4 className='font-semibold mb-3 text-gray-900 dark:text-white flex items-center'>
                <Shield className='h-5 w-5 mr-2 text-purple-500' />
                Certifications
              </h4>
              <div className='space-y-3'>
                <div className='flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg'>
                  <Image
                    src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face&f=face'
                    alt='Sarah M.'
                    width={32}
                    height={32}
                    className='w-8 h-8 rounded-full object-cover'
                  />
                  <div className='flex-1'>
                    <p className='text-sm font-medium text-gray-900 dark:text-white'>
                      Sarah M.
                    </p>
                    <p className='text-xs text-gray-500 dark:text-gray-400'>
                      Verified Couple • 2 days ago
                    </p>
                  </div>
                </div>

                <div className='flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg'>
                  <Image
                    src='https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=32&h=32&fit=crop&crop=face&f=face'
                    alt='Mike & Jen'
                    width={32}
                    height={32}
                    className='w-8 h-8 rounded-full object-cover'
                  />
                  <div className='flex-1'>
                    <p className='text-sm font-medium text-gray-900 dark:text-white'>
                      Mike & Jen
                    </p>
                    <p className='text-xs text-gray-500 dark:text-gray-400'>
                      Trusted Members • 1 week ago
                    </p>
                  </div>
                </div>

                <div className='flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg'>
                  <Image
                    src='https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=32&h=32&fit=crop&crop=face&f=face'
                    alt='Alex R.'
                    width={32}
                    height={32}
                    className='w-8 h-8 rounded-full object-cover'
                  />
                  <div className='flex-1'>
                    <p className='text-sm font-medium text-gray-900 dark:text-white'>
                      Alex R.
                    </p>
                    <p className='text-xs text-gray-500 dark:text-gray-400'>
                      Community Leader • 2 weeks ago
                    </p>
                  </div>
                </div>

                <div className='flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg'>
                  <Image
                    src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=32&h=32&fit=crop&crop=face&f=face'
                    alt='Lisa & Tom'
                    width={32}
                    height={32}
                    className='w-8 h-8 rounded-full object-cover'
                  />
                  <div className='flex-1'>
                    <p className='text-sm font-medium text-gray-900 dark:text-white'>
                      Lisa & Tom
                    </p>
                    <p className='text-xs text-gray-500 dark:text-gray-400'>
                      Verified Couple • 3 weeks ago
                    </p>
                  </div>
                </div>
              </div>

              <div className='mt-4 pt-3 border-t border-gray-200 dark:border-gray-700'>
                <Button variant='outline' size='sm' className='w-full'>
                  View More...
                </Button>
              </div>
            </Card>

            {/* Member Info */}
            <Card className='p-6'>
              <h4 className='font-semibold mb-3 text-gray-900 dark:text-white'>
                Member Information
              </h4>
              <div className='space-y-3 text-sm'>
                <div className='flex justify-between'>
                  <span className='text-gray-500 dark:text-gray-400'>
                    Member Since:
                  </span>
                  <span className='font-medium text-gray-900 dark:text-white'>
                    {profile.memberSince}
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-500 dark:text-gray-400'>
                    Last Online:
                  </span>
                  <span className='font-medium text-gray-900 dark:text-white'>
                    {profile.lastOnline}
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-500 dark:text-gray-400'>
                    Status:
                  </span>
                  <Badge
                    variant={profile.online ? 'default' : 'secondary'}
                    className='text-xs'
                  >
                    {profile.online ? 'Online' : 'Offline'}
                  </Badge>
                </div>
              </div>
            </Card>

            {/* Verification Status */}
            <Card className='p-6'>
              <h4 className='font-semibold mb-3 text-gray-900 dark:text-white'>
                Verification
              </h4>
              <div className='space-y-3'>
                <div className='flex items-center justify-between'>
                  <span className='text-gray-500 dark:text-gray-400 text-sm'>
                    Email Verified
                  </span>
                  <Badge
                    variant='default'
                    className='bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                  >
                    ✓
                  </Badge>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-gray-500 dark:text-gray-400 text-sm'>
                    Phone Verified
                  </span>
                  <Badge
                    variant='default'
                    className='bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                  >
                    ✓
                  </Badge>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-gray-500 dark:text-gray-400 text-sm'>
                    Photo Verified
                  </span>
                  <Badge
                    variant='default'
                    className='bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                  >
                    ✓
                  </Badge>
                </div>
                {profile.isPaidMember && (
                  <div className='flex items-center justify-between'>
                    <span className='text-gray-500 dark:text-gray-400 text-sm'>
                      VIP Member
                    </span>
                    <Badge
                      variant='default'
                      className='bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                    >
                      <Crown className='h-3 w-3 mr-1' />
                      VIP
                    </Badge>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
