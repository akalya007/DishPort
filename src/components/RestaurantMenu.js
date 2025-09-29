// import { useEffect , useState } from "react";
// import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constants";

// const RestaurantMenu = () => {

// const [resInfo , setresInfo ] = useState(null);
// const {resId} = useParams();


// useEffect(()=>{
//    fetchMenu();
// },[]);

//   const fetchMenu = async()=>{
//       const data = await fetch(MENU_API + resId);
//   //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=80463&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
 
// //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=83633&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null"

//       const json = await data.json();
//       //console.log(json);   //using the data, we want to show the restaurant name,menu etc--bu using the useState();
//       setresInfo(json);
  
//     }
//  if(resInfo === null) return <Shimmer />;

// const { name, costForTwo, cuisines, avgRating } =resInfo?.data?.cards[2]?.card?.card?.info ;
// //const itemCards = groupedCards.filter(card => card?.card?.card?.itemCards) || [];
// const itemCards = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];
// console.log("===++" , itemCards);

//   return (
//    <div className="menu">
//     <h2>{name}</h2>
//     <p> {cuisines.join(",")} - {costForTwo /100} </p>
//     <h2>{avgRating}</h2>
//     <h2>Menu</h2>
   
//    <ul>
//     {itemCards.map((item) => (
//       <li key={item.card.info.id}>
//         {item.card.info.name} -{" Rs"}
//         {item.card.info.price /100 || item.card.info.price /100}</li>
//   ))}
//    </ul>
//    </div>
//   )
// }

// export default RestaurantMenu


//==============================================================================================================================================================

// this RestaurantMenu Component has both fetching the data deom the api , and then displaying the data--hence creating the custom hooks for having the Modularity in the code--
// creating the useRestaurantMenu() hook for fetching the data.

// hence it contains code only displaying it.--hence now it is easy for testing  reusable,Modularity.

// import useRestaurantMenu from "../utils/useRestaurant";
// import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";

// const RestaurantMenu = () => {
// const {resId} = useParams();

// const resInfo = useRestaurantMenu(resId);
//  if(resInfo === null) return <Shimmer />;

// const { name, costForTwo, cuisines, avgRating } =resInfo?.data?.cards[2]?.card?.card?.info ;
// //const itemCards = groupedCards.filter(card => card?.card?.card?.itemCards) || [];
// const itemCards = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];
// ////console.log("===++" , itemCards);
// console.log("==>" , resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

// const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
//   (c) => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
//   console.log("..",categories);

//   return (
//    <div className="menu">
//     <h2>{name}</h2>
//     <p> {cuisines.join(",")} - {costForTwo /100} </p>
//     <h2>{avgRating}</h2>
//     <h2>Menu</h2>
   
//    <ul>
//     {itemCards.map((item) => (
//       <li key={item.card.info.id}>
//         {item.card.info.name} -{" Rs"}
//         {item.card.info.price /100 || item.card.info.price /100}</li>
//   ))}
//    </ul>
//    </div>
//   )
// }

// export default RestaurantMenu;
//=====================================================================================
//filter() function and build the Accordian


// import { useEffect , useState } from "react";
// import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constants";

// const RestaurantMenu = () => {

// const [resInfo , setresInfo ] = useState(null);
// const {resId} = useParams();


// useEffect(()=>{
//    fetchMenu();
// },[]);

//   const fetchMenu = async()=>{
//       const data = await fetch(MENU_API + resId);
//   //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=80463&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
 
// //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=83633&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null"

//       const json = await data.json();
//       //console.log(json);   //using the data, we want to show the restaurant name,menu etc--bu using the useState();
//       setresInfo(json);
  
//     }
//  if(resInfo === null) return <Shimmer />;

// const { name, costForTwo, cuisines, avgRating } =resInfo?.data?.cards[2]?.card?.card?.info ;
// //const itemCards = groupedCards.filter(card => card?.card?.card?.itemCards) || [];
// const itemCards = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];
// console.log("===++" , itemCards);

