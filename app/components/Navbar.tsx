"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="absolute z-50 flex justify-between items-center transition-all top-4 left-2 right-2 px-2  py-3 rounded-full lg:top-0 lg:left-0 lg:right-auto lg:w-full lg:px-28 lg:py-8 lg:rounded-none lg:bg-transparent lg:backdrop-blur-none lg:border-transparent lg:shadow-none ">
        {/* Logo */}
        <Link href="/" className="flex items-center text-xl lg:text-[1.75rem] font-bold tracking-tighter">
          <span className="text-red-600">infinity</span>
          <span className="text-zinc-500 font-medium ml-1 text-sm lg:text-xl italic self-end mb-0.5">Builders</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 bg-white/40 backdrop-blur-md border border-white/50 px-6 pr-3 py-2 rounded-full shadow-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[15px] font-medium text-black/60 hover:text-zinc-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 rounded-full bg-white/60 hover:bg-white/80 border border-white/50 shadow-sm text-black text-sm font-medium transition-all"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 -mr-0.5  text-black hover:bg-black/5 rounded-full transition-colors bg-white/20 backdrop-blur-xs border border-white/20 shadow-xs "
          onClick={() => setIsOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="size-4 text-black" /> : <Menu className="size-4" />}
        </button>
      </nav>

      {/* Mobile Full Screen Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#fafafa] flex flex-col justify-center px-8 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full pointer-events-none"
          }`}
      >
        <div className="flex flex-col gap-10 ">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                transitionDelay: isOpen ? `${150 + index * 50}ms` : "0ms"
              }}
              className={`text-5xl font-semibold tracking-tight text-black/60 hover:text-zinc-700 transition-all duration-500 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Aesthetic footer details in the mobile menu */}
        <div
          className={`absolute bottom-4 left-8 right-8 flex flex-col transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "opacity-100 translate-y-0 delay-500" : "opacity-0 translate-y-4 delay-0"
            }`}
        >
          <div className="w-full h-px bg-black/10 mb-6"></div>
          <p className="text-zinc-500 text-xs font-semibold uppercase tracking-[0.2em] mb-2">
            Get in touch
          </p>
          <a href="mailto:hello@infinitybuilders.com" className="text-sm font-medium text-black hover:text-red-600 transition-colors">
            hello@infinitybuilders.com
          </a>
        </div>
      </div>
    </>
  );
}


