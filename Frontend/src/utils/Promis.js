import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAppData, setUserData } from "../Redux/slices/dataFromServer";
import axios from "axios";





const Promis = () => {
    const dispatch = useDispatch();
    const [user,setUser] = useState(undefined);

    
    useEffect(()=>{
        
        ;(async ()=> {
            if (user) return ;
            const { data } = await axios.get(`${import.meta.env.VITE_REACT_SERVER_API}/user/user`,{withCredentials:true});
            setUser(data.data);
            dispatch(setUserData(user))
        })();

        if (user) window.localStorage.setItem("user",JSON.stringify(user))
    
    
    },[user])




    return undefined
}
export default Promis;