"use client";

import { useEffect, useRef, useState } from "react";

/* ─── tiny inline SVG icons ─── */
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden="true">
    <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.46 3.48 1.332 5l-1.416 5.172 5.292-1.392c1.476.8 3.12 1.22 4.78 1.22 5.506 0 9.988-4.482 9.988-9.988S17.518 2 12.012 2zm6.264 14.184c-.252.708-1.476 1.308-2.028 1.392-.504.072-1.164.132-3.372-.78-2.82-1.164-4.632-4.032-4.776-4.224-.144-.192-1.14-1.512-1.14-2.88 0-1.368.708-2.04 1.008-2.352.252-.264.672-.372.996-.372.108 0 .204 0 .288.012.264.012.396.024.564.432.204.504.708 1.728.768 1.848.06.12.108.264.024.432-.084.18-.18.288-.3.432-.12.132-.252.3-.36.408-.12.12-.252.252-.108.504.144.252.648 1.068 1.392 1.728.96.852 1.764 1.116 2.016 1.248.252.132.396.108.54-.06.144-.168.624-.732.792-.984.168-.252.336-.204.564-.12.228.084 1.44.684 1.692.804.252.12.42.18.48.288.06.108.06.624-.192 1.332z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);



/* ─── Contact info row ─── */
const ContactItem = ({
  icon,
  label,
  value,
  href,
  delay,
  isVisible,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  delay: number;
  isVisible: boolean;
}) => (
  <a
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    className={`group relative flex items-start gap-4 p-4 rounded-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-zinc-50/80 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="shrink-0 size-11 rounded-xl bg-zinc-50 flex items-center justify-center text-zinc-500 group-hover:bg-zinc-200 group-hover:text-zinc-800 transition-all duration-300 group-hover:scale-105">
      {icon}
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-[11px] uppercase tracking-[0.15em] text-zinc-400 font-medium mb-1">
        {label}
      </p>
      <p className="text-sm lg:text-base text-zinc-700 font-medium group-hover:text-zinc-900 transition-colors">
        {value}
      </p>
      {/* Subtle accent underline on hover */}
      <div className="mt-2 h-px w-0 group-hover:w-full bg-linear-to-r from-zinc-300 via-zinc-200 to-transparent transition-all duration-500 ease-out" />
    </div>
  </a>
);

/* ─── Social link pill ─── */
const SocialPill = ({
  icon,
  label,
  href,
  gradient,
  delay,
  isVisible,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  gradient: string;
  delay: number;
  isVisible: boolean;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group inline-flex items-center gap-3 px-5 py-3  transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <span
      className="size-8 rounded-full flex items-center justify-center text-white shadow-sm"
      style={{ background: gradient }}
    >
      {icon}
    </span>
    <span className="text-sm font-medium text-zinc-600 group-hover:text-zinc-900 transition-colors">
      {label}
    </span>
  </a>
);

/* ══════════════════════════════════════════
   CONTACT SECTION
   ══════════════════════════════════════════ */
export default function ContactUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden pb-20 bg-white"
    >
      {/* Architectural grid bg */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />



      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div
          className={`text-center mb-16 lg:mb-24 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="block w-12 lg:w-20 h-px bg-zinc-300" />
            <div className="size-1.5 rounded-full bg-zinc-400" />
            <span className="block w-12 lg:w-20 h-px bg-zinc-300" />
          </div>

          <p className="text-[11px] lg:text-xs uppercase tracking-[0.25em] text-zinc-400 font-medium mb-4">
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.4rem] font-light text-zinc-600 tracking-tight">
            Let&apos;s Build{" "}
            <span className="font-serif italic text-zinc-900">Together</span>
          </h2>
        </div>

        {/* Main content: info + map */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT — Contact details */}
          <div className="relative space-y-2">
            {/* House watermark behind info cards */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.035 }}>
                <path
                  d="
                    M50 10
                    Q50 8, 48 10
                    L12 42
                    Q10 44, 12 46
                    L18 46
                    Q20 46, 20 48
                    L20 84
                    Q20 88, 24 88
                    L40 88
                    Q42 88, 42 86
                    L42 66
                    Q42 62, 46 62
                    L54 62
                    Q58 62, 58 66
                    L58 86
                    Q58 88, 60 88
                    L76 88
                    Q80 88, 80 84
                    L80 48
                    Q80 46, 82 46
                    L88 46
                    Q90 44, 88 42
                    L52 10
                    Q50 8, 50 10
                    Z
                  "
                  fill="#b3b3b5"
                  strokeLinejoin="round"
                />
                <rect x="66" y="20" width="8" height="16" rx="3" fill="#b3b3b5" />
              </svg>
            </div>
            <ContactItem
              icon={<PhoneIcon />}
              label="Phone"
              value="+91 99999 99999"
              href="tel:+919999999999"
              delay={100}
              isVisible={isVisible}
            />
            <ContactItem
              icon={<MailIcon />}
              label="Email"
              value="hello@infinityarchitects.in"
              href="mailto:hello@infinityarchitects.in"
              delay={200}
              isVisible={isVisible}
            />
            <ContactItem
              icon={<MapPinIcon />}
              label="Office"
              value="Court Rd, near Municipal Office Road, Velapuram, Taliparamba, Kerala 670141"
              href="https://maps.app.goo.gl/m6Z5wgJjjfB8ccFg8"
              delay={300}
              isVisible={isVisible}
            />

            {/* Social links */}
            <div className="pt-6 flex flex-wrap gap-3">
              <SocialPill
                icon={<InstagramIcon />}
                label="Instagram"
                href="https://instagram.com"
                gradient="linear-gradient(135deg, #f9ce34, #ee2a7b, #6228d7)"
                delay={400}
                isVisible={isVisible}
              />
              <SocialPill
                icon={<WhatsAppIcon />}
                label="WhatsApp"
                href="https://wa.me/919999999999"
                gradient="#25D366"
                delay={500}
                isVisible={isVisible}
              />
            </div>
          </div>

          {/* RIGHT — Map */}
          <div
            className={`transition-all duration-1000 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-12 scale-95"
              }`}
          >
            <div className="w-full aspect-4/3 rounded-2xl overflow-hidden border border-zinc-200 shadow-sm">
              <iframe
                src="https://maps.google.com/maps?q=Court+Rd,+near+Municipal+Office+Road,+Velapuram,+Taliparamba,+Kerala+670141&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our office location"
              />
            </div>
            <p
              className={`text-center mt-4 text-xs text-zinc-400 tracking-wide transition-all duration-700 delay-700 ${isVisible ? "opacity-100" : "opacity-0"
                }`}
            >
              Visit us — we&apos;d love to welcome you home.
            </p>
          </div>
        </div>

        {/* Bottom decorative divider */}
        <div
          className={`flex items-center justify-center gap-4 mt-16 lg:mt-24 transition-all duration-1000 delay-500 ease-out ${isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
          <span className="block w-12 lg:w-20 h-px bg-zinc-300" />
          <div className="size-1.5 rounded-full bg-zinc-400" />
          <span className="block w-12 lg:w-20 h-px bg-zinc-300" />
        </div>
      </div>
    </section>
  );
}
