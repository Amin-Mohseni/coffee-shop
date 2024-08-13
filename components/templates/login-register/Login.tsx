import Link from "next/link";
import React from "react";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="form-control bg-white p-6 shadow-md w-80 gap-y-4">
        <input
          className="p-3 outline-none border rounded-lg"
          type="text"
          placeholder="ایمیل/شماره موبایل"
        />
        <input
          className="p-3 outline-none border rounded-lg"
          type="password"
          placeholder="رمز عبور"
        />
        <div className="flex items-center justify-start gap-x-3">
          <input type="checkbox" />
          <p className="text-sm">مرا به خاطر داشته باش</p>
        </div>
        <button className="btn bg-[#34180E]  text-white hover:bg-[#34180E] hover:text-gray-300">ورود</button>
        <Link className="text-center text-sm" href={"/forget-password"}>رمز عبور را فراموش کرده اید ؟</Link>
        <button className="btn bg-[#34180E] text-white hover:bg-[#34180E] hover:text-gray-300 mb-6">ورود با کد یکبار مصرف</button>
        <span className="text-sm">آیا حساب کاربری ندارید؟</span> 
        <button className="btn">ثبت نام</button>
      </div>
        <Link className="mt-6" href={"/"}>لغو</Link>
    </div>
  );
}

export default Login;
