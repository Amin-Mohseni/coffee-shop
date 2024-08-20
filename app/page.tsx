import React from "react";
import Banner from "@/components/templates/index/Banner";
import Products from "@/components/templates/index/Products";
import Promote from "@/components/templates/index/Promote";
import Articles from "@/components/templates/index/Articles";
import ArticleSlide from "@/components/templates/index/ArticleSlide";
import Navbar from "@/components/modules/navbar/Navbar";
import Footer from "@/components/modules/footer/Footer";
import UserModel from "@/models/User";
import { cookies } from "next/headers";
import { verifyAccessToken } from "@/utils/auth";
import { JwtPayload } from "jsonwebtoken";

export default async function Home() {
  const token = cookies().get("token")?.value;
  let user = null;
  if (token) {
    const tokenPayload = verifyAccessToken(token);
    if (
      typeof tokenPayload === "object" &&
      tokenPayload !== null &&
      "email" in tokenPayload
    ) {
      const payload = tokenPayload as JwtPayload & { email: string };  
      user = await UserModel.findOne({ email: payload.email });
    }
  }

  return (
    <div>
      <Navbar isLogin={user} />
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
