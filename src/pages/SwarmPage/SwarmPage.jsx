import { useEffect, useState } from "react";
import { getSwarmsList } from "../../services/apiRequests/SwarmAPI";
import Card from '../../components/Cards/Card';
import styles from './SwarmPage.module.scss';

export const SwarmPage = () => {
    const [swarms, setSwarms] = useState([]);

    useEffect(() => {
        getSwarmsList()
            .then(swarmsList => {
                setSwarms(swarmsList)
            })
            .catch(console.error);
    }, [])

    return (
        <div className={styles.wrapper}>
            {
                swarms.map(swarm => <Card key={swarm.id} params={swarm}/>)
            }
        </div>
    )
}