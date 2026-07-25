import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Complete Mock Database Fetch
const serviceData = {
  decoration: {
    title: "Exquisite Decoration",
    subtitle: "Bespoke floral arrangements and architectural draping.",
    heroImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    overview: "Our decoration services are tailored to transform ordinary venues into extraordinary landscapes. We source the finest exotic florals and utilize premium drapery to match your exact color palette and theme.",
    packages: [
      { name: "Classic Elegance", price: "Starts at ₹50,000", desc: "Traditional floral mandap, entrance arch, and pathway lighting." },
      { name: "Royal Heritage", price: "Starts at ₹1,50,000", desc: "Grand architectural setups, exotic imported flowers, and premium stage backdrops." },
      { name: "Modern Minimalist", price: "Starts at ₹80,000", desc: "Sleek metallic structures, glass elements, and subtle pastel floral accents." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop"
    ]
  },
  lighting: {
    title: "Ambient Lighting",
    subtitle: "Cinematic illumination to set the perfect mood.",
    heroImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
    overview: "Lighting is the heartbeat of any event's atmosphere. Our lighting engineers use intelligent DMX systems, crystal chandeliers, and warm architectural uplighting to ensure your event looks cinematic both in person and on camera.",
    packages: [
      { name: "Warm Ambient", price: "Starts at ₹25,000", desc: "Fairy lights, warm LED par cans, and vintage Edison bulbs." },
      { name: "Concert Grade", price: "Starts at ₹75,000", desc: "Moving heads, laser arrays, and intelligent dance floor lighting." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533174000244-6725ce77bd76?q=80&w=800&auto=format&fit=crop"
    ]
  },
  "tent-house": {
    title: "Premium Structures",
    subtitle: "Luxury marquees, designer furniture, and elegant staging.",
    heroImage: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
    overview: "We provide structurally sound, aesthetically stunning tenting solutions. From air-conditioned German hangars for massive crowds to intimate, sheer-draped canopies for garden parties, our inventory is unmatched.",
    packages: [
      { name: "Garden Canopy", price: "Starts at ₹40,000", desc: "Elegant sheer drapes, wooden flooring, and basic seating for outdoor setups." },
      { name: "Grand Hangar", price: "Starts at ₹2,00,000", desc: "Fully air-conditioned structural hangar with premium carpet and VIP lounge furniture." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop"
    ]
  },
  buffet: {
    title: "Culinary Excellence",
    subtitle: "Gourmet catering setups with impeccable presentation.",
    heroImage: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
    overview: "A luxury event demands a luxury dining experience. We partner with elite chefs to provide bespoke menus, presented on premium chafing dishes, with flawless service staff to attend to your guests.",
    packages: [
      { name: "Silver Service", price: "Starts at ₹1,500/plate", desc: "Standard multi-cuisine buffet setup with elegant ceramic serveware." },
      { name: "Platinum Carving", price: "Starts at ₹3,500/plate", desc: "Live cooking stations, international cuisines, and crystal glassware setup." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=800&auto=format&fit=crop"
    ]
  },
  orchestra: {
    title: "Live Orchestra",
    subtitle: "Captivating musical performances to enchant your guests.",
    heroImage: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=2070&auto=format&fit=crop",
    overview: "Elevate the ambiance with live, soul-stirring music. Whether you require a traditional instrumental ensemble for a ceremony or a high-energy fusion band for the reception, we curate the best talent.",
    packages: [
      { name: "Acoustic Ensemble", price: "Starts at ₹35,000", desc: "3-piece instrumental band (Flute, Tabla, Sitar) for a serene background." },
      { name: "Symphony Fusion", price: "Starts at ₹1,20,000", desc: "8-piece grand orchestra playing classical and modern fusion." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc761?q=80&w=800&auto=format&fit=crop"
    ]
  },
  "other-vendors": {
    title: "Curated Partners",
    subtitle: "From elite photographers to specialized entertainers.",
    heroImage: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop",
    overview: "We maintain an exclusive black book of the city's finest event professionals. We connect you with vetted makeup artists, celebrity photographers, and unique entertainers to complete your event.",
    packages: [
      { name: "Photography & Film", price: "Custom Quote", desc: "Cinematic wedding films and editorial-style photography." },
      { name: "Specialty Acts", price: "Custom Quote", desc: "Fire dancers, illusionists, or celebrity appearances." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop"
    ]
  }
};

export default async function ServiceDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  const service = serviceData[slug as keyof typeof serviceData];
  
  if (!service) {
    notFound(); 
  }

  return (
    <div className="bg-background min-h-screen pb-24">
      {/* Cinematic Header */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden border-b border-surface-hover">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <h1 className="font-serif text-5xl md:text-7xl text-ivory leading-tight mb-6">
            {service.title}
          </h1>
          <p className="text-gold tracking-widest text-sm uppercase font-semibold">
            {service.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Overview, Gallery & Packages */}
        <div className="lg:col-span-8 space-y-16">
          
          <section>
            <h2 className="font-serif text-3xl text-ivory mb-6 border-b border-surface-hover pb-4">Overview</h2>
            <p className="text-muted leading-relaxed text-lg font-light">
              {service.overview}
            </p>
          </section>

          {/* Bento Gallery Section */}
          <section>
            <h2 className="font-serif text-3xl text-ivory mb-6 border-b border-surface-hover pb-4">Gallery</h2>
            
            {/* The Bento Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {service.gallery.map((imgUrl, idx) => {
                // Logic to make the first image the large "feature" block, and the others smaller
                const isFeatured = idx === 0;
                
                return (
                  <div 
                    key={idx} 
                    className={`relative w-full rounded-sm overflow-hidden group ${
                      isFeatured 
                        ? "md:col-span-2 md:row-span-2 h-64 md:h-[416px]" // Large Feature Image
                        : "md:col-span-1 md:row-span-1 h-48 md:h-[200px]" // Smaller Stacked Images
                    }`}
                  >
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{ backgroundImage: `url(${imgUrl})` }}
                    />
                    {/* Subtle hover overlay to make it feel interactive */}
                    <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                );
              })}
            </div>
          </section>
          
          <section>
            <h2 className="font-serif text-3xl text-ivory mb-6 border-b border-surface-hover pb-4">Curated Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.packages.map((pkg, idx) => (
                <div key={idx} className="bg-surface p-8 border border-surface-hover rounded-sm hover:border-gold/50 transition-colors">
                  <h3 className="text-xl text-ivory mb-2 font-medium">{pkg.name}</h3>
                  <p className="text-gold text-sm mb-4 font-semibold tracking-wide">{pkg.price}</p>
                  <p className="text-muted text-sm">{pkg.desc}</p>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Right Column: Sticky CTA */}
        <div className="lg:col-span-4 relative">
          <div className="sticky top-32 bg-surface border border-gold/30 p-8 rounded-sm text-center">
            <h3 className="font-serif text-2xl text-ivory mb-4">Ready to elevate your event?</h3>
            <p className="text-muted text-sm mb-8">Discuss your specific {service.title.toLowerCase()} requirements with our designers.</p>
            <Link 
              href="/#consultation" 
              className="block w-full bg-gold text-background font-medium py-4 rounded-sm hover:bg-gold-light transition-colors duration-300"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  );
}