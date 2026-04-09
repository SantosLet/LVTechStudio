"use client";

import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export default function Testimonials() {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);

    return (
        <section className="section-testimonials">
            <div className="container">
                <p className="section-top-legend"> Depoimentos </p>
                <h2 className="section-title"> O que dizem sobre mim </h2>

                <div className="testimonials-cards relative">
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
                        modules={[Navigation]}
                        spaceBetween={24}
                        slidesPerView={1}
                        navigation={{
                            prevEl: ".testimonial-prev",
                            nextEl: ".testimonial-next"
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        <SwiperSlide>
                            <div className="testimonial-card">
                                <Image
                                    src="/icons/quote_icon_orange.svg"
                                    alt=""
                                    width={0}
                                    height={0}
                                    className="h-5 w-auto"
                                />

                                <p className="testimonial-message">
                                    "Dedicada e uma das melhores devs com quem já trabalhei. Vai além do 'apenas fazer funcionar', entendendo impactos e problemas. Recomendo muito e trabalharia novamente."
                                </p>

                                <div className="testimonial-author">
                                    <p className="author-name"> Diogo B. Moreno </p>
                                    <p className="author-position"> Dev Full Stack | Ex-Tech Lead </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="testimonial-card">
                                <Image
                                    src="/icons/quote_icon_orange.svg"
                                    alt=""
                                    width={0}
                                    height={0}
                                    className="h-5 w-auto"
                                />

                                <p className="testimonial-message">
                                    "Profissional fora da curva, muito dedicada e estudiosa. Aprende rápido e propõe melhorias que vão além do seu escopo de trabalho inicial. Realmente diferenciada, recomendo!"
                                </p>

                                <div className="testimonial-author">
                                    <p className="author-name"> Thainá Sales </p>
                                    <p className="author-position"> Especialista em Estratégia e Branding </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="testimonial-card">
                                <Image
                                    src="/icons/quote_icon_orange.svg"
                                    alt=""
                                    width={0}
                                    height={0}
                                    className="h-5 w-auto"
                                />

                                <p className="testimonial-message">
                                    "Acompanhei a trajetória profissional da Letícia e é admirável sua evolução como desenvolvedora. Ela me guiou no início e mudou minha forma de aprender, organizar e programar."
                                </p>

                                <div className="testimonial-author">
                                    <p className="author-name"> Gabriel Campos </p>
                                    <p className="author-position"> Desenvolvedor Web e Estudante de TI </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="testimonial-card">
                                <Image
                                    src="/icons/quote_icon_orange.svg"
                                    alt=""
                                    width={0}
                                    height={0}
                                    className="h-5 w-auto"
                                />

                                <p className="testimonial-message">
                                    “A Letícia foi essencial na construção da interface do meu projeto. Com clareza e senso de organização, ela me mostrou como estruturar um design limpo e funcional, elevando muito meu nível.”
                                </p>

                                <div className="testimonial-author">
                                    <p className="author-name"> João Paulo do Amaral </p>
                                    <p className="author-position"> Analista Contábil </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}