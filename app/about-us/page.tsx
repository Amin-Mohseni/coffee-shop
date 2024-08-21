import BreadCrumb from "@/components/modules/breadcrumb/BreadCrumb";
import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import authUser from "@/utils/authUser";
import React from "react";

async function AboutUs() {
  const user = await authUser();
  return (
    <div>
      <Navbar isLogin={user} />
      <BreadCrumb route={"درباره ما"} />
      <div className="bg-[#F9F9F9]">
        <div className="container m-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          <div className="lg:p-20 p-6">
            <span>درباره ما</span>
            <p className="text-4xl mt-3">فنجان داغ خوارزمی قهوه ست</p>
          </div>
          <div className="lg:p-20 p-6">
            <p className="select-none text-justify leading-7 text-gray-500">
              تجربه‌ای به قدمت چهار نسل و ارتباط مستمر با مصرف کنندگان ضامن این
              ویژگی‌هاست. از ویژگی های بارز قهوه شاپ واردات مواداولیه راسا به
              وسیله مدیریت مجموعه و انتخاب بهترین مواد اولیه جهت تولید قهوه است.
            </p>
          </div>
          <div className="lg:p-20 p-6">
            <p className="text-justify select-none leading-7 text-gray-500">
              مجموعه قهوه شاپ اولین مجموعه مرتبط با قهوه در ایران است که در سال
              ۲۰۰۷ به عضویت انجمن تخصصی قهوه اروپا (Speciality coffee
              assovciation of Eroupe) در آمده است.
            </p>
          </div>
        </div>
      </div>
      <div className="conatiner m-auto grid lg:grid-cols-2 grid-cols-1">
        <div className="text-justify gap-y-6 flex flex-col lg:p-20 p-6 justify-center items-start leading-7">
          <span>Set Coffee</span>
          <span className="text-4xl">داستان قهوه ست</span>
          <p>
            تجربه‌ای به قدمت چهار نسل و ارتباط مستمر با مصرف کنندگان ضامن این
            ویژگی‌هاست. از ویژگی‌های بارز مجموعه قهوه ست واردات مواد اولیه راسا
            به وسیله مدیریت مجموعه و انتخاب بهترین مواد اولیه جهت تولید قهوه است
          </p>
          <p>
            مجموعه قهوه ست اولین مجموعه مرتبط با قهوه در ایران است که در سال
            2007 به عضویت انجمن تخصصی قهوه اروپا (Speciality coffee association
            of Europe) در آمده است و بسیاری از دوره‌های مربوط به فرآوری قهوه را
            مدیریت این مجموعه به صورت تخصصی در کارگاه‌های آموزشی این انجمن و
            همچنین کارگاه‌های تخصصی فرآوری قهوه به خصوص در زمینه بو دادن
            قهوه(Roasting) را در کشور آمریکا که از پیشگامان این صنعت است را
            گذرانده است. اکنون با پشتوانه دستاوردهای گذشته و تکنولوژی روز دنیا
            وارد مرحله تولید قهوه به صورت صنعتی و گسترده شده‌ایم و مفتخریم اعلام
            کنیم که «قهوه ست» از این پس یک نام تجاری صنعتی در صنعت قهوه ایران
            است.
          </p>
        </div>
        <div className="text-justify gap-y-6 flex flex-col lg:p-20 p-6 justify-center items-start leading-7">
          <p>
            مسیری را که بنیان‌گذاران «قهوه ست» در دهه 20 شمسی آغاز کرده‌اند
            اکنون وارد مرحله جدیدی شده است و مفتخریم اعلام کنیم در بهمن ماه 94
            موفق به اخذ مجوزهای مربوطه از وزارت بهداشت درمان و آموزش پزشکی و
            سازمان غذا دارو شده‌ایم و تولید سنتی و محدود قهوه را تبدیل به تولید
            صنعتی و انبوه کرده‌ایم.
          </p>
          <p>
            از دیگر افتخارات مجموعه «قهوه ست» اخذ مدرک دیپلم دانش قهوه از انجمن
            قهوه تخصصی اروپا در فروردین ماه سال 95 است. (SCAE Coffee Diploma)
          </p>
          <p>
            امید داریم با کسب دانش روز دنیا در این صنعت ارتقا کیفیت و تنوع محصول
            در حد استانداردهای جهانی را در آینده‌ای نزدیک شاهد باشیم.
          </p>
          <p>صاحب امتیاز: شرکت فنجان داغ خوارزمی</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
