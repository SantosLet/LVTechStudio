import SkillsIcons from "@/components/SkillsIcons";

export default function AboutMe() {
  return (
    <section id="sobre" className="section-about-me">
      <div className="container">
        <div className="pr-0 lg:pr-12">
          <div className="title-section-container">
            <p className="section-top-legend"> Sobre mim </p>
            <h2 className="section-title text-lv-white"> Resumo profissional </h2>
          </div>

          <div className="summary-experience-container">          
            <div className="summary-about-me">
              <p>
                Sou <strong>Desenvolvedora Front-end</strong> focada em <strong>aplicações web</strong>, criando interfaces <strong>modernas, responsivas e bem estruturadas</strong>. 
                Desde 2022, atuo em projetos organizados em <strong>sprints</strong>, com foco em <strong>entregas contínuas</strong> e evolução constante das soluções.
              </p>

              <p>
                Trabalho na transformação de protótipos em aplicações reais, mantendo fidelidade ao <strong>design</strong> e atenção à <strong>performance</strong>, <strong>SEO</strong> e <strong>experiência do usuário</strong>. 
                Minha atuação é centrada em <strong>Vue e TypeScript</strong>, além do desenvolvimento com <strong>React e Next.js</strong>, sempre aplicando boas práticas de <strong>organização</strong> e <strong>integração com APIs</strong>.
              </p>

              <p>
                Ao longo dessa experiência, desenvolvi também uma base em back-end, o que me permite compreender melhor a estrutura das aplicações e contribuir com integrações mais eficientes. 
                Busco construir interfaces que equilibram <strong>estética, usabilidade e eficiência</strong>, enquanto sigo evoluindo em <strong>UI Design</strong> e <strong>desenvolvimento mobile</strong>.
              </p>
            </div>
          </div>

          <SkillsIcons/>
        </div>

        <div className="experience-training">
          <div className="experience">
            <div className="experience-training-content container-fluid">
              <div className="row example-centered">
                  <div>
                      <ul className="timeline timeline-centered">
                          <li className="timeline-item">
                            <div className="timeline-info">
                              <span> Fev 2026 </span>
                            </div>
                            <div className="timeline-marker"></div>
                            <div className="timeline-content"><p> Início da atuação profissional como desenvolvedora freelancer </p></div>
                          </li>

                          <li className="timeline-item">
                            <div className="timeline-info">
                              <span> Jul 2025 - Jan 2026 </span>
                            </div>
                            <div className="timeline-marker"></div>
                            <div className="timeline-content"><p> Revelare - Desenvolvedora Front-end Júnior </p></div>
                          </li>

                          <li className="timeline-item">
                            <div className="timeline-info">
                              <span> Dez 2025 </span>
                            </div>
                            <div className="timeline-marker"></div>
                            <div className="timeline-content"><p> Conclusão do bacharelado em Ciência da Computação </p></div>
                          </li>

                          <li className="timeline-item">
                            <div className="timeline-info">
                              <span> Jul 2023 - Mai 2025 </span>
                            </div>
                            <div className="timeline-marker"></div>
                            <div className="timeline-content"><p> Moovefy - Desenvolvedora Web Front-end Júnior </p></div>
                          </li>

                          <li className="timeline-item">
                            <div className="timeline-info">
                              <span> Mai 2022 - Jun 2023 </span>
                            </div>
                            <div className="timeline-marker"></div>
                            <div className="timeline-content"><p> Moovefy - Estágio em Desenvolvimento Web </p></div>
                          </li>

                          <li className="timeline-item">
                            <div className="timeline-info">
                              <span> Mar 2022 </span>
                            </div>
                            <div className="timeline-marker"></div>
                            <div className="timeline-content"><p> Início do bacharelado em Ciência da Computação </p></div>
                          </li>

                          <li className="timeline-item pb-0!">
                            <div className="timeline-info">
                              <span> Ago 2020 - Dez 2021 </span>
                            </div>
                            <div className="timeline-marker"></div>
                            <div className="timeline-content"><p> Formação técnica em Desenvolvimento de Sistemas </p></div>
                          </li>
                      </ul>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}