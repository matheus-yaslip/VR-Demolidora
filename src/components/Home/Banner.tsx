"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="banner">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        className="mySwiper"
      >

        <SwiperSlide>
          <div className="slide-item hero">
            <div className="container">
              <div className="content">
                <span className="kicker">
                  <i className="kickerLine" />
                  Bem-vindo ao Nosso Site
                </span>


                <h2 className="title">
                  VR Demolidora
                  <br />
                  Equipamentos e Serviços
                </h2>

                <p className="subtitle">
                  Conheça a VR Demolidora
                  Trabalhamos com equipamentos modernos e serviços de alta qualidade, garantindo eficiência,<br />segurança e confiança para sua obra do início ao fim.
                </p>

                <Link className="cta" href="/sobre">
                  Veja mais <span className="aarow">→</span>
                </Link>
              </div>

              <div className="media">
                <Image
                  className="tractor"
                  src="/imgs/trator.webp"
                  alt="Equipamento "
                  width={1100}
                  height={650}
                  priority
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
