"use client";

import Link from "next/link";
import FadeIn from "@/components/motion/fade-in";
import ParallaxImage from "@/components/motion/parallax-image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    slug: "stampede-prevention",
    title: "STAMPEDE PREVENTION SYSTEM",
    category: "COMPUTER VISION / DEEP LEARNING",
    year: "2025",
    role: "RESEARCH INTERN",
    src: "/projects/stampede.png",
    gridClass: "lg:col-span-8",
    aspectRatio: "aspect-[16/10]",
  },
  {
    id: "02",
    slug: "floatchat",
    title: "FLOATCHAT",
    category: "AI CONVERSATIONAL / RAG",
    year: "2024",
    role: "AI WORKFLOW ENGINEER",
    src: "/projects/floatchat.png",
    gridClass: "lg:col-start-5 lg:col-span-8 mt-24 lg:mt-56",
    aspectRatio: "aspect-[4/3]",
  },
  {
    id: "03",
    slug: "student-query-bot",
    title: "STUDENT QUERY BOT",
    category: "RAG CHATBOT / AI AGENTS",
    year: "2024",
    role: "AI WORKFLOW ENGINEER",
    src: "/projects/query_bot.png",
    gridClass: "lg:col-start-2 lg:col-span-7 mt-24 lg:mt-56",
    aspectRatio: "aspect-[16/10]",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 w-full pt-32 pb-48 px-6 sm:px-12 md:px-24 lg:px-32 select-none border-t border-white/[0.04]">
      {/* Section Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-20 lg:pb-32">
        {/* Left Column: Monospace label */}
        <div className="lg:col-span-4">
          <FadeIn duration={1.2}>
            <span className="font-mono text-xs tracking-widest text-[#a1a1aa] uppercase block">
              (01) / SELECTED PROJECTS
            </span>
          </FadeIn>
        </div>

        {/* Right Column: Editorial tagline */}
        <div className="lg:col-span-8">
          <FadeIn duration={1.2} delay={0.15}>
            <p className="text-sm font-sans font-light leading-relaxed text-[#a1a1aa] max-w-lg">
              A curated showcase of full-stack systems, computer vision pipelines, and intelligent AI agents engineered with custom motion architectures and high-performance interactive interfaces.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Asymmetrical Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-24 w-full">
        {projects.map((project, idx) => (
          <div key={project.id} className={`${project.gridClass} group flex flex-col`}>
            {/* Visual Wrapper with Scroll Parallax */}
            <div data-cursor="view" className="w-full">
              <Link href={`/projects/${project.slug}`} className="block w-full">
                <FadeIn duration={1.2} delay={idx * 0.1} distance={15}>
                  <ParallaxImage
                    src={project.src}
                    alt={project.title}
                    aspectRatio={project.aspectRatio}
                    className="w-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                </FadeIn>
              </Link>
            </div>

            {/* Project Metadata row */}
            <div className="mt-8 pt-6 border-t border-white/[0.04] grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Left detail grid (col-span-8): Title and role */}
              <div className="md:col-span-8 flex flex-col gap-1">
                <FadeIn duration={1.2} delay={0.1} distance={10}>
                  <h3 className="text-xl sm:text-2xl font-semibold uppercase tracking-tight text-[#f5f5f5]">
                    <Link href={`/projects/${project.slug}`} className="hover:text-[#a1a1aa] transition-colors duration-500 flex items-center gap-2">
                      {project.title}
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                    </Link>
                  </h3>
                </FadeIn>
                <FadeIn duration={1.2} delay={0.2} distance={10}>
                  <span className="text-[10px] font-mono tracking-widest text-[#a1a1aa] uppercase block">
                    {project.category}
                  </span>
                </FadeIn>
              </div>

              {/* Right detail grid (col-span-4): Role and Year */}
              <div className="md:col-span-4 flex md:justify-end items-start md:text-right font-mono text-[10px] tracking-widest uppercase text-[#a1a1aa] gap-6 md:gap-12">
                <FadeIn duration={1.2} delay={0.2} distance={10}>
                  <div className="flex flex-col gap-1">
                    <span className="text-white/[0.2] block">ROLE</span>
                    <span className="text-white/[0.8] block">{project.role}</span>
                  </div>
                </FadeIn>
                <FadeIn duration={1.2} delay={0.3} distance={10}>
                  <div className="flex flex-col gap-1">
                    <span className="text-white/[0.2] block">YEAR</span>
                    <span className="text-white/[0.8] block">{project.year}</span>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
