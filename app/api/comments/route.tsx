import connectToDB from "@/configs/db";
import commentModel from "@/models/Comment";
import productModel from "@/models/Product";
import { comment } from "postcss";

export async function POST(req: Request) {
  try {
    await connectToDB();
    const reqBody = await req.json();
    const { username, body, email, score, productID } = reqBody;

    const comment = await commentModel.create({
      username,
      body,
      email,
      score,
      productID,
    });

    const updateProduct = await productModel.findOneAndUpdate(
      { _id: productID },
      {
        $push: {
          comments: comment._id,
        },
      }
    );

    return Response.json(
      { message: "Comment created successfully.", data: comment },
      { status: 201 }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}

export async function GET() {
  const comments = await commentModel.find({}, "-__v");
  return Response.json(comments);
}
