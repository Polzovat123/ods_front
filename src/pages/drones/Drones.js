import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

import {getAllDrones} from '../../services/apiRequests/DroneAPI';

// import { login } from '../../services/apiRequests/AuthAPI'

import classes from "./Drones.module.css";

import DefaultInput from "../../components/textInputs/defailtValue/DefaultInput";
const Drones = ({ authenticate }) => {
    const [drones, setDrones] = useState([]);
    
    
    useEffect(() => {
        getAllDrones()
            .then(dronesList => {
                setDrones(dronesList);
            })
            .catch(console.error)
    }, []);

    console.log(drones);

    return (
        <p>
            ТЕКСТ
        </p>
    );
}


export default Drones;
