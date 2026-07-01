"use client";

import TextReveal from "@/components/motion/text-reveal";
import FadeIn from "@/components/motion/fade-in";
import Magnetic from "@/components/motion/magnetic";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative z-10 w-full min-h-[85vh] flex flex-col justify-between pt-32 pb-24 sm:pt-40 sm:pb-28 px-6 sm:px-12 md:px-24 lg:px-32 select-none">
      {/* Title block with editorial layout spacing */}
      <div className="flex flex-col gap-4">
        <FadeIn delay={0.15} duration={1.2}>
          <span className="font-mono text-xs tracking-widest text-[#a1a1aa] uppercase block">
            SUHITH REDDY PARVATHAREDDY / PORTFOLIO
          </span>
        </FadeIn>
        <h1 className="flex flex-col text-4xl sm:text-6xl md:text-7xl lg:text-[7.5rem] xl:text-[9rem] font-semibold tracking-tighter uppercase leading-[0.9] text-[#f5f5f5]">
          <TextReveal text="ENGINEERING" delay={0.25} duration={1.4} />
          <TextReveal text="INTELLIGENT" delay={0.45} duration={1.4} />
          <TextReveal text="SYSTEMS" delay={0.65} duration={1.4} />
        </h1>
      </div>

      {/* Fine-line divided content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-16 pt-20 lg:pt-24 border-t border-white/[0.04]">
        {/* Column 1: Descriptive Sub-Paragraph */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <FadeIn delay={0.8} duration={1.2}>
            <p className="text-sm leading-relaxed text-[#a1a1aa] font-sans font-light max-w-sm">
              Computer Science and Engineering student with experience in AI, computer vision, and full-stack development; published IEEE research and built real-world intelligent systems using modern technologies.
            </p>
          </FadeIn>
        </div>

        {/* Column 2: Specific disciplines */}
        <div className="lg:col-span-3 flex flex-col gap-2 font-mono text-[10px] tracking-widest text-[#a1a1aa] uppercase">
          <FadeIn delay={0.9} duration={1.2}>
            <span className="text-white/[0.2] block mb-1">DISCIPLINES</span>
            <span className="block text-[#f5f5f5]">INTELLIGENT SYSTEMS</span>
            <span className="block text-[#f5f5f5]">FRONTEND ENGINEERING</span>
            <span className="block text-[#f5f5f5]">COMPUTER SCIENCE</span>
          </FadeIn>
        </div>

        {/* Column 3: Custom Magnetic CTA Buttons */}
        <div className="lg:col-span-4 flex items-end lg:justify-end gap-4 flex-wrap">
          <FadeIn delay={1.0} duration={1.2}>
            <Magnetic range={40} strength={0.35}>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-transparent hover:border-white/20 hover:bg-white/[0.02] py-3 px-6 text-[10px] font-mono tracking-widest uppercase transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              >
                EXPLORE WORK
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
          </FadeIn>
          
          <FadeIn delay={1.1} duration={1.2}>
            <Magnetic range={40} strength={0.35}>
              <a
                href="/resume_for_intern.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-transparent hover:border-white/20 hover:bg-white/[0.02] py-3 px-6 text-[10px] font-mono tracking-widest uppercase transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              >
                VIEW RESUME
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
