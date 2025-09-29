import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
const {loggedInUser} = useContext(UserContext);

  return (
    <div className=" w-[250px] h-[420px] p-4 bg-gray-100 rounded-xl shadow-md flex flex-col justify-between hover:bg-gray-200 ">
      <img
        className="w-full h-40 object-cover rounded-lg mb-3"
        alt="res-logo"
      src={CDN_URL + resData.cloudinaryImageId}
      />
      <h3 className="text-lg font-semibold">{resData.name}</h3>
      <h4 className="text-sm text-gray-600">{resData.cuisines.join(", ")}</h4>
      <h4 className="text-sm font-medium">{resData.avgRating} stars</h4>
      <h4 className="text-sm">{resData.costForTwo} FOR TWO</h4>
      <h4 className="text-sm text-gray-500">{resData.sla.deliveryTime} minutes</h4>
     <h4 className="text-sm text-gray-500"> User: {loggedInUser}</h4>

    </div>
  );
};


//Higher order Components---that takes the RestaurantCard components enhances(RestaurantCard With the promoted  label) and returns the new Component.
//A Higher-Order Component (HOC) is a function that takes a React component as an argument and returns a new, enhanced component

//input ==>RestaurantCard ==>RestaurantCardPromoted.
//"withPromotedLabel" --is the higherorder component
//this higerOrder Componenet is the function--below--first "return" is the returning Componenet with the promotes label.

export const withPromotedLabel = (RestaurantCard) =>{
  return (props)=>{
return(
  <div>
    <label className="absolute bg-black text-white m-2 p-1 rounded-lg"> promoted</label>
    <RestaurantCard {...props}/>
  </div>
);
};
}; 


 export default RestaurantCard;


 /**
  * 1. RestaurantCard.js
Purpose: Displays a single restaurant card in the home page restaurant list.
  */