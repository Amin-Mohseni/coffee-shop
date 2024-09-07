import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { CiSearch, CiShuffle } from "react-icons/ci";
import AddtoWishList from "@/components/templates/product/AddtoWishList";
import Link from "next/link";
import { FaRegStar, FaStar } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import styles from "./wishCard.module.css";

interface WishCardProps {
  name: string;
  price: number;
  score: number;
  _id: string;
}

const WishCard: React.FC<WishCardProps> = ({ name, price, score, _id }) => {
  const maxStars = 5;

  return (
    <div className="card w-full max-w-[300px] flex flex-col justify-center items-center">
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
          {Array.from({ length: maxStars - score }).map((_, i) => (
            <FaRegStar key={i} className="text-gray-300" />
          ))}
        </div>
        <span className="text-sm text-[#34180E]">
          {price?.toLocaleString()} تومان
        </span>
      </div>

      <button className="btn bg-[#008978] relative group text-white border-none hover:bg-[#34180E] rounded-none w-[200px] text-[16px] transition-all">
        <span className="absolute group-hover:-translate-y-8 duration-300 ease-in">
          حذف محصول
        </span>
        <span className="absolute group-hover:translate-y-0 translate-y-12 duration-300 ease-in">
          <RiDeleteBinLine size={25} />
        </span>
      </button>
    </div>
  );
};

export default WishCard;
