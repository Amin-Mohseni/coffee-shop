import Link from "next/link";
import React from "react";

function Promote() {
  return (
    <div className="bg-[#F3F3F3] px-10 py-6 lg:mt-10">
      <div className="container m-auto">
        <main className="grid lg:grid-cols-3 w-full justify-center gap-y-5 lg:gap-0 items-end ">
          <section
            data-aos="fade-left"
            className="flex flex-col items-center justify-center text-center"
          >
            <span className="text-4xl text-[#104639] pt-18">
              خرید قهوه ، به سبک حرفه ای ها
            </span>
            <p className="text-gray-400">زیبایی امروز رو با قهوه “ست” کنید</p>
            <Link className="underline mt-3" href={"/"}>
              تماس با ما
            </Link>
            <img
              data-aos="fade-up"
              className="mt-5"
              src="/images/coffee-image-1.jpg"
              alt=""
            />
          </section>
          <section
            data-aos="fade-right"
            className="flex justify-center items-center lg:col-span-2"
          >
            <div className="relative max-w-[680px] w-full shadow">
              <img
                className="w-full"
                src="/images/clubset1-430x316.jpg"
                alt=""
              />
              <div
                data-aos="fade-up"
                className="bg-[#f3f3f3] absolute bottom-0 left-0 flex justify-center flex-col items-end px-6 py-3 gap-3 min-w-[400px]"
              >
                <span className="text-4xl text-[#104639]">
                  باشگاه مشتریان ست
                </span>
                <p className="text-gray-400">برای مشتریان وفادار قهوه ست</p>
                <Link className="underline" href={"/"}>
                  اطلاعات بیشتر
                </Link>
              </div>
            </div>
          </section>
        </main>
        <section className="grid lg:grid-cols-2 lg:mt-24 mt-6 gap-y-5 lg:gap-0">
          <div data-aos="fade-left">
            <img className="w-full" src="/images/Home32-430x317.jpg" alt="" />
          </div>
          <div data-aos="fade-right" className="flex flex-col justify-center items-start gap-5 pr-6">
            <img width={80} src="/images/coffee-svg-2.svg" alt="" />
            <span className="text-5xl text-[#711D1C]">چرا قهوه ست</span>
            <p className="text-gray-400">
              برخورداری از تجربه و قدمت کافی و آگاهی از ذایقه مصرف کنندگان
              راهنمای ما در برآورده ساختن نیاز مشتریان قهوه تخصصی (موج سوم) است
              .تجربه ای به قدمت چهار نسل و ارتباط مستمر با مصرف کنندگان قهوه
              ضامن این ویژگیها است.
            </p>
            <div>
              <Link className="" href={"/"}>
                <button className=" btn bg-[#2f0c00] text-white hover:text-gray-200 hover:bg-[#2f0c00] rounded-none transition-all">
                  بیشتر بخوانید
                </button>
              </Link>
              <Link className="m-0" href={"/"}>
                <button className="border btn rounded-none">فروشگاه</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Promote;
