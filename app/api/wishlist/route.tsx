import wishList from "@/models/WilshList";
import userModel from "@/models/User";
import productModel from "@/models/Product";
import connectToDB from "@/configs/db";
import wishListModel from "@/models/WilshList";

export async function POST(req: Request) {
  try {
    await connectToDB();
    const body = await req.json();
    const { user, product } = body;

    const userExist = await userModel.findById(user);
    if (!userExist) {
      return Response.json({ message: "User Not Found !" }, { status: 404 });
    }

    const productExist = await productModel.findById(product);
    if (!productExist) {
      return Response.json({ message: "Product Not Found !" }, { status: 404 });
    }

    const wish = await wishListModel.findOne({ user, product });

    if (!wish) {
      await wishList.create({ user, product });
    }

    return Response.json(
      { message: "Product added to wishlist successfully!" },
      { status: 201 }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
