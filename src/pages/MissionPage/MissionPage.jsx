import React, { useEffect, useState } from "react";
import { getAllMissions, createMission, startMission } from "../../services/apiRequests/MissionAPI";
import { searchTrajectory, searchTrajectoryWithFile } from "../../services/apiRequests/SolverAPI";
import { getSwarmsList } from "../../services/apiRequests/SwarmAPI";
import CardMission from '../../components/CardMission/CardMission';
import styles from './MissionPage.module.scss';
import { Button } from "antd";
import CreateMissionModal from "../../components/CreateMissionModal/CreateMissionModal";

export const MissionPage = () => {
    const [missions, setMissions] = useState([]);
    const [swarms, setSwarms] = useState([]);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    useEffect(() => {
        getAllMissions()
            .then(response => {
                setMissions(response.missions); // Access the missions array from the response object
            })
            .catch(console.error);

        getSwarmsList()
            .then(swarmsList => {
                setSwarms(swarmsList);
            })
            .catch(console.error);
    }, []);

    const handleCreate = (newMission) => {
        const missionData = {
            ...newMission,
            time_create: new Date().toISOString(),
            status: "на задании" // Default status or adjust as necessary
        };

        createMission(missionData)
            .then(res => {
                setMissions(value => [res, ...value]);
                setIsCreateModalOpen(false);
            })
            .catch(console.error);
    };

    const handlePathFind = (swarmId) => {
        // Call the appropriate function based on your logic
        searchTrajectory(swarmId)
            .then(response => {
                console.log("Path found:", response);
            })
            .catch(console.error);
    };

    const handleStartMission = (missionId) => {
        startMission(missionId)
            .then(response => {
                console.log("Mission started:", response);
            })
            .catch(console.error);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__list}>
                {missions.map(mission => (
                    <CardMission 
                        key={mission.id} 
                        params={mission} 
                        onFind={() => handlePathFind(mission.id_swarm_uses)} 
                        onStart={() => handleStartMission(mission.id)} 
                    />
                ))}
            </div>
            <Button
                className={styles.wrapper__add}
                type="primary"
                onClick={() => setIsCreateModalOpen(true)}
            >
                Add Mission
            </Button>

            <CreateMissionModal
                isVisible={isCreateModalOpen}
                onCancel={() => setIsCreateModalOpen(false)}
                onCreate={handleCreate}
                swarms={swarms}
            />
        </div>
    );
};
