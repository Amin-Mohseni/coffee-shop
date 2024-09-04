import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [/^\S+@\S+\.\S+$/, "Invalid email address"],
  },
  phone: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: false,
  },
  message: {
    type: String,
    required: true,
  },
});

const model = mongoose.models.Contact || mongoose.model("Contact", schema);

export default model;
