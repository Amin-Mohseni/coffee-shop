import connectToDB from "@/configs/db";
import productModel from "@/models/Product";

type RequestBody = {
  name: string;
  price: number;
  shortDescription: string;
  longDescription: string;
  weight: number;
  suitableFor: string;
  smell: string;
  tags: string[];
};

export async function POST(req: Request) {
  try {
    await connectToDB();
    const body = await req.json();
    const {
      name,
      price,
      shortDescription,
      longDescription,
      weight,
      suitableFor,
      smell,
      tags,
    } = body as RequestBody;

    const product = await productModel.create({
      name,
      price,
      shortDescription,
      longDescription,
      weight,
      suitableFor,
      smell,
      tags,
    });

    return new Response(
      JSON.stringify({
        message: "Product created successfully",
        data: product,
      }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Internal Server Error",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDB();
    const products = await productModel.find({}, "-__v").populate("comments");

    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Failed to fetch products",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
