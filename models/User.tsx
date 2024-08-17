import mongoose, { Schema, Document, Model } from "mongoose";

// تعریف اینترفیس برای کاربر
interface IUser extends Document {
  name: string;
  phone: string;
  email: string;
  password: string;
}

// تعریف اسکیمای کاربر
const UserSchema: Schema<IUser> = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// چک کردن وجود مدل قبل از تعریف مجدد آن
const UserModel: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default UserModel;
