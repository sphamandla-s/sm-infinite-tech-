"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiOutlineDownload } from "react-icons/hi";
import { IoRocketOutline } from "react-icons/io5";
import { FaCode, FaServer, FaCloud, FaMobileAlt, FaChartLine } from "react-icons/fa";

export function Hero() {
  const words = "One Agency. Infinite Possibilities.".split(" ");
  const techIcons = [FaCode, FaServer, FaCloud, FaMobileAlt, FaChartLine];
  
  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 " />
        
        {/* Animated grid pattern */}
        {/* <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" /> */}
        
        {/* Floating tech icons */}
        {techIcons.map((Icon, index) => {
          const size = 20 + Math.random() * 30;
          const delay = index * 0.5;
          return (
            <motion.div
              key={index}
              className="absolute text-blue-400/20 dark:text-violet-400/20"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: delay,
                ease: "easeOut",
              }}
            >
              <Icon className="w-full h-full" style={{ width: `${size}px`, height: `${size}px` }} />
            </motion.div>
          );
        })}
        
        {/* Animated gradient blob */}
        {/* <motion.div
          className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 opacity-20 blur-3xl dark:opacity-15"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        /> */}
      </div>
      
      {/* Border decorations */}
      <div className="absolute inset-y-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-blue-400 to-transparent" />
      <div className="absolute inset-y-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-violet-400 to-transparent" />
      {/* <div className="absolute inset-x-0 bottom-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" /> */}
      
      <div className="px-4 py-16 md:py-28 relative z-10">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-3xl font-bold text-slate-800 md:text-5xl lg:text-7xl dark:text-slate-100">
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(4px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: words.length * 0.1 + 0.2,
            ease: "easeOut",
          }}
          className="relative z-10 mx-auto max-w-2xl py-6 text-center text-xl font-normal text-neutral-700 dark:text-neutral-300"
        >
          From stunning web design to intelligent automation, we help you innovate, connect, and succeed in the digital world.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: words.length * 0.1 + 0.4,
            ease: "easeOut",
          }}
          className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 font-medium text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30"
          >
            <IoRocketOutline className="text-xl" />
            <span>Start a Project</span>
          </motion.button>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/SM-Infinite-Tech-Brochure.pdf"
              download
              className="flex items-center justify-center gap-3 rounded-xl border border-blue-500/30 bg-white/80 px-8 py-4 font-medium text-blue-600 shadow-lg shadow-blue-500/10 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-blue-500/20 dark:border-violet-500/30 dark:bg-gray-900/80 dark:text-violet-300 dark:hover:bg-gray-900"
            >
              <HiOutlineDownload className="text-xl" />
              <span>Download Brochure</span>
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Animated scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: words.length * 0.1 + 0.8,
          }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 pt-16"
        >
          <div className="flex flex-col items-center">
            <span className="mb-2 text-sm text-blue-500 dark:text-violet-400">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="h-8 w-5 rounded-full border-2 border-blue-500 dark:border-violet-400"
            >
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="mx-auto mt-1 h-2 w-1 rounded-full bg-blue-500 dark:bg-violet-400"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-400/20 dark:bg-violet-400/20"
          style={{
            width: `${Math.random() * 10 + 2}px`,
            height: `${Math.random() * 10 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, (Math.random() - 0.5) * 40],
            x: [0, (Math.random() - 0.5) * 30],
          }}
          transition={{
            duration: Math.random() * 4 + 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}