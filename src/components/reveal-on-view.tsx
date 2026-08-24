"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const variants = {
  fade: {
    mode: "transition" as const,
    transition: "transition-all duration-500 ease-out",
    hidden: "opacity-0 translate-y-3",
    visible: "opacity-100 translate-y-0",
  },
  bounce: {
    mode: "transition" as const,
    transition:
      "transition-all duration-700 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]",
    hidden: "opacity-0 scale-50 rotate-12",
    visible: "opacity-100 scale-100 rotate-0",
  },
  spring: {
    mode: "animation" as const,
    transition: "",
    hidden: "opacity-0",
    visible: "opacity-100 [animation:spring-pop_0.45s_ease-out_both]",
  },
};

export default function RevealOnView({
  children,
  delayMs = 0,
  className = "",
  variant = "fade",
}: {
  children: ReactNode;
  delayMs?: number;
  className?: string;
  variant?: keyof typeof variants;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const styles = variants[variant];

  return (
    <div
      ref={ref}
      className={`${styles.transition} ${
        visible ? styles.visible : styles.hidden
      } ${className}`}
      style={
        styles.mode === "animation"
          ? { animationDelay: `${delayMs}ms` }
          : { transitionDelay: `${delayMs}ms` }
      }
    >
      {children}
    </div>
  );
}
