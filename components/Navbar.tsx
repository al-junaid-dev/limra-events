"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Decoration", href: "/services/decoration" },
  { name: "Lighting", href: "/services/lighting" },
  { name: "Tent House", href: "/services/tent-house" },
  { name: "Buffet", href: "/services/buffet" },
  { name: "Orchestra", href: "/services/orchestra" },
  { name: "Other Vendors", href: "/services/other-vendors" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect scroll to enhance the glassmorphic effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/70 backdrop-blur-md border-surface-hover py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="font-serif text-2xl tracking-wide text-ivory">
          LIMRA <span className="text-gold italic">Events</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-ivory/80 hover:text-gold transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
          
          {/* FIXED: Changed button to Link and added href pointing to the form */}
          <Link 
            href="/#consultation"
            className="px-5 py-2.5 bg-surface border border-surface-hover text-ivory text-sm font-medium rounded-sm hover:border-gold hover:text-gold transition-all duration-300 inline-block"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-ivory"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="sr-only">Open menu</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-surface-hover md:hidden flex flex-col items-center justify-center space-y-8 overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif text-2xl text-ivory hover:text-gold transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
            {/* FIXED: Changed button to Link and added href pointing to the form */}
            <Link 
              href="/#consultation"
              onClick={() => setIsMobileMenuOpen(false)} 
              className="mt-4 px-8 py-3 bg-gold text-background font-medium rounded-sm w-3/4 max-w-xs text-center"
            >
              Book Consultation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}