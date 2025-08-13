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

export interface DetailedProfile {
  id: string
  name: string
  age: number
  location: string
  distance: string
  memberSince: string
  lastOnline: string
  isPaidMember: boolean
  mainImage: string
  gallery: string[]
  tagline: string
  her: {
    orientation: string
    age: number
    weight: string
    height: string
  }
  him: {
    orientation: string
    age: number
    weight: string
    height: string
  }
  interests: {
    watch: number
    soft: number
    full: number
    couples: number
    females: number
    males: number
  }
  preferences: {
    smoke: string
    drink: string
    ageRange: string
  }
  online: boolean
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

export interface Message {
  id: string
  senderId: string
  senderName: string
  senderAvatar: string
  preview: string
  timestamp: string
  isRead: boolean
}

export interface WallPost {
  id: string
  userId: string
  userName: string
  userAvatar: string
  content: string
  mediaType: 'image' | 'video' | null
  mediaUrl?: string
  thumbnail?: string
  timestamp: string
  lovesCount: number
  isLoved: boolean
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

export const mockMessages: Message[] = [
  {
    id: '1',
    senderId: '2',
    senderName: 'Countrycouple',
    senderAvatar: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop&crop=face&f=face',
    preview: 'Hey! We saw your profile and we would love to chat with you. Are you available this weekend?',
    timestamp: '2:30 PM',
    isRead: false
  },
  {
    id: '2',
    senderId: '8',
    senderName: 'Nelacpl4f',
    senderAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop&crop=face&f=face',
    preview: 'Thanks for the message! We are definitely interested in meeting up.',
    timestamp: '1:45 PM',
    isRead: false
  },
  {
    id: '3',
    senderId: '7',
    senderName: 'Blueyedtx',
    senderAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop&crop=face&f=face',
    preview: 'Great photos! You seem like exactly what we are looking for.',
    timestamp: '11:20 AM',
    isRead: true
  },
  {
    id: '4',
    senderId: '10',
    senderName: 'Viewer1',
    senderAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face&f=face',
    preview: 'Hello there! Would you be interested in grabbing drinks sometime?',
    timestamp: 'Yesterday',
    isRead: true
  },
  {
    id: '5',
    senderId: '14',
    senderName: 'Viewer5',
    senderAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop&crop=face&f=face',
    preview: 'Your profile caught our attention. We would love to get to know you better.',
    timestamp: 'Yesterday',
    isRead: true
  }
]

export const mockWallPosts: WallPost[] = [
  {
    id: '1',
    userId: '2',
    userName: 'Countrycouple',
    userAvatar: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop&crop=face&f=face',
    content: 'Amazing party last weekend at the lake house! The energy was incredible and we met some fantastic people. Already planning the next one for this summer 🎉',
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop',
    timestamp: '2 hours ago',
    lovesCount: 24,
    isLoved: false
  },
  {
    id: '2',
    userId: '7',
    userName: 'Blueyedtx',
    userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop&crop=face&f=face',
    content: 'Beach trip vibes! Nothing beats sunset cocktails with good company. This is what weekends are made for 🌅🍹',
    mediaType: 'video',
    mediaUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=400&fit=crop',
    timestamp: '4 hours ago',
    lovesCount: 31,
    isLoved: true
  },
  {
    id: '3',
    userId: '8',
    userName: 'Nelacpl4f',
    userAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop&crop=face&f=face',
    content: 'Had the most incredible night out in downtown! The music was perfect and we danced until sunrise. Sometimes you just need to let loose and enjoy life ✨',
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop',
    timestamp: '6 hours ago',
    lovesCount: 18,
    isLoved: false
  },
  {
    id: '4',
    userId: '10',
    userName: 'Viewer1',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face&f=face',
    content: 'Pool party memories from yesterday! The weather was perfect and everyone brought such great energy. Love our community 💙',
    mediaType: 'video',
    mediaUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=400&fit=crop',
    timestamp: '1 day ago',
    lovesCount: 42,
    isLoved: true
  },
  {
    id: '5',
    userId: '14',
    userName: 'Viewer5',
    userAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop&crop=face&f=face',
    content: 'Romantic dinner date turned into an amazing night adventure! Sometimes the best experiences happen when you least expect them 🌃❤️',
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&fit=crop',
    timestamp: '2 days ago',
    lovesCount: 27,
    isLoved: false
  }
]

export const mockDetailedProfile: DetailedProfile = {
  id: '2',
  name: 'Countrycouple',
  age: 29,
  location: 'Houston, TX',
  distance: '21 Mi.',
  memberSince: '08/03/2025',
  lastOnline: 'past week',
  isPaidMember: true,
  mainImage: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop&crop=face&f=face',
  gallery: [
    'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop&crop=face&f=face',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop&crop=face&f=face',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop&crop=face&f=face',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop&crop=face&f=face',
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=600&fit=crop&crop=face&f=face'
  ],
  tagline: 'Wild and fun ... looking for some fun',
  her: {
    orientation: 'Straight',
    age: 44,
    weight: '165lbs',
    height: '5\'2"'
  },
  him: {
    orientation: 'Straight',
    age: 51,
    weight: '190lbs',
    height: '5\'7"'
  },
  interests: {
    watch: 10,
    soft: 9,
    full: 8,
    couples: 10,
    females: 7,
    males: 6
  },
  preferences: {
    smoke: 'Don\'t Care',
    drink: 'Don\'t Care',
    ageRange: '25 - 99'
  },
  online: true
}
