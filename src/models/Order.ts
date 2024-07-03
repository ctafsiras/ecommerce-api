import mongoose, { Schema, Document } from "mongoose";

export interface IOrder extends Document {
  email: string;
  productId: mongoose.Types.ObjectId;
  price: number;
  quantity: number;
}

const OrderSchema: Schema = new Schema({
  email: { type: String, required: true },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

export default mongoose.model<IOrder>("Order", OrderSchema);
