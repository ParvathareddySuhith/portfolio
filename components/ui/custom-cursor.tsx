"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

type CursorVariant = "default" | "pointer" | "view" | "hidden";

export default function CustomCursor() {
  const [variant, setVariant] = useState<CursorVariant>("hidden");
  const [isEnabled, setIsEnabled] = useState(false);

  // Position coordinates tracking
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Highly dampened, organic spring options for custom lag physics
  const springOptions = { stiffness: 400, damping: 32, mass: 0.25 };
  const cursorX = useSpring(mouseX, springOptions);
  const cursorY = useSpring(mouseY, springOptions);

  useEffect(() => {
    // Only enable custom cursor on mouse-capable desktop screens
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    setIsEnabled(true);
    setVariant("default");

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Find closest element prompting custom cursor state, or standard interactive tags
      const interactiveEl = target.closest('[data-cursor], a, button');
      if (interactiveEl) {
        const customType = interactiveEl.getAttribute("data-cursor");
        if (customType === "view") {
          setVariant("view");
        } else {
          setVariant("pointer");
        }
      } else {
        setVariant("default");
      }
    };

    const handleMouseLeaveWindow = () => {
      setVariant("hidden");
    };

    const handleMouseEnterWindow = () => {
      setVariant("default");
    };

    // Attach listeners globally
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
    };
  }, [mouseX, mouseY]);

  if (!isEnabled) return null;

  // Variants styling configuration
  const variants = {
    default: {
      width: 6,
      height: 6,
      backgroundColor: "#f5f5f5",
      border: "0px solid transparent",
    },
    pointer: {
      width: 48,
      height: 48,
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      mixBlendMode: "difference" as const,
    },
    view: {
      width: 56,
      height: 56,
      backgroundColor: "#f5f5f5",
      border: "0px solid transparent",
    },
    hidden: {
      width: 0,
      height: 0,
      opacity: 0,
    },
  };

  return (
    <AnimatePresence>
      {variant !== "hidden" && (
        <motion.div
          className="fixed pointer-events-none z-50 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 will-change-transform"
          style={{
            x: cursorX,
            y: cursorY,
            left: 0,
            top: 0,
          }}
          animate={variant}
          variants={variants}
          transition={{
            type: "tween",
            duration: 0.3,
            ease: [0.16, 1, 0.3, 1], // Custom slow ease-out
          }}
        >
          {/* Render uppercase VIEW text tag inside solid media hover circle */}
          {variant === "view" && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-black text-[9px] font-mono font-semibold tracking-widest"
            >
              VIEW
            </motion.span>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
