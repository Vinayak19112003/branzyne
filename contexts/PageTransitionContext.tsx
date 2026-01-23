'use client'
import React, { createContext, useContext, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'

interface PageTransitionContextType {
  isTransitioning: boolean
  showLoaderStart: boolean
  showLoaderEnd: boolean
  navigateWithTransition: (path: string) => void
  setTransitionComplete: () => void
}

const PageTransitionContext = createContext<PageTransitionContextType | undefined>(undefined)

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showLoaderStart, setShowLoaderStart] = useState(false)
  const [showLoaderEnd, setShowLoaderEnd] = useState(false)
  const router = useRouter()

  const navigateWithTransition = useCallback((path: string) => {
    setIsTransitioning(true)
    setShowLoaderStart(true)
    setShowLoaderEnd(false)

    // Start the loader-start animation
    setTimeout(() => {
      // After loader-start animation completes, navigate
      router.push(path)
      
      // Show loader-end on the new page
      setTimeout(() => {
        setShowLoaderStart(false)
        setShowLoaderEnd(true)
      }, 100) // Small delay to ensure page has loaded
    }, 1200) // Match the duration of loader-start animation (1s + delays)
  }, [router])

  const setTransitionComplete = useCallback(() => {
    setIsTransitioning(false)
    setShowLoaderEnd(false)
  }, [])

  return (
    <PageTransitionContext.Provider
      value={{
        isTransitioning,
        showLoaderStart,
        showLoaderEnd,
        navigateWithTransition,
        setTransitionComplete,
      }}
    >
      {children}
    </PageTransitionContext.Provider>
  )
}

export function usePageTransition() {
  const context = useContext(PageTransitionContext)
  if (context === undefined) {
    throw new Error('usePageTransition must be used within a PageTransitionProvider')
  }
  return context
}
