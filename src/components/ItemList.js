// import { CDN_URL } from "../utils/constants";

// const ItemList = ({items})=>{
//     console.log("items" , items);
//     return (
//     <div>
//         {items.map((item) =>(
//        <div key={item.card.info.id}
//        className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
//        >
       
//     <div className="w-9/12">
//         <div className="py-2">
//             <span>{item.card.info.name}</span>
//             <span>- ₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice/100 }</span>
//         </div>
//         <p className="text-xs">{item.card.info.description} </p>
//     </div>
//     <div className="w-3/12 p-4">
//     <div className="absolute">
//     <button className="p-1 mx-16 rounded-lg bg-black text-white shadow-lg">Add+</button>
//     </div>
//         <img src={CDN_URL + item.card.info.imageId} className="w-24 h"/>
//     </div>
//     </div>
//         ))}
//         </div>) 
// }


// export default ItemList;

//==================================================================
import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice"; // make sure removeItem exists

const ItemList = ({ items }) => {
  console.log("items", items);

  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items); // get cart from Redux

  // const handleAddItem = ()=>{
  //   //Dispatch an action.
  //     dispatch(addItem(" pizza"));   //what ever i passed inside this , it will go inside my cart.//Note👇
  // }

  const handleAddItem = (item) => {
    dispatch(addItem(item));   // Add item to cart
  }

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item)); // Remove item from cart
  }

  // Helper to get count of a particular item in cart
  const getItemCount = (itemId) => {
    return cartItems.filter((cartItem) => cartItem.card.info.id === itemId).length;
  }

  return (
    <div>
      {items.map((item, index) => {
        const count = getItemCount(item.card.info.id); // current count of this item
        return (
        <div key={item.card.info.id + "-" + index} // ✅ unique key fix
          className="p-4 my-4 border-b-2 border-gray-200 text-left flex justify-between bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="w-9/12 pr-4">
            <div className="py-1">
              <span className="font-medium text-gray-800">
                {item.card.info.name}
              </span>
              <span className="text-green-600 font-semibold ml-2">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm text-gray-500">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12 relative flex flex-col items-center">
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-24 h-24 object-cover rounded-md border border-gray-100"
            />
            <div className="absolute bottom-2 flex space-x-2">
              <button 
                className="px-4 py-1 bg-black text-white text-sm rounded-md shadow-md hover:bg-gray-800 transition-all duration-200"
                onClick={() => handleAddItem(item)}
              >
                Add {count > 0 && count} {/* shows count if > 0 */}
              </button>
              <button 
                className="px-4 py-1 bg-red-600 text-white text-sm rounded-md shadow-md hover:bg-red-500 transition-all duration-200"
                onClick={() => handleRemoveItem(item)}
              >
                -
              </button>
            </div>
          </div>
        </div>
        )
      })}
    </div>
  );
};

export default ItemList;



/**
 * 
 Note😀:

 -If we write "Pizza" inside the addItem--it will go insid ethe action.payload, which we written inside the reducer fun in the cartSlice.   
 -what ever we write inside the addItem , it will go inside the "action"[as inside the reducer function("action" parameter)].

 What redux do Internally
 ========================

 dispatch(addItem(" pizza"));   ----when dispatch the Action!

1. it created the object--{   }
2.it will create the payload object inside it.then pass the "pizza" inside it.
3.
 {
 payload : "pizza"
 }

 4.then dispatching the action , it will pass to the second argument(action ) in the reducer function in the cartSlice.  
 5. when we will do "action.payload" , we will get this "pizza"
 */

 /**
  * ===>
  * onClick={() => { handleAddItem(item) }}
✅ Correct ✅
You're passing an anonymous arrow function to onClick, which means:

It does nothing immediately

When clicked, it calls handleAddItem(item)

===>
onClick={handleAddItem(item)}
❌ Wrong (unintended behavior)
You're immediately calling handleAddItem(item) when React renders the component 
— not when the user clicks the button. The result (likely undefined) is assigned to onClick.


The function runs early (during render)

The button ends up with onClick={undefined}

So clicking the button does nothing
  */
