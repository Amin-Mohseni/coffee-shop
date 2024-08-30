import mongoose from "mongoose";
require("@/models/User");
require("@/models/Product");

const schema = new mongoose.Schema(
  {
    user: {
      Type: mongoose.Types.ObjectId,
      ref: "User",
    },
    product: {
      Type: mongoose.Types.ObjectId,
      ref: "Product",
    },
  },
  {
    timestamps: true,
  }
);

const model = mongoose.models.WishList || mongoose.model("WishList", schema);

export default model;
