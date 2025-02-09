import { createSlice } from "@reduxjs/toolkit";
import firstHeroImage from '/hero.jpg';
import secondHeroImage from '/hero2.jpg';
import theardHeroImage from '/hero3.jpg';
import defualtImage from "/gg.png";


const reviews = [
    {
        name:"John Doe",
        rating:5,
        comment:"Great product!",
        images:[ defualtImage , defualtImage , defualtImage ]
    },
    {
        name:"John Doe",
        rating:5,
        comment:"Great product!",
        images:[ defualtImage , defualtImage , defualtImage ]
    },
    {
        name:"John Doe",
        rating:5,
        comment:"Great product!",
        images:[ defualtImage , defualtImage , defualtImage ]
    },
    {
        name:"John Doe",
        rating:5,
        comment:"Great product!",
        images:[ defualtImage , defualtImage , defualtImage ]
    },
]
const product = {
    _id:"owerj;oqwericvaasdhaoiew0923",
    title:"T-shirt",
    price:"0",
    images:[ defualtImage , firstHeroImage , defualtImage ],
    description:"lorem ipsum dolor sit amet, consectetur adip occ occurence velit vel augue vel augue vel augue vel augue vel augue vel augue vel augue vel augue vel aug augue vel augue vel augue vel augue vel augue vel aug uncertainty",
    catagory:"T-shirt",
    quantity:0,
    reviews,
    size:['M',"S","X","L","XL"],
    color:["Black","White"],
    gender:["Male","Female"],
    material:["Cotton","Polyester"],
    colorCode:["Black","blue","gray","Red"],
    fabric:["Denim","Cotton"],
    brand:"S-Brand",
    questionsAboutProduct:[
        {
            question:"What is the best size for me?",
            answer:"S"
        },
        {
            question:"What is the best size for me?",
            answer:"S"
        },
        {
            question:"What is the best size for me?",
            answer:"S"
        },
        {
            question:"What is the best size for me?",
            answer:"S"
        },
        {
            question:"What is the best size for me?",
            answer:"S"
        },
    ]
}
const product2 = {
    _id:"owerj;oqwericvaasdhaoiew0923",
    title:"Polo-T-shirt",
    price:"0",
    images:[ defualtImage , firstHeroImage , defualtImage ],
    description:"lorem ipsum dolor sit amet, consectetur adip occ occurence velit vel augue vel augue vel augue vel augue vel augue vel augue vel augue vel augue vel aug augue vel augue vel augue vel augue vel augue vel aug uncertainty",
    catagory:"Polo-T-shirt",
    quantity:0,
    reviews,
    size:['M',"S","X","L","XL"],
    color:["Black","White"],
    gender:["Male","Female"],
    material:["Cotton","Polyester"],
    colorCode:["Black","blue","gray","Red"],
    fabric:["Denim","Cotton"],
    brand:"S-Brand",
    questionsAboutProduct:[
        {
            question:"What is the best size for me?",
            answer:"S"
        },
        {
            question:"What is the best size for me?",
            answer:"S"
        },
        {
            question:"What is the best size for me?",
            answer:"S"
        },
        {
            question:"What is the best size for me?",
            answer:"S"
        },
        {
            question:"What is the best size for me?",
            answer:"S"
        },
    ]
}
const product3 = {
    _id:"owerj;oqwericvaasdhaoiew0923",
    title:"Shirt",
    price:"0",
    images:[ defualtImage , firstHeroImage , defualtImage ],
    description:"lorem ipsum dolor sit amet, consectetur adip occ occurence velit vel augue vel augue vel augue vel augue vel augue vel augue vel augue vel augue vel aug augue vel augue vel augue vel augue vel augue vel aug uncertainty",
    catagory:"Shirt",
    quantity:0,
    reviews,
    size:['M',"S","X","L","XL"],
    color:["Black","White"],
    gender:["Male","Female"],
    material:["Cotton","Polyester"],
    colorCode:["Black","blue","gray","Red"],
    fabric:["Denim","Cotton"],
    brand:"S-Brand",
    questionsAboutProduct:[
        {
            question:"What is the best size for me?",
            answer:"S"
        },
        {
            question:"What is the best size for me?",
            answer:"S"
        },
        {
            question:"What is the best size for me?",
            answer:"S"
        },
        {
            question:"What is the best size for me?",
            answer:"S"
        },
        {
            question:"What is the best size for me?",
            answer:"S"
        },
    ]
}
const product4 = {
    _id:"owerj;oqwericvaasdhaoiew0923",
    title:"pant name",
    price:"0",
    images:[ defualtImage , firstHeroImage , defualtImage ],
    description:"lorem ipsum dolor sit amet, consectetur adip occ occurence velit vel augue vel augue vel augue vel augue vel augue vel augue vel augue vel augue vel aug augue vel augue vel augue vel augue vel augue vel aug uncertainty",
    catagory:"Pant",
    quantity:0,
    reviews,
    size:['M',"S","X","L","XL"],
    color:["Black","White"],
    gender:["Male","Female"],
    material:["Cotton","Polyester"],
    colorCode:["Black","blue","gray","Red"],
    fabric:["Denim","Cotton"],
    brand:"S-Brand",
    questionsAboutProduct:[
        {
            question:"What is the best size for me?",
            answer:"S"
        },
        {
            question:"What is the best size for me?",
            answer:"S"
        },
        {
            question:"What is the best size for me?",
            answer:"S"
        },
        {
            question:"What is the best size for me?",
            answer:"S"
        },
        {
            question:"What is the best size for me?",
            answer:"S"
        },
    ]
}
const bestSellingProducts = [
    product,
    product,
    product,
    product,
    product,
    product,
    product,
    product,
    product,
    product,
    product,
    product,
    product,
]
const specialOffersDiscounts = [
    product,
    product,
    product,
    product,
    product,
    product,
    product,
    product,
    product,
]
const products = [
    product,
    product3,
    product2,
    product,
    product2,
    product4,
    product4,product,
    product3,
    product3,
    product2,
    product,
    product2,
    product4,
    product3,
    
]


const initialState = {
    appData : {
        heroData : {
            topText:"",
            images:[]
        },
        catagorys:["...","..","."],
        bestSellingProducts,
        specialOffersDiscounts,
        products
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
        userType: "",
    },
    adminData:{
        totalUsers: 0
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
        }
    }
})


export default allDatas;
export const { setAppHeroData , setUserData , setCatagorysData , setBestSellingProductsData , setSpecialOffersDiscountsData , setProductData , setTotalUserData } = allDatas.actions
