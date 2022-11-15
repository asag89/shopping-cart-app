
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
const SharedLayout = () => {
    return (
        <div className="container">
            <Navbar />
            <div className="wrapper">
                <Outlet />
            </div>
        </div>
    )
}

export default SharedLayout