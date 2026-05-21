"use client";
import { useState } from "react";
import { ArrowRight, Send, Star } from "lucide-react";
import heroImg from "@/public/hero-house.png";
import Image from "next/image";
import Link from "next/link";

/* ─── Inline SVG icons ─── */
const WhatsAppIcon = ({ className = "size-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.46 3.48 1.332 5l-1.416 5.172 5.292-1.392c1.476.8 3.12 1.22 4.78 1.22 5.506 0 9.988-4.482 9.988-9.988S17.518 2 12.012 2zm6.264 14.184c-.252.708-1.476 1.308-2.028 1.392-.504.072-1.164.132-3.372-.78-2.82-1.164-4.632-4.032-4.776-4.224-.144-.192-1.14-1.512-1.14-2.88 0-1.368.708-2.04 1.008-2.352.252-.264.672-.372.996-.372.108 0 .204 0 .288.012.264.012.396.024.564.432.204.504.708 1.728.768 1.848.06.12.108.264.024.432-.084.18-.18.288-.3.432-.12.132-.252.3-.36.408-.12.12-.252.252-.108.504.144.252.648 1.068 1.392 1.728.96.852 1.764 1.116 2.016 1.248.252.132.396.108.54-.06.144-.168.624-.732.792-.984.168-.252.336-.204.564-.12.228.084 1.44.684 1.692.804.252.12.42.18.48.288.06.108.06.624-.192 1.332z" />
  </svg>
);

const InstagramIcon = ({ className = "size-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const PhoneIcon = ({ className = "size-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default function Hero() {
  const [isConnectOpen, setIsConnectOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden h-svh flex items-center transform-gpu">
        {/* Full-bleed background image */}
        <Image
          src={heroImg}
          priority
          alt="Modern white architectural villa overlooking the ocean"
          className="absolute inset-0 w-full h-full object-cover object-bottom-left lg:object-[85%_center] will-change-transform translate-z-0"

          width={1536}
          height={1024}
        />

        {/* Left-side gradient for text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-white/90 via-white/40 to-transparent " />

        {/* Content */}
        <div className="relative z-10 w-full px-5 lg:px-28 pt-32 lg:pt-32 pb-16 lg:pb-24">
          <div className="w-full lg:max-w-xl">
            <div className="flex items-center gap-4 mb-6 lg:mb-8 animate-fade-in-up-1">
              <span className="block w-8 lg:w-12 h-0.5 bg-primary/40 rounded-full"></span>
              <p className="text-primary text-[10px] md:text-xs lg:text-sm font-semibold tracking-[0.22em] mb-0 lg:mb-0 uppercase">
                WE DESIGN SPACES
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-[5.5rem] leading-[1.02] lg:leading-[1.05] text-black/80 lg:text-black/90 font-semibold lg:font-semibold lg:tracking-tight mb-0 lg:mb-8 animate-fade-in-up-2">
              Architecture<br />
              <span className="text-black/50 font-light italic font-serif">that inspires.</span>
            </h1>

            <div className="relative mt-7 max-w-xs">
              <p className=" lg:mt-0 text-sm leading-relaxed text-zinc-700 lg:text-zinc-600 lg:text-xl max-w-full sm:max-w-xl lg:max-w-lg mb-0 lg:mb-12 animate-fade-in-up-3">
                We are a modern architecture studio creating timeless spaces that inspire and elevate everyday living.
              </p>
            </div>

            <div className="mt-9 lg:mt-0 z-[-10 ] flex lg:flex-nowrap items-center gap-4 sm:gap-6 group/buttons animate-fade-in-up-4">
              <button
                onClick={() => setIsConnectOpen(true)}
                className="group/btn flex-1 cursor-pointer btn-gradient text-white px-3 h-9 lg:h-auto sm:px-5 sm:py-3 lg:px-8 lg:py-4 rounded-lg lg:rounded-xl inline-flex lg:flex items-center justify-center gap-2 lg:gap-3 text-xs  lg:text-base font-medium shadow-(--shadow-medium) hover:shadow-(--shadow-large) transition-all lg:hover:-translate-y-1"
              >
                Connect Us
                <ArrowRight className="size-4 lg:group-hover/btn:translate-x-1 lg:transition-transform" />
              </button>

              <Link href="#projects" className="cursor-pointer group inline-flex lg:flex items-center justify-center gap-2 lg:gap-3 px-4 h-9 lg:h-auto sm:px-5 sm:py-3 lg:px-8 lg:py-3 rounded-lg lg:rounded-xl bg-white/70 lg:bg-transparent hover:bg-white/50 backdrop-blur-md lg:backdrop-blur-none border border-white/50 lg:border-transparent text-zinc-800 text-xs sm:text-sm lg:text-base font-medium lg:shadow-none shadow-(--shadow-medium) hover:shadow-(--shadow-large) transition-all duration-300 ">
                <span className="size-5  sm:size-6 lg:size-8 rounded-full lg:border lg:border-zinc-500  flex items-center justify-center shadow-sm transition-all duration-300 shrink-0">
                  <Send className="size-2.5 sm:size-3 lg:size-3.5 " />
                </span>
                <span className="">Explore Projects</span>
              </Link>
              {/* <GoogleRatingCard /> */}

            </div>
          </div>
        </div>
      </section>

      {/* Connect Bottom Drawer Card Overlay — rendered outside <section> so overflow-hidden + transform-gpu don't trap the fixed positioning */}
      <div
        className={`fixed inset-0 z-50 flex items-end justify-center bg-black/45 backdrop-blur-xs transition-opacity duration-300 ${isConnectOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsConnectOpen(false)}
      >
        <div
          className={`w-full sm:max-w-md bg-white/95 backdrop-blur-xl border border-zinc-200/50 rounded-t-3xl shadow-2xl p-6 relative flex flex-col items-center pb-8 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isConnectOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Elegant drag handle pill indicator */}
          <div className="w-12 h-1 bg-zinc-300 rounded-full mb-6"></div>

          {/* Header Content */}
          <div className="text-center pt-1 pb-5">
            <h3 className="text-xl font-bold text-zinc-900 tracking-tight font-sans">Connect with Us</h3>
            <p className="text-xs sm:text-sm text-zinc-500 mt-1">
              Choose your preferred channel to collaborate. We'd love to chat.
            </p>
          </div>

          {/* Grid layout for connecting platforms */}
          <div className="grid grid-cols-3 gap-4 w-full px-2">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <div className="size-12 rounded-full bg-linear-to-tr from-yellow-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-md shadow-rose-500/10 group-hover:shadow-rose-500/25 transition-all">
                <InstagramIcon className="size-6" />
              </div>
              <span className="text-[11px] font-semibold text-zinc-700 mt-3 tracking-wide">Instagram</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <div className="size-12 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md shadow-emerald-500/10 group-hover:shadow-emerald-500/25 transition-all">
                <WhatsAppIcon className="size-6 fill-white" />
              </div>
              <span className="text-[11px] font-semibold text-zinc-700 mt-3 tracking-wide">WhatsApp</span>
            </a>

            {/* Phone Call */}
            <a
              href="tel:+919999999999"
              className="flex flex-col items-center"
            >
              <div className="size-12 rounded-full bg-linear-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-blue-600/10 group-hover:shadow-blue-600/25 transition-all">
                <PhoneIcon className="size-5" />
              </div>
              <span className="text-[11px] font-semibold text-zinc-700 mt-3 tracking-wide">Call</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
