"use client";

import { WindowsLoation } from "@/lib/utils";
import { createSlice } from "@reduxjs/toolkit";


const initialState : WindowsLoation = {
    location: "Some this is mesing"
}

export const LocationSlice = createSlice(
    {
        name:"Is-Home",
        initialState,
        reducers:{
            setLocation: ( state , action ) => {
                state.location = action.payload;
            }
        }
    }
)


export const { setLocation } = LocationSlice.actions;

export default LocationSlice.reducer;