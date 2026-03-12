"use client";

import { BsTelephoneForward } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import "@/partials/Rodape/rodape.scss";
import ScrollToTop from "@/components/ScrollToTop";
import { url, settings } from "@/settings/settings";
import { usePathname } from "next/navigation";
import { FaMapMarkedAlt } from "react-icons/fa";

import {
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaFacebookF
} from "react-icons/fa6";


export default function Rodape() {
  const { siteName, numeroTelefone, ddd, email, whatsappApi } =
    settings;
  const { rua, numero, cidade, estado, cep, urlMaps } = settings.endereco;
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const urlFormatted = url.replace(/\/$/, "");
  const fullUrl = `${urlFormatted}${pathname}`;

  return (


    <footer className="footer">
      {/* TOP */}

      <div className="top">
        <div className="container">
          {/* CoL */}
          <div className="col brand">
            <Link className="logoFooter" href={'/'}>
              <Image src="/imgs/logo.jpg" width={220} height={70} alt={`${siteName} logo`} />
            </Link>

            <p className="description">
              Seu parceiro de confiança em locação de equipamentos — impulsionando produtividade,
              performance e o sucesso do seu projeto.
            </p>

            <div className="social">
              <a arial-label="facebook" href="#" target="_blank" rel="noreferrer">
                <FaFacebookF /> 
              </a>

              <a arial-label="linkedin" href="#" target="_blank" rel="noreferrer">
                 <FaLinkedinIn /> 
              </a>

              <a arial-label="X" href="#" target="_blank" rel="noreferrer">
                <FaXTwitter /> 
              </a>

              <a arial-label="instagram" href="#" target="_blank" rel="noreferrer">
               <FaInstagram /> 
              </a>
            </div>
          </div>

          {/* CoL 2*/}

          <nav className="col links">
            <h3 className=" title">Menu</h3>
            <ul className="list">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/">Serviços</Link></li>
              <li><Link href="/">Sobre nós</Link></li>
              <li><Link href="/">Contato</Link></li>
              <li><Link href="/">+</Link></li>
            </ul>
          </nav>

          {/* CoL 3*/}

          <div className="col contact">
            <h3 className="title" > Informações contato </h3>

            <div className=" contatctList">
              <div className="contatctItem">
                <span className="iconCircle">
                  <BsTelephoneForward />
                </span>
                <div className="contactText">
                  <span className="label"> Numero de Telefone</span>
                  <Link href={`tel:0${ddd}${numeroTelefone}`}>{` +${ddd} ${numeroTelefone}`}</Link>
                </div>
              </div>

              <div className="contactItem">
                <span className="iconCircle">
                  <IoMailOutline />
                </span>

                <div className="contactText">
                  <span className="label"></span> Email Address
                  <Link href={`malito :${email}`}>{email}</Link>
                </div>
              </div>

              <div className="contactItem">
                <span className="iconCircle">
                  <FaMapMarkedAlt />
                </span>

                <div className="contactText">
                  <span className="label"> Nossa Localização</span>
                  <Link href={urlMaps} target="_blank">
                    {`${rua}, ${numero} - ${cidade} - ${estado}, ${cep}`}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4 */}
          <div className="col newletter">
            <h3 className="title"> Fale conosco</h3>
            <p className="nextText">
              Deixe seu email abaixo
            </p>

            <form className="form" onSubmit={(e) => e.preventDefault()}>
              <input
                className="input"
                type="email"
                placeholder="Email"
                aria-label="Email"
              />

              <button className="btn" type="submit" arial-label="Escreva-se">
                {/* <HiOutlinePaperAirplane /> */}
              </button>
            </form>

            <span className="finePrint">Em pouco tempo receberá novidades!</span>

          </div>
        </div>
      </div>

      {/* BOTTOM */}

      <div className="bottom">
        <div className="container bottomInner">
          <p className="copy">
            Copyright © {year} {siteName}. All Rights Reserved.
            {" "}

            <Link href={`http://validator.w3.org/check?uri=${fullUrl}`} target="_blank" rel="noreferrer">
              Validator
            </Link>
          </p>

          <div className="legal">
            <Link href="#"> Termos e condições</Link>
            <Link href="#">Politica de Privacidade</Link>
          </div>
        </div>
      </div>

        {/*  WhatsApp */}
      <div className="whatsapp-btn">
        <a target="blank" rel="nofollow" href={whatsappApi} aria-label="Botão Whatsapp">
          <div className="animated infinite zoomIn whatsapp-animate-circulo-pulse"></div>
          <div className="animated infinite pulse whatsapp-btn-bg"></div>
          <div className="animated infinite tada whatsapp-btn-config"></div>
          <span style={{ display: "none" }}>.</span>
        </a>
      </div>

      <ScrollToTop />
    </footer>


  );
}
