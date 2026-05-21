import { ChevronUp, Quote } from "lucide-react";
import Image from "next/image";

interface AboutExpandedProps {
  onCollapse: () => void;
}

export default function AboutExpanded({ onCollapse }: AboutExpandedProps) {
  return (
    <div className="pt-12 lg:pt-16 max-w-5xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* ── Section 1: Quote ── */}
        <div className="flex-1 order-2 lg:order-1">
          <div className="relative">
            <Quote className="size-8 lg:size-10 text-primary/15 mb-4 rotate-180" />
            <blockquote className="text-base lg:text-lg xl:text-xl text-zinc-700 leading-relaxed font-light italic font-serif">
              &ldquo;For the past X years, we have successfully helped our clients build their dream projects. No matter the scale or complexity of the vision, our dedicated team brings the expertise, reliability, and passion needed to turn your blueprints into reality. Let’s collaborate to create something incredible together..&rdquo;
            </blockquote>
            <div className="mt-6 flex flex-col">
              <span className="text-sm lg:text-base font-semibold text-zinc-900 tracking-tight">
                Muhammed Shafi
              </span>
              <span className="text-xs lg:text-sm text-zinc-400 mt-0.5">
                Founder & Lead Architect
              </span>
            </div>
          </div>
        </div>

        {/* ── Section 2: Person image ── */}
        <div className="relative w-64 h-72 sm:w-72 sm:h-80 lg:w-80 lg:h-104 xl:w-88 xl:h-120 shrink-0 order-1 lg:order-2">
          <Image
            src="/founder-no-bg.png"
            alt="Founder portrait"
            fill
            className="object-contain object-bottom"
            sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 352px"
          />
        </div>
      </div>

      {/* Collapse button */}
      {/* <div className="flex justify-center mt-10 lg:mt-14">
        <button
          onClick={onCollapse}
          className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-300"
        >
          <span>Show less</span>
          <ChevronUp className="size-4" />
        </button>
      </div> */}
    </div>
  );
}
