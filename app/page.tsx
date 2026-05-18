"use client";
import { ArrowRight, Send } from "lucide-react";
import heroImg from "@/public/hero-house.png";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
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
      <div className="relative z-10 w-full px-6 lg:px-28 pt-28 lg:pt-32 pb-16 lg:pb-24 ">
        <div className="max-w-xs lg:max-w-xl">
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

          <p className="mt-7 lg:mt-0 text-sm leading-relaxed text-zinc-700 lg:text-zinc-600 lg:text-xl max-w-full sm:max-w-xl lg:max-w-lg mb-0 lg:mb-12 animate-fade-in-up-3">
            We are a modern architecture studio creating timeless spaces that inspire and elevate everyday living.
          </p>

          <div className="mt-9 lg:mt-0 z-[-10 ] flex w-max lg:flex-nowrap items-center gap-4 sm:gap-6 group/buttons animate-fade-in-up-4">
            <Link
              href="/projects"
              className="group/btn cursor-pointer btn-gradient text-white px-4 h-9 lg:h-auto sm:px-5 sm:py-3 lg:px-8 lg:py-4 rounded-lg lg:rounded-xl inline-flex lg:flex items-center justify-center gap-2 lg:gap-3 text-xs sm:text-sm lg:text-base font-medium shadow-(--shadow-medium) hover:shadow-(--shadow-large) transition-shadow lg:transition-all lg:hover:-translate-y-1"
            >
              Connect with Us
              <ArrowRight className="size-4 lg:group-hover/btn:translate-x-1 lg:transition-transform" />
            </Link>
            <Link href="#projects" className="cursor-pointer group inline-flex lg:flex items-center justify-center gap-2 lg:gap-3 px-4 h-9 lg:h-auto sm:px-5 sm:py-3 lg:px-8 lg:py-3 rounded-lg lg:rounded-xl bg-white/30 lg:bg-transparent hover:bg-white/50 backdrop-blur-md lg:backdrop-blur-none border border-white/50 lg:border-transparent text-zinc-800 text-xs sm:text-sm lg:text-base font-medium lg:shadow-none shadow-(--shadow-medium) hover:shadow-(--shadow-large) transition-all duration-300 ">
              <span className="size-5  sm:size-6 lg:size-8 rounded-full lg:border lg:border-zinc-500  flex items-center justify-center shadow-sm transition-all duration-300 shrink-0">
                <Send className="size-2.5 sm:size-3 lg:size-3.5 fill-zinc-500 " />
              </span>
              <span className="">Explore Projects</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
