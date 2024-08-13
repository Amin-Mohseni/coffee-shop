import Card from "@/components/modules/card/Card";
import React from "react";

function Products() {
  return (
    <div
      data-aos="fade-up"
      className="mt-20 container m-auto flex justify-center items-center flex-col"
    >
      <section className="flex flex-col justify-center items-center mb-3">
        <span className="text-4xl mb-3">انواع قهوه</span>
        <span className="text-gray-400 text-sm">Coffee</span>
      </section>
      <main className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-center items-center lg:gap-x-10">
        {Array(10)
          .fill(1)
          .map((items, index) => (
            <Card key={index} />
          ))}
      </main>
    </div>
  );
}
export default Products;
