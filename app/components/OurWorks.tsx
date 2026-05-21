// "use client";

// import React, { useCallback, useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import type { UseEmblaCarouselType } from "embla-carousel-react";

// type EmblaApiType = NonNullable<UseEmblaCarouselType[1]>;

// interface Project {
//   id: number;
//   title: string;
//   location: string;
//   image: string;
// }

// const projects: Project[] = [
//   {
//     id: 1,
//     title: "Oceanview Residence",
//     location: "Malibu, California",
//     image: "/oceanview-residence.png",
//   },
//   {
//     id: 2,
//     title: "Skyline House",
//     location: "Beverly Hills, California",
//     image: "/skyline-house.png",
//   },
//   {
//     id: 3,
//     title: "Hillside Retreat",
//     location: "Austin, Texas",
//     image: "/hillside-retreat.png",
//   },
//   {
//     id: 4,
//     title: "Hillside Retreat",
//     location: "Austin, Texas",
//     image: "/hillside-retreat.png",
//   },
//   {
//     id: 5,
//     title: "Hillside Retreat",
//     location: "Austin, Texas",
//     image: "/hillside-retreat.png",
//   },
//   {
//     id: 6,
//     title: "Hillside Retreat",
//     location: "Austin, Texas",
//     image: "/hillside-retreat.png",
//   },
// ];

// function useDotButton(emblaApi: EmblaApiType | undefined) {
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

//   const onDotButtonClick = useCallback(
//     (index: number) => emblaApi?.scrollTo(index),
//     [emblaApi]
//   );

//   useEffect(() => {
//     if (!emblaApi) return;
//     setScrollSnaps(emblaApi.scrollSnapList());
//     setSelectedIndex(emblaApi.selectedScrollSnap());
//     emblaApi
//       .on("reInit", () => setScrollSnaps(emblaApi.scrollSnapList()))
//       .on("select", () => setSelectedIndex(emblaApi.selectedScrollSnap()));
//   }, [emblaApi]);

//   return { selectedIndex, scrollSnaps, onDotButtonClick };
// }

// export default function OurWorks() {
//   // ── Two separate instances — one per breakpoint ──────────────────────────
//   const [desktopRef, desktopApi] = useEmblaCarousel(
//     { loop: true, align: "start", slidesToScroll: 1 },
//     [Autoplay({ delay: 3500, stopOnInteraction: false })]
//   );

//   const [mobileRef, mobileApi] = useEmblaCarousel(
//     { loop: true, align: "start", slidesToScroll: 1 },
//     [Autoplay({ delay: 3500, stopOnInteraction: false })]
//   );

//   const desktop = useDotButton(desktopApi);
//   const mobile = useDotButton(mobileApi);

//   return (
//     <section
//       id="projects"
//       className="w-full mx-auto px-5 lg:px-28 pt-20 pb-0"
//     >
//       {/* ── Mobile header ── */}
//       <div className="flex flex-col justify-between mb-8 lg:hidden">
//         <div className="flex items-center gap-4 mb-6 animate-fade-in-up-1">
//           <span className="block w-12 h-0.5 bg-primary/40 rounded-full" />
//           <p className="text-primary text-[10px] md:text-xs font-semibold tracking-[0.22em] uppercase">
//             OUR WORKS
//           </p>
//         </div>
//         <div className="flex items-center justify-between w-full">
//           <h2 className="text-lg md:text-2xl font-semibold text-zinc-950 font-sans tracking-tight">
//             Featured Projects
//           </h2>
//           <Link
//             href="/projects"
//             className="group flex items-center gap-2 text-[10px] font-semibold text-primary hover:text-primary/80 transition-colors shrink-0"
//           >
//             <span>View all projects</span>
//             <ArrowRight className="size-4" />
//           </Link>
//         </div>
//       </div>

//       {/* ── Desktop: sidebar + carousel ── */}
//       <div className="hidden lg:flex gap-8 items-stretch ">
//         {/* Sidebar */}
//         <div className="flex flex-col justify-between shrink-0 w-44 xl:w-52 py-4">
//           <div>
//             <div className="flex items-center gap-3 mb-6 animate-fade-in-up-1">
//               <span className="block w-8 h-0.5 bg-primary/40 rounded-full" />
//               <p className="text-primary text-xs font-semibold tracking-[0.22em] uppercase">
//                 OUR WORK
//               </p>
//             </div>
//             <h2 className="text-2xl xl:text-3xl font-semibold text-zinc-950 font-sans tracking-tight leading-tight">
//               Featured Projects
//             </h2>
//           </div>
//           <div className="flex flex-col gap-4">
//             <Link
//               href="/projects"
//               className="group flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
//             >
//               <span>View all projects</span>
//               <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
//             </Link>
//             <div className="flex items-center gap-1.5">
//               {desktop.scrollSnaps.map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => desktop.onDotButtonClick(i)}
//                   aria-label={`Go to project ${i + 1}`}
//                   className={`h-1.5 rounded-full transition-all duration-300 ease-out ${i === desktop.selectedIndex
//                     ? "w-5 bg-primary"
//                     : "w-1.5 bg-zinc-300 hover:bg-zinc-400"
//                     }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Desktop carousel */}
//         <div className="flex-1 min-w-0 overflow-hidden relative before:content-[''] before:absolute before:h-full before:w-5 before:bg-linear-to-r before:from-white/90 before:via-white/20 before:to-transparent before:z-10 after:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-5 after:bg-linear-to-l after:from-white/90 after:via-white/20 after:to-transparent after:z-10" ref={desktopRef}>

