"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Pagination } from "swiper/modules";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  AnimatePresence,
} from "motion/react";

import "swiper/css";
import "swiper/css/pagination";

type Project = {
  id: number;
  title: string;
  feat: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  link: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "CALIBER3135",
    feat: "Revelare",
    description:
      "Website institucional para a CALIBER3135, uma consultoria especializada em produtos digitais e UX. O site apresenta seus pilares de atuação, que incluem consultoria de negócios, estratégia de IA, experiência e conteúdo inteligente, mídia e CRM inteligentes, e desenvolvimento de Martech, com foco em soluções escaláveis e centradas no usuário.",
    image: "/images/mockup_caliber.png",
    imageAlt:
      "Mockup do projeto CALIBER3135, exibindo um website institucional com design moderno e minimalista, apresentando informações sobre consultoria de negócios, estratégia de IA e produtos digitais.",
    technologies: ["HTML", "CSS", "Javascript"],
    link: "https://caliber3135.netlify.app/",
  },
  {
    id: 2,
    title: "Dona Thereza",
    feat: "Revelare",
    description:
      "Landing page elegante para o Pastifício Dona Thereza, destacando massas frescas artesanais com tradição italiana e sabor brasileiro. O site apresenta a história da marca, um catálogo de produtos variados, receitas inspiradoras e pontos de venda, transmitindo a paixão por comida de verdade e momentos em família.",
    image: "/images/mockup_donathereza.png",
    imageAlt:
      "Mockup do projeto Dona Thereza, mostrando a landing page com imagens de massas frescas e elementos visuais que remetem à culinária italiana e artesanal.",
    technologies: ["Vue", "Blade", "Javascript", "SASS", "Tailwind"],
    link: "https://donathereza.com.br/",
  },
  {
    id: 3,
    title: "Leasetech",
    feat: "Revelare",
    description:
      "Sistema web para a Leasetech, empresa que oferece assinatura e locação de equipamentos de saúde de alta tecnologia. O projeto foca na usabilidade e clareza visual, organizando fluxos para hospitais, clínicas e centros de diagnóstico, garantindo acesso a tecnologia de ponta com gestão completa.",
    image: "/images/mockup_leasetech.png",
    imageAlt:
      "Mockup do projeto Leasetech, exibindo a interface de um sistema web com foco em gestão de equipamentos médicos, com design limpo e funcional.",
    technologies: ["Vue", "Blade", "Javascript", "SASS", "Tailwind"],
    link: "https://leasetechsaude.com.br/",
  },
  {
    id: 4,
    title: "Lasermix",
    feat: "Revelare",
    description:
      "Aplicação de e-commerce para a Lasermix Acrílicos, uma loja online especializada em produtos de acrílico personalizados, como troféus, medalhas e suportes. A interface responsiva e os componentes reutilizáveis facilitam a navegação e a compra, atendendo às necessidades de clientes que buscam qualidade e personalização.",
    image: "/images/mockup_lasermix.png",
    imageAlt:
      "Mockup do projeto Lasermix, mostrando a interface de uma loja virtual de produtos de acrílico, com destaque para itens personalizados e um design responsivo.",
    technologies: ["Nuvemshop", "Twig", "HTML", "CSS", "Javascript", "Filezilla"],
    link: "https://www.lasermixacrilicos.com.br/",
  },
  {
    id: 5,
    title: "QuitaWeb",
    feat: "Moovefy",
    description:
      "Sistema web do QuitaWeb, uma plataforma digital que simplifica a negociação e o pagamento de dívidas. O site oferece soluções flexíveis e personalizadas para que usuários possam organizar suas finanças, destacando a praticidade e a segurança na busca pela liberdade financeira.",
    image: "/images/mockup_quitaweb.png",
    imageAlt:
      "Mockup do projeto QuitaWeb, mostrando a interface de um sistema web com foco em negociação de dívidas, com elementos visuais que transmitem organização e facilidade de uso.",
    technologies: ["Vue", "Nuxt", "Typescript", "Tailwind", "API REST"],
    link: "https://app.quitaweb.com.br/",
  },
];

function useRevealRange(
  progress: ReturnType<typeof useScroll>["scrollYProgress"],
  start: number,
  end: number,
  fromY = 18,
  fromScale = 0.992
) {
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], [fromY, 0]);
  const scale = useTransform(progress, [start, end], [fromScale, 1]);

  return { opacity, y, scale };
}

