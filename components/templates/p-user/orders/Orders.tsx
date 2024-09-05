import Link from "next/link";
import React from "react";
import { CgDanger } from "react-icons/cg";

function Orders() {
  return (
    <div className="h-[calc(100vh-350px)] flex items-center justify-center">
      <h3 className="flex items-center gap-1 text-2xl">
        <span>
          <CgDanger size={30} />
        </span>
        هیچ سفارشی هنوز ثبت نشده است.
        <Link
          className="text-sm underline-offset-[5px] border-b-2 hover:border-black transition-all mr-2"
          href={"/"}
        >
          صحفه اصلی
        </Link>
      </h3>
    </div>
  );
}

export default Orders;
