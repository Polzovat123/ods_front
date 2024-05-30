import { Navigate, Outlet, useNavigate } from "react-router-dom"

export const MainLayout = ({ isLoggedIn}) => {

    if (!isLoggedIn) return <Navigate to='/login'/>
    
    return (
        <div>
            <div>
                menu
            </div>

            <Outlet />
        </div>
    )
}