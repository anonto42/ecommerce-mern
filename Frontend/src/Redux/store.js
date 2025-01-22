import { configureStore } from '@reduxjs/toolkit';
import allDatas from './slices/dataFromServer';



export const store = configureStore({
    reducer:{
        [ allDatas.name ] : allDatas.reducer
    }
});