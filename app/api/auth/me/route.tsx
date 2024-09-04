import connectToDB from "@/configs/db";
import { verifyAccessToken } from "@/utils/auth";
import { cookies } from "next/headers";
import UserModel from "@/models/User";
import { JwtPayload } from "jsonwebtoken";

export async function GET(req: Request) {
  connectToDB();
  const token = cookies().get("token");
  let user = null;

  if (token) {
    const tokenPayload = verifyAccessToken(token.value);
    if (tokenPayload) {
      const payload = tokenPayload as JwtPayload & { email: string };
      user = await UserModel.findOne(
        { email: payload.email },
        "-password -refreshToken -__v"
      );
    }

    return Response.json(user);
  } else {
    return Response.json(
      {
        data: null,
        message: "Not access !!",
      },
      { status: 401 }
    );
  }
}
