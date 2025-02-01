import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    category: String,
    price: String,
    featuredImage: String,
  },
  { timestamps: true }
);

const productModel = mongoose.model("Product", productSchema);

export default productModel;
