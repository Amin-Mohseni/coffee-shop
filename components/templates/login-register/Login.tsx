"use client";
import Link from "next/link";
import React, { useState } from "react";
import Sms from "./Sms";

function Login({ showRegistedForm = () => {} }) {
  const [isLoginWithOtp, setIsLoginWithOtp] = useState(false);

  const hideOtpForm = () => {
    setIsLoginWithOtp(false);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {!isLoginWithOtp ? (
        <>
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
            <button className="btn bg-[#34180E]  text-white hover:bg-[#34180E] hover:text-gray-300">
              ورود
            </button>
            <Link className="text-center text-sm" href={"/forget-password"}>
              رمز عبور را فراموش کرده اید ؟
            </Link>
            <button
              onClick={() => setIsLoginWithOtp(true)}
              className="btn bg-[#34180E] text-white hover:bg-[#34180E] hover:text-gray-300 mb-6"
            >
              ورود با کد یکبار مصرف
            </button>
            <span className="text-sm">آیا حساب کاربری ندارید؟</span>
            <button onClick={showRegistedForm} className="btn">
              ثبت نام
            </button>
          </div>
          <Link className="mt-6" href={"/"}>
            لغو
          </Link>
        </>
      ) : (
        <Sms hideOtpForm={hideOtpForm} />
      )}
    </div>
  );
}

export default Login;
