'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="relative h-screen w-screen flex items-center justify-center bg-noir-black overflow-hidden px-12 md:px-24">
      {/* Cinematic Aura */}
      <div className="absolute inset-0 bg-gradient-radial from-noir-gold/5 via-transparent to-transparent opacity-50"></div>
      
      <div className="relative z-20 w-full max-w-7xl flex flex-col items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-noir-gold"></div>
            <span className="text-noir-gold font-display italic text-sm tracking-widest lowercase">
              i am pawan bisht — i breathe life into moving images
            </span>
          </div>

          <h1 className="text-8xl md:text-[15vw] font-display font-black leading-[0.75] tracking-tighter text-white uppercase mb-12">
            VISUAL<br />
            <span className="text-noir-gold italic mix-blend-difference">ALCHΞMY</span>
          </h1>

          <p className="max-w-2xl text-xl md:text-2xl text-noir-lightGray font-light leading-relaxed mb-16 italic">
            "I don't just edit; I sculpt emotions out of the darkness. 
            I find the rhythm in the silence and the light in the shadows."
          </p>

          <motion.div
            whileHover={{ x: 20 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-6 cursor-pointer group"
          >
            <span className="text-sm font-bold tracking-[0.5em] text-white group-hover:text-noir-gold transition-colors">SEE MY STORY</span>
            <div className="w-24 h-px bg-noir-gold origin-left group-hover:scale-x-150 transition-transform duration-700"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Atmospheric Text */}
      <div className="absolute bottom-12 right-12 text-[10vw] font-display font-black text-white/[0.02] pointer-events-none select-none">
        SCENE_01
      </div>
    </div>
  )
}
