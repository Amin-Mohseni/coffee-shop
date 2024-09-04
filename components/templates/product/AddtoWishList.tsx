"use client";
import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import Swal from "sweetalert2";

type User = {
  _id: string;
  name: string;
  phone: string;
  email: string;
  role: string;
};

function AddtoWishList({
  title,
  productID,
}: {
  title: string;
  productID: string;
}) {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const authUser = async () => {
      const res = await fetch("/api/auth/me");
      if (res.status === 200) {
        const data = await res.json();
        setUser({ ...data });
      }
    };

    authUser();
  }, []);

  const addtoWishList = async (event: any) => {
    event.preventDefault();

    if (!user?._id) {
      return Swal.fire({
        title: "لطفا ابتدا لاگین کنید",
        icon: "error",
        confirmButtonText: "بستن",
      });
    }
    const wish = { user: user._id, product: productID };

    const res = await fetch("/api/wishlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(wish),
    });
    if (res.status === 201) {
      Swal.fire({
        title: "محصول مورد نظر به علاقه‌مندی‌ها اضافه شد",
        icon: "success",
        confirmButtonText: "بستن",
      });
    }
  };

  return (
    <div className="tooltip tooltip-right" data-tip="افزودن به علاقه‌مندی">
      <a className="flex" href="#" onClick={addtoWishList}>
        <CiHeart
          className="hover:text-gray-300 transition-all duration-300"
          size={25}
        />
        {title}
      </a>
    </div>
  );
}

export default AddtoWishList;