export default function Projects() {
  const swiperRef = useRef<SwiperType | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(1);

  const total = projects.length;
  const activeProject = useMemo(
    () => projects[activeIndex - 1] ?? projects[0],
    [activeIndex]
  );

  const format = (n: number) => String(n).padStart(2, "0");

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 92%", "end 72%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.35,
  });

  const legend = useRevealRange(smoothProgress, 0.0, 0.08, 12, 0.996);
  const title = useRevealRange(smoothProgress, 0.04, 0.14, 16, 0.994);
  const controls = useRevealRange(smoothProgress, 0.08, 0.18, 14, 0.995);
  const sliderWrap = useRevealRange(smoothProgress, 0.12, 0.26, 18, 0.992);

  const progressWidth = `${(activeIndex / total) * 100}%`;

  return (
    <section
      id="projetos"
      ref={sectionRef}
      className="section-projects overflow-x-hidden"
    >
      <div className="projects-content container">
        <motion.p
          className="section-top-legend"
          style={{
            opacity: legend.opacity,
            y: legend.y,
            scale: legend.scale,
          }}
        >
          Portfólio
        </motion.p>

        <motion.h2
          className="section-title"
          style={{
            opacity: title.opacity,
            y: title.y,
            scale: title.scale,
          }}
        >
          Projetos selecionados
        </motion.h2>

        <motion.div
          className="projects-slider-content"
          style={{
            opacity: sliderWrap.opacity,
            y: sliderWrap.y,
            scale: sliderWrap.scale,
          }}
        >
          <motion.div
            className="projects-top-pagination"
            style={{
              opacity: controls.opacity,
              y: controls.y,
              scale: controls.scale,
            }}
          >
            <motion.button
              type="button"
              className="button-projects-swiper"
              onClick={() => swiperRef.current?.slidePrev()}
              whileTap={{ scale: 0.96 }}
            >
              <Image
                src="/icons/chevron_left_icon_white.svg"
                alt="Voltar"
                width={0}
                height={0}
                className="h-4 4xl:h-5 w-auto"
              />
            </motion.button>

            <div className="flex items-center gap-3">
              <p className="font-spacegrot text-lv-white/80">
                {format(activeIndex)} / {format(total)}
              </p>

              <div className="h-px w-20 overflow-hidden bg-lv-white/20">
                <motion.div
                  className="h-full bg-lv-main"
                  animate={{ width: progressWidth }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                />
              </div>
            </div>

            <motion.button
              type="button"
              className="button-projects-swiper"
              onClick={() => swiperRef.current?.slideNext()}
              whileTap={{ scale: 0.96 }}
            >
              <Image
                src="/icons/chevron_right_icon_white.svg"
                alt="Avançar"
                width={0}
                height={0}
                className="h-4 4xl:h-5 w-auto"
              />
            </motion.button>
          </motion.div>

          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            speed={800}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex + 1)}
            pagination={{
              el: ".projects-dots",
              clickable: true,
            }}
          >
            {projects.map((project) => {
              const isActive = project.id === activeProject.id;

              return (
                <SwiperSlide key={project.id}>
                  <div className="project-slide">
                    <motion.div
                      className="projet-mockup overflow-hidden"
                      animate={{
                        opacity: isActive ? 1 : 0.78,
                        filter: isActive ? "blur(0px)" : "blur(1px)",
                      }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    >
                      <div className="h-full w-full">
                        <Image
                          src={project.image}
                          alt={project.imageAlt}
                          fill
                          sizes="(max-width: 1023px) 100vw, 50vw"
                          className="object-cover object-top"
                          priority={project.id === 1}
                        />
                      </div>
                    </motion.div>

                    <div className="about-project">
                      <AnimatePresence mode="wait">
                        {isActive && (
                          <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -14 }}
                            transition={{ duration: 0.38, ease: "easeOut" }}
                          >
                            <motion.div
                              initial={{ opacity: 0, y: 14 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.32, delay: 0.02 }}
                            >
                              <h3>{project.title}</h3>
                              <small className="font-spacegrot text-lv-white/40 tracking-wider uppercase">
                                • {project.feat} •
                              </small>
                            </motion.div>

                            <motion.p
                              initial={{ opacity: 0, y: 14 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.35, delay: 0.07 }}
                              className="py-4"
                            >
                              {project.description}
                            </motion.p>

                            <motion.div
                              className="project-techs"
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
                              variants={{
                                hidden: {},
                                visible: {
                                  transition: {
                                    staggerChildren: 0.05,
                                  },
                                },
                              }}
                            >
                              {project.technologies.map((tech) => (
                                <motion.span
                                  key={tech}
                                  variants={{
                                    hidden: { opacity: 0, y: 8 },
                                    visible: { opacity: 1, y: 0 },
                                  }}
                                  transition={{ duration: 0.25, ease: "easeOut" }}
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </motion.div>

                            <motion.a
                              href={project.link}
                              target="_blank"
                              rel="noreferrer"
                              initial={{ opacity: 0, y: 14 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -8 }}
                              transition={{ duration: 0.32, delay: 0.14 }}
                            >
                              <motion.div
                                className="redirect-project-button group"
                                whileHover={{ x: 4 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                              >
                                <p>Ver projeto</p>

                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.25"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="redirect-icon text-lv-main! lucide lucide-square-arrow-out-up-right-icon lucide-square-arrow-out-up-right h-4.5 transition-all duration-200"
                                >
                                  <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                                  <path d="m21 3-9 9" />
                                  <path d="M15 3h6v6" />
                                </svg>
                              </motion.div>
                            </motion.a>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="projects-dots" />
        </motion.div>
      </div>
    </section>
  );
}