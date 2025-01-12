"use client";

import { WindowsLoation } from "@/lib/utils";
import { createSlice } from "@reduxjs/toolkit";


const initialState : WindowsLoation = {
    location: "This is the location of the application Home on the device"
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