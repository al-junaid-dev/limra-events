"use client";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";


export default function Hero() {
  // Animation variants for a smooth, staggered reveal
  const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};
const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Cinematic Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ 
          // Using a high-quality placeholder image of luxury event lighting
          backgroundImage: "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop')" 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background"></div>
      </div>

      {/* Content Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="text-gold tracking-[0.2em] text-sm uppercase font-semibold">
            Elevating Every Moment
          </span>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-ivory leading-tight mb-8"
        >
          Curated <span className="text-gold italic">Luxury</span> <br /> for your Events
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-muted text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light"
        >
          From exquisite floral decorations to immersive orchestra performances, we design unforgettable experiences tailored to your vision.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            href="#consultation"
            className="px-8 py-4 bg-gold text-background font-medium rounded-sm hover:bg-gold-light transition-colors duration-300 w-full sm:w-auto text-center"
          >
            Start Planning
          </Link>
          <Link 
            href="#services"
            className="px-8 py-4 bg-transparent border border-surface-hover text-ivory font-medium rounded-sm hover:border-gold hover:text-gold transition-all duration-300 w-full sm:w-auto text-center backdrop-blur-sm"
          >
            Explore Services
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-muted text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-surface-hover overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 48] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-full h-1/2 bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}