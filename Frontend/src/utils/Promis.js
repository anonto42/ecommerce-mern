import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAppHeroData , setUserData , setCatagorysData , setBestSellingProductsData , setSpecialOffersDiscountsData , setProductData , setTotalUserData, setAllProductsForAdmin, orders , totalVisitors} from "../Redux/slices/dataFromServer";
import axios from "axios";





const Promis = () => {
    const dispatch = useDispatch();
    try {
        
        const data = useSelector( data => data.applicationData.userData)
        
        useEffect(()=>{
            
            
            (async()=>{
                
                // get the hero section data
                await axios.get(`${import.meta.env.VITE_REACT_SERVER_API}/user/hero`,{withCredentials:true})
                .then( res => dispatch(setAppHeroData(res.data.data)))
                .catch(err => console.log(err))

                // Get user data
                await axios.get(`${import.meta.env.VITE_REACT_SERVER_API}/user/user`,{withCredentials:true})
                .then( res => dispatch(setUserData({
                    name: res.data.data.name,
                    email: res.data.data.email,
                    number: res.data.data.phone,
                    city: res.data.data.city,
                    thana: res.data.data.thana,
                    area: res.data.data.area,
                    location: res.data.data.location,
                    cart: res.data.data.cart.length > 0 ? res.data.data.cart : [],
                    orders:  res.data.data.orders.length > 0 ? res.data.data.orders : [],
                    wishlist:  res.data.data.wishlist.length > 0 ? res.data.data.wishlist : [],
                    userType:  res.data.data.userType,
                })))
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
                
                // send visitor
                await axios.post(`${import.meta.env.VITE_REACT_SERVER_API}/user/visitor`)
                .then( res )
                .catch(err => console.log("error in sending visitor"))

                if( data?.userType === "admin" ){

                    // get all users for the admin
                    await axios.get(`${import.meta.env.VITE_REACT_SERVER_API}/admin/users`,{withCredentials:true})
                    .then( res => dispatch(setTotalUserData(res.data.data)))
                    .catch(err => console.log(err))
            
                    // get all products for the admin
                    await axios.get(`${import.meta.env.VITE_REACT_SERVER_API}/admin/product`,{withCredentials:true})
                    .then( data => dispatch(setAllProductsForAdmin(data.data.data)))
                    .catch(err => console.log(err))
                    
                    // get orders
                    await axios.get(`${import.meta.env.VITE_REACT_SERVER_API}/admin/orders`,{ withCredentials: true})
                    .then( res => dispatch(orders(res.data.data)))
                    .catch(err => console.log(err))
            
                    // get visitors
                    await axios.get(`${import.meta.env.VITE_REACT_SERVER_API}/admin/visitors`,{ withCredentials: true})
                    .then( res => dispatch(totalVisitors(res.data.data)))
                    .catch(err => console.log(err))
                }

            })();
            
        },[])
        
    } catch (error) {
        console.error(error)
    }

    return undefined
}
export default Promis;