import React, { useEffect, useState } from "react";
import { Card as AntCard } from "antd";
import { getCurrentMap } from "../../services/apiRequests/TrackerAPI";

const CardTracker = ({ swarm_name, time_start, time_finish, mission_id, initialImageObj }) => {
    const [imageUrl, setImageUrl] = useState(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const updateImage = async () => {
            if (isHovered) {
                try {
                    const imageBlob = await getCurrentMap(mission_id, 350, 350);
                    const url = URL.createObjectURL(imageBlob);
                    setImageUrl(url);
                    return () => URL.revokeObjectURL(url);
                } catch (error) {
                    console.error("Error fetching current map:", error);
                }
            }
        };

        if (isHovered) {
            const intervalId = setInterval(updateImage, 3000); // Частота изменений - каждые 3 секунды
            return () => clearInterval(intervalId);
        }
    }, [isHovered, mission_id]);

    useEffect(() => {
        if (initialImageObj) {
            if (initialImageObj instanceof Blob || initialImageObj instanceof File) {
                const url = URL.createObjectURL(initialImageObj);
                setImageUrl(url);
                return () => URL.revokeObjectURL(url);
            } else {
                console.error("Invalid imageObj type:", initialImageObj);
            }
        }
    }, [initialImageObj]);

    return (
        <AntCard
            title={swarm_name || "Card title"}
            bordered={false}
            style={{ width: 300 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <p>time_start: {time_start}</p>
            <p>time_finish: {time_finish}</p>
            {imageUrl && <img src={imageUrl} alt="Swarm" style={{ width: '100%', height: 'auto' }} />}
        </AntCard>
    );
};

export default CardTracker;
