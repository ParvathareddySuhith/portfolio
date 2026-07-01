import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/lib/data";
import GridOverlay from "@/components/layout/grid-overlay";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import FadeIn from "@/components/motion/fade-in";
import TextReveal from "@/components/motion/text-reveal";
import ParallaxImage from "@/components/motion/parallax-image";
import Magnetic from "@/components/motion/magnetic";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative min-h-screen w-full flex flex-col bg-[#050505] overflow-x-hidden">
      {/* Structural layout lines */}
      <GridOverlay />

      {/* Global Navigation Header */}
      <Header />

      {/* Main Case Study Content */}
      <section className="relative z-10 w-full pt-32 px-6 sm:px-12 md:px-24 lg:px-32 select-none">
        {/* Back Link */}
        <FadeIn direction="none" duration={1.2}>
          <Magnetic range={30} strength={0.4}>
            <Link
              href="/"
              className="inline-flex items-center gap-1 font-mono text-xs tracking-widest text-[#a1a1aa] hover:text-[#f5f5f5] transition-colors duration-300"
            >
              ← BACK TO WORK
            </Link>
          </Magnetic>
        </FadeIn>

        {/* Large Typographic Title */}
        <div className="mt-12 mb-16 select-none">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-bold tracking-tighter uppercase leading-[0.85] text-[#f5f5f5]">
            <TextReveal text={project.title} delay={0.2} duration={1.4} />
          </h1>
        </div>

        {/* Split Grid Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16 border-t border-white/[0.04]">
          {/* Left Column (col-span-4): Monospace Metadata Panel */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <FadeIn duration={1.2} delay={0.4} distance={10}>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] tracking-widest text-white/[0.2]">CLIENT / VENUE</span>
                <span className="font-mono text-xs tracking-widest text-[#f5f5f5] uppercase">{project.client}</span>
              </div>
            </FadeIn>

            <FadeIn duration={1.2} delay={0.45} distance={10}>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] tracking-widest text-white/[0.2]">ROLE</span>
                <span className="font-mono text-xs tracking-widest text-[#f5f5f5] uppercase">{project.role}</span>
              </div>
            </FadeIn>

            <FadeIn duration={1.2} delay={0.5} distance={10}>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] tracking-widest text-white/[0.2]">LOCATION</span>
                <span className="font-mono text-xs tracking-widest text-[#f5f5f5] uppercase">{project.location}</span>
              </div>
            </FadeIn>

            <FadeIn duration={1.2} delay={0.55} distance={10}>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] tracking-widest text-white/[0.2]">YEAR</span>
                <span className="font-mono text-xs tracking-widest text-[#f5f5f5] uppercase">{project.year}</span>
              </div>
            </FadeIn>

            <FadeIn duration={1.2} delay={0.6} distance={10}>
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] tracking-widest text-white/[0.2] block">TECHNOLOGY STACK</span>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="border border-white/[0.08] rounded-full px-3 py-1 font-mono text-[9px] tracking-widest text-[#a1a1aa] bg-white/[0.01]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column (col-span-8): Challenge & Solution Details */}
          <div className="lg:col-span-8 flex flex-col gap-16">
            {/* Overview / Summary */}
            <FadeIn duration={1.4} delay={0.4} distance={15}>
              <p className="text-xl sm:text-2xl font-light leading-relaxed text-[#f5f5f5] max-w-3xl">
                {project.summary}
              </p>
            </FadeIn>

            {/* Challenge */}
            <div className="border-t border-white/[0.04] pt-8">
              <FadeIn duration={1.2} delay={0.1} distance={10}>
                <span className="font-mono text-[10px] tracking-widest text-white/[0.2] block mb-4">
                  01 / THE CHALLENGE
                </span>
              </FadeIn>
              <FadeIn duration={1.2} delay={0.2} distance={10}>
                <p className="text-sm font-sans font-light leading-relaxed text-[#a1a1aa] max-w-2xl">
                  {project.challenge}
                </p>
              </FadeIn>
            </div>

            {/* Solution */}
            <div className="border-t border-white/[0.04] pt-8">
              <FadeIn duration={1.2} delay={0.1} distance={10}>
                <span className="font-mono text-[10px] tracking-widest text-white/[0.2] block mb-4">
                  02 / THE SOLUTION
                </span>
              </FadeIn>
              <FadeIn duration={1.2} delay={0.2} distance={10}>
                <p className="text-sm font-sans font-light leading-relaxed text-[#a1a1aa] max-w-2xl">
                  {project.solution}
                </p>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Large Parallax Visual Banner */}
        <div className="mt-24 mb-32 border border-white/[0.06] overflow-hidden">
          <FadeIn duration={1.4} delay={0.2} distance={15}>
            <ParallaxImage
              src={project.src}
              alt={project.title}
              aspectRatio="aspect-[16/8]"
              className="w-full grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
            />
          </FadeIn>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
