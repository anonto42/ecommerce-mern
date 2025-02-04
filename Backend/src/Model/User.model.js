import { model, Schema, Types } from 'mongoose';
import bcrypt from "bcrypt";


const userSchema = new Schema(
    {
        name: { 
            type: String, 
            required: true 
        },
        email: { 
            type: String, 
            required: true, 
            unique: true 
        },
        number: { 
            type: String 
        },
        password: { 
            type: String, 
            required: true 
        },
        city: { 
            type: String 
        },
        thana: { 
            type: String 
        },
        area: { 
            type: String 
        },
        location: { 
            type: String 
        },
        cart: [
            { 
                type: Types.ObjectId,
                ref:"Products"
            }
        ],
        orders: [
            { 
                type: Types.ObjectId,
                ref:"Orders"
            }
        ],
        wishlist: [
            { 
                type: Types.ObjectId,
                ref:"Products"
            }
        ],
        userType: { 
            type: String, 
            default: "user",
            enum: ["user", "admin", "seller"] 
        }
    },{
        timestamps: true
    }
)

userSchema.pre('save', async function (next){

    if(!isModified("password")) return next();

    this.password = await bcrypt.hash( this.password , 5 );

    next();
})

userSchema.methods.isPasswordCorrect = async function ( pass ) {
    
    return await bcrypt.compare( pass , this.password );
    
}


export const UserModel = model("User", userSchema);