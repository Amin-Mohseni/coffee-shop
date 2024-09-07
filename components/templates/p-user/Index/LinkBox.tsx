import Link from "next/link";
import React from "react";
import { GoChecklist } from "react-icons/go";
import { PiMapPinArea, PiUserCircleLight } from "react-icons/pi";
import { IoLogOutOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { AiOutlineComment } from "react-icons/ai";

const linkBox = [
  {
    title: "سفارش ها",
    icon: <GoChecklist />,
    link: "/p-user/orders",
  },
  {
    title: "آدرس",
    icon: <PiMapPinArea />,
    link: "/p-user/edit-address",
  },
  {
    title: "جزئیات حساب",
    icon: <PiUserCircleLight />,
    link: "/p-user/edit-account",
  },
  {
    title: "کامنت ها",
    icon: <AiOutlineComment />,
    link: "/p-user/comments",
  },
  {
    title: "لیست علاقه مندی‌ها",
    icon: <CiHeart />,
    link: "/p-user/wishlist",
  },
  {
    title: "خروج",
    icon: <IoLogOutOutline />,
    link: "/p-user",
  },
];
function LinkBox() {
  return (
    <div className="grid lg:grid-cols-3 lg:grid-rows-2 gap-5 mt-10">
      {linkBox.map((item, i) => (
        <Link
          className="flex items-center justify-center flex-col shadow gap-2 py-6 hover:bg-gray-100 transition-all border group"
          href={item.link}
          key={i}
        >
          <span className="text-[60px] text-gray-500 group-hover:text-gray-900">
            {item.icon}
          </span>
          <span>{item.title}</span>
        </Link>
      ))}
    </div>
  );
}

export default LinkBox;
