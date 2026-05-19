"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

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
];

export default function OurWorks() {
  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-5 lg:px-28 py-12 lg:py-20">
      {/* Header Container */}
      <div className="flex flex-row items-end justify-between mb-8 lg:mb-12">
        <div className="flex flex-col">
          <span className="text-[10px] md:text-xs lg:text-sm font-semibold uppercase tracking-[0.22em] text-blue-600 mb-2 lg:mb-3">
            OUR WORK
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-zinc-950 font-sans tracking-tight">
            Featured Projects
          </h2>
        </div>
        
        {/* Desktop Actions */}
        <Link 
          href="/projects" 
          className="group flex items-center gap-2 text-xs lg:text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors shrink-0 pb-1"
        >
          <span>View all projects</span>
          <svg
            viewBox="0 0 24 24"
            className="size-4 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>

      {/* Horizontal snapping list on mobile, 3-column grid on desktop */}
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 lg:pb-0 lg:overflow-x-visible lg:grid lg:grid-cols-3 -mx-5 px-5 lg:mx-0 lg:px-0 scrollbar-none">
        {projects.map((project) => (
          <div
            key={project.id}
            className="min-w-[85vw] sm:min-w-[400px] lg:min-w-0 snap-start bg-zinc-50/40 hover:bg-zinc-50/70 border border-zinc-150 rounded-[2rem] p-4 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg group shadow-xs cursor-pointer"
          >
            {/* Image Wrapper */}
            <div className="relative aspect-4/3 rounded-[1.5rem] overflow-hidden bg-zinc-100">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-w-7xl) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* Bottom Card Content Info */}
            <div className="flex items-center justify-between px-2 pb-2">
              <div className="flex flex-col">
                <h3 className="text-lg lg:text-xl font-bold text-zinc-950 tracking-tight font-sans">
                  {project.title}
                </h3>
                <span className="text-xs sm:text-sm text-zinc-400 font-medium mt-1">
                  {project.location}
                </span>
              </div>
              
              {/* Circular diagonal hover-action arrow button */}
              <div className="size-11 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-700 bg-white group-hover:bg-zinc-950 group-hover:text-white group-hover:border-zinc-950 transition-all duration-350 shadow-2xs">
                <svg
                  viewBox="0 0 24 24"
                  className="size-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Swipe Indicators (dots) */}
      <div className="flex lg:hidden items-center justify-center gap-2 mt-4">
        <span className="size-2 rounded-full bg-blue-600"></span>
        <span className="size-1.5 rounded-full bg-zinc-300"></span>
        <span className="size-1.5 rounded-full bg-zinc-300"></span>
        <span className="size-1.5 rounded-full bg-zinc-300"></span>
      </div>
    </section>
  );
}
