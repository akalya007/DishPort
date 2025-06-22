import { useEffect, useState } from "react";


const useOnlineStatus = ()=>{
const [OnlineStatus , setOnlineStatus] = useState(true);

    useEffect(()=>{         //if it is offline , we want to update the onlineSttaus to "false".
      window.addEventListener("offline" ,()=>{
     setOnlineStatus(false);
      });  
      
     window.addEventListener("online" ,()=>{
     setOnlineStatus(true);
      }); 
    }, []);

return OnlineStatus;
}

export default useOnlineStatus;


//there is the Eventlistener , to check whether it is online or offline, It is the Window object , which was given by browser.