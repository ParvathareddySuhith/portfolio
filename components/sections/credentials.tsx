"use client";

import FadeIn from "@/components/motion/fade-in";

const certifications = [
  {
    title: "GITHUB FOUNDATIONS",
    issuer: "GITHUB",
  },
  {
    title: "AI AGENTS COURSE",
    issuer: "HUGGING FACE",
  },
  {
    title: "DATA SCIENCE WITH PYTHON",
    issuer: "IBM",
  },
  {
    title: "PYTHON ESSENTIALS 1 & 2",
    issuer: "CISCO NETWORKING ACADEMY",
  },
  {
    title: "MONGODB UNIVERSITY LEARNING PATH",
    issuer: "MONGODB UNIVERSITY",
  },
  {
    title: "DOCKER FOUNDATIONS",
    issuer: "DOCKER",
  },
];

export default function Credentials() {
  return (
    <section
      id="credentials"
      className="relative z-10 w-full pt-24 pb-32 px-6 sm:px-12 md:px-24 lg:px-32 select-none border-t border-white/[0.04] bg-[#050505]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Monospace label */}
        <div className="lg:col-span-4">
          <FadeIn duration={1.2}>
            <span className="font-mono text-xs tracking-widest text-[#a1a1aa] uppercase block">
              (04) / ACADEMIC CHRONOLOGY
            </span>
          </FadeIn>
        </div>

        {/* Right Column: Content blocks */}
        <div className="lg:col-span-8 flex flex-col">
          {/* Education Block */}
          <div className="flex flex-col gap-4">
            <FadeIn duration={1.2} delay={0.1}>
              <span className="font-mono text-[10px] tracking-widest text-[#a1a1aa] uppercase block mb-1">
                EDUCATION
              </span>
            </FadeIn>
            <FadeIn duration={1.2} delay={0.15}>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#f5f5f5] uppercase">
                CHENNAI INSTITUTE OF TECHNOLOGY
              </h3>
            </FadeIn>
            <FadeIn duration={1.2} delay={0.2}>
              <p className="text-sm font-sans font-light leading-relaxed text-[#a1a1aa] max-w-2xl">
                Bachelor of Engineering in Computer Science and Engineering <br />
                <span className="text-white/[0.4] text-xs font-mono tracking-wider">
                  EXPECTED MAY 2027 / CGPA: 8.01/10
                </span>
              </p>
            </FadeIn>
            <FadeIn duration={1.2} delay={0.25}>
              <div className="flex flex-col gap-1.5 mt-2">
                <span className="font-mono text-[9px] tracking-widest text-white/[0.2] uppercase block">
                  RELEVANT COURSEWORK
                </span>
                <p className="font-mono text-[10px] tracking-widest text-white/[0.6] uppercase max-w-2xl">
                  Operating Systems, DBMS, Computer Networks, Data Structures and Algorithms
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Publications Block */}
          <div className="mt-16 pt-12 border-t border-white/[0.04] flex flex-col gap-4">
            <FadeIn duration={1.2} delay={0.1}>
              <span className="font-mono text-[10px] tracking-widest text-[#a1a1aa] uppercase block mb-1">
                PUBLICATIONS
              </span>
            </FadeIn>
            <FadeIn duration={1.2} delay={0.15}>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#f5f5f5] uppercase leading-tight max-w-2xl">
                REAL TIME STAMPEDE PREVENTION USING CROWD DENSITY ESTIMATION AND ALERT SYSTEM
              </h3>
            </FadeIn>
            <FadeIn duration={1.2} delay={0.2}>
              <p className="text-sm font-sans font-light leading-relaxed text-[#a1a1aa] max-w-2xl">
                Published at IEEE RCSM 2025. This research engineered a proactive crowd density monitoring system and risk alerts using real-time computer vision frameworks.
              </p>
            </FadeIn>
          </div>

          {/* Achievements Block */}
          <div className="mt-16 pt-12 border-t border-white/[0.04] flex flex-col gap-4">
            <FadeIn duration={1.2} delay={0.1}>
              <span className="font-mono text-[10px] tracking-widest text-[#a1a1aa] uppercase block mb-3">
                ACHIEVEMENTS
              </span>
            </FadeIn>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1 border-l border-white/[0.08] pl-4">
                <FadeIn duration={1.2} delay={0.15}>
                  <h4 className="font-sans text-xs font-semibold text-[#f5f5f5] uppercase">
                    IEEE PUBLICATION (RCSM 2025)
                  </h4>
                </FadeIn>
                <FadeIn duration={1.2} delay={0.2}>
                  <p className="text-xs font-mono tracking-wider text-white/[0.4] uppercase mt-0.5">
                    Published *Real-Time Stampede Prevention Using Crowd Density Estimation and Alert System*
                  </p>
                </FadeIn>
              </div>
              <div className="flex flex-col gap-1 border-l border-white/[0.08] pl-4">
                <FadeIn duration={1.2} delay={0.25}>
                  <h4 className="font-sans text-xs font-semibold text-[#f5f5f5] uppercase">
                    IDEATHON 2025
                  </h4>
                </FadeIn>
                <FadeIn duration={1.2} delay={0.3}>
                  <p className="text-xs font-mono tracking-wider text-white/[0.4] uppercase mt-0.5">
                    Qualified for the Final Round
                  </p>
                </FadeIn>
              </div>
              <div className="flex flex-col gap-1 border-l border-white/[0.08] pl-4">
                <FadeIn duration={1.2} delay={0.35}>
                  <h4 className="font-sans text-xs font-semibold text-[#f5f5f5] uppercase">
                    LEETCODE
                  </h4>
                </FadeIn>
                <FadeIn duration={1.2} delay={0.4}>
                  <p className="text-xs font-mono tracking-wider text-white/[0.4] uppercase mt-0.5">
                    Rating 1535 — Solved 300+ Problems — Earned 50 Days Badge (June 2025)
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>

          {/* Certifications Block */}
          <div className="mt-16 pt-12 border-t border-white/[0.04] flex flex-col gap-4">
            <FadeIn duration={1.2} delay={0.1}>
              <span className="font-mono text-[10px] tracking-widest text-[#a1a1aa] uppercase block mb-3">
                CERTIFICATIONS
              </span>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {certifications.map((cert, idx) => (
                <div key={cert.title} className="flex flex-col gap-1 border-l border-white/[0.08] pl-4">
                  <FadeIn duration={1.2} delay={idx * 0.05} distance={10}>
                    <span className="font-sans text-xs font-semibold text-[#f5f5f5] uppercase block leading-snug">
                      {cert.title}
                    </span>
                  </FadeIn>
                  <FadeIn duration={1.2} delay={idx * 0.05 + 0.05} distance={10}>
                    <span className="font-mono text-[9px] tracking-widest text-white/[0.4] uppercase block">
                      {cert.issuer}
                    </span>
                  </FadeIn>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
