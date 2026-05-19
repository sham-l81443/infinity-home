"use client";

import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { HouseHeartIcon, UserGroup03Icon, Time01Icon } from '@hugeicons/core-free-icons'
interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatItem = ({ icon, value, label }: StatItemProps) => {
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
            {value}
          </span>
        </div>
        <div className="text-xs font-medium text-zinc-500 tracking-wide leading-tight text-center">
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
            {value}
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
          label="Projects Completed"
          icon={
            <HugeiconsIcon icon={HouseHeartIcon} size={28} />
          }
        />
        <StatItem
          value="120+"
          label="Happy Clients"
          icon={
            <HugeiconsIcon icon={UserGroup03Icon} />
          }
        />

        {/* 15+ Years of Experience */}
        <StatItem
          value="15+"
          label="Years of Experience"
          icon={
            <HugeiconsIcon icon={Time01Icon} />
          }
        />

      </div>
    </div>
  );
}
