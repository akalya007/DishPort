// import { useState } from "react";
// import ItemList from "./ItemList";

// const RestaurantCategory = ({data})=>{
//    // console.log("+" , data);

//    const [showItems , setShowItems] = useState(false);
//    const handleClick = ()=>{
//    //setShowItems(!showItems);
//    }
// return(
//     <div>
//         {/* Header */}
//        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 "> 
//        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
//         <span className="font-bold text-lg"> 
//             {data.title}({data.itemCards.length})
//         </span>
//         <span> ⬇️</span>
//        </div>
//         {/* Accordion Body */}
//             {showItems && <ItemList items={data.itemCards} />}
//     </div>
//     </div>
// );
// };

// export default RestaurantCategory;


//==============================================================================================
//having the controller components
//all the RestaurantCategory have their own state---own showm show items
//if clicking the "Recommand"(recommend is controlling the Items list) then "New Added"---so we want the State to lifted UP.i wnat the "Recommend" should collapse...collapsing the RestaurantCategory.
//In the above code , showItems(State) is handled by them s0 , that is Uncontroller Componenets.
//First we have the show and expand to the RestaurantCategory , but wnat to give to the RestaurantMeny.

import ItemList from "./ItemList";

const RestaurantCategory = ({data , showItems , setshowIndex})=>{
const handleClick = ()=>{
setshowIndex();
}
return(
    <div>
        {/* Header */}
       <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 "> 
       <div className="flex justify-between cursor-pointer"
       onClick={handleClick} >
        <span className="font-bold text-lg"> 
            {data.title}({data.itemCards.length})
        </span>
        <span> ⬇️</span>
       </div>
        {/* Accordion Body */}
            {showItems && <ItemList items={data.itemCards} />}
    </div>
    </div>
);
};

export default RestaurantCategory;


//INTERVIEW:
/**
 * Controlled Component.
 * 
 * UnControlled Component.
 * 
 * In React, a controlled component has its form data managed by the React component's state,
 *  while an uncontrolled component relies on the DOM to manage the form data. 
 * Controlled components are more predictable and centralize state management, 
 * whereas uncontrolled components interact directly with the DOM. 
 * 
 * 
 * 
 */