//   return (
//    <div className="menu">
//     <h2>{name}</h2>
//     <p> {cuisines.join(",")} - {costForTwo /100} </p>
//     <h2>{avgRating}</h2>
//     <h2>Menu</h2>
   
//    <ul>
//     {itemCards.map((item) => (
//       <li key={item.card.info.id}>
//         {item.card.info.name} -{" Rs"}
//         {item.card.info.price /100 || item.card.info.price /100}</li>
//   ))}
//    </ul>
//    </div>
//   )
// }

// export default RestaurantMenu


//==============================================================================================================================================================
//with more tailwind css

//this RestaurantMenu Component has both fetching the data deom the api , and then displaying the data--hence creating the custom hooks for having the Modularity in the code--
//creating the useRestaurantMenu() hook for fetching the data.

//hence it contains code only displaying it.--hence now it is easy for testing  reusable,Modularity.

// import useRestaurantMenu from "../utils/useRestaurant";
// import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";
// import RestaurantCategory from "./RestaurantCategory";

// const RestaurantMenu = () => {
// const {resId} = useParams();

// const resInfo = useRestaurantMenu(resId);
//  if(resInfo === null) return <Shimmer />;

// const { name, costForTwo, cuisines, avgRating } =resInfo?.data?.cards[2]?.card?.card?.info ;
// //const itemCards = groupedCards.filter(card => card?.card?.card?.itemCards) || [];
// const itemCards = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];
// ////console.log("===++" , itemCards);
// console.log("==>" , resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

// const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
//   (c) => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
//   console.log("CATEGORY",categories);

//   return (
//    <div className="text-center">
//     <h2 className="font-bold my-6 text-2xl">{name}</h2>
//     <p className="font-bold text-lg"> 
//       {cuisines.join(",")} - {costForTwo /100} </p>
      
//    {/* for each category we have the Accordions --like in the Recommed la something(like Accordions), then Starters la some foods athula Accordinds c=etc....)*/}
//     {categories.map((category) =>(
//       <RestaurantCategory 
//       key={category.card.card.title} // or use a unique ID if available
//       data={category?.card?.card}/>
//     ))}
  

//    </div>
//   )
// }

// export default RestaurantMenu;


//========================================================================================================


import useRestaurantMenu from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
const {resId} = useParams();

const resInfo = useRestaurantMenu(resId);

const [showIndex  , setshowIndex] = useState(null);

 if(resInfo === null) return <Shimmer />;

const { name, costForTwo, cuisines, avgRating } =resInfo?.data?.cards[2]?.card?.card?.info ;
//const itemCards = groupedCards.filter(card => card?.card?.card?.itemCards) || [];
const itemCards = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];
////console.log("===++" , itemCards);
// console.log("==>" , resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  (c) => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  console.log("CATEGORY",categories);

  return (
   <div className="text-center">
    <h2 className="font-bold my-6 text-2xl">{name}</h2>
    <p className="font-bold text-lg"> 
      {cuisines.join(",")} - {costForTwo /100} </p>
      
   {/* for each category we have the Accordions --like in the Recommed la something(like Accordions), then Starters la some foods athula Accordinds c=etc....)*/}
    {categories.map((category , index) =>(
      //Now this is teh Controlled Components.

      <RestaurantCategory 
      key={category.card.card.title} // or use a unique ID if available
      data={category?.card?.card}
      showItems={index == showIndex ? true : false} // if it is showItems={True} ---it will expand all the thing. bwcause sending true for all the category.
      setshowIndex = {()=>setshowIndex(index)} //it basically it shoes whenever we clicked on it. //passing to the children.
      />  
    
    ))}
  

   </div>
  )
}

export default RestaurantMenu;


//In th Controlling the Components 
// ---At the time only one Accordian should be displayed.
// --so that , we can have the Index(Which is inside the map() function) in the State.
//when i click the other Category like Recommended,i eant to chsnge the Showitem.
//==category is in the RestaurantCategory which is the child of the RestaurantMenu(parent) ---it means if we click , somehow i wnat to change the state variable(showIndex) of te parent.
//--changeing the state variable from child to parent?--Not passible directly,
