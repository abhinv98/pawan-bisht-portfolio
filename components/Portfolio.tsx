'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const BASE_URL = "https://pub-296f1f1d748846f99b7dbcda087bbd96.r2.dev"

const portfolioData = [
  {
    category: "SHORT-FORM_REELS",
    intro: "I specialize in fast-paced, high-engagement content. From viral Instagram trends to sharp brand storytelling, I craft edits that stop the scroll instantly.",
    projects: [
      {
        title: "PODAR PREP",
        brand: "Podar Prep",
        description: "I took complex educational concepts and turned them into high-energy reels for children and parents. Every cut is designed to maintain focus.",
        video: `${BASE_URL}/work/Motion Graphics/Podar 1.mp4`,
        allVideos: [`${BASE_URL}/work/Motion Graphics/Podar 1.mp4`]
      },
      {
        title: "TIMES OF INDIA",
        brand: "Times of India",
        description: "I produced the 'I Am Kolkata' campaign reels. The challenge was capturing the city's chaotic energy in 15 seconds. It went viral.",
        video: `${BASE_URL}/work/Motion Graphics/TOI 1.mp4`,
        allVideos: [
          `${BASE_URL}/work/Motion Graphics/TOI 1.mp4`,
          `${BASE_URL}/work/Long Format/TOI case study_17 OCT.mp4`
        ]
      },
      {
        title: "CULT STUDIO",
        brand: "Cult Studio",
        description: "I created raw, behind-the-scenes content that sold the studio's culture. This was about energy and authentic atmosphere.",
        video: `${BASE_URL}/work/AI Videos/Model BTS copy.mp4`,
        allVideos: [`${BASE_URL}/work/AI Videos/Model BTS copy.mp4`]
      },
      {
        title: "SBI YIFI",
        brand: "SBI YiFi",
        description: "I developed a series of fellowship videos aimed at Gen Z. I used aggressive pacing and modern transitions to keep them watching.",
        video: `${BASE_URL}/work/Video Editing/SBI/Emoji Reel.mp4`,
        allVideos: [
          `${BASE_URL}/work/Video Editing/SBI/Emoji Reel.mp4`,
          `${BASE_URL}/work/Motion Graphics/Gandhi Fellowship.mp4`
        ]
      },
      {
        title: "NIPS BRANDING",
        brand: "NIPS School",
        description: "I handled the full school branding through video. I focused on student testimonials to build trust and show real results.",
        video: `${BASE_URL}/work/Video Editing/NIPS/Reel 2 A day in the life_SUB.mp4`,
        allVideos: [
          `${BASE_URL}/work/Video Editing/NIPS/Reel 2 A day in the life_SUB.mp4`,
          `${BASE_URL}/work/Video Editing/NIPS/Student Testimonial-video-export-2025-04-25T16-35-08.101Z.mp4`
        ]
      },
      {
        title: "ECULTIFY",
        brand: "Ecultify",
        description: "I delivered trend-focused festival reels. I worked closely with their team to ensure the timing of every beat hit perfectly.",
        video: `${BASE_URL}/work/Video Editing/eCULTIFY/ChristmasReel_thd3.mp4`,
        allVideos: [`${BASE_URL}/work/Video Editing/eCULTIFY/ChristmasReel_thd3.mp4`]
      },
      {
        title: "VIBGYOR & JEWEL HOUSE",
        brand: "Vibgyor / Jewel House",
        description: "I balanced authentic human testimonials with high-end product cinematography. Two different styles, one goal: premium quality.",
        video: `${BASE_URL}/work/Motion Graphics/sample video.mp4`,
        allVideos: [`${BASE_URL}/work/Motion Graphics/sample video.mp4`]
      }
    ]
  },
  {
    category: "AI_PRODUCTION",
    intro: "I'm using AI to break traditional production limits. I create digital spokespeople and avatar-driven stories that feel more real than ever.",
    projects: [
      {
        title: "CULT STUDIO AI",
        brand: "Cult Studio",
        description: "I developed their first AI avatar promo. I focused on mouth-sync and digital body language to ensure it didn't feel robotic.",
        video: `${BASE_URL}/work/AI Videos/PaPA JI.mp4`,
        allVideos: [`${BASE_URL}/work/AI Videos/PaPA JI.mp4`]
      },
      {
        title: "TEAK AND TRADITION",
        brand: "Teak and Tradition",
        description: "I used an AI avatar to tell the story of traditional furniture. It's a blend of old-world craftsmanship and new-world tech.",
        video: `${BASE_URL}/work/AI Videos/Papa ji 2.mp4`,
        allVideos: [`${BASE_URL}/work/AI Videos/Papa ji 2.mp4`]
      },
      {
        title: "MARCO AI",
        brand: "Marco AI",
        description: "I built their brand introduction video using a digital spokesperson. I handled the lighting and integration to make it look seamless.",
        video: `${BASE_URL}/work/AI Videos/Marco.mp4`,
        allVideos: [`${BASE_URL}/work/AI Videos/Marco.mp4`]
      },
      {
        title: "CRICKSTAR",
        brand: "Crickstar",
        description: "I launched this sports app using AI avatar content. I wanted to create a futuristic vibe that screamed innovation.",
        video: `${BASE_URL}/work/AI Videos/CRICKSTAR.mp4`,
        allVideos: [`${BASE_URL}/work/AI Videos/CRICKSTAR.mp4`]
      }
    ]
  },
  {
    category: "MOTION_GRAPHICS",
    intro: "I explain ideas through motion. I design animated elements that clarify complex data and make brand messages pop off the screen.",
    projects: [
      {
        title: "BLINK X",
        brand: "Blink X",
        description: "I designed an explainer for their trading app. I made complex stock data look intuitive and visually appealing through motion.",
        video: `${BASE_URL}/work/Motion Graphics/Blink X_1.mp4`,
        allVideos: [`${BASE_URL}/work/Motion Graphics/Blink X_1.mp4`]
      },
      {
        title: "TOI ANIMATION",
        brand: "Times of India",
        description: "I brought static brand elements to life for the TOI Kolkata campaign. I made sure the motion felt as fast as the news cycle.",
        video: `${BASE_URL}/work/Motion Graphics/TOI 1.mp4`,
        allVideos: [`${BASE_URL}/work/Motion Graphics/TOI 1.mp4`]
      }
    ]
  },
  {
    category: "EXPERIMENTAL_LOGS",
    intro: "This is where I test new techniques. From long-form documentaries to raw renders, these projects show the breadth of my technical skills.",
    projects: [
      {
        title: "OORJA NARRATIVE",
        brand: "Long Format",
        description: "I spent months on this long-form project. I handled everything from sound design to the final color grade. It's a slow-burn narrative.",
        video: `${BASE_URL}/work/Long Format/Oorja With English Sub and VO.mp4`,
        allVideos: [`${BASE_URL}/work/Long Format/Oorja With English Sub and VO.mp4`]
      },
      {
        title: "PARI MATCH & RENDERS",
        brand: "Experimental",
        description: "A collection of my recent visual tests and miscellaneous projects. This is where I push my software to the breaking point.",
        video: `${BASE_URL}/work/Video Editing/Pari match/Render.mp4`,
        allVideos: [
          `${BASE_URL}/work/Video Editing/Pari match/Render.mp4`,
          `${BASE_URL}/work/Motion Graphics/sample video.mp4`
        ]
      }
    ]
  }
]

