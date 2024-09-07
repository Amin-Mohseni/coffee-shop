"use client";
import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";

interface RemoveWishCardProps {
  productID: string;
}

function RemoveWishCard({ productID }: RemoveWishCardProps) {
  const removeWishCard = async () => {
    Swal.fire({
      title: "آیا از حذف محصول اطمینان دارید؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "بله",
      cancelButtonText: "خیر",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`/api/wishlist/${productID}`, {
            method: "DELETE",
          });
          if (res.status === 200) {
            Swal.fire("محصول با موفقیت حذف شد", "", "success").then(() => {
              location.reload();
            });
          } else {
            Swal.fire("حذف محصول ناموفق بود", "لطفا دوباره تلاش کنید", "error");
          }
        } catch (error) {
          Swal.fire("خطایی رخ داد", "لطفا دوباره تلاش کنید", "error");
        }
      }
    });
  };

  return (
    <div>
      <button
        onClick={removeWishCard}
        className="btn bg-[#008978] relative group text-white border-none hover:bg-[#34180E] rounded-none w-[200px] text-[16px] transition-all"
      >
        <span className="absolute group-hover:-translate-y-8 duration-300 ease-in">
          حذف محصول
        </span>
        <span className="absolute group-hover:translate-y-0 translate-y-12 duration-300 ease-in">
          <RiDeleteBinLine size={25} />
        </span>
      </button>
    </div>
  );
}

export default RemoveWishCard;
