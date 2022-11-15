
import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    productId: null,
    isOpen: false
}

const modalSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        showModal: (state, action) => {
            state.isOpen = action.payload.boolean
            state.productId = action.payload.productId
        }
    }
})

export const { showModal } = modalSlice.actions
export default modalSlice.reducer