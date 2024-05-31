import React, { useEffect, useState } from "react";
import { getAllMissions, createMission, startMission } from "../../services/apiRequests/MissionAPI";
import { searchTrajectoryWithFile } from "../../services/apiRequests/SolverAPI";
import { getSwarmsList } from "../../services/apiRequests/SwarmAPI";
import CardMission from '../../components/CardMission/CardMission';
import styles from './MissionPage.module.scss';
import { Button, message } from "antd";
import CreateMissionModal from "../../components/CreateMissionModal/CreateMissionModal";

export const MissionPage = () => {
    const [missions, setMissions] = useState([]);
    const [swarms, setSwarms] = useState([]);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState({});

    useEffect(() => {
        getAllMissions()
            .then(response => {
                setMissions(response.missions);
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
            status: "на задании"
        };

        createMission(missionData)
            .then(res => {
                setMissions(value => [res, ...value]);
                setIsCreateModalOpen(false);
            })
            .catch(console.error);
    };

    const handlePathFind = (missionId) => {
        const file = selectedFiles[missionId];
        if (!file) {
            message.error('Please select a file before searching the trajectory.');
            return;
        }
    
        const formData = new FormData();
        formData.append("file_bytes", file);
    
        const typeModel = "mda"; // Adjust as necessary
    
        searchTrajectoryWithFile(missionId, typeModel, formData)
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

    const handleFileChange = (missionId, file) => {
        setSelectedFiles(prevFiles => ({
            ...prevFiles,
            [missionId]: file
        }));
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__list}>
                {missions.map(mission => (
                    <CardMission 
                        key={mission.id} 
                        params={mission} 
                        onFind={() => handlePathFind(mission.id)}
                        onStart={() => handleStartMission(mission.id)}
                        onFileChange={(file) => handleFileChange(mission.id, file)}
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
