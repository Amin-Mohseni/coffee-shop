import mongoose from "mongoose";

const connectToDB = async (): Promise<boolean | void> => {
  try {
    // بررسی وضعیت اتصال فعلی به دیتابیس
    if (mongoose.connections[0].readyState) {
      return true;
    } else {
      // اتصال به دیتابیس با استفاده از URL در محیط
      await mongoose.connect(process.env.MONGO_URL as string);
      console.log("Connect To DB Successfully !");
    }
  } catch (err) {
    // ثبت خطا در صورت بروز مشکل در اتصال
    console.error("Connect To DB has Error ->", err);
  }
};

export default connectToDB;
