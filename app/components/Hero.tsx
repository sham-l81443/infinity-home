// // No "use client" — this is now a Server Component.
// Only ConnectDrawer (the interactive drawer + button) runs on the client.

import heroImg from "@/public/hero-house.png";
import Image from "next/image";
import Link from "next/link";
import { Send } from "lucide-react";
import ConnectDrawer from "@/app/components/ConnectDrawer";

export default function Hero() {
  return (
    <>
      <section className="relative overflow-hidden h-svh flex items-center">
        {/* Full-bleed background image */}
        <Image
          src={heroImg}
          priority
          alt="Modern white architectural villa overlooking the ocean"
          className="absolute inset-0 w-full h-full object-cover object-bottom-left lg:object-[85%_center]"
          // ✅ FIXED: added sizes so Next.js generates correct srcset breakpoints.
          // Previously missing — browser was downloading the full 1536px image on mobile.
          sizes="100vw"
          // ✅ FIXED: removed will-change-transform — the image never animates,
          // so permanently promoting it to a GPU layer wasted VRAM and caused jitter.
          // translate-z-0 kept only if you notice z-index stacking issues; safe to remove.
        />

        {/* Left-side gradient for text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-white/90 via-white/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 w-full px-5 lg:px-28 pt-32 lg:pt-32 pb-16 lg:pb-24">
          <div className="w-full lg:max-w-xl">
            <div className="flex items-center gap-4 mb-6 lg:mb-8 animate-fade-in-up-1">
              <span className="block w-8 lg:w-12 h-0.5 bg-primary/40 rounded-full" />
              <p className="text-primary text-[10px] md:text-xs lg:text-sm font-semibold tracking-[0.22em] mb-0 lg:mb-0 uppercase">
                WE DESIGN SPACES
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-[5.5rem] leading-[1.02] lg:leading-[1.05] text-black/80 lg:text-black/90 font-semibold lg:font-semibold lg:tracking-tight mb-0 lg:mb-8 animate-fade-in-up-2">
              Architecture
              <br />
              <span className="text-black/50 font-light italic font-serif">
                that inspires.
              </span>
            </h1>

            <div className="relative mt-7 max-w-xs">
              <p className="lg:mt-0 text-sm leading-relaxed text-zinc-700 lg:text-zinc-600 lg:text-xl max-w-full sm:max-w-xl lg:max-w-lg mb-0 lg:mb-12 animate-fade-in-up-3">
                We are a modern architecture studio creating timeless spaces
                that inspire and elevate everyday living.
              </p>
            </div>

            <div className="mt-9 lg:mt-0 z-[-10] flex lg:flex-nowrap items-center gap-4 sm:gap-6 group/buttons animate-fade-in-up-4">
              {/*
               * ConnectDrawer is the ONLY client component in this section.
               * It owns its own useState and renders the button + drawer overlay.
               * Everything above this line is pure server-rendered HTML — zero JS.
               */}
              <ConnectDrawer />

              <Link
                href="#projects"
                className="cursor-pointer group inline-flex lg:flex items-center justify-center gap-2 lg:gap-3 px-4 h-9 lg:h-auto sm:px-5 sm:py-3 lg:px-8 lg:py-3 rounded-lg lg:rounded-xl bg-white/70 lg:bg-transparent hover:bg-white/50 backdrop-blur-md lg:backdrop-blur-none border border-white/50 lg:border-transparent text-zinc-800 text-xs sm:text-sm lg:text-base font-medium lg:shadow-none shadow-(--shadow-medium) hover:shadow-(--shadow-large) transition-all duration-300"
              >
                <span className="size-5 sm:size-6 lg:size-8 rounded-full lg:border lg:border-zinc-500 flex items-center justify-center shadow-sm transition-all duration-300 shrink-0">
                  <Send className="size-2.5 sm:size-3 lg:size-3.5" />
                </span>
                <span>Explore Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}