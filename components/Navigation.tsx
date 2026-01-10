'use client'

import { motion } from 'framer-motion'

export default function Navigation() {
  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'WORK', href: '#portfolio' },
    { name: 'CONNECT', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-[100] h-24 flex items-center justify-between px-12 md:px-24 pointer-events-none"
    >
      <div className="flex items-center pointer-events-auto">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-display font-black text-white tracking-tighter cursor-pointer flex items-center gap-2"
        >
          <span className="text-noir-gold italic">P</span>
          <span>B.</span>
        </motion.div>
      </div>

      <div className="flex items-center gap-16 pointer-events-auto">
        <ul className="flex items-center gap-12">
          {navItems.map((item) => (
            <li key={item.name} className="group">
              <a
                href={item.href}
                className="text-[10px] font-bold tracking-[0.4em] text-noir-lightGray hover:text-noir-gold uppercase transition-all duration-500"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="w-12 h-px bg-noir-gold/30 group-hover:w-20 transition-all duration-700"></div>
      </div>
    </motion.nav>
  )
}
