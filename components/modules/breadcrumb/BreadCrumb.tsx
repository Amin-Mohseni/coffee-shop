import Link from "next/link";
import React from "react";


function BreadCrumb(props: { route: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-[400px] bg-[url('/images/back1.jpg')]  text-white">
      <p className="text-[80px]">{props.route}</p>
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
