"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

/* Google Home–style SVG watermark */
const GoogleHomeLogo = () => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    {/* Roof / triangle */}
    <path
      d="M50 12 L14 48 L26 48 L26 82 L44 82 L44 62 L56 62 L56 82 L74 82 L74 48 L86 48 Z"
      fill="url(#homeGrad)"
    />
    {/* Chimney */}
    <rect x="62" y="22" width="8" height="20" rx="1.5" fill="url(#homeGrad)" />
    <defs>
      <linearGradient id="homeGrad" x1="50" y1="10" x2="50" y2="90" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F472B6" />
        <stop offset="60%" stopColor="#FBCFE8" />
        <stop offset="100%" stopColor="#FFFFFF" />
      </linearGradient>
    </defs>
  </svg>
);

export default function AboutUs() {
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
      { threshold: 0.25 }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
      observer.disconnect();
    };
  }, []);

  const line1Words = "The dream of owning a perfect home".split(" ");
  const line2Words = "lasts a lifetime.".split(" ");
  const line3Words =
    "We bring that dream to life with thoughtful design".split(" ");
  const line4Words = "and quality craftsmanship.".split(" ");

  let wordIndex = 0;

  const renderWord = (
    word: string,
    idx: number,
    serif = false,
    highlight = false
  ) => {
    const currentIndex = wordIndex++;
    return (
      <span
        key={`${word}-${idx}`}
        className={`inline-block transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] relative ${isVisible
          ? "opacity-100 translate-y-0 blur-0"
          : "opacity-0 translate-y-4 blur-[2px]"
          } ${serif ? "font-serif italic" : ""} ${highlight ? "text-zinc-900" : ""
          }`}
        style={{ transitionDelay: `${currentIndex * 60}ms` }}
      >
        {word === "home" && (
          <span
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-0"
            style={{
              width: "clamp(80px, 10vw, 140px)",
              height: "clamp(80px, 10vw, 140px)",
              opacity: 0.13,
              animation: "homeBreath 4s ease-in-out infinite",
            }}
          >
            <GoogleHomeLogo />
          </span>
        )}
        <span className="relative z-10">{word}</span>
      </span>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden py-24 "
    >
      {/* Subtle architectural grid background */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
        {/* Decorative top element */}
        <div
          className={`flex items-center justify-center gap-4 mb-14 lg:mb-20 transition-all duration-1000 ease-out ${isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
          <span className="block w-12 lg:w-20 h-px bg-zinc-300" />
          <div className="size-1.5 rounded-full bg-zinc-400" />
          <span className="block w-12 lg:w-20 h-px bg-zinc-300" />
        </div>

        {/* Typography block */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.4rem] font-light text-zinc-600 leading-snug lg:leading-snug tracking-tight">
          {/* Line 1 — regular weight */}
          <span className="block">
            {line1Words.map((w, i) => (
              <span key={i}>
                {renderWord(w, i)}
                {i < line1Words.length - 1 && " "}
              </span>
            ))}
          </span>

          {/* Line 2 — serif italic, darker */}
          <span className="block mt-1 lg:mt-2">
            {line2Words.map((w, i) => (
              <span key={i}>
                {renderWord(w, i, true, true)}
                {i < line2Words.length - 1 && " "}
              </span>
            ))}
          </span>

          {/* Spacer dash */}
          <span
            className={`block mx-auto my-6 lg:my-10 w-8 h-px bg-zinc-400 transition-all duration-1000 delay-700 ease-out ${isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
          />

          {/* Line 3 */}
          <span className="block">
            {line3Words.map((w, i) => (
              <span key={i}>
                {renderWord(w, i)}
                {i < line3Words.length - 1 && " "}
              </span>
            ))}
          </span>

          {/* Line 4 — serif italic, darker */}
          <span className="block mt-1 lg:mt-2">
            {line4Words.map((w, i) => (
              <span key={i}>
                {renderWord(w, i, true, true)}
                {i < line4Words.length - 1 && " "}
              </span>
            ))}
          </span>
        </h2>

        {/* CTA button */}
        <div
          className={`flex justify-center mt-14 lg:mt-20 transition-all duration-700 delay-1000 ease-out ${isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
            }`}
        >
          <button className="shadow border border-zinc-300 group relative cursor-pointer rounded-2xl p-0.5 inline-flex overflow-hidden">
            {/* Spinning conic gradient — the "snake" border */}
            <span
              className="absolute animate-border-spin"
              style={{
                inset: "-300%",
                background:
                  "conic-gradient(from 0deg, transparent 0%, transparent 35%, #2D5DA8 50%, transparent 65%, transparent 100%)",
              }}
            />
            {/* Inner white surface */}
            <span className="relative z-10 bg-white rounded-xl px-6 py-4 inline-flex items-center gap-3 text-sm font-medium text-zinc-700 group-hover:text-zinc-900 transition-colors duration-300 shadow-sm">
              <span>Know More About Our Expertise</span>
              <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform duration-300" />
            </span>
          </button>
        </div>

        {/* Decorative bottom element */}
        <div
          className={`flex items-center justify-center gap-4 mt-14 lg:mt-20 transition-all duration-1000 delay-500 ease-out ${isVisible ? "opacity-100" : "opacity-0"
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
