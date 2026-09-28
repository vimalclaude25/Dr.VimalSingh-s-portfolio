'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { personalInfo } from '@/lib/cv-data'

export function FloatingSocialDock() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const youtubeUrl = personalInfo.links.youtube || 'https://www.youtube.com/@Researchorbit'
  const facebookUrl = personalInfo.links.facebook || 'https://www.facebook.com/vimal.singh.908'

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center sm:left-6">
      <motion.div
        initial={{ opacity: 0, x: -20, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="flex flex-col items-center gap-2.5 rounded-full border border-border/70 bg-card/80 p-2 shadow-2xl backdrop-blur-md dark:border-white/10 dark:bg-navy/80"
      >
        {/* YouTube Action Button */}
        <div className="relative">
          <AnimatePresence>
            {hoveredItem === 'youtube' && (
              <motion.div
                initial={{ opacity: 0, x: -8, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -8, scale: 0.9 }}
                transition={{ duration: 0.15 }}
                className="pointer-events-none absolute left-full top-1/2 ml-3 -translate-y-1/2 whitespace-nowrap rounded-xl border border-red-500/20 bg-card px-2.5 py-1 text-[11px] font-semibold text-red-600 shadow-xl backdrop-blur-md dark:bg-slate-900 dark:text-red-400"
              >
                YouTube &bull; @Researchorbit
                <div className="absolute -left-1 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-b border-l border-red-500/20 bg-card dark:bg-slate-900" />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Dr. Vimal Singh's YouTube Channel @Researchorbit"
            onMouseEnter={() => setHoveredItem('youtube')}
            onMouseLeave={() => setHoveredItem(null)}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.92 }}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF0000] text-white shadow-lg shadow-red-500/25 transition-all duration-200 hover:shadow-red-500/40"
          >
            <svg
              className="h-5 w-5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </motion.a>
        </div>

        {/* Horizontal divider for vertical dock */}
        <div className="w-5 h-[1px] bg-border/80 dark:bg-white/10" />

        {/* Facebook Action Button */}
        <div className="relative">
          <AnimatePresence>
            {hoveredItem === 'facebook' && (
              <motion.div
                initial={{ opacity: 0, x: -8, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -8, scale: 0.9 }}
                transition={{ duration: 0.15 }}
                className="pointer-events-none absolute left-full top-1/2 ml-3 -translate-y-1/2 whitespace-nowrap rounded-xl border border-blue-500/20 bg-card px-2.5 py-1 text-[11px] font-semibold text-blue-600 shadow-xl backdrop-blur-md dark:bg-slate-900 dark:text-blue-400"
              >
                Facebook &bull; vimal.singh.908
                <div className="absolute -left-1 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-b border-l border-blue-500/20 bg-card dark:bg-slate-900" />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect with Dr. Vimal Singh on Facebook"
            onMouseEnter={() => setHoveredItem('facebook')}
            onMouseLeave={() => setHoveredItem(null)}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.92 }}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-lg shadow-blue-500/25 transition-all duration-200 hover:shadow-blue-500/40"
          >
            <svg
              className="h-5 w-5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </motion.a>
        </div>
      </motion.div>
    </div>
  )
}
