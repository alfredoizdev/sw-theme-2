'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { AppLayout } from '@/components/app-layout'
import { mockProfiles } from '@/lib/fake-data'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { MessageCircle, User, ChevronLeft, ChevronRight } from 'lucide-react'

export default function SearchPage() {
  const router = useRouter()
  
  // Search filters state
  const [filters, setFilters] = useState({
    relationship: {
      couple: true,
      males: false,
      females: true
    },
    maleOrientation: 'straight-or-bi',
    femaleOrientation: 'straight-or-bi',
    ageRange: {
      male: { low: 22, high: 82 },
      female: { low: 22, high: 82 }
    },
    showOnly: {
      havePics: false,
      certified: false,
      paid: false,
      watch: true,
      soft: true,
      full: true
    },
    smoke: 'yes',
    drink: 'yes',
    lastOn: '1-month',
    newMembers: 'show-all',
    location: '',
    distance: '50-miles',
    profileName: ''
  })

  const [currentPage, setCurrentPage] = useState(1)
  const resultsPerPage = 4
  
  // Mock search results (using existing profiles)
  const searchResults = mockProfiles
  const totalPages = Math.ceil(searchResults.length / resultsPerPage)
  const paginatedResults = searchResults.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  )

  const handleProfileClick = (profileId: string) => {
    router.push(`/profile/${profileId}`)
  }

  const handleUpdateResults = () => {
    // In a real app, this would trigger the search API
    console.log('Updating search results with filters:', filters)
    setCurrentPage(1)
  }

  const handleFilterChange = (section: string, key: string, value: any) => {
    setFilters(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [key]: value
      }
    }))
  }

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold mb-2">Search</h1>
          <p className="text-muted-foreground">Find members that match your preferences</p>
        </div>

        {/* Search Filters */}
        <Card className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Relationship & Orientation */}
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-semibold mb-3 block">Relationship</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="couple"
                      checked={filters.relationship.couple}
                      onCheckedChange={(checked) => 
                        handleFilterChange('relationship', 'couple', checked)
                      }
                    />
                    <Label htmlFor="couple" className="text-sm">Couple</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="males"
                      checked={filters.relationship.males}
                      onCheckedChange={(checked) => 
                        handleFilterChange('relationship', 'males', checked)
                      }
                    />
                    <Label htmlFor="males" className="text-sm">Males</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="females"
                      checked={filters.relationship.females}
                      onCheckedChange={(checked) => 
                        handleFilterChange('relationship', 'females', checked)
                      }
                    />
                    <Label htmlFor="females" className="text-sm">Females</Label>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium mb-2 block">Male</Label>
                  <Select value={filters.maleOrientation} onValueChange={(value) => 
                    setFilters(prev => ({ ...prev, maleOrientation: value }))
                  }>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="straight-or-bi">Straight or Bi</SelectItem>
                      <SelectItem value="straight">Straight</SelectItem>
                      <SelectItem value="bi">Bi</SelectItem>
                      <SelectItem value="gay">Gay</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sm font-medium mb-2 block">Female</Label>
                  <Select value={filters.femaleOrientation} onValueChange={(value) => 
                    setFilters(prev => ({ ...prev, femaleOrientation: value }))
                  }>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="straight-or-bi">Straight or Bi</SelectItem>
                      <SelectItem value="straight">Straight</SelectItem>
                      <SelectItem value="bi">Bi</SelectItem>
                      <SelectItem value="lesbian">Lesbian</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Age & Show Only */}
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-semibold mb-3 block">Age</Label>
                <div className="space-y-3">
                  <div>
                    <Label className="text-xs text-muted-foreground mb-1 block">Low</Label>
                    <Input 
                      type="number" 
                      value={filters.ageRange.male.low}
                      onChange={(e) => 
                        handleFilterChange('ageRange', 'male', {
                          ...filters.ageRange.male, 
                          low: parseInt(e.target.value)
                        })
                      }
                      className="h-9"
                    />
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground mb-1 block">High</Label>
                    <Input 
                      type="number" 
                      value={filters.ageRange.male.high}
                      onChange={(e) => 
                        handleFilterChange('ageRange', 'male', {
                          ...filters.ageRange.male, 
                          high: parseInt(e.target.value)
                        })
                      }
                      className="h-9"
                    />
                  </div>
                </div>
              </div>

              <div>
                <Label className="text-sm font-semibold mb-3 block">Show Only</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="havePics"
                      checked={filters.showOnly.havePics}
                      onCheckedChange={(checked) => 
                        handleFilterChange('showOnly', 'havePics', checked)
                      }
                    />
                    <Label htmlFor="havePics" className="text-sm">Have Pics</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="certified"
                      checked={filters.showOnly.certified}
                      onCheckedChange={(checked) => 
                        handleFilterChange('showOnly', 'certified', checked)
                      }
                    />
                    <Label htmlFor="certified" className="text-sm">Certified</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="paid"
                      checked={filters.showOnly.paid}
                      onCheckedChange={(checked) => 
                        handleFilterChange('showOnly', 'paid', checked)
                      }
                    />
                    <Label htmlFor="paid" className="text-sm">Paid</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="watch"
                      checked={filters.showOnly.watch}
                      onCheckedChange={(checked) => 
                        handleFilterChange('showOnly', 'watch', checked)
                      }
                    />
                    <Label htmlFor="watch" className="text-sm">Watch</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="soft"
                      checked={filters.showOnly.soft}
                      onCheckedChange={(checked) => 
                        handleFilterChange('showOnly', 'soft', checked)
                      }
                    />
                    <Label htmlFor="soft" className="text-sm">Soft</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="full"
                      checked={filters.showOnly.full}
                      onCheckedChange={(checked) => 
                        handleFilterChange('showOnly', 'full', checked)
                      }
                    />
                    <Label htmlFor="full" className="text-sm">Full</Label>
                  </div>
                </div>
              </div>
            </div>

            {/* Preferences & Location */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium mb-2 block">Smoke</Label>
                  <Select value={filters.smoke} onValueChange={(value) => 
                    setFilters(prev => ({ ...prev, smoke: value }))
                  }>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                      <SelectItem value="dont-care">Don't Care</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sm font-medium mb-2 block">Last On</Label>
                  <Select value={filters.lastOn} onValueChange={(value) => 
                    setFilters(prev => ({ ...prev, lastOn: value }))
                  }>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-month">1 Month</SelectItem>
                      <SelectItem value="1-week">1 Week</SelectItem>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="online-now">Online Now</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium mb-2 block">Drink</Label>
                  <Select value={filters.drink} onValueChange={(value) => 
                    setFilters(prev => ({ ...prev, drink: value }))
                  }>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                      <SelectItem value="dont-care">Don't Care</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sm font-medium mb-2 block">New</Label>
                  <Select value={filters.newMembers} onValueChange={(value) => 
                    setFilters(prev => ({ ...prev, newMembers: value }))
                  }>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="show-all">Show All Members</SelectItem>
                      <SelectItem value="new-only">New Members Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Location Search */}
              <div>
                <Label className="text-sm font-semibold mb-3 block">Location Search</Label>
                <div className="space-y-3">
                  <div>
                    <Label className="text-xs text-muted-foreground mb-1 block">City Name or Postal Code</Label>
                    <Input 
                      placeholder="Enter the city name or postal code..."
                      value={filters.location}
                      onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
                      className="h-9"
                    />
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground mb-1 block">Distance</Label>
                    <Select value={filters.distance} onValueChange={(value) => 
                      setFilters(prev => ({ ...prev, distance: value }))
                    }>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="50-miles">50 Miles</SelectItem>
                        <SelectItem value="25-miles">25 Miles</SelectItem>
                        <SelectItem value="100-miles">100 Miles</SelectItem>
                        <SelectItem value="200-miles">200 Miles</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Member Search */}
              <div>
                <Label className="text-sm font-semibold mb-3 block">
                  <span className="mr-2">OR</span>
                  Member Search
                </Label>
                <div>
                  <Label className="text-xs text-muted-foreground mb-1 block">Profile Name</Label>
                  <Input 
                    placeholder="Enter the profile name..."
                    value={filters.profileName}
                    onChange={(e) => setFilters(prev => ({ ...prev, profileName: e.target.value }))}
                    className="h-9"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Update Button */}
          <div className="flex justify-center mt-6">
            <Button 
              onClick={handleUpdateResults}
              className="bg-green-600 hover:bg-green-700 text-white px-8"
            >
              Update Results
            </Button>
          </div>
        </Card>

        {/* Search Results */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Search Results ({searchResults.length})</h2>
            <div className="flex items-center space-x-2">
              <Button 
                variant="outline" 
                size="sm"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Prev
              </Button>
              <span className="text-sm text-muted-foreground">
                Page {currentPage} of {totalPages}
              </span>
              <Button 
                variant="outline" 
                size="sm"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              >
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {paginatedResults.map((profile) => (
              <Card key={profile.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  {/* Profile Image */}
                  <div 
                    className="relative cursor-pointer"
                    onClick={() => handleProfileClick(profile.id)}
                  >
                    <Image
                      src={profile.image}
                      alt={profile.name}
                      width={120}
                      height={160}
                      className="w-24 h-32 object-cover rounded-md"
                    />
                    {profile.online && (
                      <Badge className="absolute -top-1 -right-1 bg-green-500 text-xs px-1">
                        ●
                      </Badge>
                    )}
                  </div>

                  {/* Profile Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 
                        className="font-semibold text-lg cursor-pointer hover:underline"
                        onClick={() => handleProfileClick(profile.id)}
                      >
                        {profile.name}
                      </h3>
                      <Badge variant="outline" className="text-xs">
                        {profile.distance}
                      </Badge>
                    </div>

                    <div className="space-y-1 text-sm text-muted-foreground mb-4">
                      <p><span className="font-medium">Free</span></p>
                      <p><span className="font-medium">Her:</span> {profile.orientation}, {profile.age}, 125lbs, 5'3</p>
                      <p><span className="font-medium">Him:</span> Straight, 47, 155lbs, 5'7</p>
                      <p><span className="font-medium">Where:</span> Houston, TX US</p>
                      <p><span className="font-medium">Last Online:</span> past week</p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Button size="sm" className="flex-1">
                        <MessageCircle className="h-3 w-3 mr-1" />
                        Message
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleProfileClick(profile.id)}
                      >
                        <User className="h-3 w-3 mr-1" />
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-6">
            <div className="flex items-center space-x-2">
              <Button 
                variant="outline" 
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Prev
              </Button>
              
              {[...Array(totalPages)].map((_, i) => (
                <Button
                  key={i + 1}
                  variant={currentPage === i + 1 ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(i + 1)}
                  className="w-10"
                >
                  {i + 1}
                </Button>
              ))}

              <Button 
                variant="outline"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              >
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}