import { useState } from "react"
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import { Route, Routes, useNavigate } from "react-router-dom";
import { MainLayout } from "./MainLayout";

export const AuthLayout = () => {
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const authenticate = () => {
        setIsLoggedIn(true);
        navigate('/main')
    }

    return (
        <Routes>
            <Route index path="/login" element={<Login authenticate={authenticate}/>} />
            <Route path="/registration" element={<Registration />} />

            <Route path="/main" element={
                <MainLayout isLoggedIn={isLoggedIn}/>
            }>
                <Route index element={<p>drones</p>}/>
                <Route path='/main/swarm' element={<p>swarm</p>}/>
            </Route>
        </Routes>
    )
}