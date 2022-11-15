
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCart } from '../features/cart/cartSlice'

const Product = () => {
    const dispatch = useDispatch()
    const { productId } = useParams()
    const { products } = useSelector((state) => state.cart)
    const product = products.find((item) => {
        return item?.id === productId
    })
    const { id, name, price, image, seller } = product
    return (
        <div className='product-details'>
            <div className='product-details-img-wrapper'>
                <img className='product-details-img' src={image} alt={name} />
            </div>
            <div className='product-details-content'>
                <h2 className='product-details-name'>{name}</h2>
                <div className='product-details-seller'><span className='product-details-seller-title'>Seller: </span>{seller}</div>
                <div className='product-details-price'>${price}.00</div>
                <button className='product-details-btn' onClick={() => dispatch(addToCart(id))}>Add To Cart</button>
            </div>
        </div>
    )
}

export default Product