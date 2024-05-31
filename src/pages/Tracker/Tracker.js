import React, { useEffect, useState } from "react";
import styles from "./Tracker.module.scss";
import { trackAllMissions, getStartMap } from "../../services/apiRequests/TrackerAPI";
import CardTracker from "../../components/CardTracker/CardsTracker"
const Tracker = () => {
    const [onMissions, setMissions] = useState([]);
    const [onMissionsPict, setMissionsPict] = useState([]);

    useEffect(() => {
        trackAllMissions()
            .then(onMissions => {
                setMissions(onMissions);
            })
            .catch(console.error)
    }, []);

    onMissions.map(onMission => getStartMap(onMission.mission_id, 250, 250)
        .then(startMap =>
            setMissionsPict(startMap)
        )
        .catch(console.error)
    )

    onMissions.map(onMission => console.log(onMission))

    // console.log(onMissionsPict)

    return (
        <div className={styles.wrapper}>
            {
                onMissions.map(onMission => <CardTracker swarm_name={onMission.swarm_name} time_start={onMission.time_start} time_finish={onMission.time_finish}/>)
            }
        </div>
    );
}
export default Tracker;