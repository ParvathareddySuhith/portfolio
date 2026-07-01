"use client";

export default function GridOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 flex justify-between px-6 sm:px-12 md:px-24 lg:px-32">
      {/* Editorial grid columns */}
      <div className="w-px h-full bg-white/[0.03]" />
      <div className="w-px h-full bg-white/[0.03] hidden sm:block" />
      <div className="w-px h-full bg-white/[0.03]" />
      <div className="w-px h-full bg-white/[0.03] hidden md:block" />
      <div className="w-px h-full bg-white/[0.03]" />
    </div>
  );
}
