"use client";

import { configureStore  } from "@reduxjs/toolkit";
import counterSlice from "@/Redux/counters/counterSlice";
import LocationSlice from "./counters/LocationSlice";

export const store = configureStore(
    {
        reducer:{
            isHome : LocationSlice
        }
    }
)


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatcher = typeof store.dispatch;