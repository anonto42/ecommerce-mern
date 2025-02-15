import { model, Schema } from "mongoose";


const orderSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        product:{
            productId: {
                type: Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            size:{
                type: String,
                required: true
            }
        },
        quantity: {
            type: Number,
            required: true
        },
        productPrice: {
            type: Number,
            required: true
        },
        totalPriceWithDelivery: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Canceled'],
            default: 'Pending'
        },
        shippingAddress: {
            type: Object,
            required: true
        },
        paymentMethod: {
            type: String,
            required: true
        },
        paymentStatus: {
            type: String,
            enum: ['Pending', 'Cancelled', 'Payed'],
            defualt:"Pending"
        }
    },
    {
        timestamps: true
    }
)


export const OrderModel = model("Order", orderSchema);