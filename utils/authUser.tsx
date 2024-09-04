import UserModel from "@/models/User";
import { cookies } from "next/headers";
import { verifyAccessToken } from "./auth";
import { JwtPayload } from "jsonwebtoken";
import connectToDB from "@/configs/db";
import { InferSchemaType } from "mongoose";

type UserType = InferSchemaType<typeof UserModel.schema>;

const authUser = async (): Promise<UserType | null> => {
  await connectToDB();
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

      if (user) {
        user = user.toObject();
      }
    }
  }

  return user;
};

export default authUser;
