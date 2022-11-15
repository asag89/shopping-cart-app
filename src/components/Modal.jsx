
import { useSelector, useDispatch } from 'react-redux'
import { showModal } from '../features/modal/modalSlice'
import { removeAll, removeItem } from '../features/cart/cartSlice'
const Modal = () => {
    const dispatch = useDispatch()
    const { productId } = useSelector((state) => state.modal)
    return (
        <div className='modal-container'>
            <div className='modal'>
                {productId === "all" ?
                    <>
                        <h2 className='modal-h2'>Do you want to remove all products from your shopping cart?</h2>
                        <div className="modal-btn-grp">
                            <button className="modal-btn-cancel" onClick={() => dispatch(showModal({ boolean: false }))}>Cancel</button>
                            <button className="modal-btn-confirm" onClick={() => { dispatch(removeAll()); dispatch(showModal({ boolean: false })) }}>Remove All</button>
                        </div>
                    </>
                    :
                    <>
                        <h2 className='modal-h2'>Do you want to remove this product from your shopping cart?</h2>
                        <div className="modal-btn-grp">
                            <button className="modal-btn-cancel" onClick={() => dispatch(showModal({ boolean: false }))}>Cancel</button>
                            <button className="modal-btn-confirm" onClick={() => { dispatch(removeItem(productId)); dispatch(showModal({ boolean: false })) }}>Remove</button>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Modal