import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAppHeroData , setUserData , setCatagorysData , setBestSellingProductsData , setSpecialOffersDiscountsData , setProductData , setTotalUserData, setAllProductsForAdmin } from "../Redux/slices/dataFromServer";
import axios from "axios";





const Promis = () => {
    const dispatch = useDispatch();
    try {

        const data = useSelector( data => data.applicationData.appData)
        
        console.log(data)
        useEffect(()=>{
            
            
            (async()=>{
                
                // get the hero section data
                await axios.get(`${import.meta.env.VITE_REACT_SERVER_API}/user/hero`,{withCredentials:true})
                .then( res => dispatch(setAppHeroData(res.data.data)))
                .catch(err => console.log(err))

                // Get user data
                await axios.get(`${import.meta.env.VITE_REACT_SERVER_API}/user/user`,{withCredentials:true})
                .then( res => dispatch(setUserData(res.data.data)))
                .catch(err => dispatch(setUserData({
                    name: "...",
                    email: "...",
                    number: "...",
                    city: "...",
                    thana: "...",
                    area: "...",
                    location: "...",
                    cart: [],
                    orders: [],
                    wishlist: [],
                    userType: undefined,
                })))
    
                // get all users for the admin
                await axios.get(`${import.meta.env.VITE_REACT_SERVER_API}/admin/users`,{withCredentials:true})
                .then( res => dispatch(setTotalUserData(res.data.data)))
                .catch(err => console.log(err))

                // get all products for the admin
                await axios.get(`${import.meta.env.VITE_REACT_SERVER_API}/admin/product`,{withCredentials:true})
                .then( data => dispatch(setAllProductsForAdmin(data.data.data)))
                .catch(err => console.log(err))

                // get Special offers products
                await axios.get(`${import.meta.env.VITE_REACT_SERVER_API}/user/special`)
                .then( res => dispatch(setSpecialOffersDiscountsData(res.data.data)))
                .catch(err => console.log(err))

                // get Best-selling product products
                await axios.get(`${import.meta.env.VITE_REACT_SERVER_API}/user/bestselling`)
                .then( res => dispatch(setBestSellingProductsData(res.data.data)))
                .catch(err => console.log(err))

                // get All hot-Item
                await axios.get(`${import.meta.env.VITE_REACT_SERVER_API}/user/hotItem`)
                .then( res => dispatch(setProductData(res.data.data)))
                .catch(err => console.log(err))

                // get catagory's
                await axios.get(`${import.meta.env.VITE_REACT_SERVER_API}/user/catagorys`)
                .then( res => dispatch(setCatagorysData(res.data.data)))
                .catch(err => console.log(err))
                
            })();
        
            },[])
        
    } catch (error) {
        console.error(error)
    }

    return undefined
}
export default Promis;