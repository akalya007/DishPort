
import { LOGO_URL } from "../utils/constants";    //named exports
import { useContext, useEffect, useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import '../index.css';
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
const [btnNameReact , setbtnNameReact] = useState("Login");  //note 1
const OnlineStatus = useOnlineStatus();

const {loggedInUser} = useContext(UserContext)  //we can have many more context.

//subscribing to the store using the Selector--useSelector() hook gives use access to the store.
const cartItems = useSelector((store)=> store.cart.items)   //this selector helps to identifies what portion of the store , that need to read.---//this is how we read itesms in the store.
                                 //This "cartItems" , will get  the data of the items.

useEffect(()=>{      //note 2
console.log("useEffect called");
},[btnNameReact]);

  return (
    <div className="flex justify-between  bg-pink-100 shadow-lg sm:bg-green-50" >
      <div className="logo-container">
      <img className="w-48" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4"> Online: {OnlineStatus ? "✅" : "🔴" }</li>
          <li className="px-4"><Link to="/">Home </Link></li>
        <li className="px-4"><Link to="/about">About</Link></li>
         <li className="px-4"><Link to="/contact">Contact </Link></li>
            <li className="px-4"><Link to="/grocery">Grocery </Link></li>

          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart-({cartItems.length} items) </Link> </li>
        
          <button className="px-4" onClick={ ()=>{
            btnNameReact ==="Login" ? setbtnNameReact("Logout"): setbtnNameReact("Login");
            
          }}>{btnNameReact}</button>
            <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
    
  );
};

export default Header;


/**
 * Note 1:
 * ======
 * const [btnNameReact , setbtnNameReact] = useState("Login");
 * 
 * --hence  it is the const , how could the variable , can cjange?
 * Whenever we updating the value by-- setbtnNameReact(), it will calling the componenet once again , it is rendering
 * (calling the function == **rendering the component once again**),
 * this "btnNameReact" variable is new than it before.
 * When the new "btnNameReact" variable was created , it will not created with the default value , it will created with the updated value form the setbtnReact() method.
 * 
 * 
 * when the rendering time , only the button will get updated , no change in other thing.
 *  
 */

/**
 * NOTE 2
 * =====
 * 
 useEffect=> Two arguments--callback function , dependency array.
  -It is called after every rendering of the component
 - dependency array changes the behaviour of the render.

 ==> if no dependency array = useEffect is called on every render.
 ==> if dependency array is empty  [] => useEffect is called on initial render(just once).
 ==> if dependency array ia something [btnNameReact]  => called every time "btnNameReact" is updated,
 */

 //NOTES ON USE_STATE()
 //=====================

 // Dont create the useState() hook outside of the component.
 //dont create the useState() hook inside the if-else()--it gives the inconsistency in the program.
 //dont create the state variable inside the for_loop , inside the conditions , inside the functions.Try to keep it in the top in the Componenets. 
