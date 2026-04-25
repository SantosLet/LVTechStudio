"use client";

import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

const testimonials = [
  {
    message:
      "Dedicada e uma das melhores devs com quem já trabalhei. Vai além do 'apenas fazer funcionar', entendendo impactos e problemas. Recomendo muito e trabalharia novamente.",
    name: "Diogo B. Moreno",
    position: "Dev Full Stack | Ex-Tech Lead",
  },
  {
    message:
      "Profissional fora da curva, muito dedicada e estudiosa. Aprende rápido e propõe melhorias que vão além do seu escopo de trabalho inicial. Realmente diferenciada, recomendo!",
    name: "Thainá Sales",
    position: "Especialista em Estratégia e Branding",
  },
  {
    message:
      "Acompanhei a trajetória profissional da Letícia e é admirável sua evolução como desenvolvedora. Ela me guiou no início e mudou minha forma de aprender, organizar e programar.",
    name: "Gabriel Campos",
    position: "Desenvolvedor Web e Estudante de TI",
  },
  {
    message:
      "A Lê é uma colega de front-end organizada, objetiva e focada, com atenção aos detalhes visuais e contextuais. Aberta a feedbacks, demonstra grande potencial de desenvolvimento pessoal e profissional.",
    name: "Caio M. Ramos",
    position: "Desenvolvedor Web Pleno",
  },
  {
    message:
      "Trabalhar com a Letícia é extremamente satisfatório, ela demonstra alto nível de dedicação, atenção minuciosa aos detalhes, grande empenho e notável capacidade de absorção e assimilação rápida de conteúdos.",
    name: "Rafaela J. Estabile",
    position: "Desenvolvedora Full Stack",
  },
  {
    message:
      "Gostei muito de trabalhar com a Letícia. Ela se destaca pela excelente comunicação e pela criatividade na construção de interfaces modernas e responsivas, sempre entregando um front-end de alta qualidade e alinhado às melhores práticas.",
    name: "Matheus P. Baptista",
    position: "Engenheiro e Arquiteto de Software",
  },
  {
    message:
      "Letícia tem um olhar apurado para os detalhes que poucos desenvolvedores têm. Suas entregas são cuidadosas e comprometidas, sempre construindo interfaces que equilibram qualidade visual e funcionamento impecável.",
    name: "Vitor S. Santos",
    position: "Desenvolvedor Back-end",
  },
  {
    message:
      "Foi minha aluna em Ciência da Computação, destacando-se pelo esforço, dedicação e responsabilidade, além de boas habilidades técnicas, lógica de programação e trabalho em equipe.",
    name: "Marco Aurélio Antunes",
    position: "Docente na FIB",
  },
  {
    message:
      "A Letícia foi essencial na construção da interface do meu projeto. Com clareza e senso de organização, ela me mostrou como estruturar um design limpo e funcional, elevando muito meu nível.",
    name: "João Paulo do Amaral",
    position: "Analista Contábil",
  },
];

function useRevealRange(
  progress: ReturnType<typeof useScroll>["scrollYProgress"],
  start: number,
  end: number,
  fromY = 14,
) {
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], [fromY, 0]);

  return { opacity, y };
}

export default function Testimonials() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 90%", "end 76%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.35,
  });

  const legend = useRevealRange(smoothProgress, 0.0, 0.1, 10);
  const title = useRevealRange(smoothProgress, 0.04, 0.16, 12);
  const carousel = useRevealRange(smoothProgress, 0.1, 0.24, 16);

  return (
    <section ref={sectionRef} className="section-testimonials">
      <div className="container">
        <motion.p
          className="section-top-legend"
          style={{
            opacity: legend.opacity,
            y: legend.y,
          }}
        >
          Depoimentos
        </motion.p>

        <motion.h2
          className="section-title"
          style={{
            opacity: title.opacity,
            y: title.y,
          }}
        >
          O que dizem sobre mim
        </motion.h2>

        <motion.div
          className="testimonials-cards relative"
          style={{
            opacity: carousel.opacity,
            y: carousel.y,
          }}
        >
          <button
            ref={prevRef}
            className="testimonial-prev absolute left-0 top-1/2 z-10 -translate-y-1/2"
            aria-label="Voltar"
          >
            <Image
              src="/icons/chevron_left_icon_white.svg"
              alt="Voltar"
              width={0}
              height={0}
              className="h-5 w-auto"
            />
          </button>

          <button
            ref={nextRef}
            className="testimonial-next absolute right-0 top-1/2 z-10 -translate-y-1/2"
            aria-label="Avançar"
          >
            <Image
              src="/icons/chevron_right_icon_white.svg"
              alt="Avançar"
              width={0}
              height={0}
              className="h-5 w-auto"
            />
          </button>

          <Swiper
            modules={[Navigation, Mousewheel]}
            spaceBetween={24}
            slidesPerView={1}
            speed={650}
            mousewheel={{
              forceToAxis: true,
              releaseOnEdges: true,
              sensitivity: 1,
            }}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.name}>
                <div className="testimonial-card h-full">
                  <Image
                    src="/icons/quote_icon_orange.svg"
                    alt=""
                    width={0}
                    height={0}
                    className="h-5 w-auto"
                  />

                  <p className="testimonial-message">"{item.message}"</p>

                  <div className="testimonial-author">
                    <p className="author-name">{item.name}</p>
                    <p className="author-position">{item.position}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
