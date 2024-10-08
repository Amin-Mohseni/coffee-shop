import React from "react";
import Navbar from "../../components/modules/navbar/Navbar";
import authUser from "@/utils/authUser";
import Footer from "../../components/modules/footer/Footer";
import BreadCrumb from "../../components/modules/breadcrumb/BreadCrumb";
import SideBar from "../../components/templates/p-user/SideBar";
import { redirect } from "next/navigation";

const user = async () => {
  return authUser();
};

function UserLayout({ children }: { children: React.ReactNode }) {
  if (!user) {
    redirect("/login-register");
  }
  return (
    <div>
      <Navbar isLogin={user !== null} />
      <BreadCrumb route="حساب کاربری من" />
      <main className="grid lg:grid-cols-3 my-10 container m-auto">
        <div className="lg:col-span-1">
          <SideBar />
        </div>
        <section className="lg:col-span-2 lg:px-10 px-6 mt-10 lg:m-0">
          {children}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default UserLayout;
