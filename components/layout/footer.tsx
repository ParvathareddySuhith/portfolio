"use client";

import { useEffect, useState } from "react";
import FadeIn from "@/components/motion/fade-in";
import Magnetic from "@/components/motion/magnetic";

export default function Footer() {
  const [time, setTime] = useState<string>("--:--:-- --");

  useEffect(() => {
    const formatTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      return new Intl.DateTimeFormat("en-US", options).format(new Date());
    };

    setTime(formatTime());

    const interval = setInterval(() => {
      setTime(formatTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer
      id="contact"
      className="relative z-10 w-full pt-32 pb-16 px-6 sm:px-12 md:px-24 lg:px-32 select-none border-t border-white/[0.04] bg-[#050505]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Monospace label */}
        <div className="lg:col-span-4">
          <FadeIn duration={1.2}>
            <span className="font-mono text-xs tracking-widest text-[#a1a1aa] uppercase block">
              (05) / INQUIRIES & CONNECT
            </span>
          </FadeIn>
        </div>

        {/* Right Column: Massive CTA & Info Row */}
        <div className="lg:col-span-8 flex flex-col justify-between h-full">
          {/* Typographic CTA */}
          <div className="flex flex-col">
            <FadeIn duration={1.4} delay={0.15}>
              <a
                href="mailto:parvathareddysuhithreddy.cse2023@citchennai.net"
                className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tighter uppercase leading-[0.9] text-[#f5f5f5] hover:text-[#a1a1aa] transition-colors duration-500 block max-w-2xl"
              >
                LET'S BUILD SOMETHING EXTRAORDINARY
              </a>
            </FadeIn>
          </div>

          {/* Metadata Info Row */}
          <div className="mt-20 pt-12 border-t border-white/[0.04] grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Live Clock Location */}
            <div className="md:col-span-6 flex flex-col gap-1 font-mono text-[10px] tracking-widest text-[#a1a1aa] uppercase">
              <FadeIn duration={1.2} delay={0.3} distance={10}>
                <span className="text-white/[0.2] block mb-1">LOCAL TIME</span>
                <span className="text-[#f5f5f5] block">
                  BENGALURU, IN / <span className="tabular-nums">{time}</span>
                </span>
              </FadeIn>
            </div>

            {/* Social Handles */}
            <div className="md:col-span-6 flex flex-wrap gap-x-8 gap-y-4 font-mono text-[10px] tracking-widest uppercase md:justify-end items-center">
              <FadeIn duration={1.2} delay={0.4} distance={10}>
                <Magnetic range={30} strength={0.4}>
                  <a
                    href="https://github.com/ParvathareddySuhith"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f5f5f5] hover:text-[#a1a1aa] transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#f5f5f5] hover:after:w-full after:transition-all after:duration-300"
                  >
                    GITHUB
                  </a>
                </Magnetic>
              </FadeIn>
              <FadeIn duration={1.2} delay={0.45} distance={10}>
                <Magnetic range={30} strength={0.4}>
                  <a
                    href="https://linkedin.com/in/suhith-reddy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f5f5f5] hover:text-[#a1a1aa] transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#f5f5f5] hover:after:w-full after:transition-all after:duration-300"
                  >
                    LINKEDIN
                  </a>
                </Magnetic>
              </FadeIn>
              <FadeIn duration={1.2} delay={0.5} distance={10}>
                <Magnetic range={30} strength={0.4}>
                  <a
                    href="https://leetcode.com/u/Suhith_Reddy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f5f5f5] hover:text-[#a1a1aa] transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#f5f5f5] hover:after:w-full after:transition-all after:duration-300"
                  >
                    LEETCODE
                  </a>
                </Magnetic>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Baseline */}
      <div className="mt-24 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between text-[10px] tracking-widest text-white/[0.3] font-mono gap-4">
        <span>© 2026 SUHITH REDDY PARVATHAREDDY. ALL RIGHTS RESERVED.</span>
        <span>DEVELOPED BY SUHITH</span>
      </div>
    </footer>
  );
}
