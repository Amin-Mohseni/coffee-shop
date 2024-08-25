import mongoose, { Schema } from "mongoose";
import "./Comment";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  longDescription: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  suitableFor: {
    type: String,
    required: true,
  },
  smell: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    default: 5,
  },
  comments: {
    type: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  tags: {
    type: [String],
    required: true,
  },
});

const model = mongoose.models.Product || mongoose.model("Product", schema);

export default model;
