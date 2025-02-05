import { model, Schema } from "mongoose";

const productSchema = new Schema(
    {
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
        image: [
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
        ]
    },
    { timestamps: true }
)


export const ProductSchema = model("Product", productSchema);