
import React from 'react'
import products from "../products"
import ProductItem from './ProductItem'
const Products = () => {
    return (
        <div className='products-container'>
            {
                products.map((item) => (
                    <ProductItem key={item.id} {...item} />
                ))
            }
        </div>
    )
}

export default Products