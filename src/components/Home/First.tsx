"use client";


import Image from "next/image";
import Link from "next/link";
import { FaHelmetSafety } from "react-icons/fa6";


export default function First() {
  return (

    <section className="about">
      <div className="container">

        {/* ESQUERDA */}
        <div className="leftGrid">
          <div className="mediaTitle imgA">
            <Image
              src="/imgs/first.jpg"
              alt="Sobre nós"
              fill
              priority
              className="img"
              sizes="(max-width :900px) 90vw, 520px"
            />
          </div>

          <div className="mediatitle stat statTop">
            <div className="statNumber">500+</div>
            <div className="statLabel">Serviços finalizados</div>
          </div>

          <div className="mediatitle stat statBottom">
            <div className="statNumber">20+</div>
            <div className="statLabel">Anos de experiência</div>
          </div>

          <div className="mediatitle imgB">
            <Image
              src="/imgs/first1.jpg"
              alt="Sobre nós"
              fill
              priority
              className="img"
              sizes="(max-width :900px) 90vw, 520px"
            />
          </div>
        </div>

        {/* DIREITA */}

        <div className="rightContent">
          <div className="kicker">
            <span className="kickerIcon">
              <FaHelmetSafety />
            </span>

            <span>Nossos Serviços</span>
          </div>

          <h2 className="title">Conheça os nossos principais
            Serviços.</h2>

          <p className="desc">
            Por todas as suas realizações e história inovadora, a VR Demolidora construiu um nome respeitado e tornou-se sinônimo de qualidade e solidez neste segmento.
          </p>

          <div className="bulletsWrap">
            <div className="bulletBox">
              <ul>
                <li>Terraplenagem</li>
                <li>Demolição</li>
                <li>Locação de Equipamentos</li>
              </ul>
            </div>

            <div className="bulletBox">
              <ul>
                <li>Escavação</li>
                <li>Limpeza de Terreno</li>
                <li>E outros. Todos com qualidade total!</li>
              </ul>
            </div>
          </div>

          <div className="bottmRow">
            <div className="miniCard">
              <span className="miniIcon">
                <FaHelmetSafety />
              </span>
              <div className="miniText">
                <strong>Aluguel de equipamentos pesados</strong>
                <span>Todos aprovados e testados</span>
              </div>
            </div>

            <Link className="cta" href="/sobre">
              Mais sobre nós
            </Link>

          </div>
        </div>
      </div>
    </section>

  );
}
