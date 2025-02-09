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
            type: String,
            required: true,
            default:"DEFAULT! Please enter yours..."
        },
        password: { 
            type: String, 
            required: true 
        },
        city: { 
            type: String,
            required: true,
            default:"DEFAULT! Please enter yours..."
        },
        thana: { 
            type: String,
            required: true,
            default:"DEFAULT! Please enter yours..."
        },
        area: { 
            type: String,
            required: true,
            default:"DEFAULT! Please enter yours..."
        },
        location: { 
            type: String,
            required: true,
            default:"DEFAULT! Please enter yours..."
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
        },
        isBlocked:{
            type: Boolean,
            default: false
        }
    },{
        timestamps: true
    }
)

userSchema.pre('save', async function (next){

    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash( this.password , 5 );

    next();
})

userSchema.methods.isPasswordCorrect = async function ( pass ) {
    
    return await bcrypt.compare( pass , this.password );
    
}


export const UserModel = model("User", userSchema);