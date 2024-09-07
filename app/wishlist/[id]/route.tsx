import connectToDB from "@/configs/db";
import authUser from "@/utils/authUser";
import wishListModel from "@/models/WilshList";

interface params {
  id: string;
}

export async function DELETE(req: Request, { params }: { params: params }) {
  try {
    await connectToDB();

    const user = await authUser();

    if (!user) {
      return Response.json(
        { message: "Please Login frist !" },
        { status: 401 }
      );
    }

    const productID = params.id;

    await wishListModel.findOneAndDelete({
      user: user._id,
      product: productID,
    });

    return Response.json({ message: "Product removed successfully !" });
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
