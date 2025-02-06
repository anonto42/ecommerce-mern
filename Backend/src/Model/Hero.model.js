import { model, Schema } from "mongoose";

const HeroSchema = Schema(
    {
        topText:{
            type: String,
            default:"Somthing will Append hear for the next upload.",
            required: true
        },
        images:[
            {
                type: String,
                required: true
            }
        ]
    }
)

export const HeroModel = model("HeroSchema", HeroSchema);