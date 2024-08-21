import Link from "next/link";
import React from "react";

function notFound() {
  return (
    <>
      <div className="bg-[#CBC6C4] h-screen flex items-center justify-start flex-col">
        <img
          className="mt-20"
          width={600}
          src="/images/404notfound-coffee.jpg"
          alt=""
        />
        <span className="text-4xl mt-6">صفحه مورد نظر یافت نشد.</span>

        <Link href={"/"}>
          <button className="btn bg-[#34180E] text-white hover:text-gray-300 border-none hover:bg-[#34180E] shadow-md mt-6">بازگشت به صفحه اصلی</button>
        </Link>
      </div>
    </>
  );
}

export default notFound;
