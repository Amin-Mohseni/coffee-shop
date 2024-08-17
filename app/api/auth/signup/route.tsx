import connectToDB from "@/configs/db";
import { NextApiRequest } from "next";
import UserModel from "@/models/User";

export async function POST(req: NextApiRequest) {
  connectToDB();
  const body = await req.body;
  const { name, phone, email, password } = body;

  // Validation

  const isUserExist = await UserModel.findOne({
    $or: [{ name, phone, email, password }],
  });

  return Response.json({ message: "Success Response" }, { status: 201 });
}
