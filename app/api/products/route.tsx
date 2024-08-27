import connectToDB from "@/configs/db";
import productModel from "@/models/Product";

type RequestBody = {
  name: String;
  price: Number;
  shortDescription: String;
  longDescription: String;
  weight: Number;
  suitableFor: String;
  smell: String;
  tags: [String];
};

export async function POST(req: Request, res: Response) {
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

    return Response.json(
      { message: "Product created successfully :", data: product },
      { status: 201 }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}

export async function GET() {
  const products = await productModel.find({}, "-__v").populate("comments");
  return Response.json(products);
}
