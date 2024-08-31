import Card from "@/components/modules/card/Card";
import connectToDB from "@/configs/db";
import authUser from "@/utils/authUser";
import productModel from "@/models/Product";
import React from "react";
import wishlistModel from "@/models/WilshList";
import { productType } from "@/utils/types";

async function Products() {
  await connectToDB();

  const products: productType[] = await productModel.find({}).lean();

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
        {products.map((product) => (
          <Card key={product._id} {...product} />
        ))}
      </main>
    </div>
  );
}

export default Products;
