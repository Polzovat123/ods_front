import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import { getAllDrones, addDrones } from '../../services/apiRequests/DroneAPI';

import Card from "../../components/Cards/Card";
import styles from "./Drones.module.scss";

const Drones = ({ authenticate }) => {
    const [drones, setDrones] = useState([]);


    useEffect(() => {
        getAllDrones()
            .then(dronesList => {
                setDrones(dronesList);
            })
            .catch(console.error)
    }, []);

    (async () => {
        addDrones()
        .then(
            (response) => {
                console.log(response);
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
    })();
    
    return (
        <>
            <div className={styles.wrapper}>
                {
                    drones.map(drone => <Card key={drone.id} params={drone} />)
                }
            </div>
            <Button
                className={styles.btnAdd}
                type="submit"
            >
                Добавить
            </Button>
        </>
    );
}


export default Drones;
