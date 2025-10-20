import { SiteSettings } from "@/types";

const siteName = "Site Base";
const title = `Início | ${siteName}`;
const description = "Exemplo";
const keywords = "Exemplo";
export const url = "https://www.nomesite.com.br/";

// True = Ativo || False = Inativo - Para ativar ou desativar os "includes" das páginas contratadas
export const includes = {
  SaibaMais: true,
  OutrosAssuntos: true,
  MaisVisitados: true,
  TagsPagina: true,
  Copyright: true,
};

export const settings: SiteSettings = {
  title, // Título da página - Obs: Esse titulo é o padrão, cada página deve conter um Metadata
  description, // Descrição da página - Obs: Essa descrição é padrão, cada página deve conter um Metadata
  siteName,
  keywords, // Palavras-chave para SEO index
  canonical: url,
  ddd: "11",
  selosDark: true, // Selos Rodapé - True = Preto ||  False = Branco
  numeroTelefone: "90000-0000",
  whatsappApi: "https://api.whatsapp.com/send?phone=5511900000000",
  numeroWhatsapp: "90000-0000",
  email: "wesley@yaslip.com.br",
  emailDestinatario: "wesley@yaslip.com.br",
  endereco: {
    urlMaps: "https://maps.app.goo.gl/caH1G5Rs1tBdgBRw9",
    rua: "Rua Exemplo",
    numero: "123",
    cidade: "São Paulo",
    estado: "SP",
    cep: "00000-000",
  },
  openGraph: {
    url,
    title,
    description,
    images: [
      {
        url: "/logo.webp",
        width: 300,
        height: 200,
        alt: "Imagem representativa do Site",
      },
    ],
    siteName,
    locale: "pt_BR", // Definindo a localidade do Open Graph
    region: "Brasil", // Definindo a região
  },
  robots: "index, follow",
};
