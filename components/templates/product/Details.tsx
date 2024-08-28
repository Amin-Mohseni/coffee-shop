import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterest,
  FaRegStar,
  FaStar,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import { TbSwitch3 } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import Breadcrumb from "./Breadcrumb";

function Details(props: { product: any }) {
  return (
    <main className="flex flex-col gap-y-3 lg:mt-0 mt-10">
      <Breadcrumb title={props.product.name} />
      <h2 className="text-3xl">{props.product.name} </h2>
      <div className="flex items-center gap-3">
        <div className="flex items-center text-[#FECE00] text-xl">
          {[...Array(props.product.score)].map((item, i) => (
            <FaStar key={i} />
          ))}
          {[...Array(5 - props.product.score)].map((item, i) => (
            <FaRegStar className="text-gray-300" key={i} />
          ))}
        </div>
        <p className="text-sm">
          (دیدگاه {props.product.comments.length} کاربر)
        </p>
      </div>

      <p className="text-2xl">{props.product.price.toLocaleString()}</p>
      <span className="text-[#777777]">{props.product.shortDescription}</span>

      <hr />

      <div className="flex items-center gap-1">
        <IoCheckmark />
        <p>موجود در انبار</p>
      </div>

      <div className="flex items-center gap-x-3">
        <div className="border flex items-center gap-x-3 text-sm">
          <span className="py-3 px-2 border hover:border-[#711D1C] cursor-pointer hover:bg-[#711D1C] hover:text-white transition-all">
            -
          </span>
          1
          <span className="py-3 px-2 border hover:border-[#711D1C] cursor-pointer hover:bg-[#711D1C] hover:text-white transition-all">
            +
          </span>
        </div>
        <button className="btn bg-[#008978] text-white hover:bg-[#711D1C] rounded-none">
          افزودن به سبد خرید
        </button>
      </div>

      <section className="flex items-center gap-6">
        <div className="flex items-center gap-1">
          <CiHeart />
          <a href="/">افزودن به علاقه مندی ها</a>
        </div>
        <div className="flex items-center gap-1">
          <TbSwitch3 />
          <a href="/">مقایسه</a>
        </div>
      </section>

      <hr />
      <div className="py-3 flex items-center gap-1">
        <span className="font-bold">برچسب :</span>
        <p className="text-gray-500">{props.product.tags.join(" , ")}</p>
      </div>
      <div className="flex items-center gap-3 text-[#666666] text-lg pb-3">
        <p className="text-[#424242] text-base">به اشتراک گذاری: </p>
        <a className="hover:text-[#424242] transition-all" href="/">
          <FaTelegram />
        </a>
        <a className="hover:text-[#424242] transition-all" href="/">
          <FaLinkedinIn />
        </a>
        <a className="hover:text-[#424242] transition-all" href="/">
          <FaPinterest />
        </a>
        <a className="hover:text-[#424242] transition-all" href="/">
          <FaTwitter />
        </a>
        <a className="hover:text-[#424242] transition-all" href="/">
          <FaFacebookF />
        </a>
      </div>

      <hr />
    </main>
  );
}

export default Details;
