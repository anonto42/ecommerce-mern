import { createSlice } from "@reduxjs/toolkit";
import firstHeroImage from '/hero.jpg';
import secondHeroImage from '/hero2.jpg';
import theardHeroImage from '/hero3.jpg';
import defualtImage from "/assets/frontImage.png";


const heroImages = [
    firstHeroImage,
    secondHeroImage,
    theardHeroImage
]
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
    title:"Product Name",
    price:"0",
    image:[ defualtImage , defualtImage , defualtImage ],
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
const catagorys = [
    "T-shirt",
    "Poto-shirt",
    "Shirt",
    "Pant"
]
const products = [
    product,
    product,
    product,
    product,
    product,
    product,
    product,
    product,
    product,
    product
]


const initialState = {
    appData : [
        heroImages,
        catagorys,
        bestSellingProducts,
        specialOffersDiscounts,
        products
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
