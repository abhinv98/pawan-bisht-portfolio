'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const BASE_URL = "https://pub-296f1f1d748846f99b7dbcda087bbd96.r2.dev"

const portfolioData = [
  {
    category: "SHORT-FORM_VIDEO_EDITING",
    intro: "I breathe rhythm into vertical frames. From viral campaigns to authentic storytelling, I sculpt content that stops the scroll.",
    projects: [
      {
        title: "PODAR PREP",
        brand: "Podar Prep",
        description: "Edited engaging children's activity reels and Dr. Swati Popat Vats' thought-leadership content, blending education with high-energy visuals.",
        video: `${BASE_URL}/work/Motion Graphics/Podar 1.mp4`,
        allVideos: [`${BASE_URL}/work/Motion Graphics/Podar 1.mp4`]
      },
      {
        title: "TIMES OF INDIA",
        brand: "Times of India (Kolkata)",
        description: "Produced viral campaign reels for the 'I Am Kolkata' initiative. Capturing the heartbeat and city-wide engagement of Kolkata.",
        video: `${BASE_URL}/work/Motion Graphics/TOI 1.mp4`,
        allVideos: [
          `${BASE_URL}/work/Motion Graphics/TOI 1.mp4`,
          `${BASE_URL}/work/Long Format/TOI case study_17 OCT.mp4`
        ]
      },
      {
        title: "CULT STUDIO",
        brand: "Cult Studio",
        description: "Created dynamic behind-the-scenes reels capturing studio culture and raw atmospheric energy.",
        video: `${BASE_URL}/work/AI Videos/Model BTS copy.mp4`,
        allVideos: [`${BASE_URL}/work/AI Videos/Model BTS copy.mp4`]
      },
      {
        title: "SBI YIFI",
        brand: "SBI YiFi",
        description: "Developed compelling fellowship program videos for youth engagement, focusing on high impact and fast-paced storytelling.",
        video: `${BASE_URL}/work/Video Editing/SBI/Emoji Reel.mp4`,
        allVideos: [
          `${BASE_URL}/work/Video Editing/SBI/Emoji Reel.mp4`,
          `${BASE_URL}/work/Motion Graphics/Gandhi Fellowship.mp4`
        ]
      },
      {
        title: "NIPS BRANDING",
        brand: "Nehru International Public School",
        description: "Produced school branding and academic showcase videos, highlighting authentic student experiences and testimonials.",
        video: `${BASE_URL}/work/Video Editing/NIPS/Reel 2 A day in the life_SUB.mp4`,
        allVideos: [
          `${BASE_URL}/work/Video Editing/NIPS/Reel 2 A day in the life_SUB.mp4`,
          `${BASE_URL}/work/Video Editing/NIPS/Student Testimonial-video-export-2025-04-25T16-35-08.101Z.mp4`
        ]
      },
      {
        title: "ECULTIFY",
        brand: "Ecultify",
        description: "Delivered trending festival reels and high-engagement Instagram content for a digital-first audience.",
        video: `${BASE_URL}/work/Video Editing/eCULTIFY/ChristmasReel_thd3.mp4`,
        allVideos: [`${BASE_URL}/work/Video Editing/eCULTIFY/ChristmasReel_thd3.mp4`]
      },
      {
        title: "VIBGYOR & JEWEL HOUSE",
        brand: "Vibgyor / Jewel House",
        description: "Authentic teacher and parent testimonials for Vibgyor, alongside premium product showcases for Jewel House luxury jewelry.",
        video: `${BASE_URL}/work/Motion Graphics/sample video.mp4`,
        allVideos: [`${BASE_URL}/work/Motion Graphics/sample video.mp4`]
      }
    ]
  },
  {
    category: "AI-GENERATED_CONTENT",
    intro: "Merging human creativity with artificial intelligence to build futuristic narratives and digital personas.",
    projects: [
      {
        title: "CULT STUDIO AI",
        brand: "Cult Studio",
        description: "Developed a groundbreaking AI avatar promotional reel, pushing the boundaries of digital human synthesis.",
        video: `${BASE_URL}/work/AI Videos/PaPA JI.mp4`,
        allVideos: [`${BASE_URL}/work/AI Videos/PaPA JI.mp4`]
      },
      {
        title: "TEAK AND TRADITION",
        brand: "Teak and Tradition",
        description: "Produced AI avatar-driven furniture brand storytelling content, bridging traditional craftsmanship with futuristic tech.",
        video: `${BASE_URL}/work/AI Videos/Papa ji 2.mp4`,
        allVideos: [`${BASE_URL}/work/AI Videos/Papa ji 2.mp4`]
      },
      {
        title: "MARCO AI",
        brand: "Marco AI",
        description: "Created an AI spokesperson video for a major brand introduction, focusing on realistic digital human performance.",
        video: `${BASE_URL}/work/AI Videos/Marco.mp4`,
        allVideos: [`${BASE_URL}/work/AI Videos/Marco.mp4`]
      },
      {
        title: "CRICKSTAR",
        brand: "Crickstar",
        description: "Built AI avatar promotional content for an app launch campaign, blending sports energy with AI innovation.",
        video: `${BASE_URL}/work/AI Videos/CRICKSTAR.mp4`,
        allVideos: [`${BASE_URL}/work/AI Videos/CRICKSTAR.mp4`]
      }
    ]
  },
  {
    category: "MOTION_GRAPHICS",
    intro: "Designing the physics of information. Explaining features and storytelling through dynamic animated elements.",
    projects: [
      {
        title: "BLINK X",
        brand: "Blink X",
        description: "Designed a motion graphics explainer for new trading app features. Precision motion for complex information.",
        video: `${BASE_URL}/work/Motion Graphics/Blink X_1.mp4`,
        allVideos: [`${BASE_URL}/work/Motion Graphics/Blink X_1.mp4`]
      },
      {
        title: "TOI KOLKATA ANIMATION",
        brand: "Times of India",
        description: "Created animated reels for the TOI Kolkata campaign, ensuring brand visibility in a fast-moving social feed.",
        video: `${BASE_URL}/work/Motion Graphics/TOI 1.mp4`,
        allVideos: [`${BASE_URL}/work/Motion Graphics/TOI 1.mp4`]
      }
    ]
  },
  {
    category: "MISCELLANEOUS",
    intro: "Experimental cuts, long-form narratives, and Diverse renders from various creative explorations.",
    projects: [
      {
        title: "OORJA NARRATIVE",
        brand: "Long Format",
        description: "A deep dive into long-form storytelling. Focused on sub-titles, voiceovers, and sustained atmospheric tension.",
        video: `${BASE_URL}/work/Long Format/Oorja With English Sub and VO.mp4`,
        allVideos: [`${BASE_URL}/work/Long Format/Oorja With English Sub and VO.mp4`]
      },
      {
        title: "PARI MATCH & EXPERIMENTAL",
        brand: "Miscellaneous",
        description: "Diverse projects including Pari Match renders and experimental cuts that test the limits of the timeline.",
        video: `${BASE_URL}/work/Video Editing/Pari match/Render.mp4`,
        allVideos: [
          `${BASE_URL}/work/Video Editing/Pari match/Render.mp4`,
          `${BASE_URL}/work/Motion Graphics/sample video.mp4`
        ]
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
        videoRef.current.play().catch(err => console.log("Playback blocked:", err));
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
