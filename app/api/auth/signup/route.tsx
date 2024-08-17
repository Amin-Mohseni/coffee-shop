import connectToDB from "@/configs/db";
import { NextApiRequest, NextApiResponse } from "next";
import UserModel from "@/models/User";
import { generateAccessToken, hashPassword } from "@/utils/auth";
import { roles } from "@/utils/constants";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  connectToDB();

  const { name, phone, email, password } = req.body;

  // Validation
  const isUserExist = await UserModel.findOne({
    $or: [{ name }, { phone }, { email }],
  });
  if (isUserExist) {
    return res.status(422).json({
      message: "The username or email or phone is already taken!",
    });
  }

  const hashedPassword = await hashPassword(password);
  const accessToken = generateAccessToken({ name });

  const users = await UserModel.find({});
  await UserModel.create({
    name,
    email,
    phone,
    password: hashedPassword,
    role: users.length > 0 ? roles.USER : roles.ADMIN,
  });

  // تنظیم هدر Set-Cookie
  res.setHeader("Set-Cookie", `Token=${accessToken}; Path=/; HttpOnly`);

  return res.status(201).json({ message: "Success Response" });
}
