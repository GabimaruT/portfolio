import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const chars = text.split('')

  return (
    <p ref={ref} className={`relative ${className}`}>
      {chars.map((char, i) => (
        <CharSpan
          key={i}
          char={char}
          index={i}
          total={chars.length}
          progress={scrollYProgress}
        />
      ))}
    </p>
  )
}

interface CharSpanProps {
  char: string
  index: number
  total: number
  progress: any
}

const CharSpan: React.FC<CharSpanProps> = ({ char, index, total, progress }) => {
  const start = index / total
  const end = (index + 1) / total
  const opacity = useTransform(progress, [start, end], [0.2, 1])

  return (
    <span className="relative inline">
      <span className="invisible">{char === ' ' ? '\u00A0' : char}</span>
      <motion.span
        className="absolute left-0 top-0"
        style={{ opacity }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  )
}

export default AnimatedText
