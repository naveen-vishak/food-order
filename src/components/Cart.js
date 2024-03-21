import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    
    return (<div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
            {cartItems.length ? 
            <button className="p-2 m-2 bg-black text-white rounded-lg"
            onClick={handleClearCart}>
                Clear cart
            </button>
            : <h1>Cart is empty</h1>}
            <ItemsList items={cartItems}></ItemsList>
        </div>
    </div>)
}

export default Cart;