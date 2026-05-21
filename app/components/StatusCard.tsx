// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { HugeiconsIcon } from "@hugeicons/react";
// import { HouseHeartIcon, UserGroup03Icon, Time01Icon } from '@hugeicons/core-free-icons';

// const RollingNumber = ({ value, startValue, delay = 0 }: { value: string; startValue?: string; delay?: number }) => {
//   const [isInView, setIsInView] = useState(false);
//   const containerRef = useRef<HTMLSpanElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setTimeout(() => {
//             setIsInView(true);
//           }, delay);
//           // Keep the target value once visible, so unobserve
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 1 }
//     );

//     const currentEl = containerRef.current;
//     if (currentEl) {
//       observer.observe(currentEl);
//     }

//     return () => {
//       if (currentEl) {
//         observer.unobserve(currentEl);
//       }
//       observer.disconnect();
//     };
//   }, [delay]);

//   const targetChars = value.split("");
//   const startChars = startValue ? startValue.split("") : targetChars.map(c => (/\d/.test(c) ? "0" : c));

//   return (
//     <span ref={containerRef} className="inline-flex overflow-hidden items-center select-none leading-none">
//       {targetChars.map((char, index) => {
//         const isDigit = /\d/.test(char);
//         if (!isDigit) {
//           return (
//             <span key={index} className="inline-block leading-none">
//               {char}
//             </span>
//           );
//         }

//         const startDigit = parseInt(startChars[index], 10) || 0;
//         const targetDigit = parseInt(char, 10) || 0;
//         const currentDigit = isInView ? targetDigit : startDigit;

//         return (
//           <span
//             key={index}
//             className="relative inline-block h-[1em] overflow-hidden leading-none"
//             style={{ width: "0.6em" }}
//           >
//             <span
//               className="absolute left-0 top-0 flex flex-col"
//               style={{
//                 transition: "transform 2.2s cubic-bezier(0.16, 1, 0.3, 1)",
//                 transform: `translateY(-${currentDigit * 10}%)`,
//               }}
//             >
//               {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
//                 <span
//                   key={num}
//                   className="h-[1em] flex items-center justify-center leading-none"
//                   style={{ width: "0.6em" }}
//                 >
//                   {num}
//                 </span>
//               ))}
//             </span>
//           </span>
//         );
//       })}
//     </span>
//   );
// };

// interface StatItemProps {
//   icon: React.ReactNode;
//   value: string;
//   startValue?: string;
//   delay?: number;
//   label: string;
// }

// const StatItem = ({ icon, value, startValue, delay, label }: StatItemProps) => {
//   return (
//     <>
//       {/* Mobile/Small screen version - KEEP EXACTLY AS CURRENT */}
//       <div className="flex lg:hidden items-center flex-col justify-center gap-4 py-6 group">
//         {/* Icon Container with elegant glassmorphic blue gradient */}
//         <div className="flex items-center gap-2 flex-col">
//           <div className="size-8 rounded-full bg-linear-to-tr from-blue-50/80 to-indigo-50/50 text-black/50 flex items-center justify-center border border-blue-100/50 shrink-0 shadow-2xs group-hover:scale-110 transition-transform duration-300 p-1">
//             {icon}
//           </div>

//           <span className="text-base font-bold text-zinc-900 tracking-wide font-sans">
//             <RollingNumber value={value} startValue={startValue} delay={delay} />
//           </span>
//         </div>
//         <div className="text-[10px] font-medium text-zinc-500 tracking-wide leading-tight text-center">
//           {label}
//         </div>
//       </div>

//       {/* Large screen version - Icon on left, Value above Label on right */}
//       <div className="hidden lg:flex items-center justify-center gap-6 p-10 group">
//         {/* Icon Container with elegant glassmorphic blue gradient */}
//         <div className="size-14 rounded-full bg-linear-to-tr from-blue-50/80 to-indigo-50/50 text-black/50 flex items-center justify-center border border-blue-100/50 shrink-0 shadow-2xs group-hover:scale-110 transition-transform duration-300">
//           {icon}
//         </div>

//         {/* Text Container */}
//         <div className="flex flex-col items-start text-left">
//           <span className="text-4xl font-bold text-zinc-900 tracking-wide font-sans">
//             <RollingNumber value={value} startValue={startValue} delay={delay} />
//           </span>
//           <span className="text-sm font-medium text-zinc-500 tracking-wide leading-tight mt-2">
//             {label}
//           </span>
//         </div>
//       </div>
//     </>
//   );
// };

// export default function StatusCard() {
//   return (
//     <div className="bg-[#f3f7fd]/40 ">
//       <div className="grid grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-200/40">

//         <StatItem
//           value="250+"
//           startValue="100+"
//           delay={500}
//           label="Projects Completed"
//           icon={
//             <HugeiconsIcon icon={HouseHeartIcon} size={28} />
//           }
//         />
//         <StatItem
//           value="100%"
//           startValue="080%"
//           delay={600}
//           label="Happy Clients"
//           icon={
//             <HugeiconsIcon icon={UserGroup03Icon} />
//           }
//         />

//         {/* 15+ Years of Experience */}
//         <StatItem
//           value="15+"
//           startValue="05+"
//           delay={600}
//           label="Years of Experience"
//           icon={
//             <HugeiconsIcon icon={Time01Icon} />
//           }
//         />

//       </div>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useRef, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { HouseHeartIcon, UserGroup03Icon, Time01Icon } from "@hugeicons/core-free-icons";

