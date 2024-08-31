import Link from "next/link";
import React from "react";
import { CiSearch, CiHeart, CiShuffle } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaStar, FaRegStar } from "react-icons/fa";
import styles from "./Card.module.css";

interface CardProps {
  name: string;
  price: number;
  score: number;
}

const Card: React.FC<CardProps> = ({ name, price, score }) => {
  return (
    <div className="card w-48 flex flex-col justify-center items-center">
      <figure className="relative group">
        <div className="absolute w-full h-full bg-black/40 top-0 left-0 transition-all duration-300 flex justify-center items-center opacity-0 group-hover:lg:opacity-100 z-10">
          <button
            className={`${styles.btncard} cardbtn btn transition-all btn-ghost border-white relative top-50 left-50 translate-y-[100%] group-hover:translate-y-0 text-white duration-300 opacity-0 group-hover:opacity-100 overflow-hidden w-28 text-xs text-nowrap gap-5`}
          >
            <span>افزودن به سبد خرید</span>
            <span>
              <FiShoppingCart size={25} />
            </span>
          </button>
          <div className="absolute text-white top-3 left-[-200px] group-hover:left-2 transition-all flex flex-col gap-2 items-center justify-center">
            <div
              className="tooltip tooltip-right"
              data-tip="افزودن به علاقه‌مندی"
            >
              <Link className="flex" href={"/"}>
                <CiHeart
                  className="hover:text-gray-300 transition-all duration-300"
                  size={25}
                />
              </Link>
            </div>
            <div className="tooltip tooltip-right" data-tip="مشاهده سریع">
              <Link className="flex" href={"/"}>
                <CiSearch
                  className="hover:text-gray-300 transition-all duration-300"
                  size={25}
                />
              </Link>
            </div>
            <div className="tooltip tooltip-right" data-tip="مقایسه">
              <Link className="flex" href={"/"}>
                <CiShuffle
                  className="hover:text-gray-300 transition-all duration-300"
                  size={25}
                />
              </Link>
            </div>
          </div>
        </div>
        <img
          className="group-hover:scale-105 duration-300"
          src="/images/card.jpg"
          alt="card"
        />
      </figure>
      <button
        className={`${styles.btncard} lg:hidden md:flex cardbtn btn transition-all btn-ghost border-white relative text-white duration-300 bg-green-700 group-hover:opacity-100 overflow-hidden w-32 hover:bg-red-700 m-2 text-xs text-nowrap gap-5`}
      >
        <span>افزودن به سبد خرید</span>
        <span>
          <FiShoppingCart size={25} />
        </span>
      </button>
      <div className="card-body pt-2 text-center">
        <h2 className="text-sm text-gray-500">
          <Link href={"/"}>{name}</Link>
        </h2>
        <div className="flex items-center justify-center text-[#FECE00]">
          {Array.from({ length: score }).map((_, i) => (
            <FaStar key={i} />
          ))}
          {Array.from({ length: 5 - score }).map((_, i) => (
            <FaRegStar key={i} className="text-gray-300" />
          ))}
        </div>
        <span className="text-sm text-[#34180E]">
          {price?.toLocaleString()} تومان
        </span>
      </div>
    </div>
  );
};

export default Card;
