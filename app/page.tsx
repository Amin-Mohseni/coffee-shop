import React from "react";
import Banner from "@/components/templates/index/Banner";
import Products from "@/components/templates/index/Products";
import Promote from "@/components/templates/index/Promote";
import Articles from "@/components/templates/index/Articles";
import ArticleSlide from "@/components/templates/index/ArticleSlide";
import Navbar from "@/components/modules/navbar/Navbar";
import Footer from "@/components/modules/footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
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

export default Home;
