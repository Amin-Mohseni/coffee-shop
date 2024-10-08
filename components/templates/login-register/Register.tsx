import Link from "next/link";
import React, { useState } from "react";
import Sms from "./Sms";
import Swal from "sweetalert2";
import {
  validateEmail,
  validatePhoneNumber,
  validatePassword,
  validateUsername,
} from "@/utils/auth"; // مسیر درست به فایل اعتبارسنجی

function Register({ showLoginForm = () => {} }) {
  const [registerWithOtp, setRegisterWithOtp] = useState(false);
  const [registerWithPass, setRegisterWithPass] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hideOtpForm = () => {
    setRegisterWithOtp(false);
  };

  const validateForm = () => {
    if (!validateUsername(name)) {
      Swal.fire({
        title: "خطا",
        text: "نام کاربری باید بین ۳ تا ۱۶ کاراکتر و شامل حروف و اعداد باشد",
        icon: "error",
        confirmButtonText: "بستن",
      });
      return false;
    }

    if (!validatePhoneNumber(phone)) {
      Swal.fire({
        title: "خطا",
        text: "شماره موبایل باید با ۰۹ شروع شود و شامل ۱۱ رقم باشد",
        icon: "error",
        confirmButtonText: "بستن",
      });
      return false;
    }

    if (email && !validateEmail(email)) {
      Swal.fire({
        title: "خطا",
        text: "ایمیل وارد شده معتبر نیست",
        icon: "error",
        confirmButtonText: "بستن",
      });
      return false;
    }

    if (registerWithPass && !validatePassword(password)) {
      Swal.fire({
        title: "خطا",
        text: "رمز عبور باید حداقل ۸ کاراکتر و شامل یک حرف بزرگ، یک عدد و یک کاراکتر خاص باشد",
        icon: "error",
        confirmButtonText: "بستن",
      });
      return false;
    }

    return true;
  };

  const signup = async () => {
    if (!validateForm()) {
      return;
    }

    const user = {
      name,
      phone,
      email,
      password,
    };

    try {
      const res = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (res.status === 201) {
        setName("");
        setPhone("");
        setEmail("");
        setPassword("");
        Swal.fire({
          title: "ثبت نام با موفقیت انجام شد",
          icon: "success",
          confirmButtonText: "ورود به صفحه پنل کاربری",
        });
      } else {
        const errorData = await res.json();
        Swal.fire({
          title: "خطا",
          text: errorData.message || "خطایی در ثبت نام رخ داد",
          icon: "error",
          confirmButtonText: "بستن",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "خطا",
        text: "مشکلی در ارتباط با سرور وجود دارد",
        icon: "error",
        confirmButtonText: "بستن",
      });
    }
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
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className="p-3 border outline-none rounded-lg"
              type="text"
              placeholder="شماره موبایل"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
            <input
              className="p-3 border outline-none rounded-lg"
              type="email"
              placeholder="ایمیل(دلخواه)"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {registerWithPass && (
              <input
                className="p-3 border outline-none rounded-lg"
                type="password"
                placeholder="رمز عبور"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            )}
            <button
              onClick={() => setRegisterWithOtp(true)}
              className="btn bg-[#34180E] text-white hover:bg-[#34180E] hover:text-gray-300"
            >
              ثبت نام با کد تایید
            </button>
            <button
              onClick={() => {
                if (registerWithPass) {
                  signup();
                } else {
                  setRegisterWithPass(true);
                }
              }}
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
