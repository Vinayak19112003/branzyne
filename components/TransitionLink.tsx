'use client'
import React from 'react'
import { usePageTransition } from '@/contexts/PageTransitionContext'
import Link, { LinkProps } from 'next/link'

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode
  className?: string
  href: string
  [key: string]: any
}

export default function TransitionLink({ href, children, className = '', onClick, ...props }: TransitionLinkProps) {
  const { navigateWithTransition } = usePageTransition()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e)
    }
    e.preventDefault()
    navigateWithTransition(href)
  }

  return (
    <Link href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </Link>
  )
}
