"use client";

import { useEffect, useRef, type ReactNode } from "react";

const ROTATE_DEG = 6;
const STEP_VH = 75;

export default function StackedCards({
  cards,
  title,
}: {
  cards: ReactNode[];
  title?: ReactNode;
}) {
  const triggerRefs = useRef<Array<HTMLDivElement | null>>([]);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const viewportCenter = window.innerHeight / 2;
      const entryDistance = window.innerHeight * 0.6;
      const entryOffsetPx = window.innerHeight;

      cardRefs.current.forEach((cardEl, i) => {
        if (!cardEl || i === 0) return;

        const trigger = triggerRefs.current[i];
        if (!trigger) return;

        const rect = trigger.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const delta = center - viewportCenter;
        const progress = Math.min(1, Math.max(0, 1 - delta / entryDistance));

        const rotateDeg = i % 2 === 1 ? ROTATE_DEG : -ROTATE_DEG;
        const translateY = (1 - progress) * entryOffsetPx;

        cardEl.style.transform = `translateY(${translateY}px) rotate(${rotateDeg}deg)`;
      });
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [cards.length]);

  return (
    <div
      className="relative w-full"
      style={{ height: `${cards.length * STEP_VH}vh` }}
    >
      <div className="sticky top-13 flex flex-col gap-24 items-center pb-13">
        {title}
        <div className="relative w-full">
          {cards.map((card, i) => (
            <div
              key={i}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className={i === 0 ? "" : "absolute inset-0"}
              style={{
                zIndex: i + 1,
                willChange: "transform",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              {card}
            </div>
          ))}
        </div>
      </div>

      {cards.map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            triggerRefs.current[i] = el;
          }}
          className="absolute w-full"
          style={{ top: `${i * STEP_VH}vh`, height: `${STEP_VH}vh` }}
        />
      ))}
    </div>
  );
}
