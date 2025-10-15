"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

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
          <div className="slide-item banner-1">
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra erat non velit iaculis, ut facilisis nibh aliquam. Vivamus non nulla ut dolor semper dignissim eu sit amet nunc.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-item banner-2">
            <h2>Nec pharetra Augue Congue quis</h2>
            <p>Nam nec auctor diam, a cursus velit. Nulla ultricies a massa feugiat egestas. Etiam eget vehicula erat, eu varius lacus. Integer eget molestie quam, sit amet lobortis ligula.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-item banner-3">
            <h2>Donec pretium</h2>
            <p>Maecenas lobortis, quam vitae suscipit dignissim, purus lectus scelerisque lorem, sed posuere orci turpis sed tortor.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}