import mongoose, { mongo, Schema } from "mongoose";

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
    images: [{ type: Schema.Types.ObjectId, ref: "ProductImage", default: [] }],
  },
  { timestamps: true }
);

const productModel = mongoose.model("Product", productSchema);

export default productModel;
