import React, { useEffect, useState } from "react";
import Card from "../../components/Cards/Card";
import styles from "./Drones.module.scss";
import { Button } from "antd";
import { getAllDrones, createDrone, excludeDrone} from '../../services/apiRequests/DroneAPI';

import { CreateDroneModal } from '../../components/CreateDroneModal/CreateDroneModal'

const Drones = () => {
    const [drones, setDrones] = useState([]);
    const [isCreateDroneOpen, setIsCreateDroneOpen] = useState(false);


    useEffect(() => {
        getAllDrones()
            .then(dronesList => {
                setDrones(dronesList);
            })
            .catch(console.error)
    }, []);

    const handleCreate = ({ ip, type, role, name }) => {
        console.log(ip, type, role, name)
        createDrone({ ip, type, role, name })
            .then(res => {
                setDrones(value => [res, ...value]);
                setIsCreateDroneOpen(false);
            })
            .catch(console.error);
    }

    const handleDelete = id => {
        console.log(id)
        excludeDrone(id)
            .then(res => {
                setDrones(value => value.filter(drone => drone.id !== id) );
            })
            .catch(console.error);
    }


    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__list}>
                {
                    drones.map(drone => <Card key={drone.id} params={drone} onDelete={() => handleDelete(drone.id)} />)
                }
            </div>
            <Button
                className={styles.wrapper__add}
                type="primary"
                onClick={() => setIsCreateDroneOpen(true)}
            >
                Add
            </Button>

            <CreateDroneModal isOpen={isCreateDroneOpen} setIsOpen={setIsCreateDroneOpen} onCreate={handleCreate} />
        </div>
    );
}

export default Drones;
