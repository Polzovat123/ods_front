import React, { useEffect, useState } from "react";
import { createSwarm, deleteSwarm, getSwarmsList, addDroneToSwarm } from "../../services/apiRequests/SwarmAPI";
import Card from '../../components/Cards/Card';
import styles from './SwarmPage.module.scss';
import { Button } from "antd";
import { CreateSwarmModal } from "../../components/CreateSwarmModal/CreateSwarmModal";
import { AddDroneToSwarmModal } from "../../components/AddDroneToSwarmModal/AddDroneToSwarmModal";

export const SwarmPage = () => {
    const [swarms, setSwarms] = useState([]);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isAddDroneModalOpen, setIsAddDroneModalOpen] = useState(false);

    useEffect(() => {
        getSwarmsList()
            .then(swarmsList => {
                setSwarms(swarmsList);
            })
            .catch(console.error);
    }, []);

    const handleCreate = ({ name, description }) => {
        createSwarm({ name, description })
            .then(res => {
                setSwarms(value => [res, ...value]);
                setIsCreateModalOpen(false);
            })
            .catch(console.error);
    };

    const handleDelete = (id) => {
        deleteSwarm(id)
            .then(() => {
                setSwarms(value => value.filter(v => v.id !== id));
            })
            .catch(console.error);
    };

    const handleAddDrone = (swarmId, droneId) => {
        addDroneToSwarm(swarmId, droneId)
            .then(() => {
                getSwarmsList().then(swarmsList => {
                    setSwarms(swarmsList);
                    setIsAddDroneModalOpen(false);
                });
            })
            .catch(console.error);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__list}>
                {swarms.map(swarm => (
                    <Card key={swarm.id} params={swarm} onDelete={() => handleDelete(swarm.id)} />
                ))}
            </div>
            <div className={styles.wrapper__add}>
                <Button
                    type="primary"
                    onClick={() => setIsAddDroneModalOpen(true)}
                >
                    Add Drone to Swarm
                </Button>
                <Button
                    type="primary"
                    onClick={() => setIsCreateModalOpen(true)}
                >
                    Add Swarm
                </Button>

            </div>
            <CreateSwarmModal isOpen={isCreateModalOpen} setIsOpen={setIsCreateModalOpen} onCreate={handleCreate} />
            <AddDroneToSwarmModal
                isOpen={isAddDroneModalOpen}
                setIsOpen={setIsAddDroneModalOpen}
                onAdd={handleAddDrone}
                swarms={swarms}
            />
        </div>
    );
};
