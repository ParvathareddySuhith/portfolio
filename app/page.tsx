import Header from "@/components/layout/header";
import GridOverlay from "@/components/layout/grid-overlay";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import About from "@/components/sections/about";
import Timeline from "@/components/sections/timeline";
import Credentials from "@/components/sections/credentials";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col bg-[#050505] overflow-x-hidden">
      {/* Editorial design grid background */}
      <GridOverlay />

      {/* Premium Minimal Navigation Header */}
      <Header />

      {/* Main Cinematic Hero Section */}
      <Hero />

      {/* Premium Asymmetrical Projects Showcase */}
      <Projects />

      {/* Typographic Biography & Services */}
      <About />

      {/* Interactive Experience Chronology */}
      <Timeline />

      {/* Credentials (Education, Publications, Certifications) */}
      <Credentials />

      {/* Premium Minimal Editorial Footer */}
      <Footer />
    </main>
  );
}
