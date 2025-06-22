import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"



//creating the Store.
const appStore = configureStore({
reducer:{   //for each slice , we have its   reducer.--**this reducer actually apps big reducer** ,and it consist of small reducers from different slices.**//This reducer is the combination different reducer of the slices.***
cart : cartReducer,
},
});

export default appStore;


/**
 * If we what tp modify the Store , it also have the reducer .
 * 
 */

