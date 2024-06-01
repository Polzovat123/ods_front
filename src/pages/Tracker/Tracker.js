import React, { useEffect, useState } from "react";
import styles from "./Tracker.module.scss";
import { trackAllMissions, getStartMap } from "../../services/apiRequests/TrackerAPI";
import CardTracker from "../../components/CardTracker/CardsTracker";

const Tracker = () => {
    const [onMissions, setMissions] = useState([]);
    const [onMissionsPict, setMissionsPict] = useState([]);

    useEffect(() => {
        const fetchMissionsAndImages = async () => {
            try {
                const missions = await trackAllMissions();
                setMissions(missions);

                const images = await Promise.all(
                    missions.map(onMission => getStartMap(onMission.mission_id, 350, 350))
                );

                setMissionsPict(images);
            } catch (error) {
                console.error("Error fetching missions or images:", error);
            }
        };

        fetchMissionsAndImages();
    }, []);

    return (
        <div className={styles.fileStorage}>
            {onMissions.map((onMission, index) => (
                <CardTracker 
                    key={onMission.mission_id}
                    mission_id={onMission.mission_id}
                    swarm_name={onMission.swarm_name}
                    time_start={onMission.time_start}
                    time_finish={onMission.time_finish}
                    initialImageObj={onMissionsPict[index]}
                />
            ))}
        </div>
    );
};

export default Tracker;
