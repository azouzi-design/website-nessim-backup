"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const ROTATE_STEP_DEG = 6;

export default function StackedCards({
  cards,
  title,
}: {
  cards: ReactNode[];
  title?: ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const steps = cards.length - 1;

  useEffect(() => {
    const container = containerRef.current;
    if (!container || steps <= 0) return;

    let rafId: number;
    let current = 0;

    const tick = () => {
      const rect = container.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = container.offsetHeight - vh;
      const scrolled = -rect.top;
      const p = total > 0 ? Math.min(Math.max(scrolled / total, 0), 1) : 0;
      const target = p * steps;

      current += (target - current) * 0.12;
      if (Math.abs(target - current) < 0.001) current = target;

      setProgress(current);
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [steps]);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: `${cards.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col gap-24 items-center justify-center">
        {title}
        <div className="relative w-full">
          {cards.map((card, i) => {
            const depth = Math.max(0, progress - i);
            const opacity = Math.min(Math.max(progress - i + 1, 0), 1);
            return (
              <div
                key={i}
                className={i === 0 ? "" : "absolute inset-0"}
                style={{
                  transform: `rotate(${depth * ROTATE_STEP_DEG}deg)`,
                  opacity,
                  zIndex: i + 1,
                }}
              >
                {card}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
