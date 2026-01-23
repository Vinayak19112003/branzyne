'use client'

import { motion } from 'motion/react'
import { ReactNode } from 'react'

interface GradientTextProps {
  children: ReactNode
  className?: string
  colors?: string[]
  animationDuration?: number
}

const GradientText = ({
  children,
  className = '',
  colors = ['#a855f7', '#ec4899', '#06b6d4', '#a855f7'],
  animationDuration = 3
}: GradientTextProps) => {
  return (
    <motion.span
      className={`bg-gradient-to-r bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: `linear-gradient(90deg, ${colors.join(', ')})`,
        backgroundSize: '200% 200%'
      }}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
      }}
      transition={{
        duration: animationDuration,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      {children}
    </motion.span>
  )
}

export default GradientText
