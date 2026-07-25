"use client";

// 1. Import useRef and useEffect
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const availableServices = [
  { id: "decoration", label: "Exquisite Decoration" },
  { id: "lighting", label: "Ambient Lighting" },
  { id: "tent-house", label: "Premium Structures" },
  { id: "buffet", label: "Culinary Excellence" },
  { id: "orchestra", label: "Live Orchestra" },
  { id: "other-vendors", label: "Other Vendors" },
];

export default function InquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  
  // 2. Create a reference to attach to our container
  const containerRef = useRef<HTMLDivElement>(null);

  // 3. Add a useEffect to handle the scroll when success becomes true
  useEffect(() => {
    if (success && containerRef.current) {
      // Calculate position and scroll slightly above the success message
      const y = containerRef.current.getBoundingClientRect().top + window.scrollY - 150;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [success]);

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const guestInput = formData.get("estimatedGuest");
    const estimatedGuest = guestInput ? Number(guestInput) : undefined;

    const payload = {
      customerName: formData.get("customerName"),
      customerEmail: formData.get("customerEmail"),
      customerPhone: formData.get("customerPhone"),
      eventDate: formData.get("eventDate"),
      estimatedGuest: estimatedGuest, 
      message: formData.get("message"),
      serviceIds: selectedServices, 
    };

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json();
        if (data.details) {
          const zodErrors = Object.values(data.details).flat().join(" | ");
          throw new Error(`Validation Error: ${zodErrors}`);
        }
        throw new Error(data.error || "Failed to submit inquiry.");
      }

      setSuccess(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      // 4. Attach the ref and add a min-height (min-h-[500px]) so the page doesn't shrink violently
      <motion.div 
        ref={containerRef as any}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-12 text-center bg-surface border border-gold/30 rounded-sm backdrop-blur-md flex flex-col items-center justify-center min-h-[500px]"
      >
        <div className="w-16 h-16 rounded-full bg-gold/10 text-gold flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-3xl text-ivory mb-2">Request Received</h3>
        <p className="text-muted">Our event designers will contact you shortly to begin curating your experience.</p>
      </motion.div>
    );
  }

  return (
    // 5. Attach the ref to the form as well
    <form ref={containerRef as any} onSubmit={handleSubmit} className="space-y-8 bg-surface p-8 md:p-12 border border-surface-hover rounded-sm shadow-2xl">
      {/* ... The rest of your form inputs remain exactly the same ... */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs tracking-widest text-muted uppercase">Full Name</label>
          <input required name="customerName" type="text" className="w-full bg-background border border-surface-hover rounded-sm px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors" />
        </div>
        
        <div className="space-y-2">
          <label className="text-xs tracking-widest text-muted uppercase">Email Address</label>
          <input required name="customerEmail" type="email" className="w-full bg-background border border-surface-hover rounded-sm px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors" />
        </div>

        <div className="space-y-2">
          <label className="text-xs tracking-widest text-muted uppercase">Phone Number</label>
          <input required name="customerPhone" type="tel" className="w-full bg-background border border-surface-hover rounded-sm px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors" />
        </div>

        <div className="space-y-2">
          <label className="text-xs tracking-widest text-muted uppercase">Event Date</label>
          <input required name="eventDate" type="date" className="w-full bg-background border border-surface-hover rounded-sm px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors [color-scheme:dark]" />
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-xs tracking-widest text-muted uppercase">Estimated Guests</label>
          <input name="estimatedGuest" type="number" min="1" className="w-full bg-background border border-surface-hover rounded-sm px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors" placeholder="e.g., 500" />
        </div>
      </div>

      <div className="space-y-4 pt-4 border-t border-surface-hover">
        <label className="text-xs tracking-widest text-muted uppercase mb-4 block">Services Required</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {availableServices.map((service) => {
            const isSelected = selectedServices.includes(service.id);
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => toggleService(service.id)}
                className={`px-4 py-3 text-sm text-left rounded-sm transition-all duration-300 border ${
                  isSelected ? "bg-gold/10 border-gold text-gold" : "bg-background border-surface-hover text-muted hover:border-gold/50"
                }`}
              >
                {service.label}
              </button>
            );
          })}
        </div>
        {selectedServices.length === 0 && <p className="text-xs text-red-400 mt-2">Please select at least one service.</p>}
      </div>

      <div className="space-y-2">
        <label className="text-xs tracking-widest text-muted uppercase">Event Vision & Details</label>
        <textarea required name="message" rows={4} className="w-full bg-background border border-surface-hover rounded-sm px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors resize-none" placeholder="Tell us about the scale, theme, and expectations for your event..." />
      </div>

      {error && (
        <div className="bg-red-950/50 border border-red-500/50 rounded-sm p-4 text-red-200 text-sm">
          {error}
        </div>
      )}

      <button type="submit" disabled={isSubmitting || selectedServices.length === 0} className="w-full bg-gold text-background font-medium py-4 rounded-sm hover:bg-gold-light transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
        {isSubmitting ? "Submitting Inquiry..." : "Submit Consultation Request"}
      </button>
    </form>
  );
}