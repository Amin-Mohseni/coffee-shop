import Link from "next/link";
import React from "react";

function Breadcrumb(props: { title: string }) {
  return (
    <section className="flex items-center gap-x-3 text-sm">
      <Link className="text-gray-500 hover:text-gray-600 transition-all" href="/">خانه </Link>
      <span>/</span>
      <Link className="text-gray-500 hover:text-gray-600 transition-all text-nowrap" href="/">همه موارد </Link>
      <span>/</span>
      <p>{props.title}</p>
    </section>
  );
}

export default Breadcrumb;
