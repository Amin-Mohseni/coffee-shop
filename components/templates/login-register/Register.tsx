import Link from "next/link";
import React from "react";

function Register({showLoginForm}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="form-control w-80 bg-white gap-y-4 p-3 shadow-md">
        <input
          className="p-3 border outline-none rounded-lg"
          type="text"
          placeholder="نام"
        />
        <input
          className="p-3 border outline-none rounded-lg"
          type="text"
          placeholder="شماره موبایل"
        />
        <input
          className="p-3 border outline-none rounded-lg"
          type="email"
          placeholder="ایمیل(دلخواه)"
        />
        {/* {registerWithPass && <input type="password" placeholder="رمز عبور" />} */}
        <button className="btn bg-[#34180E] text-white hover:bg-[#34180E] hover:text-gray-300">
          ثبت نام با کد تایید
        </button>
        <button className="btn bg-[#34180E] text-white hover:bg-[#34180E] hover:text-gray-300">
          ثبت نام با رمز عبور
        </button>
        <p onClick={showLoginForm} className="text-center text-sm pb-3 cursor-pointer">برگشت به ورود</p>
      </div>
      <Link href={"/"} className="mt-6">
        لغو
      </Link>
    </div>
  );
}

export default Register;
