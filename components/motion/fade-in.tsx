"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  viewportOnce?: boolean;
}

export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 1.2, // Extremely slow, premium paced reveal
  distance = 15, // Highly restrained translation to reduce bounce feel
  className = "",
  viewportOnce = true,
}: FadeInProps) {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  const selectedDirection = directions[direction];

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...selectedDirection,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: viewportOnce, margin: "-10% 0px -10% 0px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // Signature cinematic bezier curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
