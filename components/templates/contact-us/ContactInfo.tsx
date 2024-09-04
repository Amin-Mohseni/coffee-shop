import React from "react";
import {
  FaInternetExplorer,
  FaCoffee,
  FaPhoneAlt,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function ContactInfo() {
  return (
    <div className="text-gray-500 flex flex-col lg:border-r h-fit lg:px-12 gap-6">
      <span className="text-sm">تماس با ما</span>
      <span>اطلاعات تماس</span>
      <div className="flex lg:flex-row flex-col lg:items-center gap-4">
        <span>
          <FaCoffee size={35} />
        </span>
        <p>شرکت فنجان داغ خوارزمی (کارخانه قهوه ست )</p>
      </div>
      <div className="flex lg:flex-row flex-col lg:items-center gap-4">
        <span>
          <FaInternetExplorer size={35} />
        </span>
        <p className="text-sm ">set-coffee.com</p>
      </div>
      <div className="flex lg:flex-row flex-col lg:items-center gap-4">
        <span>
          <FaLocationDot size={35} />
        </span>
        <p>
          تهران. پاکدشت . شهرک صنعتی خوارزمی. فاز 2 . بلوار بهارستان. خیابان
          ماگنولیا بلوک آ117
        </p>
      </div>
      <div className="flex lg:flex-row flex-col lg:items-center gap-4">
        <span>
          <FaPhoneAlt size={30} />
        </span>
        <p>021-36479228</p>
      </div>
      <div className="flex lg:flex-row flex-col lg:items-center gap-4">
        <span>
          <FaTelegramPlane size={35} />
        </span>
        <p>تماس با مدیریت از طریق واتساپ و یا تلگرام : 09366726563</p>
      </div>
    </div>
  );
}

export default ContactInfo;
