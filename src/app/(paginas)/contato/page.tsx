import ContatoForm from "@/components/ContactForm/ContactForm";
import TitlePage from "@/components/TitlePage";
import { settings } from "@/settings/settings";
import "@/styles/index.scss";
import { Metadata } from "next";
import { FaMapMarkedAlt } from "react-icons/fa";

import { FaPhone } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

const { siteName, numeroTelefone, ddd, email } = settings;
const { rua, numero, cidade, estado, cep, mapaEmbed } = settings.endereco;

const title = "Contato";
const description =
  "Exemplo";
const keywords =
  "Exemplo";
const canonical = "contato";

export const metadata: Metadata = {
  title: `${title} | ${siteName}`, // Undo o título do arquivo de configuração
  description, // Usando a descrição
  keywords, // Usando as palavras-chave
  alternates: {
    canonical, // URL canônica
  },
  openGraph: {
    url: canonical,
    title: `${title} | ${siteName}`,
    description: description,
    images: [
      {
        url: "/logo.webp", // Imagem para Open Graph
        width: 300,
        height: 200,
        alt: "Imagem representativa do Site",
      },
    ],
    siteName,
    type: "website",
  },
};

export default function Contato() {
  return (
    <>
      <TitlePage title={title} />
      <div className="container-contato">
        <div className="base">
          <div className="box-details">
            <div className="box-title">
              <h2 className="title">Entre em contato</h2>
              <p className="description">
                Tire suas dúvidas e solicite um orçamento.
              </p>
            </div>
            <div className="contact">
              <a
                href={`tel:0${ddd}${numeroTelefone}`}
                target="_blank"
                rel="noreferrer"
              >
                <FaPhone /> {`(${ddd}) ${numeroTelefone}`}
              </a>
              <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
                <FiMail /> {`${email}`}
              </a>
              <a href="" target="_blank" rel="noreferrer">
                <FaMapMarkedAlt />{" "}
                {`${rua}, ${numero} - ${cidade} - ${estado}, ${cep}`}
              </a>
            </div>
          </div>
          <ContatoForm variation="contatoForm" />
        </div>
        <iframe
          src={mapaEmbed}
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
}
