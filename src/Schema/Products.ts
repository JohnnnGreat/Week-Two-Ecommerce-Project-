import mongoose, { Document, Schema } from "mongoose";

export type ProductType = {
   productName: string;
   productImage: string;
   productPrice: number;
   productDescription: string;
   productDiscount: number;
};

interface IProduct extends Document, ProductType {}

const ProductSchema: Schema = new mongoose.Schema<IProduct>({
   productName: {
      type: String,
      required: true,
   },
   productImage: { type: String, required: true },
   productPrice: { type: Number, required: true },
   productDescription: { type: String, required: true },
   productDiscount: { type: Number, required: true },
});

const Product = mongoose.model<IProduct>("Product", ProductSchema);

export default Product;
