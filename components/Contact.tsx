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
            <span className="text-noir-gold italic font-display text-base md:text-xl lowercase tracking-widest block mb-2 md:mb-4">i am ready when you are</span>
            <h2 className="text-6xl md:text-[10vw] font-display font-black text-white leading-none tracking-tighter">
              PAWAN <span className="text-noir-gold italic">BISHT.</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div className="flex flex-col justify-center space-y-8 md:space-y-12 order-2 md:order-1">
            <p className="text-lg md:text-2xl text-noir-lightGray font-light leading-relaxed italic">
              "I am always looking for the next story that needs to be told. 
              If you have a vision that needs light, I am here to help you find it."
            </p>
            
            <div className="flex flex-col gap-6">
              <a href="mailto:i@visualalchemy.com" className="text-2xl md:text-4xl lg:text-5xl font-display font-black text-white hover:text-noir-gold transition-colors break-all">
                I@VISUALALCHEMY.COM
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
                // based in London, available globally
              </span>
              <p className="text-xl md:text-2xl font-display text-white leading-snug italic mb-8 md:mb-12">
                "My work is a reflection of my soul. Every frame, every cut, is a piece of me."
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
