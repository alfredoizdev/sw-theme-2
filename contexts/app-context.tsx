'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface AppContextType {
  activeView: 'view1' | 'view2' | 'view3'
  setActiveView: (view: 'view1' | 'view2' | 'view3') => void
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (open: boolean) => void
  isMessagesSidebarOpen: boolean
  setIsMessagesSidebarOpen: (open: boolean) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  const [activeView, setActiveView] = useState<'view1' | 'view2' | 'view3'>('view1')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMessagesSidebarOpen, setIsMessagesSidebarOpen] = useState(false)

  return (
    <AppContext.Provider
      value={{
        activeView,
        setActiveView,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        isMessagesSidebarOpen,
        setIsMessagesSidebarOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}