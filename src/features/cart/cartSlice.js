
import { createSlice } from "@reduxjs/toolkit";
import products from '../../products'

const initialState = {
    products: products,
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: false
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
        },
        addToCart: (state, action) => {
            const id = action.payload
            const product = products.find((item) => {
                return item.id === id
            })
            const ids = state.cartItems.map((item) => {
                return item.id
            })
            if (!ids.includes(id)) {
                state.cartItems.push(product)
                state.amount += 1
            }
        },

        removeItem: (state, action) => {
            const itemId = action.payload
            state.cartItems = state.cartItems.filter((item) => {
                return item.id !== itemId
            })
        },

        removeAll: (state) => {
            state.cartItems = []
        },
        increase: (state, action) => {
            const itemId = action.payload
            const cartItem = state.cartItems.find((item) => {
                return item.id === itemId
            })
            cartItem.amount = cartItem.amount + 1
        },

        decrease: (state, action) => {
            const itemId = action.payload
            const cartItem = state.cartItems.find((item) => {
                return item.id === itemId
            })
            cartItem.amount = cartItem.amount - 1
        },
        calculateTotals: (state) => {
            let amount = 0
            let total = 0
            state.cartItems.forEach((item) => {
                amount += item.amount
                total += item.amount * item.price
            })

            state.amount = amount
            state.total = total
        }
    }
})

export const { clearCart, addToCart, removeItem, removeAll, increase, decrease, calculateTotals } = cartSlice.actions
export default cartSlice.reducer