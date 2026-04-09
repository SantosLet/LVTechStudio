"use client";

import Button from "@/components/Button";
import Image from "next/image";

export default function Contact() {
    return (
        <section id="contato" className="section-contact">
            <div className="contact-container container">
                <div className="grid grid-cols-[auto_1fr]">
                    <div>
                        <p className="section-top-legend"> Contato </p>
                        <h2 className="section-title"> Fale comigo </h2>
                        <p className="text-lv-gray mt-6 max-w-110">
                            Disponível para vagas, contratos e projetos freelance. Conte sobre sua ideia ou oportunidade.
                        </p>

                        <div className="flex gap-4 mt-8 mb-2">
                            <Button href="#servicos" variant="primary">
                                Ver serviços
                            </Button>

                            <Button 
                                href="/documents/leticia_videira_cv.pdf" 
                                variant="secondary"
                                download
                            >
                                Baixar CV

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="ml-3 size-4 transition-colors"
                                >
                                    <path d="M12 15V3" />
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <path d="m7 10 5 5 5-5" />
                                </svg>
                            </Button>
                        </div>
                    </div>

                    <Image
                        src="/icons/cat_contact_me.svg"
                        alt="Gatinho dando oi"
                        width={0}
                        height={0}
                        className="cat-contact-me"
                    />
                </div>

                <div className="medias-container">
                    <a 
                        href="mailto:dev.leticiasantos@gmail.com" 
                        target="_blank"
                        className="email-contact"
                    >
                        <Image
                            src="/icons/arrow_link_icon_black.svg"
                            alt="Redirecionar"
                            width={0}
                            height={0}
                            className="button-redirect"
                        />

                        <div>
                            <div className="media-contact">
                                <Image
                                    src="/icons/mail_icon_orange.svg"
                                    alt="E-mail"
                                    width={0}
                                    height={0}
                                    className="h-6 w-auto mb-4"
                                />
                                <p> E-mail </p>
                            </div>

                            <p className="contact-info"> dev.leticiasantos@gmail.com </p>
                        </div>
                    </a>

                    <a 
                        href="https://www.linkedin.com/in/devleticiagvsantos/" 
                        target="_blank"
                        className="linkedin-contact"
                    >
                        <Image
                            src="/icons/arrow_link_icon_black.svg"
                            alt="Redirecionar"
                            width={0}
                            height={0}
                            className="button-redirect"
                        />

                        <div>
                            <div className="media-contact">
                                <Image
                                    src="/icons/linkedin_icon_orange.svg"
                                    alt="LinkedIn"
                                    width={0}
                                    height={0}
                                    className="h-6 w-auto mb-4"
                                />
                                <p> LinkedIn </p>
                            </div>

                            <p className="contact-info"> linkedin.com/in/devleticiagvsantos/ </p>
                        </div>
                    </a>

                    <a 
                        href="https://www.github.com/SantosLet" 
                        target="_blank"
                        className="github-contact"    
                    >
                        <Image
                            src="/icons/arrow_link_icon_black.svg"
                            alt="Redirecionar"
                            width={0}
                            height={0}
                            className="button-redirect"
                        />

                        <div>
                            <div className="media-contact">
                                <Image
                                    src="/icons/github_icon_orange.svg"
                                    alt="Github"
                                    width={0}
                                    height={0}
                                    className="h-6 w-auto mb-4"
                                />
                                <p> GitHub </p>
                            </div>

                            <p className="contact-info"> github.com/SantosLet </p>
                        </div>
                    </a>
                    
                    <a 
                        href="https://www.behance.net/devleticiagvsantos" 
                        target="_blank"
                        className="behance-contact"
                    >
                        <Image
                            src="/icons/arrow_link_icon_black.svg"
                            alt="Redirecionar"
                            width={0}
                            height={0}
                            className="button-redirect"
                        />

                        <div>
                            <div className="media-contact">
                                <Image
                                    src="/icons/behance_icon_orange.svg"
                                    alt="Behance"
                                    width={0}
                                    height={0}
                                    className="h-7 w-auto mb-4"
                                />
                                <p> Behance </p>
                            </div>
                            
                            <p className="contact-info"> be.net/devleticiagvsantos </p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}