import Link from "next/link";
import React from "react";

function Ticket() {
  return (
    <Link className="flex items-center justify-between shadow p-6 bg-[#3D1D0D] text-white rounded-lg" href={`/p-user/tickets/answer/2323`}>
      <div className="flex flex-col gap-4">
        <p>حجم بسته بندی</p>
        <p className="border rounded-md p-2 text-gray-900 bg-white">واحد پشتیبانی</p>
      </div>
      <div className="flex flex-col gap-4">
        <p>8:00 1402/10/21</p>
        <p>پاسخ داده نشده</p>
      </div>
    </Link>
  );
}

export default Ticket;
