import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    appData : {
        heroData : {
            topText:"",
            images:[]
        },
        catagorys:[],
        bestSellingProducts:[],
        specialOffersDiscounts:[],
        products : []
    },
    userData : {
        name: "DEFAULT! Please enter yours...",
        email: "DEFAULT! Please enter yours...",
        number: "DEFAULT! Please enter yours...",
        city: "DEFAULT! Please enter yours...",
        thana: "DEFAULT! Please enter yours...",
        area: "DEFAULT! Please enter yours...",
        location: "DEFAULT! Please enter yours...",
        cart: [],
        orders: [],
        wishlist: [],
        userType: undefined,
    },
    adminData:{
        totalUsers: [],
        allProducts: [],
        orders: [],
        totalVisitors: [],
    }
}

const allDatas = createSlice({
    name:"applicationData",
    initialState,
    reducers:{
        setAppHeroData: ( state , action ) => {
            state.appData.heroData = action.payload;
        },
        setCatagorysData: ( state , action ) => {
            state.appData.catagorys = action.payload;
        },
        setBestSellingProductsData: ( state , action ) => {
            state.appData.bestSellingProducts = action.payload;
        },
        setSpecialOffersDiscountsData: ( state , action ) => {
            state.appData.specialOffersDiscounts = action.payload;
        },
        setProductData: ( state , action ) => {
            state.appData.products = action.payload;
        },
        setUserData: ( state , action ) => {
            state.userData = action.payload;
        },
        setTotalUserData: ( state , action ) => {
            state.adminData.totalUsers = action.payload;
        },
        setAllProductsForAdmin:(state,action)=>{
            state.adminData.allProducts = action.payload;
        },
        orders:(state,action)=>{
            state.adminData.orders = action.payload;
        },
        totalVisitors:(state,action)=>{
            state.adminData.totalVisitors = action.payload;
        }
    }
})


export default allDatas;
export const { setAppHeroData , setUserData , setCatagorysData , setBestSellingProductsData , setSpecialOffersDiscountsData , setProductData , setTotalUserData , setAllProductsForAdmin , orders , totalVisitors } = allDatas.actions
