'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-noir-gray py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-display font-bold text-noir-gold"
          >
            NOIR
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex gap-8 text-sm text-noir-lightGray"
          >
            <a href="#portfolio" className="hover:text-noir-gold transition-colors">
              Work
            </a>
            <a href="#contact" className="hover:text-noir-gold transition-colors">
              Contact
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm text-noir-lightGray"
          >
            © {currentYear} All rights reserved
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 text-center text-xs text-noir-lightGray"
        >
          Crafted with passion and precision
        </motion.div>
      </div>
    </footer>
  )
}

