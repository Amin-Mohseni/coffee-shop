import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return true;
    } else {
      await mongoose.connect(process.env.MONGO_URL as string);
      console.log("Connect to DB Successfully !");
    }
  } catch (err) {
    console.log("DB Connecction has error ->", err);
  }
};

export default connectToDB;
