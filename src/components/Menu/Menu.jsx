import { Button } from "antd"
import { Link } from "react-router-dom"
import styles from './Menu.module.scss'

export const Menu = () => {
    return (
            <div className={styles.wrapper}>
                <Link to='/main'>
                    <Button type="primary" className={styles.wrapper__button}>
                        Drones
                    </Button>
                </Link>
                <Link to='/main/swarm'>
                    <Button type="primary" className={styles.wrapper__button}>
                        Swarm
                    </Button>
                </Link>
                <Link to='/main/missions'>
                    <Button type="primary" className={styles.wrapper__button}>
                        Missions
                    </Button>
                </Link>
                <Link to='/main/tracker'>
                    <Button type="primary" className={styles.wrapper__button}>
                        Tracker
                    </Button>
                </Link>
                <Link to='/main/file_storage'>
                    <Button type="primary" className={styles.wrapper__button}>
                        FileStorage
                    </Button>
                </Link>
                <Link to='/main/logs'>
                    <Button type="primary" className={styles.wrapper__button}>
                        Logs Missions
                    </Button>
                </Link>

                <Link to='/login'>
                    <Button type="primary" className={styles.wrapper__button}>
                        Logout
                    </Button>
                </Link>
                <p></p>
            </div>
    )
}