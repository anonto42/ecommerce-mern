"use client";

import { CounterState } from "@/lib/utils";
import { createSlice } from "@reduxjs/toolkit";


const initialState : CounterState = {
    value: 0
}

export const counterSlice = createSlice(
    {
        name:"counter",
        initialState,
        reducers:{
            increment: ( state ) => { state.value += 1 },
            incrementByAmount: ( state , action ) => {
                state.value += action.payload;
            }
        }
    }
)


export const { increment , incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;