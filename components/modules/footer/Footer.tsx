import Link from "next/link";
import React from "react";
import { FaLocationArrow, FaMobile } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
function Footer() {
  return (
    <div className="bg-[#111111] mt-10">
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 justify-center items-start container m-auto py-10">
        <div className="flex flex-col justify-center items-start text-gray-300 px-3 text-sm gap-y-6">
          <Link href={"/"}>
            <img src="/images/logosefid.png" alt="logo" />
          </Link>
          <p>شرکت فنجان داغ خوارزمی، فروشگاه اینترنتی قهوه ست</p>
          <div className="flex justify-center items-center">
            <span>
              <FaLocationArrow className="ml-2" />
            </span>
            <p>
              تهران. شریف آباد . شهرک صنعتی خوارزمی فاز 2 . بلوار بهارستان.
              خیابان ماگنولیا بلوک آ117
            </p>
          </div>
          <div className="flex justify-center items-center">
            <span>
              <FaMobile className="ml-2" />
            </span>
            <p>پیگیری سفارشات : ۰۲۱۸۸۳۰۵۸۲۷</p>
          </div>
          <div className="flex justify-center items-center">
            <span>
              <CiMail className="ml-2" />
            </span>
            <p>support [at] set-coffee.com</p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center">
          <p className="text-white text-lg mb-3 mr-2">آخرین نوشته ها</p>
          {Array(3)
            .fill(1)
            .map((_ , index) => (
              <div
                key={index}
                className="divide-y divide-gray-600 flex pb-4 text-white items-center justify-center"
              >
                <div className="px-5">
                  <img className="min-w-[70px]"
                    width={70}
                    src="/images/cold-berw-coffe.png"
                    alt="coffee"
                  />
                </div>
                <div>
                  <Link href={"/"} className="pt-3 inline-block hover:text-gray-200 transition">
                    چطور یک قهوه موکاپات عالی تهیه کنیم؟
                  </Link>
                  <div className="gap-x-4 flex pt-3 items-center justify-start">
                    <p className="text-gray-400 text-sm text-nowrap">۰۹ مرداد ۱۴۰۳</p>
                    <p className="text-gray-400 text-sm text-nowrap">بدون دیدگاه</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="flex flex-col items-start justify-center px-10">
          <span className="text-white text-lg">دسترسی سریع</span>
          <ul className="flex flex-col text-gray-500 gap-y-3 mt-3">
            <li>
              <Link href={"/"}>حفظ حریم شخصی</Link>
            </li>
            <li>
              <Link href={"/"}>ثبت شکایات</Link>
            </li>
            <li>
              <Link href={"/"}>درباره ما</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-start">
          <span className="text-white text-lg">منوی فوتر</span>
          <ul className="flex flex-col text-gray-500 gap-y-3 mt-3">
            <li>
              <Link href={"/"}>شرایط و قوانین</Link>
            </li>
            <li>
              <Link href={"/"}>شرایط و هزینه ارسال</Link>
            </li>
            <li>
              <Link href={"/"}>ثبت شکایات</Link>
            </li>
            <li>
              <Link href={"/"}>حفظ حریم شخصی</Link>
            </li>
            <li>
              <Link href={"/"}>دیکشنری قهوه</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-2 items-center">
          <div className="flex gap-x-2">
            <div className="w-20 bg-white rounded-md p-2">
              <Link href={"/"}>
                <img src="/images/logo.png" alt="" />
              </Link>
            </div>
            <div className="w-20 bg-white rounded-md p-2">
              <Link href={"/"}>
                <img src="/images/logonama.png" alt="" />
              </Link>
            </div>
          </div>
          <div className="flex gap-x-2">
            <div className="w-16 bg-white p-2 rounded-md">
              <Link href={"/"}>
                <img src="/images/Logo-tejaratbank.jpg" alt="" />
              </Link>
            </div>
            <div className="w-16 bg-white p-2 rounded-md">
              <Link href={"/"}>
                <img src="/images/logo-1.png" alt="" />
              </Link>
            </div>
            <div className="w-16 bg-white p-2 rounded-md">
              <Link href={"/"}>
                <img src="/images/meli-final.jpg" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
