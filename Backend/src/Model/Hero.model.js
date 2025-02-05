import { Schema } from "mongoose";

const HeroSchema = Schema(
    {
        topText:{
            type: String,
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