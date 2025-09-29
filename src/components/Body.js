
//import resList from "../utils/mockData";
import RestaurantCard , {withPromotedLabel} from "./RestaurantCard";
import {useEffect, useState , useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {

  //const listofRestaurant =[];   //normal variable
const [listofRestaurant , setlistofRestaurant] = useState([]);
const [filteredRestaurant , setfilteredRestaurant] = useState([]);

const [SearchText , setSearchtext] = useState("");
  
const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

//whenever state variable update,react triggers a reconciliation cycle(re-renders the component)
//console.log("body rendered");
useEffect(()=>{
    fetchData();
} , []);

const fetchData =async ()=>{
const data =await fetch(     //redering data using the live api
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=80463&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
);
const json = await data.json();
console.log(json);

setlistofRestaurant(       //for filtering the restaurant , use listofRestaurant.
  json.data.cards.filter((card) =>
      card?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  )
)
setfilteredRestaurant(                   //initially , make the copy, for filtering from the filtered data in the UI.
  json.data.cards.filter((card) =>
      card?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  )
)};

//condition rendering --rendering based on the condition.
// if(listofRestaurant.length === 0){
//      return <Shimmer />;
// }

const OnlineStatus = useOnlineStatus(); 
if(OnlineStatus === false)
  return(
  <h1>
Looks like you'r in Offline , Please check your Internet Connection.
  </h1>
  )

  const {setuserName , loggedInUser} = useContext(UserContext);

  return listofRestaurant.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter flex">
        <div className=" search m-4 p-4 ">
        <input 
        type="text" 
        className=" border border-solid border-black " value={SearchText} onChange={(e)=>{
        setSearchtext(e.target.value);
        }}/>
     <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
        onClick={()=>{
          //filter the restaurant cards and update the UI
          //searchtext.

          const filteredRestaurant = listofRestaurant.filter((res)=> 
            res.card.card.info.name.toLowerCase().includes(SearchText.toLowerCase()));

          setfilteredRestaurant(filteredRestaurant);
        }}> Search</button>
        </div>
          
      <div className="search m-4 p-4 flex items-center">
      <button
        className="px-4 py-2 bg-gray-100 rounded-lg" 
        onClick={()=>{ 
          const filteredList = listofRestaurant.filter((res) =>    //in the Second time filtering , it will filter from the listOfRestaurant.
        res.card.card.info.avgRating >= 4.5 )
      setfilteredRestaurant(filteredList);
      }}>  Top Rated Restaurant </button>

       <label className="ml-16 " >UserName :</label>
       <input className="border border-black ml-1 " value={loggedInUser}
       onChange={(e)=>{setuserName (e.target.value)}}/>
       
   </div>
        </div>
      <div className="flex flex-wrap gap-8">
        {filteredRestaurant.map((restaurant) => (                                                  //use the key to the parent(in the <Link>)
         <Link key={restaurant.card.card.info.id} to={"/Restaurant/" + restaurant.card.card.info.id}>
              {/* If the restaurant is promoted then add a promoted label to it */}
           {restaurant.card.card.info.promoted ? (<RestaurantCardPromoted  resData={restaurant.card.card.info}/> 
           ) : (
           <RestaurantCard   // Use the unique restaurant ID as the key than using the Index(hence index as the key is not recommended by the react)
            resData={restaurant.card.card.info}  /> )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;


















