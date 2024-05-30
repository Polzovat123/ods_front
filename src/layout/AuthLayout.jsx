import { useEffect, useState } from "react"
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { MainLayout } from "./MainLayout";

export const AuthLayout = () => {
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const authenticate = () => {
        setIsLoggedIn(true);
    }

    useEffect(() => {
        if (isLoggedIn) navigate('/main')
    }, [isLoggedIn])

    return (
        <Routes>
            <Route index path="/login" element={<Login authenticate={authenticate}/>} />
            <Route path="/registration" element={<Registration />} />

            <Route path="/main" element={
                <MainLayout isLoggedIn={isLoggedIn}/>
            }>
                <Route index element={<p>drones</p>}/>
                <Route path='/main/swarm' element={<p>swarm</p>}/>
                <Route path='/main/missions' element={<p>missions</p>}/>
                <Route path='/main/tracker' element={<p>tracker</p>}/>
            </Route>

            <Route path="*" element={<Navigate to='/login'/>}/>
        </Routes>
    )
}