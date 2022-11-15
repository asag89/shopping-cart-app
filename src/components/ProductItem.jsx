
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { addToCart } from '../features/cart/cartSlice'

const ProductItem = ({ id, name, price, image }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <div onClick={() => navigate(`/product/${id}`)} className='product-item-container'>
            <div className="product-item-img-wrapper">
                <img src={image} alt={name} />
            </div>
            <div className='product-item-content'>
                <div className='product-item-name'>{name}</div>
                <div className='product-item-price'>${price}.00</div>
            </div>
            <button className='product-item-add-btn' onClick={(e) => { e.stopPropagation(); dispatch(addToCart(id)) }}>Add to Cart</button>
        </div>
    )
}

export default ProductItem