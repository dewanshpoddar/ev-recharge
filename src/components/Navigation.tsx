"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/content";

export const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // useRef prevents stale closure — last scroll position survives re-renders
  // without re-registering the listener on every scroll event.
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > 150) {
        setIsVisible(currentScrollY < lastScrollY.current);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // stable: no deps, listener registered once

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[6vw] py-4 transition-colors duration-300",
          isScrolled ? "bg-white/80 backdrop-blur-md border-b border-evr-border" : "bg-transparent"
        )}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-evr-dark rounded-md flex items-center justify-center text-white text-[10px] font-extrabold group-hover:bg-evr-green transition-colors">
            EV
          </div>
          <span className="text-lg font-extrabold tracking-tight text-evr-dark">
            ev<span className="text-evr-green">recharge</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[13px] font-bold text-evr-gray hover:text-evr-green transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#conversion"
            className="hidden sm:block bg-evr-green text-white px-5 py-2.5 rounded-lg text-[13px] font-bold hover:bg-opacity-90 transition-all active:scale-95 shadow-sm"
          >
            See your fleet plan
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <span className={cn("w-6 h-0.5 bg-evr-dark transition-all", mobileMenuOpen && "rotate-45 translate-y-2")} />
            <span className={cn("w-6 h-0.5 bg-evr-dark transition-all", mobileMenuOpen && "opacity-0")} />
            <span className={cn("w-6 h-0.5 bg-evr-dark transition-all", mobileMenuOpen && "-rotate-45 -translate-y-2")} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-[6vw] md:hidden"
          >
            <nav aria-label="Mobile navigation">
              <div className="flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-extrabold text-evr-dark"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#conversion"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-4 bg-evr-green text-white text-center py-4 rounded-xl text-lg font-bold"
                >
                  See your fleet plan
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
