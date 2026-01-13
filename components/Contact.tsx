'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <div className="relative min-h-screen w-screen flex items-center justify-center bg-noir-black px-6 md:px-24 py-20 overflow-y-auto md:overflow-hidden">
      <div className="w-full max-w-6xl relative z-10">
        <div className="text-center mb-12 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mb-4 md:mb-8"
          >
            <span className="text-noir-gold font-display text-base md:text-xl lowercase tracking-widest block mb-2 md:mb-4">i am ready for the next challenge</span>
            <h2 className="text-6xl md:text-[10vw] font-display font-black text-white leading-none tracking-tighter">
              LET'S <span className="text-noir-gold italic">WORK.</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div className="flex flex-col justify-center space-y-8 md:space-y-12 order-2 md:order-1">
            <p className="text-lg md:text-2xl text-noir-lightGray font-light leading-relaxed">
              "If you have a project that needs a sharp eye, aggressive pacing, and premium visual quality, I'm your person. 
              I work globally and I'm always looking for the next iconic brand to collaborate with."
            </p>
            
            <div className="flex flex-col gap-6">
              <a href="mailto:pawanbisht730@gmail.com" className="text-2xl md:text-4xl lg:text-5xl font-display font-black text-white hover:text-noir-gold transition-colors break-all">
                PAWANBISHT730@GMAIL.COM
              </a>
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                <a href="#" className="text-[10px] md:text-sm font-bold tracking-widest text-noir-lightGray hover:text-white transition-colors">INSTAGRAM</a>
                <a href="#" className="text-[10px] md:text-sm font-bold tracking-widest text-noir-lightGray hover:text-white transition-colors">VIMEO</a>
                <a href="#" className="text-[10px] md:text-sm font-bold tracking-widest text-noir-lightGray hover:text-white transition-colors">LINKEDIN</a>
              </div>
            </div>
          </div>

          <div className="relative aspect-auto md:aspect-square border border-white/5 p-8 md:p-12 flex flex-col justify-center bg-noir-dark/30 backdrop-blur-sm order-1 md:order-2">
             <span className="text-[10px] font-mono text-noir-gold mb-6 md:mb-8 tracking-[0.5em] uppercase opacity-50">
                // based in Mumbai, Maharashtra, available globally
              </span>
              <p className="text-xl md:text-2xl font-display text-white leading-snug italic mb-8 md:mb-12">
                "I make every frame count. No filler, just high-impact visual storytelling."
              </p>
              <div className="h-px w-full bg-noir-gold/20 mb-8 md:mb-12"></div>
              <button className="w-full py-4 md:py-6 border border-noir-gold text-noir-gold font-black tracking-[0.5em] text-[10px] md:text-xs uppercase hover:bg-noir-gold hover:text-noir-black transition-all">
                REQUEST MY REEL
              </button>
          </div>
        </div>
      </div>
      
      {/* Background Ambience - Hidden on small screens to save space */}
      <div className="absolute top-0 right-0 p-12 text-[15vw] font-display font-black text-white/[0.01] pointer-events-none select-none hidden md:block">
        END.
      </div>
    </div>
  )
}
