import BreadCrumb from "@/components/modules/breadcrumb/BreadCrumb";
import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Adress from "@/components/templates/contact-us/Adress";
import ContactForm from "@/components/templates/contact-us/ContactForm";
import ContactInfo from "@/components/templates/contact-us/ContactInfo";
import authUser from "@/utils/authUser";
import React from "react";

const authuser = async () => {
  const user = await authUser();
};

function page() {
  return (
    <>
      <Navbar isLogin={authuser !== null} />
      <BreadCrumb route={"تماس با ما"} />
      <div className="container m-auto py-10 px-6">
        <div>
          <Adress />
        </div>
        <div className="grid lg:grid-cols-2 mt-10">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
