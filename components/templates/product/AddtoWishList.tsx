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
  productID: string; // فرض بر این است که productID یک رشته است
}) {
  const [user, setUser] = useState<User | null>(null); // حالت اولیه null برای کاربر

  useEffect(() => {
    const authUser = async () => {
      try {
        const res = await fetch("/api/auth/me");
        if (res.status === 200) {
          const data = await res.json();
          setUser(data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    authUser();
  }, []);

  const addtoWishList = async (event: React.MouseEvent) => {
    event.preventDefault();

    if (!user?._id) {
      return Swal.fire({
        title: "لطفا ابتدا لاگین کنید",
        icon: "error",
        confirmButtonText: "بستن",
      });
    }

    const wish = { user: user._id, product: productID };

    try {
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
      } else {
        Swal.fire({
          title: "مشکلی پیش آمده است",
          icon: "error",
          confirmButtonText: "بستن",
        });
      }
    } catch (error) {
      console.error("Error adding to wishlist:", error);
      Swal.fire({
        title: "مشکلی پیش آمده است",
        icon: "error",
        confirmButtonText: "بستن",
      });
    }
  };

  return (
    <div className="tooltip tooltip-right" data-tip="افزودن به علاقه‌مندی">
      <a
        className="flex hover:text-gray-500 transition-all duration-300"
        href="#"
        onClick={addtoWishList}
      >
        <CiHeart className="transition-all duration-300" size={25} />
        {title}
      </a>
    </div>
  );
}

export default AddtoWishList;
