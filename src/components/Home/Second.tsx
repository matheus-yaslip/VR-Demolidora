"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHelmetSafety } from "react-icons/fa6";

export default function Second() {
  const slides = [
    {
      image: "/imgs/first.jpg",
      alt: "Sobre nós - 1",
      kicker: "Sobre nós",
      title: "Excelência em obras e segurança.",
      desc: "Atuamos com foco em qualidade, prazo e segurança — do planejamento à entrega final.",
      bulletsLeft: ["Equipe especializada", "Obras sob medida", "Padrão de qualidade"],
      bulletsRight: ["Compromisso com prazos", "Transparência total", "Suporte contínuo"],
      statTop: { number: "500+", label: "Projetos entregues" },
      statBottom: { number: "10+", label: "Anos de experiência" },
      mini: { strong: "Atendimento consultivo", span: "Da ideia ao acabamento." },
      ctaHref: "/sobre",
      ctaText: "Mais sobre nós",
    },
    {
      image: "/imgs/first1.jpg",
      alt: "Sobre nós - 2",
      kicker: "Nossa estrutura",
      title: "Processos bem definidos, resultados melhores.",
      desc: "Organização e metodologia para garantir previsibilidade, eficiência e qualidade em cada etapa.",
      bulletsLeft: ["Planejamento detalhado", "Gestão de materiais", "Padronização"],
      bulletsRight: ["Checklists de obra", "Relatórios frequentes", "Melhoria contínua"],
      statTop: { number: "120+", label: "Clientes atendidos" },
      statBottom: { number: "24/7", label: "Suporte e acompanhamento" },
      mini: { strong: "Gestão completa", span: "Cronograma + execução." },
      ctaHref: "/sobre",
      ctaText: "Conheça nossa estrutura",
    },
    {
      image: "/imgs/sobre3.jpg",
      alt: "Sobre nós - 3",
      kicker: "Nosso diferencial",
      title: "Confiança construída em cada entrega.",
      desc: "Trabalhamos com responsabilidade, comunicação clara e execução consistente para gerar confiança.",
      bulletsLeft: ["Mão de obra qualificada", "Acabamento premium", "Segurança em primeiro lugar"],
      bulletsRight: ["Orçamento transparente", "Prazos realistas", "Garantia de serviço"],
      statTop: { number: "98%", label: "Satisfação" },
      statBottom: { number: "100%", label: "Conformidade em segurança" },
      mini: { strong: "Qualidade comprovada", span: "Detalhe em tudo." },
      ctaHref: "/sobre",
      ctaText: "Veja nosso diferencial",
    },
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => clearInterval(id);
  }, [slides.length]);

  const s = slides[active];

  return (
    <section className="second-about">
      <div className="second-container">
        {/* ESQUERDA */}
        <div className="second-leftGrid">
          <div className="second-title second-imgA second-swap" key={`img-${active}`}>
            <Image
              src={s.image}
              alt={s.alt}
              fill
              priority
              className="second-img"
              sizes="(max-width: 900px) 90vw, 520px"
            />
          </div>

          <div className="second-title second-stat second-statTop second-swap">
            <div className="second-statNumber">{s.statTop.number}</div>
            <div className="second-statLabel">{s.statTop.label}</div>
          </div>

          <div className="second-title second-stat second-statBottom second-swap">
            <div className="second-statNumber">{s.statBottom.number}</div>
            <div className="second-statLabel">{s.statBottom.label}</div>
          </div>

          {/* Dots */}
          <div className="second-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`second-dot ${i === active ? "second-isActive" : ""}`}
                onClick={() => setActive(i)}
                type="button"
              />
            ))}
          </div>
        </div>

        {/* DIREITA */}
        <div className="second-rightContent second-swap" key={`content-${active}`}>
          <div className="second-kicker">
            <span className="second-kickerIcon">
              <FaHelmetSafety />
            </span>
            <span>{s.kicker}</span>
          </div>

          <h2 className="second-titleText">{s.title}</h2>

          <p className="second-desc">{s.desc}</p>

          <div className="second-bulletsWrap">
            <div className="second-bulletBox">
              <ul>
                {s.bulletsLeft.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </div>

            <div className="second-bulletBox">
              <ul>
                {s.bulletsRight.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="second-bottmRow">
            <div className="second-miniCard">
              <span className="second-miniIcon">
                <FaHelmetSafety />
              </span>
              <div className="second-miniText">
                <strong>{s.mini.strong}</strong>
                <span>{s.mini.span}</span>
              </div>
            </div>

            <Link className="second-cta" href={s.ctaHref}>
              {s.ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
