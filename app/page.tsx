'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  
  // Track window size for mobile adjustments
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  // Track scroll for the entire page
  const { scrollYProgress } = useScroll()

  // Scene 1: Hero translates left (0% to 12% of scroll)
  const heroX = useTransform(scrollYProgress, [0, 0.12], ["0%", "-100%"])
  const heroOpacity = useTransform(scrollYProgress, [0.1, 0.12], [1, 0])
  
  // Scene 3: Contact translates in (88% to 100% of scroll)
  const contactX = useTransform(scrollYProgress, [0.88, 1], ["100%", "0%"])
  const contactOpacity = useTransform(scrollYProgress, [0.88, 0.92], [0, 1])

  return (
    <main className="relative bg-noir-black text-noir-white min-h-[800vh]">
      <div className="film-grain" />
      <div className="video-scanline" />
      
      <Navigation />
      
      {/* SCENE 1: THE AWAKENING */}
      <div className="fixed top-0 left-0 h-screen w-full overflow-hidden pointer-events-none z-40">
        <motion.div 
          style={{ x: heroX, opacity: heroOpacity }}
          className="w-full h-full pointer-events-auto"
        >
          <Hero />
        </motion.div>
      </div>

      {/* SCENE 2: THE JOURNEY */}
      <div className="relative z-30 pt-[100vh] pb-[50vh]">
        <Portfolio />
      </div>

      {/* SCENE 3: THE CONNECTION */}
      <div className="fixed bottom-0 left-0 h-screen w-full overflow-hidden pointer-events-none z-40">
        <motion.div 
          style={{ x: contactX, opacity: contactOpacity }}
          className="w-full h-full pointer-events-auto"
        >
          <Contact />
        </motion.div>
      </div>

      {/* Cinematic Overlays - Hidden on mobile to avoid layout issues */}
      <div className="fixed inset-0 border-[20px] md:border-[40px] border-noir-black pointer-events-none z-50"></div>
      
      {/* Subtle Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[60] mix-blend-overlay opacity-[0.03]">
        <div className="w-full h-full bg-[url('https://res.cloudinary.com/dq70ubn98/image/upload/v1675544603/grain_qezv1x.png')] bg-repeat animate-grain"></div>
      </div>
    </main>
  )
}
