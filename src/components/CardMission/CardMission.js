import React from "react";
import { Card as AntCard, Button } from "antd";
import "../../pages/MissionPage/MissionPage.module.scss"


const CardMission = ({ params, onFind, onStart }) => {
    const props = Object.entries(params).map(([key, value]) => (
        <div key={key}>
            <p><strong>{key}:</strong> {Array.isArray(value) ? value.join(', ') : value}</p>
        </div>
    ));

    return (
        <AntCard title={`Mission ID: ${params.id}`} bordered={false} style={{ width: 300 }}>
            {props}
            <Button onClick={onFind} type="primary" danger>
                Path Compute
            </Button>
            <Button onClick={onStart} type="primary" danger>
                Start Mission
            </Button>
        </AntCard>
    );
};

export default CardMission;