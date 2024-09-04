import React from "react";
import Banner from "@/components/templates/index/Banner";
import Products from "@/components/templates/index/Products";
import Promote from "@/components/templates/index/Promote";
import Articles from "@/components/templates/index/Articles";
import ArticleSlide from "@/components/templates/index/ArticleSlide";
import Navbar from "@/components/modules/navbar/Navbar";
import Footer from "@/components/modules/footer/Footer";
import authUser from "@/utils/authUser";

export default async function Home() {
  const user = await authUser();
  

  return (
    <div>
      <Navbar isLogin={user !== null}  />
      <Banner />
      <div className="container m-auto">
        <Products />
      </div>
      <Promote />
      <div className="container m-auto">
        <Articles />
        <ArticleSlide />
      </div>
      <Footer />
    </div>
  );
}
