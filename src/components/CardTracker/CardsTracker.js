import React from "react";
import { Card as AntCard, Button } from "antd";

const Card = ({ swarm_name, time_start, time_finish}) => {

    return (
        <AntCard title={swarm_name || "Card title"} bordered={false} style={{ width: 300 }} >
            <p>time_start: {time_start}</p>
            <p>time_finish: {time_finish}</p>
            <image>

            </image>
        </AntCard>
    );
};

export default Card;