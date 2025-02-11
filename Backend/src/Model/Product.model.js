import { model, Schema } from "mongoose";

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        images: [
            {
                type: String,
                required: true,
            }
        ],
        category: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        size: [
            {
                type: String,
                required: true,
            }
        ],
        createdBy:{
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }
    },
    { timestamps: true }
)


export const ProductModel = model("Product", productSchema);