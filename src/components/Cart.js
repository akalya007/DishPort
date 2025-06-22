import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart =()=>{    
  //way1  --efficient.
const cartItems = useSelector((store)=> store.cart.items);   //**to read or display the items in the cart ,e need to subcribe to the store.**---make sure you your are subsribing to the right portion of the store.

//way2-notedown 👇
// const store = useSelector((store) => store);  //never do this  //also we can write like this.this store variable is subsribing to the whole redux store
// const cartItems = store.cart.items;

const dispatch = useDispatch();
const handleClearCart =()=>{
    dispatch(clearCart());
}
    return(
        <div className="text-center m-4 p-4"> 
        <div className="text-2xl font-bold">Cart</div>
        <button className="m-2 p-2 bg-black text-white rounded-lg"
        onClick={handleClearCart}
        > Clear cart</button>
        
      <div className="w-6/12 m-auto">
        {/*  Show message when cart is empty */}
        {cartItems.length === 0 ? (
          <h2 className="text-lg font-medium text-gray-500">Your cart is empty. Please Add Your Item!!🙂</h2>
        ) : (
          <ItemList items={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;


/**
 * Note😀--Interview pointofview.
 * 
 * way1 and way2
 * =============
 * mistake1 we doo-->
 * ========
 * The better performance way to subcribe to the specific portion of the store--way 1 is best
 * 
 * in the way 2---if any updation in anu other slice in the store, it may be get affected---so noo need to subcribe to the whole store
 * 
 * In the way1--it will only update when the items in the cart updates[when store.cart.items updates].
 * 
 * Mistake2-->
 * ========
 * In Creating the Store, we have reducer.one reducer.inside that reducer , we have multiple reducer.
 * In creting the Slice , we  have reducers. inside that we have multiple reducer function....while exporting we export single reducer.
 * 
 * Basically waht is reducer:
 *      It is the Combination of multiple small reducer.
 */


/**
 * useSelector
 * ===========
 * 
 * --why the name is selector?... because we are selecting the portion of the store...thats why it is selector.
 * --we were subcribing to the selected portion of the store.
 */