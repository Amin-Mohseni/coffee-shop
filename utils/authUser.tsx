import UserModel from "@/models/User";
import { cookies } from "next/headers";
import { verifyAccessToken } from "./auth";
import { JwtPayload } from "jsonwebtoken";
import connectToDB from "@/configs/db";

const authUser = async () => {
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
    }
  }
};

export default authUser;
