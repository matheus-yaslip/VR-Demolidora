import { settings } from "@/settings/settings";
import { Metadata } from "next";

const { siteName } = settings;

const title = "Serviços";
const description = 
  "Conheça projetos de energia solar da Solare em residências, empresas e áreas rurais com sistemas fotovoltaicos eficientes e economia real.";

const keywords =
  "projetos de energia solar, instalação painel solar, projetos fotovoltaicos, energia solar residencial, Solare Sistemas";

const canonical = "Serviços";

export const metadata: Metadata = {
  title: `${title} | ${siteName}`,
  description,
  keywords,
  alternates: {
    canonical,
  },
  openGraph: {
    url: canonical,
    title: `${title} | ${siteName}`,
    description,
    siteName,
    type: "website",
    images: [
      {
        url: "/logo.webp",
        width: 300,
        height: 240,
        alt: "Imagem representativa do site",
      },
    ],
  },
};