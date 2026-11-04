import { useEffect, useState } from 'react'
import styles from './FisherAnimation.module.css'

export function FisherAnimation() {
  const [position, setPosition] = useState({ x: -100, y: -100 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Smooth follow or drift towards top-left corner interaction
      const targetX = Math.min(Math.max(e.clientX * 0.05, 0), 40)
      const targetY = Math.min(Math.max(e.clientY * 0.05, 0), 40)
      setPosition({ x: targetX, y: targetY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div 
      className={styles.fisherContainer}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      aria-hidden="true"
    >
      <svg 
        width="140" 
        height="140" 
        viewBox="0 0 140 140" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={styles.fisherSvg}
      >
        {/* Fishing rod pole */}
        <path 
          d="M10 10 L110 90" 
          stroke="url(#duskGrad)" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
        />
        {/* Fishing line with gentle wave/curve */}
        <path 
          d="M110 90 Q 125 110, 130 135" 
          stroke="#8B5CF6" 
          strokeWidth="1" 
          strokeDasharray="3 3"
          className={styles.lineAnimation}
        />
        {/* Bobber / hook at the end */}
        <circle cx="130" cy="135" r="3" fill="#B85C5C" className={styles.bobber} />
        
        <defs>
          <linearGradient id="duskGrad" x1="10" y1="10" x2="110" y2="90" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8B5CF6" />
            <stop offset="1" stopColor="#B85C5C" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
