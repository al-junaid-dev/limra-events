import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-20 pb-10 px-6 border-t border-surface-hover">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="font-serif text-3xl tracking-wide text-ivory block">
              LIMRA <span className="text-gold italic">Events</span>
            </Link>
            <p className="text-muted text-sm leading-relaxed pr-4">
              Designing bespoke luxury events, unparalleled floral arrangements, and unforgettable moments for the most discerning clients.
            </p>
          </div>

         {/* Office & Location Details */}
          <div className="space-y-6">
            <h4 className="text-ivory font-medium uppercase tracking-widest text-sm">Head Office</h4>
            <div className="text-muted text-sm space-y-3">
              {/* UPDATED: Converted to an anchor tag linking to Google Maps */}
              <a 
                href="https://www.google.com/maps/place/Limra+Tent+House/@17.4504954,78.3713551,13z/data=!4m10!1m2!2m1!1slimra+tent+house!3m6!1s0x3bcb916b30ec1359:0x589630afd1cf6c6a!8m2!3d17.4504954!4d78.406374!15sChBsaW1yYSB0ZW50IGhvdXNlkgETdGVudF9yZW50YWxfc2VydmljZeABAA!16s%2Fg%2F11q9_lhrwn?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-gold transition-colors"
              >
                <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  Limra Events<br />
                   Site-3, NRR Puram<br />
                   Borababda, Hyderabad<br />
                  Telangana 500033
                </span>
              </a>
              <p className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Mon - Sat: 10:00 AM - 7:00 PM</span>
              </p>
            </div>
          </div>

          {/* Contact & WhatsApp */}
          <div className="space-y-6">
            <h4 className="text-ivory font-medium uppercase tracking-widest text-sm">Get in Touch</h4>
            <div className="text-muted text-sm space-y-4">
              <a href="tel:+919553117507" className="flex items-center gap-3 hover:text-gold transition-colors">
                <svg className="w-5 h-5 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 9553117507
              </a>
              {/* WhatsApp Link - Opens directly in app */}
              <a href="https://wa.me/919553117507" target="Hey! I wanted to book an appointment." rel="noopener noreferrer" className="flex items-center gap-3 hover:text-gold transition-colors">
                <svg className="w-5 h-5 text-[#25D366] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat on WhatsApp
              </a>
              <a href="mailto:al.junaid.dev@gmail.com" className="flex items-center gap-3 hover:text-gold transition-colors">
                <svg className="w-5 h-5 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                al.junaid.dev@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-ivory font-medium uppercase tracking-widest text-sm">Quick Links</h4>
            <div className="flex flex-col space-y-3 text-sm text-muted">
              <Link href="/#services" className="hover:text-gold transition-colors w-fit">Our Services</Link>
              <Link href="/#reviews" className="hover:text-gold transition-colors w-fit">Client Experiences</Link>
              <Link href="/#consultation" className="hover:text-gold transition-colors w-fit">Book Consultation</Link>
              <Link href="#" className="hover:text-gold transition-colors w-fit">Privacy Policy</Link>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-surface flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted/60">
          <p>© {new Date().getFullYear()} Limra Events. All rights reserved.</p>
          <p>Designed & Developed with precision by @al.junaid.dev.</p>
        </div>
      </div>
    </footer>
  );
}