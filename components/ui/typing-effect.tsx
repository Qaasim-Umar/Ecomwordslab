'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface TypingEffectProps {
  texts?: string[]
  className?: string
  pauseDuration?: number
  typingSpeed?: number
  deletingSpeed?: number
}

export const TypingEffect = ({
  texts = ['Design', 'Development', 'Marketing'],
  className,
  pauseDuration = 2000,
  typingSpeed = 80,
  deletingSpeed = 45,
}: TypingEffectProps) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting'>('typing')
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true })

  const currentText = texts[currentTextIndex % texts.length]

  useEffect(() => {
    if (!isInView) return

    if (phase === 'typing') {
      if (displayedText.length < currentText.length) {
        const t = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1))
        }, typingSpeed)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setPhase('deleting'), pauseDuration)
        return () => clearTimeout(t)
      }
    }

    if (phase === 'deleting') {
      if (displayedText.length > 0) {
        const t = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1))
        }, deletingSpeed)
        return () => clearTimeout(t)
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        setPhase('typing')
      }
    }
  }, [displayedText, phase, currentText, isInView])

  return (
    <div
      ref={containerRef}
      className={cn('relative inline-flex items-center', className)}
    >
      {displayedText}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        className="ml-1 h-[0.85em] w-[3px] rounded-sm bg-current inline-block"
      />
    </div>
  )
}

export default TypingEffect
