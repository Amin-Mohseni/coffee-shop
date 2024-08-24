"use client";
import React from "react";
import Card from "@/components/modules/card/Card";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

function MoreProducts() {
  return (
    <>
      <div className="mt-10">
        <section className="py-3">
          <h2 className="text-2xl">محصولات مرتبط</h2>
          <div
            style={{
              height: "2px",
              width: "150px",
              background: "black",
              marginTop: "10px",
            }}
          ></div>
        </section>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          dir="rtl"
          rewind={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper "
          breakpoints={{
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default MoreProducts;
