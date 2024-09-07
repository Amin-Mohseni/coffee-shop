import WishCard from "@/components/modules/wishcard/WishCard";
import connectToDB from "@/configs/db";
import authUser from "@/utils/authUser";
import WishlistModel from "@/models/WilshList";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";

type Wish = {
  _id: string;
  product: {
    _id: string;
    name: string;
    price: number;
    score: number;
  };
};

async function page() {
  await connectToDB();

  const user = await authUser();

  let wishes: Wish[] = [];

  if (user) {
    wishes = await WishlistModel.find({ user: user._id })
      .populate("product", "name price score")
      .lean<Wish[]>();
  }

  return (
    <main>
      {wishes.length > 0 ? (
        <div className="grid lg:grid-cols-3 grid-cols-2 justify-center items-center lg:gap-x-10 mt-10">
          {wishes.map((wish) => (
            <WishCard key={wish._id} {...wish.product} />
          ))}
        </div>
      ) : (
        <div className="h-full flex flex-col justify-center items-center gap-6 py-10">
          <FaRegHeart className="text-gray-200" size={200} />
          <span className="text-5xl font-bold">This wishlist is empty.</span>
          <p className="text-gray-500">
            شما هنوز هیچ محصولی در لیست علاقه‌مندی‌های خود ندارید.
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
  );
}

export default page;
