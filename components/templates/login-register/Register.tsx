"use client";
import Link from "next/link";
import React, { useState } from "react";
import Sms from "./Sms";

function Register({ showLoginForm }) {
  const [registerWithOtp, setRegisterWithOtp] = useState(false);
  const [registerWithPass, setRegisterWithPass] = useState(false);

  const hideOtpForm = () => {
    setRegisterWithOtp(false);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {!registerWithOtp ? (
        <>
          <div className="form-control w-80 bg-white gap-y-4 p-6 shadow-md">
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
            {registerWithPass && (
              <input
                className="p-3 border outline-none rounded-lg"
                type="password"
                placeholder="رمز عبور"
              />
            )}
            <button
              onClick={() => setRegisterWithOtp(true)}
              className="btn bg-[#34180E] text-white hover:bg-[#34180E] hover:text-gray-300"
            >
              ثبت نام با کد تایید
            </button>
            <button
              onClick={() => setRegisterWithPass(true)}
              className="btn bg-[#34180E] text-white hover:bg-[#34180E] hover:text-gray-300"
            >
              ثبت نام با رمز عبور
            </button>
            <p
              onClick={showLoginForm}
              className="text-center text-sm pb-3 cursor-pointer"
            >
              برگشت به ورود
            </p>
          </div>
          <Link href={"/"} className="mt-6">
            لغو
          </Link>
        </>
      ) : (
        <Sms hideOtpForm={hideOtpForm} />
      )}
    </div>
  );
}

export default Register;
