import React from "react";
import { FaStar } from "react-icons/fa";

function Comment() {
  return (
    <section className="py-6 flex items-center gap-4">
      <img
        className="rounded-full object-cover object-center w-[70px] min-w-[70px]"
        src="/images/profile.jpg"
        alt=""
      />
      <div className="w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <strong>shahin</strong>
            <p>۲۸ آذر ۱۴۰۱</p>
          </div>
          <div className="flex items-center text-[#EABE0F]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <p className="py-4 text-gray-500">
          قهوه بسیار خوش عطر و طعمیه…کاش کم کم مدل های کپسول ها رو متنوع تر
          کنید.
        </p>
      </div>
    </section>
  );
}

export default Comment;
