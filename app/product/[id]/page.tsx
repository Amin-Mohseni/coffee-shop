import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Details from "@/components/templates/product/Details";
import Gallery from "@/components/templates/product/Gallery";
import Tabs from "@/components/templates/product/Tabs";
import authUser from "@/utils/authUser";
import React from "react";

async function page() {
  const user = await authUser();
  return (
    <>
      <Navbar isLogin={user} />
      <div className="mt-40 container m-auto">
        <div className="grid grid-cols-3">
          <div className="col-span-1 pl-6">
            <Gallery />
          </div>
          <div className="col-span-2">
            <Details />
          </div>
        </div>
        <Tabs/>
      </div>
      <Footer />
    </>
  );
}

export default page;
