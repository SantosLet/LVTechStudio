"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Pagination } from "swiper/modules";

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
        description: "Website institucional para a CALIBER3135, uma consultoria especializada em produtos digitais e UX. O site apresenta seus pilares de atuação, que incluem consultoria de negócios, estratégia de IA, experiência e conteúdo inteligente, mídia e CRM inteligentes, e desenvolvimento de Martech, com foco em soluções escaláveis e centradas no usuário.",
        image: "/images/mockup_caliber.png",
        imageAlt: "Mockup do projeto CALIBER3135, exibindo um website institucional com design moderno e minimalista, apresentando informações sobre consultoria de negócios, estratégia de IA e produtos digitais.",
        technologies: ["HTML", "CSS", "Javascript"],
        link: "https://caliber3135.netlify.app/",
    },
    {
        id: 2,
        title: "Dona Thereza",
        feat: "Revelare",
        description: "Landing page elegante para o Pastifício Dona Thereza, destacando massas frescas artesanais com tradição italiana e sabor brasileiro. O site apresenta a história da marca, um catálogo de produtos variados, receitas inspiradoras e pontos de venda, transmitindo a paixão por comida de verdade e momentos em família.",
        image: "/images/mockup_donathereza.png",
        imageAlt: "Mockup do projeto Dona Thereza, mostrando a landing page com imagens de massas frescas e elementos visuais que remetem à culinária italiana e artesanal.",
        technologies: ["Vue", "Blade", "Javascript", "SASS", "Tailwind"],
        link: "https://donathereza.com.br/",
    },
    {
        id: 3,
        title: "Leasetech",
        feat: "Revelare",
        description: "Sistema web para a Leasetech, empresa que oferece assinatura e locação de equipamentos de saúde de alta tecnologia. O projeto foca na usabilidade e clareza visual, organizando fluxos para hospitais, clínicas e centros de diagnóstico, garantindo acesso a tecnologia de ponta com gestão completa.",
        image: "/images/mockup_leasetech.png",
        imageAlt: "Mockup do projeto Leasetech, exibindo a interface de um sistema web com foco em gestão de equipamentos médicos, com design limpo e funcional.",
        technologies: ["Vue", "Blade", "Javascript", "SASS", "Tailwind"],
        link: "https://leasetechsaude.com.br/",
    },
    {
        id: 4,
        title: "Lasermix",
        feat: "Revelare",
        description: " Aplicação de e-commerce para a Lasermix Acrílicos, uma loja online especializada em produtos de acrílico personalizados, como troféus, medalhas e suportes. A interface responsiva e os componentes reutilizáveis facilitam a navegação e a compra, atendendo às necessidades de clientes que buscam qualidade e personalização.",
        image: "/images/mockup_lasermix.png",
        imageAlt: "Mockup do projeto Lasermix, mostrando a interface de uma loja virtual de produtos de acrílico, com destaque para itens personalizados e um design responsivo.",
        technologies: ["Nuvemshop", "Twig", "HTML", "CSS", "Javascript", "Filezilla"],
        link: "https://www.lasermixacrilicos.com.br/",
    },
    {
        id: 5,
        title: "QuitaWeb",
        feat: "Moovefy",
        description: "Sistema web do QuitaWeb, uma plataforma digital que simplifica a negociação e o pagamento de dívidas. O site oferece soluções flexíveis e personalizadas para que usuários possam organizar suas finanças, destacando a praticidade e a segurança na busca pela liberdade financeira.",
        image: "/images/mockup_quitaweb.png",
        imageAlt: "Mockup do projeto QuitaWeb, mostrando a interface de um sistema web com foco em negociação de dívidas, com elementos visuais que transmitem organização e facilidade de uso.",
        technologies: ["Vue", "Nuxt", "Typescript", "Tailwind", "API REST"],
        link: "https://app.quitaweb.com.br/",
    },
];

export default function Projects() {
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(1);

    const total = projects.length;

    const format = (n: number) => String(n).padStart(2, "0");

    return (
        <section id="projetos" className="section-projects">
            <div className="projects-content container">
                <p className="section-top-legend">Portfólio</p>
                <h2 className="section-title">Projetos selecionados</h2>

                <div className="projects-content">
                    <div className="projects-top-pagination">
                        <div 
                            className="button-projects-swiper"
                            onClick={() => swiperRef.current?.slidePrev()}
                        >
                            <Image
                                src="/icons/chevron_left_icon_white.svg"
                                alt="Voltar"
                                width={0}
                                height={0}
                                className="h-4 4xl:h-5 w-auto"
                            />
                        </div>

                        <p className="font-spacegrot text-lv-white/80">
                            {format(activeIndex)} / {format(total)}
                        </p>

                        <div 
                            className="button-projects-swiper" 
                            onClick={() => swiperRef.current?.slideNext()}
                        >
                            <Image
                                src="/icons/chevron_right_icon_white.svg"
                                alt="Avançar"
                                width={0}
                                height={0}
                                className="h-4 4xl:h-5 w-auto"
                            />
                        </div>
                    </div>

                    <Swiper
                        modules={[Pagination]}
                        slidesPerView={1}
                        speed={700}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex + 1)}
                        pagination={{
                            el: ".projects-dots",
                            clickable: true,
                        }}
                    >
                        {projects.map((project) => (
                            <SwiperSlide key={project.id}>
                                <div className="project-slide">
                                    <div className="projet-mockup">
                                        <Image
                                            src={project.image}
                                            alt={project.imageAlt}
                                            fill
                                            className="object-cover object-top"
                                            sizes="100vw"
                                            priority={project.id === 1}
                                        />
                                    </div>

                                    <div className="about-project">
                                        <div>
                                            <h3>{project.title}</h3>
                                            <small className="font-spacegrot text-lv-white/40 tracking-wider uppercase">• {project.feat} •</small>
                                        </div>

                                        <p>{project.description}</p>

                                        <div className="project-techs">
                                            {project.technologies.map((tech) => (
                                                <span key={tech}>{tech}</span>
                                            ))}
                                        </div>

                                        <a href={project.link} target="_blank" rel="noreferrer">
                                            <div className="redirect-project-button group">  
                                                <p> Ver projeto </p>         

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
                                                    className="redirect-icon text-lv-main! lucide lucide-square-arrow-out-up-right-icon lucide-square-arrow-out-up-right h-4.5 transition-all duration-200">
                                                        <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/>
                                                        <path d="m21 3-9 9"/>
                                                        <path d="M15 3h6v6"/>
                                                    </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="projects-dots" />
                </div>
            </div>
        </section>
    );
}