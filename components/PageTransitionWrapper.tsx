'use client'
import React, { useEffect } from 'react'
import { usePageTransition } from '@/contexts/PageTransitionContext'
import LoaderStart from '@/component/loader-start'
import LoaderEnd from '@/component/loader-end'

interface PageTransitionWrapperProps {
  children: React.ReactNode
}

export default function PageTransitionWrapper({ children }: PageTransitionWrapperProps) {
  const { showLoaderStart, showLoaderEnd, setTransitionComplete } = usePageTransition()

  useEffect(() => {
    if (showLoaderEnd) {
      // Auto-hide loader-end after animation completes
      const timer = setTimeout(() => {
        setTransitionComplete()
      }, 1200) // Match the duration of loader-end animation

      return () => clearTimeout(timer)
    }
  }, [showLoaderEnd, setTransitionComplete])

  return (
    <>
      {showLoaderStart && (
        <div className="fixed inset-0 z-50 ">
          <LoaderStart />
        </div>
      )}
      
      {showLoaderEnd && (
        <div className="fixed inset-0 z-50 ">
          <LoaderEnd />
        </div>
      )}
      
      {children}
    </>
  )
}
