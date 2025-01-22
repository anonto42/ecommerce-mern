import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    appData : [
        "application"
    ],
    userData : [
        "user"
    ],
}

const allDatas = createSlice({
    name:"applicationData",
    initialState,
    reducers:{
        setAppData: ( state , action ) => {
            state.appData = action.payload;
        },
        setUserData: ( state , action ) => {
            state.userData = action.payload;
        }
    }
})


export default allDatas;
export const { setAppData , setUserData } = allDatas.actions
