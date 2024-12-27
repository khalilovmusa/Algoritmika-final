import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router";


const ProtectedRoute = () => {
    const user = localStorage.getItem("isAuth")
    return(
        user ? <Outlet /> : <Navigate to="/login" />
    )
}

export default ProtectedRoute;

