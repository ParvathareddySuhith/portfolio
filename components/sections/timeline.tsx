"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/motion/fade-in";

const experiences = [
  {
    id: "01",
    period: "MAY 2025 — JUL 2025",
    company: "CHENNAI INSTITUTE OF TECHNOLOGY",
    role: "RESEARCH INTERN",
    location: "CHENNAI, INDIA",
  },
  {
    id: "02",
    period: "NOV 2024 — DEC 2024",
    company: "CHENNAI INSTITUTE OF TECHNOLOGY",
    role: "RESEARCH INTERN",
    location: "CHENNAI, INDIA",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative z-10 w-full pt-24 pb-32 px-6 sm:px-12 md:px-24 lg:px-32 select-none border-t border-white/[0.04]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Monospace label */}
        <div className="lg:col-span-4">
          <FadeIn duration={1.2}>
            <span className="font-mono text-xs tracking-widest text-[#a1a1aa] uppercase block">
              (03) / PROFESSIONAL HISTORY
            </span>
          </FadeIn>
        </div>

        {/* Right Column: Table Rows */}
        <div className="lg:col-span-8 flex flex-col">
          {experiences.map((exp, idx) => (
            <FadeIn key={exp.id} duration={1.2} delay={idx * 0.1} distance={10}>
              <motion.div
                whileHover={{
                  x: 6,
                  backgroundColor: "rgba(255, 255, 255, 0.01)",
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1], // Custom slow ease-out
                }}
                className="border-b border-white/[0.06] py-7 px-4 -mx-4 grid grid-cols-1 md:grid-cols-12 gap-4 origin-left"
              >
                {/* Period */}
                <div className="md:col-span-3 font-mono text-[10px] tracking-widest text-[#a1a1aa] self-center">
                  {exp.period}
                </div>

                {/* Company Name */}
                <div className="md:col-span-4 font-sans text-base font-semibold tracking-tight text-[#f5f5f5] self-center uppercase">
                  {exp.company}
                </div>

                {/* Role */}
                <div className="md:col-span-3 font-mono text-[10px] tracking-widest text-[#a1a1aa] uppercase self-center">
                  {exp.role}
                </div>

                {/* Location */}
                <div className="md:col-span-2 font-mono text-[10px] tracking-widest text-white/[0.3] uppercase self-center md:text-right">
                  {exp.location}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
