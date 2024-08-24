import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Details from "@/components/templates/product/Details";
import Gallery from "@/components/templates/product/Gallery";
import MoreProducts from "@/components/templates/product/MoreProducts";
import Tabs from "@/components/templates/product/Tabs";
import authUser from "@/utils/authUser";
import React from "react";

async function page() {
  const user = await authUser();
  return (
    <>
      <Navbar isLogin={user} />
      <div className="mt-40 container m-auto">
        <div className="md:grid lg:grid-cols-3 md:grid-cols-2 ">
          <div className="lg:col-span-1 md:pl-6">
            <Gallery />
          </div>
          <div className="lg:col-span-2">
            <Details />
          </div>
        </div>
        <Tabs />
        <MoreProducts />
      </div>
      <Footer />
    </>
  );
}

export default page;
