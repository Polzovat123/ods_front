import React from 'react';
import { Card } from 'antd';

const Card = ({ params }) => {
    const props = Object.entries(params).map(([key, value]) => {
        return (
            <div>
                <p>{key}:</p>
                <p>{value}</p>
            </div>
        )
    })
    return (
        <Card title="Card title" bordered={false} style={{ width: 300 }}>
            {props}
        </Card>
    )
};

export default Card;