"use client";

import { useEffect, useRef, useState } from "react";

export function HomeTwoLogoSlider({ items }: { items: readonly string[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const speedRef = useRef(0.5);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let frameId = 0;
    let lastTimestamp = 0;

    const animate = (timestamp: number) => {
      if (!trackRef.current) {
        frameId = requestAnimationFrame(animate);
        return;
      }

      if (!lastTimestamp) {
        lastTimestamp = timestamp;
      }

      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      const targetSpeed = isHovered ? 0.16 : 0.5;
      speedRef.current += (targetSpeed - speedRef.current) * 0.06;

      const halfWidth = trackRef.current.scrollWidth / 2;
      offsetRef.current -= speedRef.current * (delta / 16.67);

      if (Math.abs(offsetRef.current) >= halfWidth) {
        offsetRef.current = 0;
      }

      trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isHovered]);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div ref={trackRef} className="flex min-w-max gap-4 will-change-transform">
        {[...items, ...items].map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex min-h-12 items-center rounded-full border border-white/10 bg-white/8 px-5 py-3 text-xs uppercase tracking-[0.24em] text-white/75 backdrop-blur-xl"
          >
            {item}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-[linear-gradient(90deg,rgba(5,5,5,0.88),rgba(5,5,5,0))] sm:w-16 lg:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-[linear-gradient(270deg,rgba(5,5,5,0.88),rgba(5,5,5,0))] sm:w-16 lg:w-24" />
    </div>
  );
}
