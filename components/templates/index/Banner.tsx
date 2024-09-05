"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

function Banner() {
  return (
    <div className="md:p-0 pt-16">
      <Swiper
        style={{ color: "#fff" }}
        loop={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 5000,
        }}
        pagination={{
          el: "#containerForBullets",
          type: "bullets",
          bulletClass: "swiper-custom-bullet",
          bulletActiveClass: "swiper-custom-bullet-active",
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/slide-1.jpg" alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide-2.jpg" alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide-3.jpg" alt="slide" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
