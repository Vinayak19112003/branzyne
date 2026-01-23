'use client'

import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

interface TypingEffectProps {
  texts: string[]
  className?: string
  typeSpeed?: number
  deleteSpeed?: number
  delayBetweenTexts?: number
  cursorColor?: string
}

const TypingEffect = ({
  texts,
  className = '',
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetweenTexts = 2000,
  cursorColor = '#a855f7'
}: TypingEffectProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const text = texts[currentTextIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < text.length) {
          setCurrentText(text.slice(0, currentText.length + 1))
        } else {
          // Finished typing, wait before deleting
          setTimeout(() => setIsDeleting(true), delayBetweenTexts)
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(text.slice(0, currentText.length - 1))
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, texts, typeSpeed, deleteSpeed, delayBetweenTexts])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {currentText}
      <span
        className="inline-block ml-1"
        style={{
          color: cursorColor,
          opacity: showCursor ? 1 : 0,
          transition: 'opacity 0.1s'
        }}
      >
        |
      </span>
    </motion.span>
  )
}

export default TypingEffect
