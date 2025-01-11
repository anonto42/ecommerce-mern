"use client";

import { configureStore  } from "@reduxjs/toolkit";
import counterSlice from "@/Redux/counters/counterSlice";

export const store = configureStore(
    {
        reducer:{
            counter : counterSlice
        }
    }
)


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatcher = typeof store.dispatch;