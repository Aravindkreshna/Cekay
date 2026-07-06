"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", updatePosition, { passive: true });
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-50 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--accent)] mix-blend-difference md:block"
      style={{
        transform: `translate(${position.x - 8}px, ${position.y - 8}px)`
      }}
    />
  );
}
