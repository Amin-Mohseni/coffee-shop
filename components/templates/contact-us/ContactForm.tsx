"use client";
import {
  validateCompany,
  validateEmail,
  validateMessage,
  validatePhoneNumber,
  validateUsername,
} from "@/utils/auth";
import React, { useState } from "react";
import Swal from "sweetalert2";

function ContactForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const submitMessage = async () => {
    const isValidPhone = validatePhoneNumber(phone);
    const isValidEmail = validateEmail(email);
    const isValidName = validateUsername(name);
    const isValidCompany = validateCompany(company);
    const isValidMessage = validateMessage(message);

    if (!isValidPhone) {
      Swal.fire("شماره تماس نامعتبر است", "خطا", "error");
      return;
    }
    if (!isValidEmail) {
      Swal.fire("آدرس ایمیل نامعتبر است", "خطا", "error");
      return;
    }
    if (!isValidName) {
      Swal.fire("نام وارد شده نامعتبر است", "خطا", "error");
      return;
    }
    if (!isValidCompany) {
      Swal.fire("نام شرکت نامعتبر است", "خطا", "error");
      return;
    }
    if (!isValidMessage) {
      Swal.fire("پیام باید بین 10 تا 500 کاراکتر باشد", "خطا", "error");
      return;
    }

    const contact = {
      phone,
      email,
      name,
      company,
      message,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    });

    if (res.status === 201) {
      Swal.fire("پیغام شما با موفقیت ارسال شد", "بستن", "success");
      setEmail("");
      setName("");
      setCompany("");
      setPhone("");
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col gap-3 mt-10 lg:mt-0">
      <span className="text-gray-500 text-sm">فرم تماس با ما</span>
      <span className="text-2xl">
        برای تماس با ما می توانید فرم زیر را تکمیل کنید
      </span>
      <div className="grid md:grid-cols-2 mt-4 gap-3">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label className="cursor-pointer" htmlFor="name">
              نام و نام خانوادگی
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="outline-gray-300 border border-gray-500 py-2 px-4 text-sm rounded-sm"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="cursor-pointer" htmlFor="phone">
              شماره تماس
            </label>
            <input
              type="text"
              value={phone}
              id="phone"
              onChange={(event) => setPhone(event.target.value)}
              className="outline-gray-300 border border-gray-500 py-2 px-4 text-sm rounded-sm"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label className="cursor-pointer" htmlFor="email">
                آدرس ایمیل
              </label>
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="text"
                id="email"
                className="outline-gray-300 border border-gray-500 py-2 px-4 text-sm rounded-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="cursor-pointer" htmlFor="companyName">
                نام شرکت
              </label>
              <input
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                type="text"
                id="companyName"
                className="outline-gray-300 border border-gray-500 py-2 px-4 text-sm rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="textarea">درخواست شما</label>
        <textarea
          className="border border-gray-500 outline-gray-300 rounded-sm py-3 px-6"
          cols={45}
          rows={5}
          required
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder=""
          name="textarea"
          id="textarea"
        ></textarea>
      </div>
      <button
        onClick={submitMessage}
        className="btn bg-[#34180E] text-white border-none hover:bg-[#008978] rounded-none text-[16px]"
      >
        ارسال
      </button>
    </div>
  );
}

export default ContactForm;
