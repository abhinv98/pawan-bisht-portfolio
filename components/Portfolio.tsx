'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const BASE_URL = "https://pub-296f1f1d748846f99b7dbcda087bbd96.r2.dev"

const portfolioData = [
  {
    category: "SHORT-FORM_MASTERY",
    intro: "I breathe rhythm into vertical frames. From viral campaigns to brand storytelling, I sculpt content that stops the scroll.",
    projects: [
      {
        title: "PODAR PREP",
        brand: "Podar Prep",
        description: "Engaging children's activity reels and leadership content for Dr. Swati Popat Vats. Blending education with high-energy visuals.",
        video: `${BASE_URL}/work/Motion Graphics/Podar 1.mp4`,
        allVideos: [`${BASE_URL}/work/Motion Graphics/Podar 1.mp4`]
      },
      {
        title: "TIMES OF INDIA KOLKATA",
        brand: "Times of India",
        description: "Produced viral campaign reels for 'I Am Kolkata' initiative. Every cut is a heartbeat of the city.",
        video: `${BASE_URL}/work/Motion Graphics/TOI 1.mp4`,
        allVideos: [`${BASE_URL}/work/Motion Graphics/TOI 1.mp4`, `${BASE_URL}/work/Long Format/TOI case study_17 OCT.mp4`]
      },
      {
        title: "NIPS BRANDING",
        brand: "Nehru International Public School",
        description: "School branding and academic showcase videos, capturing authentic student culture.",
        video: `${BASE_URL}/work/Video Editing/NIPS/Reel 2 A day in the life_SUB.mp4`,
        allVideos: [`${BASE_URL}/work/Video Editing/NIPS/Reel 2 A day in the life_SUB.mp4`, `${BASE_URL}/work/Video Editing/NIPS/Student Testimonial-video-export-2025-04-25T16-35-08.101Z.mp4`]
      },
      {
        title: "SBI YIFI",
        brand: "SBI YiFi",
        description: "Compelling fellowship program videos for youth engagement. Dynamic and fast-paced.",
        video: `${BASE_URL}/work/Video Editing/SBI/Emoji Reel.mp4`,
        allVideos: [`${BASE_URL}/work/Video Editing/SBI/Emoji Reel.mp4`, `${BASE_URL}/work/Motion Graphics/Gandhi Fellowship.mp4`]
      },
      {
        title: "ECULTIFY",
        brand: "Ecultify",
        description: "Trending festival reels and high-engagement content, staying ahead of digital trends.",
        video: `${BASE_URL}/work/Video Editing/eCULTIFY/ChristmasReel_thd3.mp4`,
        allVideos: [`${BASE_URL}/work/Video Editing/eCULTIFY/ChristmasReel_thd3.mp4`]
      }
    ]
  },
  {
    category: "AI_SYNTHESIS",
    intro: "I merge human creativity with artificial intelligence, using AI as a new medium to tell previously impossible stories.",
    projects: [
      {
        title: "MARCO AI",
        brand: "Marco AI",
        description: "AI spokesperson video for brand introduction, making digital avatars feel startlingly human.",
        video: `${BASE_URL}/work/AI Videos/Marco.mp4`,
        allVideos: [`${BASE_URL}/work/AI Videos/Marco.mp4`]
      },
      {
        title: "CRICKSTAR",
        brand: "Crickstar",
        description: "AI avatar promotional content for app launch, creating a futuristic vibe.",
        video: `${BASE_URL}/work/AI Videos/CRICKSTAR.mp4`,
        allVideos: [`${BASE_URL}/work/AI Videos/CRICKSTAR.mp4`]
      },
      {
        title: "PAPA JI",
        brand: "Cultural Storytelling",
        description: "Breathed life into traditional narratives using AI avatars for a digital generation.",
        video: `${BASE_URL}/work/AI Videos/PaPA JI.mp4`,
        allVideos: [`${BASE_URL}/work/AI Videos/PaPA JI.mp4`, `${BASE_URL}/work/AI Videos/Papa ji 2.mp4`]
      }
    ]
  },
  {
    category: "MOTION_DYNAMICS",
    intro: "I define the physics of the digital world, creating motion that explains and elevates brand identities.",
    projects: [
      {
        title: "BLINK X",
        brand: "Blink X",
        description: "Motion graphics explainer for trading app features, making complex tools intuitive.",
        video: `${BASE_URL}/work/Motion Graphics/Blink X_1.mp4`,
        allVideos: [`${BASE_URL}/work/Motion Graphics/Blink X_1.mp4`]
      },
      {
        title: "TIMES OF INDIA MOTION",
        brand: "Times of India",
        description: "Animated reels for TOI Kolkata campaigns, ensuring brand messages pop on screen.",
        video: `${BASE_URL}/work/Motion Graphics/TOI 1.mp4`,
        allVideos: [`${BASE_URL}/work/Motion Graphics/TOI 1.mp4`]
      }
    ]
  },
  {
    category: "MISCELLANEOUS_ARCHIVE",
    intro: "Experimental renders and diverse projects. Where I push the limits and explore new visual languages.",
    projects: [
      {
        title: "OORJA",
        brand: "Long Format",
        description: "Exploration into long-form narrative, focusing on sound design and pacing.",
        video: `${BASE_URL}/work/Long Format/Oorja With English Sub and VO.mp4`,
        allVideos: [`${BASE_URL}/work/Long Format/Oorja With English Sub and VO.mp4`]
      },
      {
        title: "EXPERIMENTAL",
        brand: "Diverse Works",
        description: "Pari Match renders and other diverse projects that push the craft.",
        video: `${BASE_URL}/work/Video Editing/Pari match/Render.mp4`,
        allVideos: [`${BASE_URL}/work/Video Editing/Pari match/Render.mp4`, `${BASE_URL}/work/Motion Graphics/sample video.mp4`, `${BASE_URL}/work/AI Videos/Model BTS copy.mp4`]
      }
    ]
  }
]

