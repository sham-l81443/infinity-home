"use client";

import React, { useEffect, useRef, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { HouseHeartIcon, UserGroup03Icon, Time01Icon } from '@hugeicons/core-free-icons';

const RollingNumber = ({ value, startValue, delay = 0 }: { value: string; startValue?: string; delay?: number }) => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsInView(true);
          }, delay);
          // Keep the target value once visible, so unobserve
          observer.unobserve(entry.target);
        }
      },
      { threshold: 1 }
    );

    const currentEl = containerRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
      observer.disconnect();
    };
  }, [delay]);

  const targetChars = value.split("");
  const startChars = startValue ? startValue.split("") : targetChars.map(c => (/\d/.test(c) ? "0" : c));

  return (
    <span ref={containerRef} className="inline-flex overflow-hidden items-center select-none leading-none">
      {targetChars.map((char, index) => {
        const isDigit = /\d/.test(char);
        if (!isDigit) {
          return (
            <span key={index} className="inline-block leading-none">
              {char}
            </span>
          );
        }

        const startDigit = parseInt(startChars[index], 10) || 0;
        const targetDigit = parseInt(char, 10) || 0;
        const currentDigit = isInView ? targetDigit : startDigit;

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
                transform: `translateY(-${currentDigit * 10}%)`,
              }}
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
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
};

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  startValue?: string;
  delay?: number;
  label: string;
}

const StatItem = ({ icon, value, startValue, delay, label }: StatItemProps) => {
  return (
    <>
      {/* Mobile/Small screen version - KEEP EXACTLY AS CURRENT */}
      <div className="flex lg:hidden items-center flex-col justify-center gap-4 py-6 group">
        {/* Icon Container with elegant glassmorphic blue gradient */}
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

      {/* Large screen version - Icon on left, Value above Label on right */}
      <div className="hidden lg:flex items-center justify-center gap-6 p-10 group">
        {/* Icon Container with elegant glassmorphic blue gradient */}
        <div className="size-14 rounded-full bg-linear-to-tr from-blue-50/80 to-indigo-50/50 text-black/50 flex items-center justify-center border border-blue-100/50 shrink-0 shadow-2xs group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>

        {/* Text Container */}
        <div className="flex flex-col items-start text-left">
          <span className="text-4xl font-bold text-zinc-900 tracking-wide font-sans">
            <RollingNumber value={value} startValue={startValue} delay={delay} />
          </span>
          <span className="text-sm font-medium text-zinc-500 tracking-wide leading-tight mt-2">
            {label}
          </span>
        </div>
      </div>
    </>
  );
};

export default function StatusCard() {
  return (
    <div className="bg-[#f3f7fd]/40 ">
      <div className="grid grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-200/40">

        <StatItem
          value="250+"
          startValue="100+"
          delay={500}
          label="Projects Completed"
          icon={
            <HugeiconsIcon icon={HouseHeartIcon} size={28} />
          }
        />
        <StatItem
          value="100%"
          startValue="080%"
          delay={600}
          label="Happy Clients"
          icon={
            <HugeiconsIcon icon={UserGroup03Icon} />
          }
        />

        {/* 15+ Years of Experience */}
        <StatItem
          value="15+"
          startValue="05+"
          delay={600}
          label="Years of Experience"
          icon={
            <HugeiconsIcon icon={Time01Icon} />
          }
        />

      </div>
    </div>
  );
}
