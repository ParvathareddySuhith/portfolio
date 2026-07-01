"use client";

import { ReactLenis } from "lenis/react";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.5,
        lerp: 0.05,
        infinite: false,
        syncTouch: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
