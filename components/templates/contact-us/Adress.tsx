import Link from "next/link";
import React from "react";

function Adress() {
  return (
    <div className="grid lg:grid-cols-2 gap-y-10">
      <div className="text-gray-500 flex flex-col py-3 px-6 gap-4 shadow-md w-fit m-auto">
        <span>فروشگاه ما</span>
        <p className="text-black text-2xl">
          آدرس فروشگاه حضوری قهوه ست (شعبه انقلاب)
        </p>
        <p>
          تهران - خ انقلاب بین میدان فردوسی و چهار راه کالج روبروی خ ویلا شماره
          ۸۵۲
        </p>
        <span className="font-bold">021-66726563</span>
        <Link
          className="font-bold underline text-black underline-offset-8"
          href={"/about-us"}
        >
          درباره فروشگاه
        </Link>
      </div>
      <div className="text-gray-500 flex flex-col py-3 px-6 gap-4 shadow-md w-fit m-auto">
        <span>فروشگاه ما</span>
        <p className="text-black text-2xl">
          آدرس فروشگاه حضوری قهوه ست (شعبه جم)
        </p>
        <p>
          تهران – خ کریمخان زند خ قائم مقام فراهانی ابتدای خ فجر(جم) شماره ۱۰
        </p>
        <span className="font-bold">021-88305827</span>
        <Link
          className="font-bold underline text-black underline-offset-8"
          href={"/about-us"}
        >
          درباره فروشگاه
        </Link>
      </div>
    </div>
  );
}

export default Adress;
