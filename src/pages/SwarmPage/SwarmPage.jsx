import { useEffect, useState } from "react";
import { createSwarm, getSwarmsList } from "../../services/apiRequests/SwarmAPI";
import Card from '../../components/Cards/Card';
import styles from './SwarmPage.module.scss';
import { Button } from "antd";
import { CreateSwarmModal } from "../../components/CreateSwarmModal/CreateSwarmModal";

export const SwarmPage = () => {
    const [swarms, setSwarms] = useState([]);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    useEffect(() => {
        getSwarmsList()
            .then(swarmsList => {
                setSwarms(swarmsList)
            })
            .catch(console.error);
    }, []);

    const handleCreate = ({ name, description }) => {
        createSwarm({name, description})
            .then(res => {
                setSwarms(value => [res, ...value]);
                setIsCreateModalOpen(false);
            })
            .catch(console.error);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__list}>
                {
                    swarms.map(swarm => <Card key={swarm.id} params={swarm}/>)
                }
            </div>
            <Button 
                className={styles.wrapper__add} 
                type="primary"
                onClick={() => setIsCreateModalOpen(true)}
            >
                Add
            </Button>

            <CreateSwarmModal isOpen={isCreateModalOpen} setIsOpen={setIsCreateModalOpen} onCreate={handleCreate}/>
        </div>
    )
}