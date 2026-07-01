"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

export default function ParallaxImage({
  src,
  alt,
  className = "",
  aspectRatio = "aspect-[16/10]",
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the container intersection relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Highly restrained vertical offset (strictly capped to prevent visual strain)
  const yTransform = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  
  // Smooth out scroll momentum using a custom spring
  const smoothY = useSpring(yTransform, {
    stiffness: 100,
    damping: 24,
    mass: 0.5,
  });

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${aspectRatio} ${className}`}
    >
      <motion.div
        style={{ y: smoothY }}
        className="absolute -inset-y-4 w-full h-[calc(100%+2rem)] origin-center"
        whileHover={{ scale: 1.02 }}
        transition={{
          duration: 1.4,
          ease: [0.16, 1, 0.3, 1] as const, // Constant custom bezier tuple
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
          priority={false}
          className="object-cover w-full h-full select-none pointer-events-none"
        />
      </motion.div>
    </div>
  );
}
