import Link from "next/link";
import React from "react";

function Article() {
  return (
    <div className="flex flex-col">
      <Link href={"/"}>
        <img
          className="w-full h-[280px] object-cover object-center"
          src="/images/cold-berw-coffe.png"
          alt=""
        />
        <h2 className="transition-all hover:text-[#2f0c00] text-xl mt-4 pb-2">
          طرز تهیه قهوه گلد
        </h2>
        <span className="ransition-all hover:text-[#2f0c00] text-sm">
          بیشتر بخوانید
        </span>
      </Link>
    </div>
  );
}

export default Article;
