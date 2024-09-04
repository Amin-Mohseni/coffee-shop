import BreadCrumb from "@/components/modules/breadcrumb/BreadCrumb";
import Navbar from "@/components/modules/navbar/Navbar";
import authUser from "@/utils/authUser";
import React from "react";
import Footer from "@/components/modules/footer/Footer";
import connectToDB from "@/configs/db";
import WishlistModel from "@/models/WilshList";
import Card from "@/components/modules/card/Card";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";

async function page() {
  await connectToDB();

  const user = await authUser();

  let wishes: any[] = [];

  if (user) {
    wishes = await WishlistModel.find({ user: user._id })
      .populate("product", "name price score")
      .lean();
  }

  return (
    <>
      <Navbar isLogin={user !== null} />
      <BreadCrumb route={"علاقه‌مندی ها"} />
      <main className="container m-auto">
        {wishes.length > 0 && (
          <div>
            <p className="text-2xl py-6">محصولات مورد علاقه شما :</p>
            <hr />
          </div>
        )}
        <main>
          {wishes.length > 0 ? (
            <div className="grid lg:grid-cols-3 grid-cols-2 justify-center items-center lg:gap-x-10 mt-10">
              {wishes.map((wish) => (
                <Card key={wish._id} {...wish.product} />
              ))}
            </div>
          ) : (
            <div className="h-full flex flex-col justify-center items-center gap-6 py-20">
              <FaRegHeart className="text-gray-200" size={200} />
              <span className="text-5xl font-bold">
                This wishlist is empty.
              </span>
              <p className="text-gray-500">
                شما هنوز هیچ محصولی در لیست علاقه مندی های خود ندارید.
                <br /> در صفحه "فروشگاه" محصولات جالب زیادی پیدا خواهید کرد.
              </p>
              <Link href={"/"}>
                <button className="btn bg-[#008978] text-white hover:bg-[#711D1C] rounded-none text-[16px] w-[180px]">
                  بازگشت به فروشگاه
                </button>
              </Link>
            </div>
          )}
        </main>
      </main>
      <Footer />
    </>
  );
}

export default page;
