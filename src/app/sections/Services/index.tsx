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
    description: "Entendimento do projeto, objetivos e alinhamento de escopo e prazos.",
  },
  {
    icon: "describe_warehouse",
    title: "Planejamento",
    description: "Definição de arquitetura, tecnologias e organização do código.",
  },
  {
    icon: "get_prebooked",
    title: "Desenvolvimento",
    description: "Desenvolvimento com foco em performance e fidelidade ao design.",
  },
  {
    icon: "contract",
    title: "Entrega e QA",
    description: "Testes, revisão final, deploy, documentação e suporte pós-entrega.",
  },
];

export default function Services() {
    return (
        <section id="servicos" className="section-services">
            <div className="container">
                <div className="services-container">
                    <div className="services-content">
                        <div>
                            <p className="section-top-legend"> Serviços </p>
                            <h2 className="section-title mb-8"> Como posso ajudar </h2>

                            <p className="text-about-services">
                                Transformo sua ideia em uma aplicação bem construída, com código organizado, boa performance e uma interface que <br />realmente funciona no dia a dia.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Button href="#projetos">
                                    Ver projetos
                                </Button>

                                <Button href="#contato" variant="secondary">
                                    Fale comigo
                                </Button>
                            </div>
                        </div>

                        <div className="services-cards">
                            <div className="card border-b border-lv-white">
                                <div>
                                    <Image
                                        src="/icons/monitor_smartphone_icon_orange.svg"
                                        alt="Ícone Responsividade"
                                        width={0}
                                        height={0}
                                        className="h-6.5 w-auto"
                                    />
                                    <p className="service-title"> Landing Pages e Sites </p>
                                </div>

                                <p className="service-description"> Interfaces responsivas a partir de layout, com estrutura consistente. </p>
                            </div>

                            <div className="card border-l-0 border-b sm:border-l border-lv-white">
                                <div>
                                    <Image
                                        src="/icons/database_icon_orange.svg"
                                        alt="Ícone API"
                                        width={0}
                                        height={0}
                                        className="h-6 w-auto"
                                    />
                                    <p className="service-title"> Consumo de API </p>
                                </div>

                                <p className="service-description"> Integração com APIs REST e tratamento de dados para aplicações dinâmicas. </p>
                            </div>

                            <div className="card">
                                <div>
                                    <Image
                                        src="/icons/puzzle_icon_orange.svg"
                                        alt="Ícone Interface"
                                        width={0}
                                        height={0}
                                        className="h-6 w-auto"
                                    />
                                    <p className="service-title"> Interfaces de Sistemas </p>
                                </div>
                                
                                <p className="service-description"> Telas para dashboards e sistemas, com componentização e organização. </p>
                            </div>
                            
                            <div className="card border-t sm:border-t-0 sm:border-l border-lv-white">
                                <div>
                                    <Image
                                        src="/icons/globe_icon_orange.svg"
                                        alt="Ícone Interface"
                                        width={0}
                                        height={0}
                                        className="h-6 w-auto"
                                    />
                                    <p className="service-title"> Performance e SEO </p>
                                </div>

                                <p className="service-description"> Otimização de carregamento e ajustes para melhor desempenho e indexação. </p>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="process-content">
                    <p className="section-top-legend"> Processo e Trabalho </p>
                    <h3> Do briefing à entrega </h3>

                    <div className="steps-container">
                        {steps.map((e, i) => (
                            <div key={i} className="step">
                                <div>
                                    <div className="step-dot" />
                                    <div className="step-line"/>
                                </div>

                                <h3 className="section-title">0{i+1}</h3>
                                <p className="step-title">{e.title}</p>
                                <p className="step-description">{e.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}