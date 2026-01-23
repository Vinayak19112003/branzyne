'use client'

import { motion } from 'motion/react'
import { ReactNode, useEffect, useState } from 'react'

interface TextRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  stagger?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

const TextReveal = ({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  stagger = 0.1,
  direction = 'up'
}: TextRevealProps) => {
  const [isVisible, setIsVisible] = useState(false)

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 30, opacity: 0 }
      case 'down':
        return { y: -30, opacity: 0 }
      case 'left':
        return { x: 30, opacity: 0 }
      case 'right':
        return { x: -30, opacity: 0 }
      default:
        return { y: 30, opacity: 0 }
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
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {typeof children === 'string' ? (
        children.split(' ').map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-2"
            variants={{
              hidden: getInitialPosition(),
              visible: {
                ...getAnimatePosition(),
                transition: {
                  duration: duration,
                  ease: "easeOut"
                }
              }
            }}
          >
            {word}
          </motion.span>
        ))
      ) : (
        <motion.div
          variants={{
            hidden: getInitialPosition(),
            visible: {
              ...getAnimatePosition(),
              transition: {
                duration: duration,
                ease: "easeOut"
              }
            }
          }}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  )
}

export default TextReveal
