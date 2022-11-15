import { useDispatch } from "react-redux"

import { increase, decrease } from "../features/cart/cartSlice"

import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md"
import { showModal } from "../features/modal/modalSlice"
const CartItem = ({ id, name, price, image, seller, amount }) => {
    const dispatch = useDispatch()
    return (
        <div className="cart-item">
            <div className="cart-item-img-wrapper">
                <img src={image} alt="" className="cart-item-img" />
            </div>
            <div className="cart-item-content">
                <div className="cart-item-name">{name}</div>
                <div className="cart-item-seller">{seller}</div>
                <div className="cart-item-price">${price}.00</div>
            </div>
            <div className="cart-item-tools">
                <button className="cart-item-arr-button">
                    <MdOutlineKeyboardArrowUp className="cart-item-tools-icon" onClick={() => { amount < 10 && dispatch(increase(id)) }} />
                </button>
                <span className="cart-item-amount">{amount}</span>
                <button className="cart-item-arr-button">
                    <MdOutlineKeyboardArrowDown className="cart-item-tools-icon" onClick={() => { amount > 1 ? dispatch(decrease(id)) : dispatch(showModal({ boolean: true, productId: id })) }} />
                </button>
            </div>
        </div>
    )
}

export default CartItem