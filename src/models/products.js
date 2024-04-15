import {Schema, model} from "mongoose";

const ProductSchema = new Schema(
  {
    product_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: Number,
      require: false,
    },
    stock: {
      type: Number,
      required: true,
    }
  },
);

export default model("Product", ProductSchema);