// ── Breakpoint hook (same pattern as OurWorks) ───────────────────────────────
function useIsMobile() {
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

// ── Sliding column — only the digits that actually appear, not all 10 ─────────
//
// Original used 10 spans (0-9) per digit so translateY could land on any digit.
// We only need to slide from startDigit → targetDigit, so the column only needs
// (targetDigit - startDigit + 1) spans — e.g. sliding 0→5 = 6 spans, not 10.
// Non-digit characters ("+", "%") are rendered as static spans beside the column.
//
// DOM cost per stat:  OLD = digits × 10 spans   NEW = digits × avg ~5 spans
// Visual result: identical slide + same 2.2s cubic-bezier easing.

function RollingNumber({
  value,
  startValue,
  delay = 0,
}: {
  value: string;
  startValue?: string;
  delay?: number;
}) {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsInView(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 1 }
    );
    const el = containerRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
      observer.disconnect();
    };
  }, [delay]);

  const targetChars = value.split("");
  const startChars = startValue
    ? startValue.split("")
    : targetChars.map((c) => (/\d/.test(c) ? "0" : c));

  return (
    <span ref={containerRef} className="inline-flex overflow-hidden items-center select-none leading-none">
      {targetChars.map((char, index) => {
        // Non-digit chars ("+", "%", " ") — static, no column needed
        if (!/\d/.test(char)) {
          return (
            <span key={index} className="inline-block leading-none">
              {char}
            </span>
          );
        }

        const startDigit = parseInt(startChars[index] ?? "0", 10) || 0;
        const targetDigit = parseInt(char, 10) || 0;

        // Build only the range of digits we need: startDigit → targetDigit.
        // If start > target (e.g. 9→2) we still render 0→target so it reads
        // correctly — this matches the original behaviour.
        const columnDigits = Array.from(
          { length: targetDigit + 1 },
          (_, i) => i
        );

        // Which index in our slim column is currently "visible"
        const activeIndex = isInView ? targetDigit : startDigit;

        return (
          <span
            key={index}
            className="relative inline-block h-[1em] overflow-hidden leading-none"
            style={{ width: "0.6em" }}
          >
            <span
              className="absolute left-0 top-0 flex flex-col"
              style={{
                transition: "transform 2.2s cubic-bezier(0.16, 1, 0.3, 1)",
                // Each digit slot is 1em tall; slide to the active index
                transform: `translateY(-${(activeIndex / columnDigits.length) * 100}%)`,
              }}
            >
              {columnDigits.map((num) => (
                <span
                  key={num}
                  className="h-[1em] flex items-center justify-center leading-none"
                  style={{ width: "0.6em" }}
                >
                  {num}
                </span>
              ))}
            </span>
          </span>
        );
      })}
    </span>
  );
}

// ── Single StatItem — layout adapts via props, no duplicate trees ────────────
interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  startValue?: string;
  delay?: number;
  label: string;
  isMobile: boolean;
}

function StatItem({ icon, value, startValue, delay, label, isMobile }: StatItemProps) {
  if (isMobile) {
    return (
      <div className="flex items-center flex-col justify-center gap-4 py-6 group">
        <div className="flex items-center gap-2 flex-col">
          <div className="size-8 rounded-full bg-linear-to-tr from-blue-50/80 to-indigo-50/50 text-black/50 flex items-center justify-center border border-blue-100/50 shrink-0 shadow-2xs group-hover:scale-110 transition-transform duration-300 p-1">
            {icon}
          </div>
          <span className="text-base font-bold text-zinc-900 tracking-wide font-sans">
            <RollingNumber value={value} startValue={startValue} delay={delay} />
          </span>
        </div>
        <div className="text-[10px] font-medium text-zinc-500 tracking-wide leading-tight text-center">
          {label}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-6 p-10 group">
      <div className="size-14 rounded-full bg-linear-to-tr from-blue-50/80 to-indigo-50/50 text-black/50 flex items-center justify-center border border-blue-100/50 shrink-0 shadow-2xs group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="flex flex-col items-start text-left">
        <span className="text-4xl font-bold text-zinc-900 tracking-wide font-sans">
          <RollingNumber value={value} startValue={startValue} delay={delay} />
        </span>
        <span className="text-sm font-medium text-zinc-500 tracking-wide leading-tight mt-2">
          {label}
        </span>
      </div>
    </div>
  );
}

// ── Stats data ───────────────────────────────────────────────────────────────
const stats = [
  {
    value: "250+",
    startValue: "100+",
    delay: 500,
    label: "Projects Completed",
    icon: <HugeiconsIcon icon={HouseHeartIcon} size={28} />,
  },
  {
    value: "100%",
    startValue: "080%",
    delay: 600,
    label: "Happy Clients",
    icon: <HugeiconsIcon icon={UserGroup03Icon} />,
  },
  {
    value: "15+",
    startValue: "05+",
    delay: 600,
    label: "Years of Experience",
    icon: <HugeiconsIcon icon={Time01Icon} />,
  },
];

// ── Main export ──────────────────────────────────────────────────────────────
export default function StatusCard() {
  const isMobile = useIsMobile();

  // Render nothing until breakpoint is known — no hidden duplicate trees
  if (isMobile === null) return null;

  return (
    <div className="bg-[#f3f7fd]/40">
      <div className="grid grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-200/40">
        {stats.map((stat) => (
          <StatItem
            key={stat.label}
            {...stat}
            isMobile={isMobile}
          />
        ))}
      </div>
    </div>
  );
}