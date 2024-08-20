"use client";
import Link from "next/link";
import React, { useState } from "react";
import Sms from "./Sms";
import Swal from "sweetalert2";
import {
  validateEmail,
  validatePassword,
  validatePhoneNumber,
} from "@/utils/auth";

function Login({ showRegistedForm = () => {} }) {
  const [isLoginWithOtp, setIsLoginWithOtp] = useState(false);
  const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginWithPassword = async () => {
    const isValidEmail = validateEmail(phoneOrEmail);
    const isValidPhone = validatePhoneNumber(phoneOrEmail);
    const isValidPassword = validatePassword(password);

    if (!phoneOrEmail) {
      return Swal.fire({
        title: "لطفا ایمیل یا شماره موبایل را وارد کنید",
        icon: "error",
        confirmButtonText: "بستن",
      });
    }

    if (!isValidEmail || isValidPhone) {
      return Swal.fire({
        title: "ایمیل یا شماره موبایل وارد شده نامعتبر است",
        icon: "error",
        confirmButtonText: "تلاش مجدد",
      });
    }

    if (!password) {
      return Swal.fire({
        title: "پسورد را وارد کنید",
        icon: "error",
        confirmButtonText: "بستن",
      });
    }

    if (!isValidPassword) {
      Swal.fire({
        title: "پسورد وارد شده نامعتبر است",
        icon: "error",
        confirmButtonText: "تلاش مجدد",
      });
    }
    const user = { email: phoneOrEmail, password };

    const res = await fetch("/api/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (res.status === 200) {
      setPassword("");
      setPhoneOrEmail("");
      Swal.fire({
        title: "ورود با موفقیت انجام شد",
        icon: "success",
        confirmButtonText: "ورود به پنل کاربری",
      });
    } else if (res.status === 422 || res.status === 419) {
      return Swal.fire({
        title: "کاربری با این اطلاعات یافت نشد",
        icon: "error",
        confirmButtonText: "تلاش مجدد",
      });
    } else if (res.status === 401) {
      return Swal.fire({
        title: "ایمیل یا پسورد نامعتبر است",
        icon: "error",
        confirmButtonText: "تلاش مجدد",
      });
    }
  };

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
              value={phoneOrEmail}
              onChange={(event) => setPhoneOrEmail(event.target.value)}
            />
            <input
              className="p-3 outline-none border rounded-lg"
              type="password"
              placeholder="رمز عبور"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <div className="flex items-center justify-start gap-x-3">
              <input type="checkbox" />
              <p className="text-sm">مرا به خاطر داشته باش</p>
            </div>
            <button
              onClick={loginWithPassword}
              className="btn bg-[#34180E]  text-white hover:bg-[#34180E] hover:text-gray-300"
            >
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