function GridItem({ project, category }: { project: any, category: string }) {
  const [isHovered, setIsHovered] = useState(false)
  const [showGallery, setShowGallery] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const isVerticalVideo = (url: string) => {
    const lower = url.toLowerCase();
    // Keywords that suggest vertical
    if (lower.includes('reel') || lower.includes('portrait') || lower.includes('short')) return true;
    // Specific folders that are vertical
    if (lower.includes('ai%20videos') || lower.includes('ai videos')) return true;
    // Categories that are predominantly vertical, unless they mention landscape/case study
    if ((category === "SHORT-FORM_REELS" || category === "AI_PRODUCTION") && !lower.includes('case%20study') && !lower.includes('case study') && !lower.includes('long')) return true;
    return false;
  };

  const projectIsVertical = isVerticalVideo(project.video);

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
        className={`relative ${projectIsVertical ? 'aspect-[9/16]' : 'aspect-video md:aspect-[4/5]'} bg-noir-dark overflow-hidden border border-white/5 cursor-pointer group`}
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-20">
              {project.allVideos.map((vid: string, i: number) => {
                const isVertical = isVerticalVideo(vid);
                return (
                  <div key={i} className={`group relative ${isVertical ? 'aspect-[9/16]' : 'aspect-video'} bg-noir-dark border border-white/10 overflow-hidden`}>
                    <video src={vid} controls className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-noir-black/80 px-3 py-1 text-[10px] font-mono text-noir-gold tracking-widest border-l-2 border-noir-gold">
                      VERSION_{String(i+1).padStart(2, '0')}
                    </div>
                  </div>
                );
              })}
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
              <span className="text-noir-gold font-display text-2xl italic lowercase tracking-[0.2em]">work by pawan bisht</span>
              <div className="h-px w-24 bg-noir-gold/30"></div>
            </div>
            <h2 className="text-[12vw] font-display font-black text-white leading-[0.8] uppercase tracking-tighter">
              SELECTED<br />
              <span className="text-noir-gold italic">EDITS.</span>
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
                  <p className="text-xl md:text-2xl text-noir-lightGray font-light leading-relaxed max-w-2xl border-l-2 border-noir-gold/20 pl-8">
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
                  <GridItem key={project.title} project={project} category={category.category} />
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
