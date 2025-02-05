import { model, Schema } from "mongoose";



const cartSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        items: [
            {
                product: {
                    type: Schema.Types.ObjectId,
                    ref: 'Product'
                },
                quantity: Number,
                price: Number
            }
        ],
        totalPrice: Number
    }
)

export const CartSchema = model('Cart', cartSchema);