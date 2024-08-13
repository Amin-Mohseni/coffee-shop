"use client";
import { FaRegMessage, FaXTwitter } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import {
  FaFacebookF,
  FaPinterest,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Link from "next/link";

function ArticleSlide() {
  return (
    <div data-aos="fade-up" className="lg:my-20 mt-10">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper cursor-pointer"
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {Array(4)
          .fill(1)
          .map((items, indx) => (
            <SwiperSlide key={indx}>
              <div className="relative transition-all group overflow-hidden">
                <div className="">
                  <img
                    className="w-full object-cover object-center group-hover:scale-110 duration-300"
                    src="/images/cold-berw-coffe.png"
                    alt="coffee"
                  />
                </div>
                <div className="absolute w-full h-full top-0 left-0 hover:bg-black/40 duration-300 bg-gradient-to-t from-10% from-black/80 to-transparent   ">
                  <div className="flex h-full flex-col justify-end items-center z-10 pb-5 gap-y-3">
                    <span>
                      <Link
                        className="bg-[#34180E] text-white text-md hover:text-gray-200 transition-all px-3 py-1"
                        href={"/"}
                      >
                        قهوه
                      </Link>
                    </span>
                    <span>
                      <Link
                        href={"/"}
                        className="text-white text-2xl hover:text-gray-200 transition-all"
                      >
                        چطور یک قهوه موکاپات عالی تهیه کنیم؟
                      </Link>
                    </span>
                    <div className="flex items-center justify-center text-gray-400 gap-x-2">
                      <span>نویسنده</span>
                      <span className="rounded-full w-5 h-5 overflow-hidden">
                        <img
                          className="object-cover object-center"
                          src="/images/profile.jpg"
                          alt=""
                        />
                      </span>
                      <span>
                        <Link className="text-sm" href={"/"}>
                          AmiNoise
                        </Link>
                      </span>
                      <span className="relative">
                        <FaRegMessage />
                        <div className="absolute top-[-10px] left-[-10px] badge bg-[#34180E] w-5 h-5 text-white border-none">
                          ۰
                        </div>
                      </span>
                      <span className="mr-2 dropdown dropdown-top dropdown-hover relative">
                        <IoShareSocialOutline size={23} />
                        <div className="dropdown-content absolute left-[-70px]">
                          <ul className="flex items-center justify-center bg-gray-800 text-white gap-x-4 px-4 py-2">
                            <li className="hover:text-gray-300 transition-all">
                              <Link href={"/"}>
                                <FaFacebookF />
                              </Link>
                            </li>
                            <li className="hover:text-gray-300 transition-all">
                              <Link href={"/"}>
                                <FaXTwitter />
                              </Link>
                            </li>
                            <li className="hover:text-gray-300 transition-all">
                              <Link href={"/"}>
                                <FaPinterest />
                              </Link>
                            </li>
                            <li className="hover:text-gray-300 transition-all">
                              <Link href={"/"}>
                                <FaLinkedinIn />
                              </Link>
                            </li>
                            <li className="hover:text-gray-300 transition-all">
                              <Link href={"/"}>
                                <FaTelegramPlane />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default ArticleSlide;
