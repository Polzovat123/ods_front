import { useEffect, useState } from "react"
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import Drones from "../pages/drones/Drones";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { MainLayout } from "./MainLayout";
import { SwarmPage } from "../pages/SwarmPage/SwarmPage";
import { FileStorage } from "../pages/FileStorage/FileStorage";
import { MissionPage} from "../pages/MissionPage/MissionPage"
import Tracker from "../pages/Tracker/Tracker";
import { LogFilesPage } from "../pages/LogFilePage/LogFilePage";

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
                <Route index element={<Drones/>}/>
                <Route path='/main/swarm' element={<SwarmPage />}/>
                <Route path='/main/missions' element={<MissionPage />}/>
                <Route path='/main/tracker' element={<Tracker />}/>
                <Route path='/main/file_storage' element={<FileStorage />}/>
                <Route path='/main/logs' element={<LogFilesPage />}/>
            </Route>

            <Route path="*" element={<Navigate to='/login'/>}/>
        </Routes>
    )
}