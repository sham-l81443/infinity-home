"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Plan",
    description:
      "Strategic site analysis and space programming to establish the blueprint for your vision — from zoning to flow.",
  },
  {
    number: "02",
    title: "Architectural Design",
    description:
      "Full-spectrum design from concept sketches to construction-ready drawings, blending form with function.",
  },
  {
    number: "03",
    title: "Estimation",
    description:
      "Transparent, itemized cost projections so every rupee is accounted for before ground is broken.",
  },
  {
    number: "04",
    title: "Supervision",
    description:
      "On-site quality assurance at every milestone — we stay until the last tile is set.",
  },
  {
    number: "05",
    title: "3D Visualizing",
    tag: "Exterior & Interior",
    description:
      "Photorealistic renders that let you walk through your space before a single brick is laid.",
  },
  {
    number: "06",
    title: "Construction",
    description:
      "End-to-end build execution with trusted contractors, premium materials, and zero compromise.",
  },
];

const bgClasses = [
  "bg-primary/0",
  "bg-primary/5",
  "bg-primary/10",
  "bg-primary/15",
  "bg-primary/20",
  "bg-primary/25",
];

export default function OurServices() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
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
      id="services"
      className="relative w-full py-20 lg:py-40 overflow-hidden"
    >
      {/* Faint vertical rule — architectural centerline */}
      <div className="absolute left-5 lg:left-28 top-1/4 bottom-0 w-px bg-zinc-200/60" />

      <div className="relative z-10 w-full px-5 lg:px-28">
        {/* ── Section header ── */}
        <div
          className={`mb-16 lg:mb-24 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
            }`}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-8 lg:w-12 h-0.5 bg-primary/40 rounded-full" />
            <p className="text-primary text-[10px] md:text-xs font-semibold tracking-[0.22em] uppercase">
              OUR SERVICES
            </p>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-zinc-950 font-sans tracking-tight leading-tight">
            What we do{" "}
            <span className="text-zinc-400 font-light italic font-serif">
              best.
            </span>
          </h2>
        </div>

        {/* ── Service rows ── */}
        <div className="flex flex-col">
          {services.map((service, i) => {


            return (
              <div
                key={service.number}
                className={`group relative ${bgClasses[i]} transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
                  }`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                {/* Top border line */}
                <div className="absolute inset-x-0 top-0 h-px bg-zinc-200 group-first:bg-zinc-300" />

                <div className="flex items-start lg:items-center gap-4 lg:gap-0 py-7 lg:py-10 cursor-pointer group-hover:bg-zinc-50/50 transition-colors duration-300 -mx-5 lg:-mx-8 px-5 lg:px-8 rounded-lg">
                  {/* Number */}
                  <span className="text-[10px] lg:text-xs font-mono text-zinc-300 group-hover:text-zinc-500 transition-colors duration-300 w-8 lg:w-16 shrink-0 pt-1 lg:pt-0">
                    {service.number}
                  </span>

                  {/* Title + tag — takes remaining space */}
                  <div className="flex-1 min-w-0 flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-4">
                    <h3 className="text-lg lg:text-2xl xl:text-3xl font-medium text-zinc-900 group-hover:text-zinc-950 tracking-tight transition-colors duration-300 font-sans">
                      {service.title}
                    </h3>
                    {service.tag && (
                      <span className="text-[10px] lg:text-xs font-medium text-zinc-500 border border-zinc-200 rounded-full px-3 py-0.5 w-fit">
                        {service.tag}
                      </span>
                    )}
                  </div>

                  {/* Description — hidden mobile, shown desktop */}
                  <p className="hidden lg:block text-sm text-zinc-500 group-hover:text-zinc-500 max-w-xs xl:max-w-sm leading-relaxed transition-colors duration-300 shrink-0">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <div className="flex items-center justify-center size-8 lg:size-10 rounded-full border border-zinc-200 group-hover:border-zinc-400 group-hover:bg-zinc-900 text-zinc-300 group-hover:text-white transition-all duration-300 shrink-0 ml-auto lg:ml-8">
                    <ArrowUpRight className="size-3.5 lg:size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </div>

                {/* Mobile description — below the row */}
                <p className="lg:hidden text-xs text-zinc-500 leading-relaxed pb-6 pl-12">
                  {service.description}
                </p>

                {/* Bottom border on last item */}
                {i === services.length - 1 && (
                  <div className="absolute inset-x-0 bottom-0 h-px bg-zinc-200" />
                )}
              </div>
            );
          })}
        </div>

        {/* ── Know more toggle ── */}
        <div className="mt-10 lg:mt-16 flex flex-col items-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`group flex items-center gap-2 text-sm lg:text-base font-medium transition-all duration-300 ${isExpanded ? 'text-primary' : 'text-zinc-600 hover:text-primary'}`}
          >
            <span>{isExpanded ? 'Show less' : 'Know more about our expertise'}</span>
            {isExpanded ? (
              <ChevronUp className="size-4 lg:size-5 transition-transform duration-300" />
            ) : (
              <ChevronDown className="size-4 lg:size-5 group-hover:translate-y-0.5 transition-transform duration-300" />
            )}
          </button>

          {/* ── Expandable expertise container ── */}
          <div
            ref={contentRef}
            className="w-full grid transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              gridTemplateRows: isExpanded ? '1fr' : '0fr',
              opacity: isExpanded ? 1 : 0,
            }}
          >
            <div className="overflow-hidden">
            <div className="pt-10 lg:pt-16">
              {/* Expertise grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {[
                  {
                    title: 'Residential Design',
                    desc: 'From compact homes to luxury villas — we craft spaces that reflect your lifestyle with optimal use of every square foot.',
                  },
                  {
                    title: 'Commercial Spaces',
                    desc: 'Offices, retail outlets, and mixed-use complexes designed for productivity, brand identity, and seamless customer flow.',
                  },
                  {
                    title: 'Renovation & Remodeling',
                    desc: 'Breathing new life into existing structures with modern design sensibilities while preserving structural integrity.',
                  },
                  {
                    title: 'Landscape Architecture',
                    desc: 'Outdoor spaces that extend your living area — gardens, courtyards, and terraces that blend with the built environment.',
                  },
                  {
                    title: 'Sustainable Design',
                    desc: 'Energy-efficient solutions, rainwater harvesting, solar integration, and eco-friendly materials for responsible building.',
                  },
                  {
                    title: 'Interior Styling',
                    desc: 'Complete interior design from material selection to furniture layout — creating cohesive, livable spaces.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="group/card relative p-6 lg:p-8 rounded-2xl border border-zinc-100 hover:border-primary/20 bg-white hover:bg-primary/[0.02] transition-all duration-300"
                  >
                    <h4 className="text-base lg:text-lg font-semibold text-zinc-900 mb-2 tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs lg:text-sm text-zinc-500 leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="absolute top-6 right-6 lg:top-8 lg:right-8 size-6 rounded-full border border-zinc-100 group-hover/card:border-primary/30 flex items-center justify-center transition-all duration-300">
                      <ArrowUpRight className="size-3 text-zinc-300 group-hover/card:text-primary transition-colors duration-300" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom show less */}
              {/* <div className="flex justify-center mt-8 lg:mt-12">
                <button
                  onClick={() => setIsExpanded(false)}
                  className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-300"
                >
                  <span>Show less</span>
                  <ChevronUp className="size-4" />
                </button>
              </div> */}
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
