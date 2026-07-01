"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  viewportOnce?: boolean;
}

export default function TextReveal({
  text,
  className = "",
  delay = 0,
  duration = 1.4, // Decelerated, premium paced reveal
  stagger = 0.04, // Elegant slow staggering
  viewportOnce = true,
}: TextRevealProps) {
  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: duration,
        ease: [0.16, 1, 0.3, 1] as const, // Cinematic bezier ease
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: viewportOnce, margin: "-10% 0px -10% 0px" }}
      className={`inline-flex flex-wrap ${className}`}
    >
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="inline-block overflow-hidden mr-[0.25em] pb-[0.1em] last:mr-0"
        >
          <motion.span
            variants={wordVariants}
            className="inline-block origin-bottom"
          >
            {word === "" ? "\u00A0" : word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
