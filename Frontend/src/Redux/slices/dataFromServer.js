import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    appData : [],
    userData : [],
}

const allDatas = createSlice({
    name:"applicationData",
    initialState,
    reducers:{
        setData: ( state , action ) => {
            state = action.payload;
        }
    }
})


export default allDatas;
export const { setData } = allDatas.actions
