"use client";

import FadeIn from "@/components/motion/fade-in";

const capabilities = [
  {
    id: "01",
    title: "AI & COMPUTER VISION",
    description:
      "Engineering real-time computer vision pipelines, utilizing Python, OpenCV, and YOLO architectures for automated crowd density estimation and behavioral pattern detection.",
  },
  {
    id: "02",
    title: "FULL-STACK PLATFORMS",
    description:
      "Building high-performance frontend interfaces with React.js and Next.js, backed by Node.js APIs and databases like PostgreSQL, MySQL, and MongoDB.",
  },
  {
    id: "03",
    title: "AGENTIC AI SYSTEMS",
    description:
      "Orchestrating context-aware RAG pipelines and intelligent agent workflows using Dify, Langflow, Hugging Face models, and vector databases.",
  },
  {
    id: "04",
    title: "WORKFLOW & DEVOPS",
    description:
      "Streamlining application deployment and integration using Git, GitHub, Docker, AWS infrastructure, Vercel hosting, and n8n automation pipelines.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 w-full pt-32 pb-24 px-6 sm:px-12 md:px-24 lg:px-32 select-none border-t border-white/[0.04]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Monospace label */}
        <div className="lg:col-span-4">
          <FadeIn duration={1.2}>
            <span className="font-mono text-xs tracking-widest text-[#a1a1aa] uppercase block">
              (02) / ABOUT & SERVICES
            </span>
          </FadeIn>
        </div>

        {/* Right Column: Statement & Capabilities */}
        <div className="lg:col-span-8 flex flex-col">
          {/* Main Statement */}
          <FadeIn duration={1.4} delay={0.15}>
            <p className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed text-[#f5f5f5] max-w-3xl">
              Suhith Reddy Parvathareddy is a Computer Science & Engineering student at Chennai Institute 
              of Technology specializing in deep learning, computer vision, and full-stack systems. 
              He bridges the gap between intelligent automation and high-performance interactive interfaces.
            </p>
          </FadeIn>

          {/* Capabilities Grid */}
          <div className="mt-20 lg:mt-28 pt-12 border-t border-white/[0.04]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {capabilities.map((item, idx) => (
                <div key={item.id} className="flex flex-col gap-3">
                  <FadeIn duration={1.2} delay={idx * 0.1} distance={10}>
                    <span className="font-mono text-[10px] tracking-widest text-[#a1a1aa] uppercase block">
                      {item.id} — {item.title}
                    </span>
                  </FadeIn>
                  <FadeIn duration={1.2} delay={idx * 0.1 + 0.1} distance={10}>
                    <p className="text-sm font-sans font-light leading-relaxed text-[#a1a1aa]">
                      {item.description}
                    </p>
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
