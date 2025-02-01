import mongoose, { Schema } from "mongoose";

const ProductImageSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  },
  { timestamps: true }
);

const productImageModel = mongoose.model("ProductImage", ProductImageSchema);

export default productImageModel;