//           <div className="flex -ml-4 xl:-ml-6 h-full py-2">
//             {projects.map((project) => (
//               <div
//                 key={project.id}
//                 className="flex-none w-1/4 pl-4 xl:pl-6"
//               >
//                 <div className="w-full bg-zinc-50/40 hover:bg-zinc-50/70 border border-zinc-150 rounded-lg lg:rounded-2xl flex flex-col gap-4 transition-[transform,background-color,box-shadow] duration-300 group cursor-pointer">
//                   <div className="relative aspect-4/3 overflow-hidden bg-zinc-100 rounded-t-lg">
//                     <Image
//                       src={project.image}
//                       alt={project.title}
//                       fill
//                       sizes="33vw"
//                       className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//                     />
//                   </div>
//                   <div className="flex items-start justify-between px-2 pb-2">
//                     <div className="flex flex-col">
//                       <h3 className="text-sm xl:text-base  font-medium text-zinc-950 tracking-tight font-sans">
//                         {project.title}
//                       </h3>
//                       <span className="text-[10px] text-zinc-400 font-medium mt-1">
//                         {project.location}
//                       </span>
//                     </div>
//                     <ArrowRight className="size-4 text-black/80 self-end mr-2 group-hover:translate-x-1 transition-transform" />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ── Mobile: Embla carousel ── */}
//       <div className="lg:hidden">
//         <div className="overflow-hidden -mx-5" ref={mobileRef}>
//           <div className="flex -ml-4 px-5">
//             {projects.map((project) => (
//               <div
//                 key={project.id}
//                 className="flex-none w-[50vw] pl-4"
//               >
//                 <div className="w-full overflow-hidden bg-zinc-50/40 border border-zinc-150 rounded-lg flex flex-col gap-2 group shadow-xs cursor-pointer">
//                   <div className="relative aspect-4/3 overflow-hidden bg-zinc-100">
//                     <Image
//                       src={project.image}
//                       alt={project.title}
//                       fill
//                       sizes="42vw"
//                       className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//                     />
//                   </div>
//                   <div className="flex items-start justify-between px-2 pb-2">
//                     <div className="flex flex-col">
//                       <h3 className="text-[10px] font-medium text-zinc-950 tracking-tight font-sans">
//                         {project.title}
//                       </h3>
//                       <span className="text-[10px] text-zinc-400 font-medium mt-1">
//                         {project.location}
//                       </span>
//                     </div>
//                     <ArrowRight className="size-4 text-black/80 self-end mr-2" />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex justify-center items-center gap-1.5 mt-4">
//           {mobile.scrollSnaps.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => mobile.onDotButtonClick(i)}
//               aria-label={`Go to project ${i + 1}`}
//               className={`h-1.5 rounded-full transition-all duration-300 ease-out ${i === mobile.selectedIndex
//                 ? "w-5 bg-primary"
//                 : "w-1.5 bg-zinc-300 hover:bg-zinc-400"
//                 }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

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

// ── Shared dot-button logic ──────────────────────────────────────────────────
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

// ── Detect viewport breakpoint (client-only) ─────────────────────────────────
function useIsMobile() {
  // Start as `null` (unknown) so we don't flash the wrong layout on hydration
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isMobile;
}

