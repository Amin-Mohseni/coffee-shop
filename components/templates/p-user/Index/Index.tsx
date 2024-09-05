import Link from "next/link";
import React from "react";


function Index() {
  return (
    <div className="text-gray-500 flex flex-col gap-4">
      <p className="text-lg">
        سلام <span className="font-bold">امین</span>
      </p>
      <p className="leading-7">
        از طریق پیشخوان حساب کاربری‌تان، می‌توانید{" "}
        <span className="font-bold hover:text-[#711D1C] text-gray-700">
          <Link href={"/p-user/orders"}>سفارش‌های اخیرتان</Link>
        </span>{" "}
        را مشاهده،{" "}
        <span className="font-bold hover:text-[#711D1C] text-gray-700">
          <Link href={"/p-user/edit-address"}>
            آدرس‌های حمل و نقل و صورتحساب‌تان
          </Link>
        </span>{" "}
        را مدیریت و
        <span className="font-bold hover:text-[#711D1C] text-gray-700">
          <Link href={"/p-user/edit-account"}>
            {" "}
            جزییات حساب کاربری و کلمه عبور خود را ویرایش کنید.
          </Link>
        </span>{" "}
      </p>
    </div>
  );
}

export default Index;
