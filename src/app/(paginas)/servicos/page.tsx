"use client";

import { useState, useId } from "react";
import Image from "next/image";
import TitlePage from "@/components/TitlePage";
import { Plus, Minus } from "lucide-react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
// import "./faq-split-section.scss";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export default function FaqSplitSection() {
  const sectionId = useId();

  const FAQS: FaqItem[] = [
    {
      id: "1",
      question: "Vocês oferecem equipamentos para venda e locação?",
      answer:
        "Sim. Trabalhamos com locação diária, semanal e mensal, além da venda de equipamentos selecionados.",
    },
    {
      id: "2",
      question: "Quais segmentos vocês atendem?",
      answer:
        "Atendemos construção civil, terraplanagem, infraestrutura, mineração e obras industriais.",
    },
    {
      id: "3",
      question: "Vocês oferecem suporte pós-venda?",
      answer:
        "Sim. Disponibilizamos suporte técnico, manutenção preventiva e corretiva.",
    },
    {
      id: "4",
      question: "Como posso solicitar um orçamento?",
      answer:
        "Você pode entrar em contato via WhatsApp, telefone ou formulário no site informando os detalhes da obra.",
    },
    {
      id: "5",
      question: "Vocês oferecem treinamento para operadores?",
      answer:
        "Oferecemos orientação operacional e suporte técnico conforme necessidade do cliente.",
    },
    {
      id: "6",
      question: "Onde os serviços estão disponíveis?",
      answer:
        "Atendemos conforme região e disponibilidade de frota. Consulte sua cidade.",
    },
  ];

  const [active, setActive] = useState<string | null>(FAQS[0].id);

  const title = "Serviços";
const description =
  "Exemplo";
const keywords =
  "Exemplo";
const canonical = "contato";

  return (

    <>
    <TitlePage title={title} />
    <section className="faqBlock">
      <div className="faqContainer">
        {/* IMAGEM */}
        <div className="faqImageSide">
          <div className="faqImageWrap">
            <Image
              src="/imgs/services2.jpg"
              alt="Operador em máquina pesada"
              fill
              className="faqImage"
            />
          </div>
        </div>

        {/* CONTEÚDO */}
        <div className="faqContentSide">
          <span className="faqMiniTitle">
            <span className="faqMiniDot" />
            FAQs
          </span>

          <h2 id={`${sectionId}-title`} className="faqHeading">
            <span className="faqHeadingLight">Suas Perguntas,</span>
            <span className="faqHeadingHighlight"> Nossas Respostas</span>
          </h2>

          <div className="faqAccordion">
            {FAQS.map((item) => {
              const isOpen = active === item.id;

              return (
                <div key={item.id} className="faqItem">
                  <button
                    className="faqButton"
                    onClick={() =>
                      setActive((prev) => (prev === item.id ? null : item.id))
                    }
                  >
                    <span>{item.question}</span>
                    <span className="faqIconCircle">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>

                  <div className={`faqAnswer ${isOpen ? "open" : ""}`}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>


      <section className="excHero">
      <div className="excHero__container">
        {/* LEFT */}
        <div className="excHero__left">
          <div className="excHero__kicker">
            <span className="excHero__kickerArrow">›</span>
            <span className="excHero__kickerText">TYPE</span>
          </div>

          <h1 className="excHero__title">
            <span className="excHero__titleWhite">320D, </span>
            <span className="excHero__titleAccent">Excavator</span>
          </h1>

          <p className="excHero__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris.
          </p>

          <blockquote className="excHero__quote">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo.
          </blockquote>

          <div className="excHero__components">
            <div className="excHero__componentsLabel">Key Components :</div>

            <ul className="excHero__list">
              <li className="excHero__listItem">
                <span className="excHero__check">
                  <Check size={16} />
                </span>
                Cab/House
              </li>
              <li className="excHero__listItem">
                <span className="excHero__check">
                  <Check size={16} />
                </span>
                Boom &amp; Stick (Arm)
              </li>
              <li className="excHero__listItem">
                <span className="excHero__check">
                  <Check size={16} />
                </span>
                Bucket/Attachment
              </li>
              <li className="excHero__listItem">
                <span className="excHero__check">
                  <Check size={16} />
                </span>
                Undercarriage
              </li>
            </ul>
          </div>

          <button className="excHero__cta" type="button">
            More Detail
          </button>
        </div>

        {/* RIGHT */}
        <div className="excHero__right">
          <div className="excHero__imageCard">
            <div className="excHero__imageCardInner">
              <Image
                src="/imgs/services.jpg"
                alt="Excavator"
                fill
                priority
                className="excHero__image"
              />
            </div>
          </div>

          {/* OVERLAY SLIDER */}
          <div className="excHero__sliderCard">
            <button className="excHero__navBtn" aria-label="Previous">
              <ChevronLeft size={24} />
            </button>

            <div className="excHero__thumbs">
              <div className="excHero__thumb">
                <Image
                  src="/imgs/trator.webp"
                  alt="Thumbnail 1"
                  fill
                  className="excHero__thumbImg"
                />
              </div>
              <div className="excHero__thumb">
                <Image
                  src="/imgs/trator-2.webp"
                  alt="Thumbnail 2"
                  fill
                  className="excHero__thumbImg"
                />
              </div>
            </div>

            <button className="excHero__navBtn" aria-label="Next">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>


    </>
  );
}