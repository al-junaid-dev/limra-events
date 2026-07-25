"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Static data structure mirroring what we will eventually fetch from Prisma
const services = [
  {
    id: "decoration",
    title: "Exquisite Decoration",
    category: "Decoration",
    description: "Bespoke floral arrangements and architectural draping tailored to your theme.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    className: "col-span-12 md:col-span-8 row-span-2", // Large feature card
  },
  {
    id: "lighting",
    title: "Ambient Lighting",
    category: "Lighting",
    description: "Cinematic illumination to set the perfect mood.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
    className: "col-span-12 md:col-span-4 row-span-1", // Standard square
  },
  {
    id: "tent-house",
    title: "Premium Structures",
    category: "Tent House Items",
    description: "Luxury marquees, designer furniture, and elegant staging.",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
    className: "col-span-12 md:col-span-4 row-span-1", // Standard square
  },
  {
    id: "buffet",
    title: "Culinary Excellence",
    category: "Buffet",
    description: "Gourmet catering setups with impeccable presentation and service.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
    className: "col-span-12 md:col-span-6 row-span-1", // Wide rectangle
  },
  {
    id: "orchestra",
    title: "Live Orchestra",
    category: "Orchestra",
    description: "Captivating musical performances to enchant your guests.",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=2070&auto=format&fit=crop",
    className: "col-span-12 md:col-span-6 row-span-1", // Wide rectangle
  },
  {
    id: "other-vendors",
    title: "Curated Partners",
    category: "Other Vendors",
    description: "From elite photographers to specialized entertainers, our trusted network.",
    image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop",
    className: "col-span-12 row-span-1", // Full width banner
  }
];

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-12 auto-rows-[300px] gap-4 md:gap-6 mt-12">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          id={service.id} // <-- ADDED: Links the Navbar anchor to this specific card
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          // ADDED 'scroll-mt-32' to the className below so the Navbar doesn't cover the card when scrolling
          className={`group relative overflow-hidden rounded-sm bg-surface border border-surface-hover scroll-mt-32 ${service.className}`}
        >
          {/* Background Image with Zoom on Hover */}
          <motion.div 
            className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
            style={{ backgroundImage: `url(${service.image})` }}
          />
          
          {/* Dark Overlay - Deepens on hover to make text pop */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/60 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

          {/* Content Container */}
          <div className="absolute inset-0 z-20 p-6 md:p-8 flex flex-col justify-end">
            <div className="transform transition-transform duration-500 ease-out translate-y-4 group-hover:translate-y-0">
              <span className="text-gold text-xs tracking-widest uppercase font-semibold mb-2 block">
                {service.category}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-ivory mb-2">
                {service.title}
              </h3>
              
              {/* Description reveals smoothly on hover */}
              <div className="grid grid-rows-[0fr] transition-all duration-500 ease-in-out group-hover:grid-rows-[1fr]">
                <p className="text-muted text-sm overflow-hidden opacity-0 transition-opacity duration-500 delay-100 group-hover:opacity-100 line-clamp-2">
                  {service.description}
                </p>
              </div>
            </div>

            {/* Top Right Arrow Indicator */}
            <Link href={`/services/${service.id}`} className="absolute top-6 right-6 opacity-0 transform translate-x-[-10px] translate-y-[10px] transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
              <div className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center text-gold bg-background/50 backdrop-blur-sm hover:bg-gold hover:text-background transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}