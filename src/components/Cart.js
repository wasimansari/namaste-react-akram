import { useDispatch, useSelector } from "react-redux";
import react from "react";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = ()=>{
    dispatch(clearCart());
  }
  const cartItems = useSelector((store) => store.cart.items); // this component subscribe the store using selector
  return (
    <div className="m-2 flex flex-col items-center justify-center">
      <h1 className="text-center mb-4 font-bold text-2xl">Cart Items</h1>
      {
        cartItems && cartItems.length > 0 ? <button className="bg-green-600 relative bottom-4 hover:bg-green-800 mt-3 px-4 py-1 rounded-md text-white"
        onClick={handleClearCart}>CLear Cart</button> : ''
      }
      
      <div className="w-6/12 flex justify-center bg-gray-200 shadow-lg">
        {
            cartItems && cartItems.length > 0 ? <ItemList items={cartItems} showAddButton={false} /> : <h1 className="font-bold text-xl py-10">Now Cart Is Empty!</h1>
        }
      </div>
    </div>
  );
};

export default Cart;
