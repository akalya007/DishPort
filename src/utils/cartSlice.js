import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
name:'cart',
initialState :{
    items:[]
},
reducers:{    
    addItem :(state , action)=>{    //two parameters
      state.items.push(action.payload);
    },
    removeItem :(state )=>{
     state.items.pop();
    },
    clearCart : (state) =>{   //basically this reducer function does not need the action , because we need to make the length 0.
        state.items.length = 0;  //it makes  State empty array/...[]---we should not put as state=[] because,we are not Mutating the state, we are changing the reference.--also in another way , this State is the local variable, this will change the state locally , it will not modify the state actually.
   //return {items :[] };   //also we can do like this.will be replaced originalState = {items :[] }
    
    },
},
});

export const {addItem , removeItem , clearCart} = cartSlice.actions; //note👇(why we putting like this?)--
export default cartSlice.reducer;   //this reducer of the combination of small reducer function.--see reducer in the appstore.



/**
 * createSlice is used for creating the Slice
 * 
 * For Creating Slice, we have some configuration.
 * like name , initialState,reducers
 * name of the slice
 * in the reducer--we write those reducer function corresponding to the actions.
 * actions are Add the item , clear the Items etc.
 * 
* ==> additem is teh action --whe clicking the Add buton , it should update the slice in the store.
But how to update the Slice of the Store?
To modify the Slice in the store,it get Access to the State(initial state in the empty array.) and it also get access to the action.
 * 
 */


/**
 * Note😀
 * 
 * createSlice will return the Object.
 * 
 * cartSlice will be 👇
 * 
 * {
 *  actions:{
 *    addItem,removeItem,etc.  [hence taking out individually and exportig]
 *   },
 *  reducer:{
 * 
 *  }
 * }
 */


/**
 * Difference between older redux and the Atpresent redux
 * ======================================================
 *   addItem :(state , action)=>{    //two parameters
        //vanilla(older) redux= redux says that Dont't mutate the state.(returning is mandatary)
    (older)     //const newState = [...state];
        //  newState.items.push(action.payload);
        // return newState;

        //redux Toolkit
        //we have to mutate the State--returning is not mandatory
    (newer) state.items.push(action.payload);

    }

---> In the newer, redux is actualy doing like in the older way , but it dont wnat to developer to do.
Redux toolkit uses the immer library behind the sceens.
 */