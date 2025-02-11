import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAppHeroData , setUserData , setCatagorysData , setBestSellingProductsData , setSpecialOffersDiscountsData , setProductData , setTotalUserData, setAllProductsForAdmin } from "../Redux/slices/dataFromServer";
import axios from "axios";





const Promis = () => {
    const dispatch = useDispatch();
    try {
        
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
                .then( ({ data }) => dispatch(setProductData((data.data))))
                .then( ({ data }) => dispatch(setAllProductsForAdmin((data.data))))
                .catch(err => console.log(err))
                
                // // get all catagorys for the admin
                // await axios.get(`${import.meta.env.VITE_REACT_SERVER_API}/admin/catagorys`,{withCredentials:true})
                // .then( res => dispatch(setCatagorysData(res.data.data)))
                // .catch(err => console.log(err))
                
                // // get all best selling products for the admin
                // await axios.get(`${import.meta.env.VITE_REACT_SERVER_API}/admin/bestselling`,{withCredentials:true})
                        

            })();
        
            },[])
        
    } catch (error) {
        console.error(error)
        dispatch(setAppData(false))
    }



    return undefined
}
export default Promis;