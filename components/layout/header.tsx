"use client";

import Magnetic from "@/components/motion/magnetic";
import FadeIn from "@/components/motion/fade-in";

export default function Header() {
  return (
    <FadeIn direction="none" delay={0.2} duration={1.2}>
      <header className="relative z-10 w-full flex items-center justify-between py-8 px-6 sm:px-12 md:px-24 lg:px-32 text-xs tracking-widest font-mono uppercase text-[#a1a1aa] border-b border-white/[0.04] bg-[#050505]/40 backdrop-blur-md">
        {/* Left: Name / Brand */}
        <div className="flex items-center gap-3">
          <span className="font-semibold text-[#f5f5f5] tracking-widest">SUHITH REDDY</span>
          <span className="hidden sm:inline text-white/[0.2]">—</span>
          <span className="hidden sm:inline">CREATIVE DEVELOPER</span>
        </div>

        {/* Middle: Live availability indicator */}
        <div className="hidden md:flex items-center gap-2 text-white/[0.6]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] tracking-widest">AVAILABLE FOR CONTRACTS — 2026</span>
        </div>

        {/* Right: Interactive magnetic mail CTA */}
        <div className="flex items-center gap-6">
          <Magnetic range={40} strength={0.4}>
            <a
              href="mailto:parvathareddysuhithreddy.cse2023@citchennai.net"
              className="text-[#f5f5f5] hover:text-[#a1a1aa] transition-colors duration-300 font-mono tracking-widest relative py-1 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#f5f5f5] hover:after:w-full after:transition-all after:duration-300"
            >
              GET IN TOUCH
            </a>
          </Magnetic>
        </div>
      </header>
    </FadeIn>
  );
}
