import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAppData, setUserData } from "../Redux/slices/dataFromServer";
import axios from "axios";





const Promis = () => {
    const dispatch = useDispatch();
    const [user,setUser] = useState(undefined);
    const { userData , appdata } = useSelector( event => event.applicationData)

    
    useEffect(()=>{
        
        ;(async ()=> {
            if (user) return ;
            const { data } = await axios.get(`${import.meta.env.VITE_REACT_SERVER_API}/user/user`,{withCredentials:true});
            setUser(data.data);
            dispatch(
                setUserData(data.data)
            )
        })()
    
    
    },[user])













    return undefined
}
export default Promis;