import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterest,
  FaStar,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import { TbSwitch3 } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import Breadcrumb from "./Breadcrumb";

function Details() {
  return (
    <main className="flex flex-col gap-y-3 lg:mt-0 mt-10">
      <Breadcrumb
        title={
          "کپسول قهوه SETpresso سازگار با دستگاه نسپرسو ( GOLD ) ده -10- عددی"
        }
      />
      <h2 className="text-3xl">
        کپسول قهوه SETpresso سازگار با دستگاه نسپرسو ( GOLD ) ده -10- عددی
      </h2>
      <div className="flex items-center gap-3">
        <div className="flex items-center text-[#FECE00]">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <p className="text-sm">(دیدگاه 7 کاربر)</p>
      </div>

      <p className="text-2xl">205,000 تومان</p>
      <span className="text-[#777777]">
        کپسول قهوه ست مدل Gold سازگار با دستگاههای کپسولی نسپرسو می باشد . ترکیب
        این قهوه عربیکا بوده و با برشته کاری متوسط درجاتی از اسیدیته به همراه تن
        واری متوسط , و برای ترکیب با شیر بسیار عالی می باشد.
      </span>

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

      <div className="flex items-center gap-3 text-[#666666] text-lg py-3">
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
