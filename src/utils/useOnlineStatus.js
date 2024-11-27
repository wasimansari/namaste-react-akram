import { useAccordionState } from "@szhsin/react-accordion";
import react from "react"
import {useEffect,useState} from "react";
useOnlineStatus=()=>{
    const [status, setStatus] = useState(true);

    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setStatus(false);
        });
        window.addEventListener("online",()=>{
            setStatus(true);
        });
    },[]);
    return status;
}

export default useOnlineStatus;