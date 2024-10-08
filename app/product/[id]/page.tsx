import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Details from "@/components/templates/product/Details";
import Gallery from "@/components/templates/product/Gallery";
import MoreProducts from "@/components/templates/product/MoreProducts";
import Tabs from "@/components/templates/product/Tabs";
import authUser from "@/utils/authUser";
import React from "react";
import productModel from "@/models/Product";
import connectToDB from "@/configs/db";

async function page({ params }: { params: { id: string } }) {
  await connectToDB();
  const user = await authUser();
  const productID = params.id;

  const product = await productModel
    .findOne({ _id: productID })
    .populate("comments");

  const relatedProduct = await productModel.find({ smell: product.smell });

  return (
    <>
      <Navbar isLogin={user !== null}  />
      <div className="mt-40 container m-auto">
        <div className="md:grid lg:grid-cols-3 md:grid-cols-2 ">
          <div className="lg:col-span-1 md:pl-6">
            <Gallery />
          </div>
          <div className="lg:col-span-2">
            <Details product={JSON.parse(JSON.stringify(product))} />
          </div>
        </div>
        <Tabs product={JSON.parse(JSON.stringify(product))} />
        <MoreProducts
          relatedProduct={JSON.parse(JSON.stringify(relatedProduct))}
        />
      </div>
      <Footer />
    </>
  );
}

export default page;
