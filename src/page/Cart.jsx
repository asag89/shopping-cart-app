
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import Modal from "../components/Modal";
import { calculateTotals } from "../features/cart/cartSlice";
import { showModal } from "../features/modal/modalSlice";

const Cart = () => {
    const dispatch = useDispatch()
    const { cartItems, amount, total, isLoading } = useSelector((state) => state.cart)
    const { isOpen } = useSelector((state) => state.modal)
    console.log("cartItems", cartItems);
    console.log("amount", amount);
    console.log("total", total);
    console.log("isLoading", isLoading);

    useEffect(() => {
        dispatch(calculateTotals())
    }, [dispatch, cartItems])

    return (
        <main className="cart-container">
            {isOpen &&
                <Modal />
            }
            {cartItems.length > 0 ?
                <>
                    <div className="cart-header">
                        <div className="cart-total">
                            <div>Total</div>
                            <div className="cart-total-price">${total}.00</div>
                        </div>
                        <div className="cart-btn-container">
                            <button className="cart-btn-checkout">Checkout</button>
                            <button className="cart-btn-clear" onClick={() => dispatch(showModal({ boolean: true, productId: "all" }))}>Clear Cart</button>
                        </div>
                    </div>
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <CartItem key={item.id}{...item} />
                        ))}
                    </div>
                </> :
                <div className="cart-empty">
                    <h2 className="cart-empty-h2">Your shopping cart is empty</h2>
                    <div className="cart-empty-redirect">Back to the <Link to="/">homepage</Link></div>
                </div>
            }
        </main>
    )
}

export default Cart