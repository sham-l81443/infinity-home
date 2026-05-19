"use client";
import { useState } from "react";
import { ArrowRight, Send, Star } from "lucide-react";
import heroImg from "@/public/hero-house.png";
import Image from "next/image";
import Link from "next/link";
import OurWorks from "./components/OurWorks";
import StatusCard from "./components/StatusCard";

function Hero() {
  const [isConnectOpen, setIsConnectOpen] = useState(false);

  return (
    <section className="relative overflow-hidden h-dvh flex items-center  ">
      {/* Full-bleed background image */}
      <Image
        src={heroImg}
        priority
        alt="Modern white architectural villa overlooking the ocean"
        className="absolute  inset-0 w-full h-full object-cover object-bottom-left lg:object-right lg:scale-105 lg:translate-x-[2%]"
        width={1536}
        height={1024}
      />

      {/* Left-side gradient for text readability */}
      <div className="absolute inset-0 bg-linear-to-r from-white/90 via-white/40 to-transparent " />

      {/* Content */}
      <div className="relative z-10 w-full px-5 lg:px-28 pt-32 lg:pt-32 pb-16 lg:pb-24">
        <div className="w-full lg:max-w-xl">
          <div className="flex items-center gap-4 mb-6 lg:mb-8 animate-fade-in-up-1">
            <span className="block w-12 h-0.5 bg-primary/40 rounded-full"></span>
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
                <Send className="size-2.5 sm:size-3 lg:size-3.5 fill-zinc-500 " />
              </span>
              <span className="">Explore Projects</span>
            </Link>
            {/* <GoogleRatingCard /> */}

          </div>
        </div>
      </div>

      {/* Connect Bottom Drawer Card Overlay */}
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

          {/* Close Button */}
          {/* <button
            onClick={() => setIsConnectOpen(false)}
            className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-zinc-800 hover:bg-zinc-100 rounded-full transition-all duration-200"
            aria-label="Close panel"
          >
            <CloseIcon className="size-5" />
          </button> */}

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
    </section>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      <Hero />
      <StatusCard />
      <OurWorks />
    </main>
  );
}

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

const CloseIcon = ({ className = "size-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);


function GoogleRatingCard() {
  const rating = 4.8;
  const reviews = 1284;
  const stars = Math.round(rating);

  return (
    <div className="group relative inline-flex items-center gap-4 rounded-lg lg:rounded-2xl border border-white/30 bg-black/10 px-2  h-11 lg:h-auto lg:px-5 lg:py-4 shadow-xl backdrop-blur-xl backdrop-saturate-150 ring-1 ring-white/5 ">
      {/* subtle gradient sheen */}
      <div className="pointer-events-none absolute inset-0 lg:rounded-2xl rounded-lg bg-linear-to-br from-white via-white/80 to-white" />

      <div className="relative flex h-7 w-7 lg:h-11 lg:w-11 items-center justify-center rounded-xl bg-white/80 shadow-sm">
        <svg viewBox="0 0 24 24" className="h-4 w-4 lg:h-6 lg:w-6" aria-hidden="true">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.26 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.1A6.99 6.99 0 0 1 5.47 12c0-.73.13-1.44.36-2.1V7.07H2.18A11 11 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.83z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.83C6.71 7.31 9.14 5.38 12 5.38z" />
        </svg>
      </div>

      <div className="relative flex flex-col">
        <div className="flex items-center gap-2">
          <span className="text-[10px] lg:text-sm font-medium text-zinc-500">Rated on Google</span>
        </div>
        <div className="mt-0.5 flex items-center gap-2">
          <span className="text-xs lg:text-sm font-semibold text-zinc-500">{rating.toFixed(1)}</span>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-4 ${i < stars ? "fill-yellow-500 text-yellow-500" : "text-white/30"}`}
              />
            ))}
          </div>
          {/* <span className="text-[10px] lg:text-xs text-zinc-500">({reviews.toLocaleString()})</span> */}
        </div>
      </div>
    </div>
  );
}