import { model, Schema } from "mongoose";

const visitorSchema = Schema(
    {
        ip:{
            type: String,
        }
    },
    {
        timestamps: true
    }
)

export const VisitorsModel = model("visitor", visitorSchema);