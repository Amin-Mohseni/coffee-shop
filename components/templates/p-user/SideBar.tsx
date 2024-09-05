import Link from "next/link";
import React from "react";

function SideBar() {
  return (
    <div className="flex flex-col border-l h-fit lg:px-10 px-6">
      <span className="text-xl pr-6 font-bold">حساب کاربری من</span>
      <hr className="mt-3" />

      <ul className="menu menu-lg menu-vertical w-full text-[16px]">
        <li>
          <Link href={"/p-user"}>پیشخوان</Link>
        </li>
        <li>
          <Link href={"/p-user/orders"}>سفارش‌ها</Link>
        </li>
        <li>
          <Link href={"/p-user/edit-address"}>آدرس</Link>
        </li>
        <li>
          <Link href={"/p-user/edit-accout"}>جزئیات حساب</Link>
        </li>
        <li>
          <Link href={"/p-user/points"}>امتیاز من</Link>
        </li>
        <li>
          <Link href={"/p-user/tickets"}>تیکت های پشتیبانی</Link>
        </li>
        <li>
          <Link href={"/wishlist"}>لیست علاقه‌مندی‌ها</Link>
        </li>
        <li>
          <Link href={"#"}>خروج</Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
