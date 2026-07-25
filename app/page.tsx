import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import Reviews from "@/components/Reviews"; // Import Reviews
import InquiryForm from "@/components/InquiryForm";

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Services Section */}
      <section id="services" className="min-h-screen bg-background py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-ivory mb-4">
              Our <span className="text-gold italic">Services</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              A meticulously curated selection of vendors and arrangements to bring your vision to life.
            </p>
          </div>
          <ServicesGrid />
        </div>
      </section>

      {/* Insert Reviews Here */}
      <Reviews />

      {/* Inquiry Section */}
      <section id="consultation" className="bg-background py-24 px-6 relative z-10 border-t border-surface-hover">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-ivory mb-4">
              Design Your <span className="text-gold italic">Experience</span>
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              Secure your date and allow our team of expert planners to assemble the perfect vendor portfolio for your celebration.
            </p>
          </div>
          <InquiryForm />
        </div>
      </section>
    </>
  );
}