import Link from "next/link";
import React from "react";

function BreadCrumb(props: { route: string }) {
  return (
    <div className="flex flex-col items-center justify-center md:h-[400px] h-auto py-4 lg:m-0 pt-24 m bg-[url('/images/back1.jpg')]  text-white gap-4">
      <p className="md:text-[80px] text-5xl">{props.route}</p>
      <div className="flex items-center justify-center">
        <Link className="hover:text-gray-300 transition-all" href={"/"}>
          خانه
        </Link>
        <span>&nbsp;/&nbsp;</span>
        <p>{props.route}</p>
      </div>
    </div>
  );
}

export default BreadCrumb;
