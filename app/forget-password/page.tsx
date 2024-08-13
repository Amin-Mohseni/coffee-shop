import Link from "next/link";
import React from "react";

function ForgetPassword() {
  return (
    <div className="grid grid-cols-2">
      <div className="h-full w-full">
        <img
          className="h-full w-full object-cover object-center"
          src="/images/peakpx-1.jpg"
          alt=""
        />
      </div>
      <div className="bg-[#EEA042] flex flex-col justify-center items-center h-screen ">
        <div className="form-control bg-white w-80 p-6 gap-4 shadow-md">
          <input
            className="p-3 outline-none border rounded-lg"
            type="text"
            placeholder="ایمیل/شماره موبایل"
          />
          <button className="btn bg-[#34180E] text-white hover:bg-[#34180E] hover:text-gray-300">
            بازنشانی رمز عبور
          </button>
          <Link className="text-sm text-center" href={"/login-register"}>
            برگشت به ورود
          </Link>
        </div>
        <Link className="mt-6" href={"/login-register"}>
          لغو
        </Link>
      </div>
    </div>
  );
}

export default ForgetPassword;
