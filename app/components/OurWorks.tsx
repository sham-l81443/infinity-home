"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import type { UseEmblaCarouselType } from "embla-carousel-react";

type EmblaApiType = NonNullable<UseEmblaCarouselType[1]>;

interface Project {
  id: number;
  title: string;
  location: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Oceanview Residence",
    location: "Malibu, California",
    image: "/oceanview-residence.png",
  },
  {
    id: 2,
    title: "Skyline House",
    location: "Beverly Hills, California",
    image: "/skyline-house.png",
  },
  {
    id: 3,
    title: "Hillside Retreat",
    location: "Austin, Texas",
    image: "/hillside-retreat.png",
  },
  {
    id: 4,
    title: "Hillside Retreat",
    location: "Austin, Texas",
    image: "/hillside-retreat.png",
  },
  {
    id: 5,
    title: "Hillside Retreat",
    location: "Austin, Texas",
    image: "/hillside-retreat.png",
  },
  {
    id: 6,
    title: "Hillside Retreat",
    location: "Austin, Texas",
    image: "/hillside-retreat.png",
  },
];

function useDotButton(emblaApi: EmblaApiType | undefined) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi
      .on("reInit", () => setScrollSnaps(emblaApi.scrollSnapList()))
      .on("select", () => setSelectedIndex(emblaApi.selectedScrollSnap()));
  }, [emblaApi]);

  return { selectedIndex, scrollSnaps, onDotButtonClick };
}

export default function OurWorks() {
  // ── Two separate instances — one per breakpoint ──────────────────────────
  const [desktopRef, desktopApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  );

  const [mobileRef, mobileApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  );

  const desktop = useDotButton(desktopApi);
  const mobile = useDotButton(mobileApi);

  return (
    <section
      id="projects"
      className="w-full mx-auto px-5 lg:px-28 py-12 lg:py-20"
    >
      {/* ── Mobile header ── */}
      <div className="flex flex-col justify-between mb-8 lg:hidden">
        <div className="flex items-center gap-4 mb-6 animate-fade-in-up-1">
          <span className="block w-12 h-0.5 bg-primary/40 rounded-full" />
          <p className="text-primary text-[10px] md:text-xs font-semibold tracking-[0.22em] uppercase">
            OUR WORKS
          </p>
        </div>
        <div className="flex items-center justify-between w-full">
          <h2 className="text-lg md:text-2xl font-semibold text-zinc-950 font-sans tracking-tight">
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="group flex items-center gap-2 text-[10px] font-semibold text-primary hover:text-primary/80 transition-colors shrink-0"
          >
            <span>View all projects</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>

      {/* ── Desktop: sidebar + carousel ── */}
      <div className="hidden lg:flex gap-8 items-stretch">
        {/* Sidebar */}
        <div className="flex flex-col justify-between shrink-0 w-44 xl:w-52">
          <div>
            <div className="flex items-center gap-3 mb-6 animate-fade-in-up-1">
              <span className="block w-8 h-0.5 bg-primary/40 rounded-full" />
              <p className="text-primary text-xs font-semibold tracking-[0.22em] uppercase">
                OUR WORK
              </p>
            </div>
            <h2 className="text-2xl xl:text-3xl font-semibold text-zinc-950 font-sans tracking-tight leading-tight">
              Featured Projects
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <Link
              href="/projects"
              className="group flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              <span>View all projects</span>
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="flex items-center gap-1.5">
              {desktop.scrollSnaps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => desktop.onDotButtonClick(i)}
                  aria-label={`Go to project ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ease-out ${i === desktop.selectedIndex
                    ? "w-5 bg-primary"
                    : "w-1.5 bg-zinc-300 hover:bg-zinc-400"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop carousel */}
        <div className="flex-1 min-w-0 overflow-hidden" ref={desktopRef}>
          <div className="flex -ml-4 xl:-ml-6 h-full py-2">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex-none w-1/5 pl-4 xl:pl-6"
              >
                <div className="w-full bg-zinc-50/40 hover:bg-zinc-50/70 border border-zinc-150 rounded-lg flex flex-col gap-4 transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-lg group shadow-xs cursor-pointer">
                  <div className="relative aspect-4/3 overflow-hidden bg-zinc-100 rounded-t-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-start justify-between px-2 pb-2">
                    <div className="flex flex-col">
                      <h3 className="text-sm xl:text-base  font-medium text-zinc-950 tracking-tight font-sans">
                        {project.title}
                      </h3>
                      <span className="text-[10px] text-zinc-400 font-medium mt-1">
                        {project.location}
                      </span>
                    </div>
                    <ArrowRight className="size-4 text-black/80 self-end mr-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Mobile: Embla carousel ── */}
      <div className="lg:hidden">
        <div className="overflow-hidden -mx-5" ref={mobileRef}>
          <div className="flex -ml-4 px-5">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex-none w-[42vw] pl-4"
              >
                <div className="w-full overflow-hidden bg-zinc-50/40 border border-zinc-150 rounded-lg flex flex-col gap-2 group shadow-xs cursor-pointer">
                  <div className="relative aspect-4/3 overflow-hidden bg-zinc-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="42vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-start justify-between px-2 pb-2">
                    <div className="flex flex-col">
                      <h3 className="text-[10px] font-medium text-zinc-950 tracking-tight font-sans">
                        {project.title}
                      </h3>
                      <span className="text-[10px] text-zinc-400 font-medium mt-1">
                        {project.location}
                      </span>
                    </div>
                    <ArrowRight className="size-4 text-black/80 self-end mr-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-1.5 mt-4">
          {mobile.scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => mobile.onDotButtonClick(i)}
              aria-label={`Go to project ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ease-out ${i === mobile.selectedIndex
                ? "w-5 bg-primary"
                : "w-1.5 bg-zinc-300 hover:bg-zinc-400"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}