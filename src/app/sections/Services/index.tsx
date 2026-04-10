"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import Button from "@/components/Button";
import Image from "next/image";

type Step = {
  icon: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: "create_account",
    title: "Descoberta",
    description:
      "Entendimento do projeto, objetivos e alinhamento de escopo e prazos.",
  },
  {
    icon: "describe_warehouse",
    title: "Planejamento",
    description:
      "Definição de arquitetura, tecnologias e organização do código.",
  },
  {
    icon: "get_prebooked",
    title: "Desenvolvimento",
    description:
      "Desenvolvimento com foco em performance e fidelidade ao design.",
  },
  {
    icon: "contract",
    title: "Entrega e QA",
    description:
      "Testes, revisão final, deploy, documentação e suporte pós-entrega.",
  },
];

const services = [
  {
    icon: "/icons/monitor_smartphone_icon_orange.svg",
    alt: "Ícone Responsividade",
    title: "Landing Pages e Sites",
    description:
      "Interfaces responsivas a partir de layout, com estrutura consistente.",
    className: "card border-b border-lv-white",
  },
  {
    icon: "/icons/database_icon_orange.svg",
    alt: "Ícone API",
    title: "Consumo de API",
    description:
      "Integração com APIs REST e tratamento de dados para aplicações dinâmicas.",
    className: "card border-l-0 border-b sm:border-l border-lv-white",
  },
  {
    icon: "/icons/puzzle_icon_orange.svg",
    alt: "Ícone Interface",
    title: "Interfaces de Sistemas",
    description:
      "Telas para dashboards e sistemas, com componentização e organização.",
    className: "card",
  },
  {
    icon: "/icons/globe_icon_orange.svg",
    alt: "Ícone Interface",
    title: "Performance e SEO",
    description:
      "Otimização de carregamento e ajustes para melhor desempenho e indexação.",
    className: "card border-t sm:border-t-0 sm:border-l border-lv-white",
  },
];

function useRevealRange(
  progress: ReturnType<typeof useScroll>["scrollYProgress"],
  start: number,
  end: number,
  fromY = 24,
  fromScale = 0.985,
) {
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], [fromY, 0]);
  const scale = useTransform(progress, [start, end], [fromScale, 1]);

  return { opacity, y, scale };
}

export default function Services() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 92%", "end 68%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.35,
  });

  const legend = useRevealRange(smoothProgress, 0.00, 0.08, 16, 0.99);
  const title = useRevealRange(smoothProgress, 0.03, 0.12, 20, 0.988);
  const text = useRevealRange(smoothProgress, 0.07, 0.18, 18, 0.99);
  const buttons = useRevealRange(smoothProgress, 0.11, 0.22, 16, 0.992);

  const card1 = useRevealRange(smoothProgress, 0.16, 0.26, 22, 0.985);
  const card2 = useRevealRange(smoothProgress, 0.21, 0.31, 22, 0.985);
  const card3 = useRevealRange(smoothProgress, 0.26, 0.36, 22, 0.985);
  const card4 = useRevealRange(smoothProgress, 0.31, 0.41, 22, 0.985);

  const processLegend = useRevealRange(smoothProgress, 0.38, 0.48, 16, 0.99);
  const processTitle = useRevealRange(smoothProgress, 0.42, 0.52, 20, 0.988);

  const step1 = useRevealRange(smoothProgress, 0.48, 0.58, 24, 0.985);
  const step2 = useRevealRange(smoothProgress, 0.53, 0.63, 24, 0.985);
  const step3 = useRevealRange(smoothProgress, 0.58, 0.68, 24, 0.985);
  const step4 = useRevealRange(smoothProgress, 0.63, 0.73, 24, 0.985);

  const cardStyles = [card1, card2, card3, card4];
  const stepStyles = [step1, step2, step3, step4];

  return (
    <section id="servicos" ref={sectionRef} className="section-services">
      <div className="container">
        <div className="services-container">
          <div className="services-content">
            <div>
              <motion.p
                className="section-top-legend"
                style={{
                  opacity: legend.opacity,
                  y: legend.y,
                  scale: legend.scale,
                }}
              >
                Serviços
              </motion.p>

              <motion.h2
                className="section-title mb-8"
                style={{
                  opacity: title.opacity,
                  y: title.y,
                  scale: title.scale,
                }}
              >
                Como posso ajudar
              </motion.h2>

              <motion.p
                className="text-about-services"
                style={{
                  opacity: text.opacity,
                  y: text.y,
                  scale: text.scale,
                }}
              >
                Transformo sua ideia em uma aplicação bem construída, com código
                organizado, boa performance e uma interface que <br />
                realmente funciona no dia a dia.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                style={{
                  opacity: buttons.opacity,
                  y: buttons.y,
                  scale: buttons.scale,
                }}
              >
                <Button href="#projetos">Ver projetos</Button>

                <Button href="#contato" variant="secondary">
                  Fale comigo
                </Button>
              </motion.div>
            </div>

            <div className="services-cards">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className={service.className}
                  style={{
                    opacity: cardStyles[index].opacity,
                    y: cardStyles[index].y,
                    scale: cardStyles[index].scale,
                  }}
                >
                  <div>
                    <Image
                      src={service.icon}
                      alt={service.alt}
                      width={0}
                      height={0}
                      className="h-6 w-auto"
                    />
                    <p className="service-title">{service.title}</p>
                  </div>

                  <p className="service-description">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="process-content">
          <motion.p
            className="section-top-legend"
            style={{
              opacity: processLegend.opacity,
              y: processLegend.y,
              scale: processLegend.scale,
            }}
          >
            Processo e Trabalho
          </motion.p>

          <motion.h3
            style={{
              opacity: processTitle.opacity,
              y: processTitle.y,
              scale: processTitle.scale,
            }}
          >
            Do briefing à entrega
          </motion.h3>

          <div className="steps-container">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                className="step"
                style={{
                  opacity: stepStyles[i].opacity,
                  y: stepStyles[i].y,
                  scale: stepStyles[i].scale,
                }}
              >
                <div>
                  <div className="step-dot" />
                  <div className="step-line" />
                </div>

                <h3 className="section-title">0{i + 1}</h3>
                <p className="step-title">{step.title}</p>
                <p className="step-description">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
