// import {useState } from 'react'

// const User =({name})=>{

//     const [count ] = useState(0);
//     const [count2] = useState(1);

//     return(
//         <div className="user-card">
//         <h1> Count : {count}</h1>
//        <h1> Count2 : {count2}</h1>
//        <h2>Name : {name} </h2>
//        <h3>Location : Coimbatore</h3>
//        <h3>Contact : akalyad007</h3>
//         </div>
//     )
// }


// export default User;

/**
 * Rendering the functional components
 * ===================================>--actuall means-
 * In the web page, we have te functional componets , 
 * it loads--its mounting that functional componenst to that webpage, its like invoking the functional component.
 * 
 * ....state variable in funcctional conponent....
 * --Behind the scenes, React will create the the big object , and place all the state variable inside it --but syntax we will create it as separate.
 * 
 */




//============================================================================================================================

import {useEffect, useState } from 'react'

const User =({name})=>{

  const [count ] = useState(0);
  
  useEffect (()=>{
   //api call

   const timer = setInterval(()=>{
    console.log("Namaste React OP");
   } , 1000);

   console.log("useEffect")

  return ()=>{    //this functions calls when componenet unMounting
  clearInterval(timer)   //we wnat to clear the timer.
    console.log("useEffect Return");
  }


  } , []);
console.log("render")
    useEffect (()=>{    //when whant to do something othre  for count2, we what to do another useEffect()
   //api call
  } , [ ]);

    return(
        <div className="user-card">
       
       <h2>Name : {name} </h2>
       <h3>Location : Coimbatore</h3>
       <h3>Contact : akalyad007</h3>
        </div>
    )
}


export default User;
