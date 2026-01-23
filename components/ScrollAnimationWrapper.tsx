'use client'

import { motion } from 'motion/react'
import { ReactNode } from 'react'

interface ScrollAnimationWrapperProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  distance?: number
}

const ScrollAnimationWrapper = ({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance = 30
}: ScrollAnimationWrapperProps) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance, opacity: 0 }
      case 'down':
        return { y: -distance, opacity: 0 }
      case 'left':
        return { x: distance, opacity: 0 }
      case 'right':
        return { x: -distance, opacity: 0 }
      default:
        return { y: distance, opacity: 0 }
    }
  }

  const getAnimatePosition = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { y: 0, opacity: 1 }
      case 'left':
      case 'right':
        return { x: 0, opacity: 1 }
      default:
        return { y: 0, opacity: 1 }
    }
  }

  return (
    <motion.div
      className={className}
      initial={getInitialPosition()}
      whileInView={getAnimatePosition()}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  )
}

export default ScrollAnimationWrapper
