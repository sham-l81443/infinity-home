"use client";

import Link from "next/link";

/* ─── Tiny social icons ─── */
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="size-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="size-[18px] fill-current" aria-hidden="true">
    <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.46 3.48 1.332 5l-1.416 5.172 5.292-1.392c1.476.8 3.12 1.22 4.78 1.22 5.506 0 9.988-4.482 9.988-9.988S17.518 2 12.012 2zm6.264 14.184c-.252.708-1.476 1.308-2.028 1.392-.504.072-1.164.132-3.372-.78-2.82-1.164-4.632-4.032-4.776-4.224-.144-.192-1.14-1.512-1.14-2.88 0-1.368.708-2.04 1.008-2.352.252-.264.672-.372.996-.372.108 0 .204 0 .288.012.264.012.396.024.564.432.204.504.708 1.728.768 1.848.06.12.108.264.024.432-.084.18-.18.288-.3.432-.12.132-.252.3-.36.408-.12.12-.252.252-.108.504.144.252.648 1.068 1.392 1.728.96.852 1.764 1.116 2.016 1.248.252.132.396.108.54-.06.144-.168.624-.732.792-.984.168-.252.336-.204.564-.12.228.084 1.44.684 1.692.804.252.12.42.18.48.288.06.108.06.624-.192 1.332z" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="size-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Residential Design",
    "Commercial Architecture",
    "Interior Design",
    "Landscape Design",
    "Renovation",
  ];

  const socials = [
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: <InstagramIcon />,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/919999999999",
      icon: <WhatsAppIcon />,
    },
    {
      name: "Phone",
      href: "tel:+919999999999",
      icon: <PhoneIcon />,
    },
  ];

  return (
    <footer className="relative bg-zinc-100 text-zinc-400 overflow-hidden">
      {/* Faint architectural grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 pt-16 lg:pt-24 pb-8">
        {/* Top row — brand + columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-14 border-b border-white/[0.06]">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center text-xl font-bold tracking-tighter mb-5">
              <span className="text-red-500">infinity</span>
              <span className="text-zinc-500 font-medium ml-1 text-sm italic self-end mb-0.5">
                Builders
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-zinc-500 max-w-xs">
              A modern architecture studio creating timeless spaces that inspire and elevate everyday living.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 font-semibold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 font-semibold mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-sm text-zinc-500">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 font-semibold mb-5">
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+919999999999"
                className="block text-zinc-500 hover:text-white transition-colors"
              >
                +91 99999 99999
              </a>
              <a
                href="mailto:hello@infinitybuilders.com"
                className="block text-zinc-500 hover:text-white transition-colors"
              >
                hello@infinitybuilders.com
              </a>
              <p className="text-zinc-600 leading-relaxed">
                Court Rd, near Municipal Office Road,
                <br />
                Velapuram, Taliparamba, Kerala 670141
              </p>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.name}
                  className="size-9 rounded-full border border-white/[0.08] flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-zinc-600">
            &copy; {currentYear} Infinity Builders. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
