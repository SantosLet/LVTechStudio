"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

function useSmoothReveal(
  progress: ReturnType<typeof useScroll>["scrollYProgress"],
  start: number,
  end: number,
  fromY = 12
) {
  const rawOpacity = useTransform(progress, [start, end], [0, 1]);
  const rawY = useTransform(progress, [start, end], [fromY, 0]);

  const opacity = useSpring(rawOpacity, {
    stiffness: 140,
    damping: 24,
    mass: 0.25,
  });

  const y = useSpring(rawY, {
    stiffness: 140,
    damping: 24,
    mass: 0.25,
  });

  return { opacity, y };
}

export default function Closing() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 92%", "start 52%"],
  });

  const quote = useSmoothReveal(scrollYProgress, 0, 0.45, 10);
  const highlight = useSmoothReveal(scrollYProgress, 0.12, 0.52, 8);
  const paragraph = useSmoothReveal(scrollYProgress, 0.22, 0.68, 10);

  return (
    <section ref={sectionRef} className="section-closing">
      <div className="closing-content container">
        <motion.h3
          style={{
            opacity: quote.opacity,
            y: quote.y,
          }}
        >
          "Somos o que{" "}
          <motion.span
            className="text-lv-main inline-block"
            style={{
              opacity: highlight.opacity,
              y: highlight.y,
            }}
          >
            fazemos repetidamente
          </motion.span>
          . A excelência, portanto, não é um ato, mas um hábito." - Will Durant
        </motion.h3>

        <motion.p
          style={{
            opacity: paragraph.opacity,
            y: paragraph.y,
          }}
        >
          Nada aqui é por acaso. Cada detalhe vem de prática e consistência. Se
          isso fez sentido pra você, vamos trabalhar juntos.
        </motion.p>
      </div>
    </section>
  );
}