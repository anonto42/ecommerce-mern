import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAppData, setUserData } from "../Redux/slices/dataFromServer";
import axios from "axios";





const Promis = () => {
    const dispatch = useDispatch();
    try {
        
        useEffect(()=>{

            axios.get(`${import.meta.env.VITE_REACT_SERVER_API}/user/user`,{withCredentials:true})
            .then( res => dispatch(setUserData(res.data.data)))
            .catch(err => dispatch(setUserData(undefined)))
        
            },[])
        
    } catch (error) {
        console.error(error)
        dispatch(setAppData(false))
    }



    return undefined
}
export default Promis;