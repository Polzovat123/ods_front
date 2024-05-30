import { Menu } from '../components/Menu/Menu';
import { Navigate, Outlet } from "react-router-dom"
import styles from './MainLayout.module.scss';

export const MainLayout = ({ isLoggedIn}) => {

    if (!isLoggedIn) return <Navigate to='/login'/>
    
    return (
        <div className={styles.wrapper}>
            <Menu />

            <Outlet />
        </div>
    )
}