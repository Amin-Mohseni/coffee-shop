"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper as SwiperType } from "swiper/types";

function Gallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const images = [
    "https://set-coffee.com/wp-content/uploads/2020/12/Gold-DG-700x700.jpg",
    "https://set-coffee.com/wp-content/uploads/2020/12/Gold-DG-700x700.jpg",
  ];

  return (
    <section>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "gray",
            "--swiper-pagination-color": "gray",
          } as React.CSSProperties
        }
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {images.map((img) => (
          <SwiperSlide key={img}>
            <img className="w-full" src={img} alt="Gallery" />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="gallery-slider-2"
      >
        {images.map((img) => (
          <SwiperSlide key={img}>
            <img src={img} alt="Thumbnail" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Gallery;
