import React from "react";
import { Card as AntCard, Button } from "antd";

const Card = ({ params, onDelete }) => {
    const props = Object.entries(params).map(([key, value]) => {
        return (
            <div key={key}>
                <p><strong>{key}:</strong> {value}</p>
            </div>
        );
    });

    return (
        <AntCard title={params.name || "Card title"} bordered={false} style={{ width: 300 }}>
            {props}
            <Button onClick={onDelete} danger>
                Delete
            </Button>
        </AntCard>
    );
};

export default Card;
