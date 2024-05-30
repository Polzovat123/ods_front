import React, { useEffect, useState } from "react";
import Card from "../../components/Cards/Card";
import styles from "./Drones.module.scss";
import { Button } from "antd";
import { getAllDrones, createDrone } from '../../services/apiRequests/DroneAPI';

import {CreateDroneModal} from '../../components/CreateDroneModal/CreateDroneModal'

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
        createDrone({ip, type, role, name})
            .then(res => {
                setDrones(value => [res, ...value]);
                setIsCreateDroneOpen(false);
            })
            .catch(console.error);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__list}>
                {
                    drones.map(drone => <Card key={drone.id} params={drone} />)
                }
            </div>
            <Button 
                className={styles.wrapper__add} 
                type="primary"
                onClick={() => setIsCreateDroneOpen(true)}
            >
                Add
            </Button>

            <CreateDroneModal isOpen={isCreateDroneOpen} setIsOpen={setIsCreateDroneOpen} onCreate={handleCreate}/>
        </div>
    );
}

export default Drones;
