"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

function useRevealRange(
  progress: ReturnType<typeof useScroll>["scrollYProgress"],
  start: number,
  end: number,
  fromY = 18,
) {
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], [fromY, 0]);

  return { opacity, y };
}

export default function SoftSkills() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 92%", "end 72%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.35,
  });

  const legend = useRevealRange(smoothProgress, 0.0, 0.1, 10);
  const title = useRevealRange(smoothProgress, 0.05, 0.16, 14);

  const col1 = useRevealRange(smoothProgress, 0.14, 0.28, 18);
  const col2 = useRevealRange(smoothProgress, 0.22, 0.36, 18);
  const col3 = useRevealRange(smoothProgress, 0.30, 0.44, 18);

  return (
    <section ref={sectionRef} className="section-softskills">
      <div className="softskills-content container">
        <motion.p
          className="section-top-legend"
          style={{
            opacity: legend.opacity,
            y: legend.y,
          }}
        >
          Habilidades Comportamentais
        </motion.p>

        <motion.h2
          className="section-title text-lv-white"
          style={{
            opacity: title.opacity,
            y: title.y,
          }}
        >
          Além do código
        </motion.h2>

        <div className="skills-cards">
          <motion.div
            style={{
              opacity: col1.opacity,
              y: col1.y,
            }}
          >
            <p>Pensamento analítico</p>
            <p>Autonomia e proatividade</p>
          </motion.div>

          <motion.div
            style={{
              opacity: col2.opacity,
              y: col2.y,
            }}
          >
            <p>Aprendizado rápido e contínuo</p>
            <p>Comunicação clara e assertiva</p>
          </motion.div>

          <motion.div
            style={{
              opacity: col3.opacity,
              y: col3.y,
            }}
          >
            <p>Trabalho em equipe</p>
            <p>Organização e Gestão de tempo</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
