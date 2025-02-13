import { model, Schema } from "mongoose";



const cartSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        product: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        size:{
            type: String,
            required: true,
        }
    }
)

export const CartModel = model('Cart', cartSchema);