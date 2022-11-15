
import { Link } from "react-router-dom"
import { BiShoppingBag } from "react-icons/bi"
import { useSelector } from "react-redux"


const Navbar = () => {

    const { amount } = useSelector((state) => state.cart)
    return (
        <div className="navbar-container">
            <div className="navbar-wrapper">
                <Link to="/">
                    <h1 className="logo">Ankrom</h1>
                </Link>
                <Link to="/cart">
                    <div className="nav-cart">
                        <BiShoppingBag className="nav-shopping-icon" />
                        <div className="amount-container">
                            <div className="amount">{amount}</div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar