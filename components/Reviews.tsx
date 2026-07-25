"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    client: "Aisha & Rohan",
    event: "Wedding Reception",
    quote: "Limra Events transformed our vision into an absolute masterpiece. The floral arrangements and lighting were breathtaking.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: 2,
    client: "TechCorp India",
    event: "Annual Gala",
    quote: "Professional, punctual, and premium. The stage setup and orchestra elevated our corporate event to a completely new level.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: 3,
    client: "The Sharma Family",
    event: "Silver Jubilee Anniversary",
    quote: "Every detail was meticulously planned. The tent house structures felt like a luxury hotel built from scratch just for us.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-background py-24 px-6 relative z-10 border-t border-surface-hover">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-ivory mb-4">
            Client <span className="text-gold italic">Experiences</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Don't just take our word for it. Explore the moments we've crafted for our esteemed clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-surface border border-surface-hover rounded-sm overflow-hidden flex flex-col"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${testimonial.image})` }}
                />
                {/* Subtle dark overlay for the image */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                
                {/* Event Type Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-gold/20 backdrop-blur-md border border-gold/30 text-gold text-xs uppercase tracking-widest rounded-sm">
                    {testimonial.event}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex space-x-1 mb-4 text-gold">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-ivory/90 text-sm leading-relaxed mb-6 font-light italic">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="border-t border-surface-hover pt-4">
                  <p className="font-serif text-gold text-lg">{testimonial.client}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}