function GridItem({ project }: { project: any }) {
  const [isHovered, setIsHovered] = useState(false)
  const [showGallery, setShowGallery] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch(err => console.log("Playback blocked or interrupted:", err));
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.2 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setShowGallery(true)}
        className="relative aspect-video md:aspect-[4/5] bg-noir-dark overflow-hidden border border-white/5 cursor-pointer group"
      >
        <video
          ref={videoRef}
          src={project.video}
          muted
          loop
          playsInline
          preload="metadata"
          className={`w-full h-full object-cover transition-all duration-1000 ${isHovered ? 'scale-110 grayscale-0' : 'grayscale contrast-125'}`}
        />
        
        <div className={`absolute inset-0 bg-noir-black/40 transition-opacity duration-700 ${isHovered ? 'opacity-20' : 'opacity-60'}`} />

        {/* Content Overlay */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
          <motion.div
            animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0.7 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-noir-gold font-mono text-[8px] tracking-[0.3em] uppercase mb-1 block">{project.brand}</span>
            <h4 className="text-xl md:text-2xl font-display font-black text-white leading-tight mb-2 group-hover:text-noir-gold transition-colors">{project.title}</h4>
            <div className={`h-px bg-noir-gold transition-all duration-500 ${isHovered ? 'w-full' : 'w-0'}`} />
          </motion.div>
        </div>

        {project.allVideos.length > 1 && (
          <div className="absolute top-4 right-4 bg-noir-gold/20 backdrop-blur-md px-2 py-1 text-[8px] font-mono text-noir-gold border border-noir-gold/30">
            {project.allVideos.length}_REELS
          </div>
        )}
      </motion.div>

      <AnimatePresence>
        {showGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-noir-black/98 backdrop-blur-2xl flex flex-col p-8 md:p-20 overflow-y-auto"
          >
            <div className="flex justify-between items-start mb-16">
              <div>
                <span className="text-noir-gold font-mono text-xs tracking-[0.5em] mb-4 block">// {project.brand} ARCHIVE</span>
                <h2 className="text-5xl md:text-7xl font-display font-black text-white uppercase tracking-tighter">{project.title}</h2>
                <p className="mt-6 text-xl text-noir-lightGray italic max-w-2xl leading-relaxed">"{project.description}"</p>
              </div>
              <button 
                onClick={() => setShowGallery(false)}
                className="group flex items-center gap-4 text-noir-gold hover:text-white transition-colors"
              >
                <span className="text-[10px] font-bold tracking-[0.3em]">CLOSE_EXHIBIT</span>
                <div className="w-10 h-10 border border-noir-gold flex items-center justify-center text-xs group-hover:bg-noir-gold group-hover:text-noir-black transition-all">X</div>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
              {project.allVideos.map((vid: string, i: number) => (
                <div key={i} className="group relative aspect-video bg-noir-dark border border-white/10 overflow-hidden">
                  <video src={vid} controls className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-noir-black/80 px-3 py-1 text-[10px] font-mono text-noir-gold tracking-widest border-l-2 border-noir-gold">
                    VERSION_{String(i+1).padStart(2, '0')}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default function Portfolio() {
  const containerRef = useRef(null)

  return (
    <div ref={containerRef} className="relative bg-noir-black w-full pt-40 pb-64">
      <div className="max-w-[95vw] mx-auto px-6 md:px-12">
        <div className="mb-64 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <div className="flex justify-center items-center gap-6 mb-8">
              <div className="h-px w-24 bg-noir-gold/30"></div>
              <span className="text-noir-gold font-display text-2xl italic lowercase tracking-[0.2em]">selected works by pawan bisht</span>
              <div className="h-px w-24 bg-noir-gold/30"></div>
            </div>
            <h2 className="text-[12vw] font-display font-black text-white leading-[0.8] uppercase tracking-tighter">
              VISUAL<br />
              <span className="text-noir-gold italic">ALCHEMY.</span>
            </h2>
          </motion.div>
        </div>

        <div className="space-y-64">
          {portfolioData.map((category, catIndex) => (
            <div key={category.category} className="relative">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-noir-gold font-mono text-xs font-bold tracking-[0.5em]">0{catIndex + 1}</span>
                    <div className="h-px w-12 bg-noir-gold"></div>
                  </div>
                  <h3 className="text-6xl md:text-8xl font-display font-black text-white mb-8 tracking-tighter">{category.category}</h3>
                  <p className="text-xl md:text-2xl text-noir-lightGray italic font-light leading-relaxed max-w-2xl border-l-2 border-noir-gold/20 pl-8">
                    "{category.intro}"
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2 font-mono text-[10px] text-noir-gold/50">
                  <span>TOTAL_REELS: {category.projects.reduce((acc, p) => acc + p.allVideos.length, 0)}</span>
                  <span>FORMAT: 4K_UHD</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.projects.map((project) => (
                  <GridItem key={project.title} project={project} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-display font-black text-white/[0.01] pointer-events-none select-none z-0">
        GALLERY
      </div>
    </div>
  )
}
