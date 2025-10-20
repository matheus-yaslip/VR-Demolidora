import ContatoForm from "@/components/ContactForm/ContactForm";
import TitlePage from "@/components/TitlePage";
import { settings } from "@/settings/settings";
import "@/styles/index.scss";
import { Metadata } from "next";
import { FaMapMarkedAlt } from "react-icons/fa";

import { FaPhone } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

const { siteName, numeroTelefone, ddd, email } = settings;
const { rua, numero, cidade, estado, cep } = settings.endereco;

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
          <ContatoForm variation="contato-form" />
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.5634247020407!2d-49.1179347!3d-23.404005899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c16b54bc792c4f%3A0xc9902ef74e192f3b!2sLand%20Santa%20Cristina%20III!5e0!3m2!1sen!2sbr!4v1741628245149!5m2!1sen!2sbr"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
}
