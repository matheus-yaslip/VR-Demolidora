"use client";

import ContactForm from "../ContactForm/ContactForm";
import "../../styles/index.scss";
import { FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { settings } from "@/settings/settings";
import { usePathname } from "next/navigation";
import Link from "next/link";

const { numeroTelefone, ddd, email } = settings;
const { rua, numero, cidade, estado, cep, urlMaps } = settings.endereco;


const mapEmbedUrl =
  "mapEmbedUrl" in settings.endereco
    ? (settings.endereco as { mapEmbedUrl?: string }).mapEmbedUrl
    : undefined;

export default function Form() {
  const pathname = usePathname();
  if (pathname === "/contato") return null;

  const phoneHref = `tel:0${ddd}${numeroTelefone}`;
  const mailHref = `mailto:${email}`;


  const iframeSrc =
    mapEmbedUrl || (urlMaps?.includes("google.com/maps/embed") ? urlMaps : "");

  return (
    <section className="included-form" aria-label="Contato">
      <div className="included-form__container">
        {/* COLUNA ESQUERDA */}
        <div className="included-form__left">
          <div className="included-form__header">
            <span className="included-form__badge">Contato</span>
            <h2 className="included-form__title">
              Vamos falar sobre suas necessidades
            </h2>
            <p className="included-form__subtitle">
              Tire suas dúvidas, consulte disponibilidade e solicite um orçamento.
              Nossa equipe responde rapidamente.
            </p>
          </div>

          <div className="included-form__cards">
            <div className="included-form__contactCard">
              <div className="included-form__contactIcon">
                <FaPhone />
              </div>
              <div className="included-form__contactText">
                <span className="included-form__contactLabel">Ligue agora</span>
                <Link
                  href={phoneHref}
                  target="_blank"
                  rel="noreferrer"
                  className="included-form__contactValue"
                >
                  {`(${ddd}) ${numeroTelefone}`}
                </Link>
              </div>
            </div>

            <div className="included-form__contactCard">
              <div className="included-form__contactIcon">
                <FiMail />
              </div>
              <div className="included-form__contactText">
                <span className="included-form__contactLabel">E-mail</span>
                <Link
                  href={mailHref}
                  target="_blank"
                  rel="noreferrer"
                  className="included-form__contactValue"
                >
                  {email}
                </Link>
              </div>
            </div>
          </div>

          <Link
            href={urlMaps}
            target="_blank"
            rel="noreferrer"
            className="included-form__address"
            aria-label="Abrir endereço no Google Maps"
          >
            <FaMapMarkedAlt />
            <span>{`${rua}, ${numero} - ${cidade} - ${estado}, ${cep}`}</span>
          </Link>

          <div className="included-form__map">
            {iframeSrc ? (
              <iframe
                src={iframeSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                title="Mapa"
              />
            ) : (
              <div className="included-form__mapFallback">
                <p>
                  Mapa não configurado. Adicione{" "}
                  <strong>mapEmbedUrl</strong> nas configurações.
                </p>
                <Link href={urlMaps} target="_blank" rel="noreferrer">
                  Abrir no Google Maps
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* COLUNA DIREITA */}
        <aside className="included-form__right" aria-label="Formulário de contato">
          <div className="included-form__formCard">
            <div className="included-form__formHead">
              <h3>Fale com a gente</h3>
              <p>
                Tem dúvidas sobre valores, disponibilidade ou suporte? Envie uma
                mensagem — estamos prontos para ajudar.
              </p>
            </div>

            <ContactForm variation="contatoFormIncluded" />
          </div>
        </aside>
      </div>
    </section>
  );
}