// ── Single carousel instance that re-mounts when breakpoint flips ────────────
// We use a `key` on the parent to force a full remount — this is cleaner than
// calling api.reInit() because the DOM structure (padding, overflow container)
// also changes between mobile and desktop layouts.
function Carousel({ isMobile }: { isMobile: boolean }) {
  const [ref, api] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  );
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api);

  if (isMobile) {
    return (
      <>
        <div className="overflow-hidden -mx-5" ref={ref}>
          <div className="flex -ml-4 px-5">
            {projects.map((project) => (
              <div key={project.id} className="flex-none w-[50vw] pl-4">
                <ProjectCard project={project} isMobile />
              </div>
            ))}
          </div>
        </div>
        <DotButtons
          scrollSnaps={scrollSnaps}
          selectedIndex={selectedIndex}
          onDotButtonClick={onDotButtonClick}
          className="flex justify-center items-center gap-1.5 mt-4"
        />
      </>
    );
  }

  return (
    <div className="flex gap-8 items-stretch">
      {/* Sidebar */}
      <div className="flex flex-col justify-between shrink-0 w-44 xl:w-52 py-4">
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
          <DotButtons
            scrollSnaps={scrollSnaps}
            selectedIndex={selectedIndex}
            onDotButtonClick={onDotButtonClick}
            className="flex items-center gap-1.5"
          />
        </div>
      </div>

      {/* Carousel viewport */}
      <div
        className="flex-1 min-w-0 overflow-hidden relative
          before:content-[''] before:absolute before:h-full before:w-5
          before:bg-linear-to-r before:from-white/90 before:via-white/20 before:to-transparent before:z-10
          after:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-5
          after:bg-linear-to-l after:from-white/90 after:via-white/20 after:to-transparent after:z-10"
        ref={ref}
      >
        <div className="flex -ml-4 xl:-ml-6 h-full py-2">
          {projects.map((project) => (
            <div key={project.id} className="flex-none w-1/4 pl-4 xl:pl-6">
              <ProjectCard project={project} isMobile={false} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Reusable dot indicators ──────────────────────────────────────────────────
function DotButtons({
  scrollSnaps,
  selectedIndex,
  onDotButtonClick,
  className,
}: {
  scrollSnaps: number[];
  selectedIndex: number;
  onDotButtonClick: (i: number) => void;
  className?: string;
}) {
  return (
    <div className={className}>
      {scrollSnaps.map((_, i) => (
        <button
          key={i}
          onClick={() => onDotButtonClick(i)}
          aria-label={`Go to project ${i + 1}`}
          className={`h-1.5 rounded-full transition-all duration-300 ease-out ${i === selectedIndex
              ? "w-5 bg-primary"
              : "w-1.5 bg-zinc-300 hover:bg-zinc-400"
            }`}
        />
      ))}
    </div>
  );
}

// ── Card ─────────────────────────────────────────────────────────────────────
function ProjectCard({
  project,
  isMobile,
}: {
  project: Project;
  isMobile: boolean;
}) {
  return (
    <div
      className={`w-full bg-zinc-50/40 hover:bg-zinc-50/70 border border-zinc-150 flex flex-col transition-[transform,background-color,box-shadow] duration-300 group cursor-pointer ${isMobile
          ? "gap-2 overflow-hidden rounded-lg shadow-xs"
          : "gap-4 rounded-lg lg:rounded-2xl"
        }`}
    >
      <div className="relative aspect-4/3 overflow-hidden bg-zinc-100 rounded-t-lg">
        <Image
          src={project.image}
          alt={project.title}
          fill
          // ✅ FIXED: proper sizes so the browser requests the right image width.
          // Previously both instances used either "33vw" or "42vw" regardless of
          // which was actually visible, causing over-fetching on every breakpoint.
          sizes={isMobile ? "50vw" : "(min-width: 1024px) 25vw, 50vw"}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex items-start justify-between px-2 pb-2">
        <div className="flex flex-col">
          <h3
            className={`font-medium text-zinc-950 tracking-tight font-sans ${isMobile ? "text-[10px]" : "text-sm xl:text-base"
              }`}
          >
            {project.title}
          </h3>
          <span className="text-[10px] text-zinc-400 font-medium mt-1">
            {project.location}
          </span>
        </div>
        <ArrowRight
          className={`size-4 text-black/80 self-end mr-2 ${!isMobile && "group-hover:translate-x-1 transition-transform"
            }`}
        />
      </div>
    </div>
  );
}

// ── Main export ──────────────────────────────────────────────────────────────
export default function OurWorks() {
  const isMobile = useIsMobile();

  // isMobile is null on the server and on the first client render before the
  // useEffect fires. Return null so zero DOM is painted until the breakpoint
  // is known — this also means commenting out <OurWorks /> in page.tsx truly
  // removes all visible output with no leftover section padding or headers.
  if (isMobile === null) return null;

  return (
    <section id="projects" className="w-full mx-auto px-5 lg:px-28 pt-20 pb-0">

      {/* Mobile section header */}
      {isMobile && (
        <div className="flex flex-col justify-between mb-8">
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
      )}

      {/* Single carousel instance — key forces full remount on breakpoint change */}
      <Carousel key={isMobile ? "mobile" : "desktop"} isMobile={isMobile} />
    </section>
  );
}