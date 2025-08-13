export interface ProfileCard {
  id: string
  name: string
  age: number
  orientation: string
  distance: string
  image: string
  online: boolean
  verified?: boolean
}

export interface HotDate {
  id: string
  title: string
  description: string
  location: string
  date: string
  distance: string
  image: string
  interestedIn: string[]
  ageRange: string
}

export interface StatCard {
  id: string
  title: string
  value: string
}

export const mockProfiles: ProfileCard[] = [
  {
    id: '1',
    name: 'sls_alfredo',
    age: 16,
    orientation: 'Straight',
    distance: '0 Mi.',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face&f=face',
    online: true,
  },
  {
    id: '2',
    name: 'Countrycouple',
    age: 29,
    orientation: 'Bi',
    distance: '21 Mi.',
    image:
      'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop&crop=face&f=face',
    online: true,
  },
  {
    id: '3',
    name: 'mikensam7',
    age: 9,
    orientation: 'Bi',
    distance: '34 Mi.',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=face&f=face',
    online: false,
  },
  {
    id: '4',
    name: 'Setxcouple',
    age: 7,
    orientation: 'Straight',
    distance: '15 Mi.',
    image:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=600&fit=crop&crop=face&f=face',
    online: true,
  },
  {
    id: '5',
    name: 'CajunBarbie',
    age: 4,
    orientation: 'Bi Curious',
    distance: '8 Mi.',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop&crop=face&f=face',
    online: false,
  },
  {
    id: '6',
    name: 'Truckin71',
    age: 8,
    orientation: 'Straight',
    distance: '12 Mi.',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=face&f=face',
    online: true,
  },
  {
    id: '7',
    name: 'Blueyedtx',
    age: 33,
    orientation: 'Bi',
    distance: '45 Mi.',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop&crop=face&f=face',
    online: false,
  },
  {
    id: '8',
    name: 'Nelacpl4f',
    age: 14,
    orientation: 'Bi Curious',
    distance: '28 Mi.',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop&crop=face&f=face',
    online: true,
  },
  {
    id: '9',
    name: 'Puter_N_H',
    age: 19,
    orientation: 'Bi Curious',
    distance: '32 Mi.',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop&crop=face&f=face',
    online: false,
  },
  {
    id: '10',
    name: 'Viewer1',
    age: 25,
    orientation: 'Straight',
    distance: '45 Mi.',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face&f=face',
    online: true,
  },
  {
    id: '11',
    name: 'Viewer2',
    age: 31,
    orientation: 'Bi',
    distance: '18 Mi.',
    image:
      'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop&crop=face&f=face',
    online: false,
  },
  {
    id: '12',
    name: 'Viewer3',
    age: 22,
    orientation: 'Bi Curious',
    distance: '33 Mi.',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=face&f=face',
    online: true,
  },
  {
    id: '13',
    name: 'Viewer4',
    age: 28,
    orientation: 'Straight',
    distance: '7 Mi.',
    image:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=600&fit=crop&crop=face&f=face',
    online: false,
  },
  {
    id: '14',
    name: 'Viewer5',
    age: 35,
    orientation: 'Bi',
    distance: '52 Mi.',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop&crop=face&f=face',
    online: true,
  },
]

export const mockHotDates: HotDate[] = [
  {
    id: '1',
    title: 'Funcouple20199',
    description:
      'Visiting Houston. Would like to meet a couple for dinner, drinks and possible more. If interested hit us up.',
    location: 'Houston, TX US',
    date: 'August 6, 2025',
    distance: '23 Mi.',
    image:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    interestedIn: ['Couple (M/F)', 'Single Female'],
    ageRange: '18 - 99',
  },
  {
    id: '2',
    title: 'HoustonParty',
    description:
      'Looking for fun people to join our weekend party. Music, drinks, and good vibes guaranteed.',
    location: 'Houston, TX US',
    date: 'August 8, 2025',
    distance: '15 Mi.',
    image:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop',
    interestedIn: ['Single Male', 'Single Female', 'Couple (M/F)'],
    ageRange: '21 - 45',
  },
  {
    id: '3',
    title: 'WeekendAdventure',
    description:
      'Planning a weekend trip to the beach. Looking for adventurous people to join us.',
    location: 'Galveston, TX US',
    date: 'August 10, 2025',
    distance: '50 Mi.',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop',
    interestedIn: ['Single Female', 'Couple (M/F)'],
    ageRange: '25 - 40',
  },
]

export const mockStats: StatCard[] = [
  {
    id: '1',
    title: 'Online Now',
    value: '5,112'
  },
  {
    id: '2',
    title: 'New Members',
    value: '5,023'
  },
  {
    id: '3',
    title: 'New Pictures',
    value: '19,636'
  },
  {
    id: '4',
    title: 'Member Groups',
    value: '14,654'
  }
]
