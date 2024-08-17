import mongoose from "mongoose";

const connectToDB = async (): Promise<boolean | void> => {
  try {
    // بررسی وضعیت اتصال فعلی به دیتابیس
    if (mongoose.connections[0].readyState) {
      return true; // در صورتی که قبلاً متصل شده باشد
    } else {
      // اتصال به دیتابیس با استفاده از URL مشخص
      await mongoose.connect(process.env.MONGO_URL as string);
      console.log("Connect To DB Successfully!");
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      // مدیریت خطا با اطلاعات بیشتر
      console.error("Connect To DB has Error ->", err.message);
    } else {
      console.error("An unknown error occurred during DB connection.");
    }
  }
};

export default connectToDB;
  